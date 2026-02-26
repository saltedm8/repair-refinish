import { Phone, ChevronDown, Star } from 'lucide-react';
import { CONTACT } from '../data/content';
import { LOGO, HERO } from '../data/images';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[calc(100vh-72px)] md:min-h-[calc(100vh-108px)] flex items-center overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO.bg}
          alt="Repair and Refinish Bodyworks workshop"
          className="w-full h-full object-cover object-center opacity-30"
          onError={(e) => {
            const el = e.target as HTMLImageElement;
            el.src = HERO.bg2;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 w-full">
        <div className="max-w-3xl">
          {/* Logo — prominent above the headline */}
          <div className="mb-5">
            <img
              src={LOGO.main}
              alt="Repair and Refinish Bodyworks"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.src = LOGO.png;
                el.onerror = () => {
                  el.src = LOGO.transparent;
                };
              }}
            />
          </div>

          {/* Star badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-4 py-1.5 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-red-500 text-red-500" />
              ))}
            </div>
            <span className="text-red-400 text-xs font-semibold tracking-wide uppercase">
              5-Star Google Rated &nbsp;•&nbsp; 30+ Years Experience
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
            Expert Car Body
            <br />
            <span className="text-red-500">Repair in Kent</span>
          </h1>

          <p className="text-xl text-gray-300 mb-7 max-w-xl leading-relaxed">
            Professional bodywork repairs, paintless dent removal and SMART repairs for all makes and models.
            <span className="text-white font-medium"> Based in Manston</span>, covering all of Kent.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#quote"
              className="group bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] active:scale-95 text-center"
            >
              Get Your Free Quote
              <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center justify-center gap-3 border-2 border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all hover:bg-white/5"
            >
              <Phone size={20} />
              {CONTACT.phone}
            </a>
          </div>

          {/* Trust stats */}
          <div className="flex flex-wrap items-center gap-8 text-sm">
            {[
              { value: '30+', label: 'Years in Business' },
              { value: '5★', label: 'Google Rating' },
              { value: '100%', label: 'Satisfaction' },
              { value: 'Free', label: 'No-Obligation Quote' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workshop image strip - bottom right */}
      <div className="absolute bottom-0 right-0 w-80 h-48 hidden xl:block z-10 overflow-hidden">
        <img
          src={HERO.workshop1}
          alt="Our bodyshop"
          className="w-full h-full object-cover rounded-tl-2xl opacity-70"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs text-gray-300">
          📍 Our Workshop, Manston
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" aria-label="Scroll down">
          <ChevronDown size={28} className="text-white/30 hover:text-white/60 transition-colors" />
        </a>
      </div>
    </section>
  );
}
