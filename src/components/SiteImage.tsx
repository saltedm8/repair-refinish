import type { ImgHTMLAttributes } from 'react';

type SiteImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean;
};

export default function SiteImage({
  priority = false,
  loading,
  decoding,
  fetchPriority,
  ...props
}: SiteImageProps) {
  return (
    <img
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding={decoding ?? (priority ? 'sync' : 'async')}
      fetchPriority={fetchPriority ?? (priority ? 'high' : 'auto')}
      {...props}
    />
  );
}
