import { useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GALLERY } from '../data/images';

// Show first 8 images in the homepage gallery preview
const PREVIEW = GALLERY.slice(0, 8);

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Before & After Gallery</h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Real repairs, real results. Every job completed to the highest standard.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 border border-red-600/40 hover:bg-red-600/10 text-red-400 hover:text-red-300 font-semibold px-5 py-2.5 rounded-xl transition-all text-sm whitespace-nowrap"
          >
            View Full Gallery
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {PREVIEW.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-xl overflow-hidden cursor-pointer bg-zinc-900 ${
                i === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors" />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-red-600 rounded-full p-3 shadow-lg">
                  <ZoomIn size={18} className="text-white" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm leading-tight">{img.label}</p>
                <p className="text-red-400 text-xs mt-0.5">{img.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/97 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2.5 text-white transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={22} />
            </button>
            <div onClick={(e) => e.stopPropagation()} className="max-w-5xl w-full">
              <img
                src={PREVIEW[lightbox].src}
                alt={PREVIEW[lightbox].alt}
                className="w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-3 text-center">
                <p className="text-white font-semibold">{PREVIEW[lightbox].label}</p>
                <p className="text-red-400 text-sm">{PREVIEW[lightbox].category}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]"
          >
            See All {GALLERY.length} Photos
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
