import { MapPin } from 'lucide-react';
import { AREAS } from '../data/content';

export default function Areas() {
  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
            Coverage
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Areas We Cover in Kent</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Based in Manston with easy access to major routes, we cover the whole of Kent — including:
          </p>
          <div className="mt-5 w-16 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5">
          <div className="flex flex-wrap gap-3 justify-center">
            {AREAS.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-1.5 bg-black/60 border border-white/10 hover:border-red-600/30 rounded-lg px-3 py-1.5 text-sm text-gray-300 hover:text-white transition-colors cursor-default"
              >
                <MapPin size={11} className="text-red-500" />
                {area}
              </span>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Don't see your area? Call us on{' '}
            <a href="tel:07550200000" className="text-red-400 hover:text-red-300 font-medium">
              07550 200000
            </a>{' '}
            — we may still be able to help.
          </p>
        </div>
      </div>
    </section>
  );
}
