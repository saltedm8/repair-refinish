import { useState } from 'react';
import { X, ZoomIn, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GALLERY } from '../data/images';

const CATEGORIES = ['All', ...Array.from(new Set(GALLERY.map((g) => g.category)))];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All' ? GALLERY : GALLERY.filter((g) => g.category === filter);

  const lightboxItems = filtered;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="relative h-56 bg-zinc-900 overflow-hidden">
        <img
          src="https://repair-refinish.co.uk/wp-content/uploads/2025/10/Bodyshop-1-scaled.jpg"
          alt="Gallery"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        <div className="absolute inset-0 flex items-end pb-10">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-4 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-black text-white">Our Work Gallery</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-red-600 text-white'
                  : 'bg-zinc-900 text-gray-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-60">
                ({cat === 'All' ? GALLERY.length : GALLERY.filter((g) => g.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={i}
              className="group relative break-inside-avoid rounded-xl overflow-hidden cursor-pointer bg-zinc-900"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.parentElement!.style.minHeight = '200px';
                  el.parentElement!.style.background = '#1a1a1a';
                  el.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors" />
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-red-600 rounded-full p-2">
                  <ZoomIn size={14} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-semibold leading-tight">{img.label}</p>
                <p className="text-red-400 text-xs">{img.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2.5 text-white transition-colors z-10"
              onClick={() => setLightbox(null)}
            >
              <X size={22} />
            </button>

            {/* Prev */}
            {lightbox > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-red-600/70 rounded-full p-3 text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
              >
                <ArrowLeft size={20} />
              </button>
            )}

            {/* Next */}
            {lightbox < lightboxItems.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-red-600/70 rounded-full p-3 text-white transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
              >
                <ArrowLeft size={20} className="rotate-180" />
              </button>
            )}

            <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxItems[lightbox].src}
                alt={lightboxItems[lightbox].alt}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-3 text-center">
                <p className="text-white font-semibold">{lightboxItems[lightbox].label}</p>
                <p className="text-red-400 text-sm">{lightboxItems[lightbox].category}</p>
                <p className="text-gray-500 text-xs mt-1">{lightbox + 1} / {lightboxItems.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-zinc-900 rounded-2xl p-8 text-center border border-white/5">
          <h2 className="text-2xl font-bold text-white mb-3">Like What You See?</h2>
          <p className="text-gray-400 mb-6">Get a free no-obligation quote for your vehicle today.</p>
          <Link
            to="/#quote"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
