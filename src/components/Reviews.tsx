import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../data/content';

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
            Customer Reviews
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">5.0</span>
            <span className="text-gray-400">on Google Reviews</span>
          </div>
          <div className="mt-5 w-16 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-2xl p-6 border border-white/5 hover:border-red-600/20 transition-colors relative flex flex-col"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-white/5">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-400 font-bold text-sm flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{review.name}</p>
                  <p className="text-gray-500 text-xs">{review.date} • Google Review</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google review CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://g.page/r/repair-refinish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-white font-medium px-6 py-3 rounded-xl transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V8h2v9zm4 0h-2V8h2v9z" />
            </svg>
            Read All Our Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
