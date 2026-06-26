import fs from 'fs';

const text =
  fs.readFileSync('src/data/images.ts', 'utf8') + fs.readFileSync('src/data/content.ts', 'utf8');
const paths = [...new Set([...text.matchAll(/\$\{BASE\}\/([^'"`\s]+)/g)].map((m) => m[1]))];
const prefix = 'https://repair-refinish.co.uk/wp-content/uploads/';

let ok = 0;
let fail = 0;
for (const p of paths) {
  const r = await fetch(prefix + p, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (r.ok) ok++;
  else {
    fail++;
    console.log(r.status, p);
  }
}
console.log('ok', ok, 'fail', fail, 'total', paths.length);
