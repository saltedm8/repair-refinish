import { Car, ShieldCheck, Hammer, Sparkles, Lightbulb, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/content';

const ICON_MAP: Record<string, React.ReactNode> = {
  Car: <Car size={26} />,
  ShieldCheck: <ShieldCheck size={26} />,
  Hammer: <Hammer size={26} />,
  Sparkles: <Sparkles size={26} />,
  Lightbulb: <Lightbulb size={26} />,
  Zap: <Zap size={26} />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Our Repair Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From minor scratches to major accident damage, our expert technicians deliver outstanding
            results across every repair type.
          </p>
          <div className="mt-5 w-16 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 hover:border-red-600/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(220,38,38,0.12)] block"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  style={{ '--tw-scale-x': '1', '--tw-scale-y': '1' } as React.CSSProperties}
                  onError={(e) => {
                    (e.target as HTMLImageElement).parentElement!.style.background =
                      'linear-gradient(135deg, #1a1a1a, #2a2a2a)';
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
                {/* Icon badge */}
                <div className="absolute bottom-4 left-4 bg-red-600 text-white p-2.5 rounded-xl shadow-lg">
                  {ICON_MAP[service.icon]}
                </div>
                {/* Number */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/40 text-xs font-bold">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                  {service.shortDesc}
                </p>
                <div className="inline-flex items-center gap-2 text-red-400 group-hover:text-red-300 text-sm font-semibold transition-colors">
                  View Service
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-400 mb-4">Not sure which service you need?</p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]"
          >
            Talk to Our Experts
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
