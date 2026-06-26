/**
 * Download remote images, compress, build thumbnails, and generate hero LCP asset.
 * Run: npm run images:fetch
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'public', 'images');
const THUMB_DIR = path.join(OUT_DIR, 'thumbs');
const REMOTE_PREFIX = 'https://repair-refinish.co.uk/wp-content/uploads/';
const SOURCE_FILES = [
  path.join(ROOT, 'src', 'data', 'images.ts'),
  path.join(ROOT, 'src', 'data', 'content.ts'),
];
const FETCH_OPTS = {
  redirect: 'follow',
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-demo/1.0)' },
};

function collectPaths() {
  const paths = new Set();
  for (const file of SOURCE_FILES) {
    const text = fs.readFileSync(file, 'utf8');
    for (const match of text.matchAll(/\$\{BASE\}\/([^'"`\s]+)/g)) {
      const rel = match[1];
      if (rel === 'hero-lcp.webp') continue;
      if (rel.endsWith('.webp')) {
        paths.add(rel.replace(/\.webp$/i, '.png'));
      } else {
        paths.add(rel);
      }
    }
  }
  return [...paths].sort();
}

function localPathFromRel(rel) {
  return path.join(OUT_DIR, rel.replace(/\//g, path.sep));
}

async function download(rel) {
  const candidates = [rel];
  if (rel.endsWith('.png')) {
    candidates.push(rel.replace(/\.png$/i, '.jpg'));
  }

  for (const candidate of candidates) {
    const dest = localPathFromRel(candidate);
    const webpDest = dest.replace(/\.png$/i, '.webp');
    if (fs.existsSync(dest) || fs.existsSync(webpDest)) return fs.existsSync(webpDest) ? webpDest : dest;

    const url = REMOTE_PREFIX + candidate;
    const res = await fetch(url, FETCH_OPTS);
    if (!res.ok) continue;

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    return dest;
  }

  console.warn(`SKIP missing ${rel}`);
  return null;
}

async function optimize(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const input = fs.readFileSync(filePath);
  const before = input.length;
  const meta = await sharp(input).metadata();
  const maxWidth = ext === '.png' ? 1400 : 1920;

  let pipeline = sharp(input);
  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth, null, { withoutEnlargement: true });
  }

  if (ext === '.png' && before > 250_000) {
    const webpPath = filePath.replace(/\.png$/i, '.webp');
    const buf = await pipeline.webp({ quality: 82 }).toBuffer();
    fs.writeFileSync(webpPath, buf);
    fs.unlinkSync(filePath);
    console.log(
      `  png→webp ${path.basename(webpPath)} (${formatKb(before)} → ${formatKb(buf.length)})`,
    );
    return { from: filePath, to: webpPath, final: webpPath };
  }

  let buf;
  if (ext === '.png') {
    buf = await pipeline.png({ compressionLevel: 9 }).toBuffer();
  } else if (ext === '.jpg' || ext === '.jpeg') {
    buf = await pipeline.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
  } else if (ext === '.webp') {
    buf = await pipeline.webp({ quality: 82 }).toBuffer();
  } else {
    return { from: filePath, to: filePath, final: filePath };
  }

  if (buf.length < before) {
    fs.writeFileSync(filePath, buf);
    console.log(`  optimized ${path.basename(filePath)} (${formatKb(before)} → ${formatKb(buf.length)})`);
  }
  return { from: filePath, to: filePath, final: filePath };
}

async function makeThumb(filePath) {
  const rel = path.relative(OUT_DIR, filePath).replace(/\\/g, '/');
  if (rel.startsWith('thumbs/')) return;

  const thumbRel = rel.replace(/\.[^.]+$/, '.webp');
  const thumbDest = path.join(THUMB_DIR, thumbRel.replace(/\//g, path.sep));
  fs.mkdirSync(path.dirname(thumbDest), { recursive: true });

  await sharp(filePath)
    .resize(640, null, { withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(thumbDest);
}

async function buildHeroLcp() {
  const source = path.join(OUT_DIR, '2025', '10', 'Bodyshop-1-scaled.jpg');
  const heroDest = path.join(OUT_DIR, 'hero-lcp.webp');
  if (!fs.existsSync(source)) {
    console.warn('SKIP hero-lcp — Bodyshop source missing');
    return;
  }
  await sharp(source)
    .resize(1400, null, { withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(heroDest);
  console.log(`  hero LCP ${formatKb(fs.statSync(heroDest).size)}`);
}

function formatKb(bytes) {
  return `${Math.round(bytes / 1024)}KB`;
}

function applyWebpReplacements(replacements) {
  if (replacements.length === 0) return;
  for (const file of SOURCE_FILES) {
    let text = fs.readFileSync(file, 'utf8');
    for (const { from, to } of replacements) {
      const fromRel = path.relative(OUT_DIR, from).replace(/\\/g, '/');
      const toRel = path.relative(OUT_DIR, to).replace(/\\/g, '/');
      const fromName = path.basename(fromRel);
      const toName = path.basename(toRel);
      text = text.split(`/images/${fromRel}`).join(`/images/${toRel}`);
      text = text.split(`${REMOTE_PREFIX}${fromRel}`).join(`/images/${toRel}`);
      text = text.split(fromName).join(toName);
    }
    fs.writeFileSync(file, text);
  }
}

function uniqueDownloadPaths(paths) {
  const seen = new Set();
  const out = [];
  for (const rel of paths) {
    const key = rel.replace(/\.webp$/i, '.png').replace(/\.jpg$/i, '.png');
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(rel.replace(/\.webp$/i, '.png'));
  }
  return out;
}

async function main() {
  const paths = uniqueDownloadPaths(collectPaths());
  console.log(`Fetching ${paths.length} image sources…`);

  const webpReplacements = [];
  const optimizedFiles = new Set();

  for (const rel of paths) {
    process.stdout.write(`GET ${path.basename(rel)}… `);
    const dest = await download(rel);
    if (!dest) {
      console.log('failed');
      continue;
    }
    console.log('ok');
    const result = await optimize(dest);
    if (result.from !== result.to) {
      webpReplacements.push({ from: result.from, to: result.to });
    }
    optimizedFiles.add(result.final);
  }

  applyWebpReplacements(webpReplacements);

  console.log('Building thumbnails…');
  for (const file of optimizedFiles) {
    if (fs.existsSync(file)) await makeThumb(file);
  }

  await buildHeroLcp();

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
