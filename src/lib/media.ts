/** Grid thumbnail for a full-size local image path. */
export function thumbSrc(src: string): string {
  if (!src.startsWith('/images/') || src.includes('/thumbs/')) return src;
  const rel = src.slice('/images/'.length).replace(/\.[^.]+$/, '.webp');
  return `/images/thumbs/${rel}`;
}
