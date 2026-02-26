import { CheckCircle2, MapPin, Wrench, Zap, Palette, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ABOUT_IMAGES } from '../data/images';

const HIGHLIGHTS = [
  {
    icon: <Wrench size={22} />,
    title: 'Advanced Dent Technology',
    desc: 'Stanners Dent Expert COMBI system for steel & aluminium repairs',
  },
  {
    icon: <Zap size={22} />,
    title: 'EV & Hybrid Specialists',
    desc: 'Fully trained to safely work on electric & hybrid vehicles',
  },
  {
    icon: <Palette size={22} />,
    title: 'Precision Paint Finishing',
    desc: 'Todd Engineering Spartan 2000 spray booth with Octoral systems',
  },
  {
    icon: <Truck size={22} />,
    title: 'Recovery & Collection',
    desc: 'Our own fleet of recovery vehicles covering all of Kent',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-red-950/8 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
              <img
                src={ABOUT_IMAGES.workshop}
                alt="Our Bodyshop Workshop"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).parentElement!.style.background = '#1a1a1a';
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Small image top right */}
            <div className="absolute -top-4 -right-4 w-40 h-32 rounded-xl overflow-hidden border-2 border-zinc-900 shadow-xl">
              <img
                src={ABOUT_IMAGES.interior2}
                alt="Workshop interior"
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            {/* Small image bottom left */}
            <div className="absolute -bottom-4 -left-4 w-44 h-32 rounded-xl overflow-hidden border-2 border-zinc-900 shadow-xl">
              <img
                src={ABOUT_IMAGES.sprayBooth}
                alt="Spray booth"
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            {/* Stat card */}
            <div className="absolute bottom-8 right-4 bg-red-600 rounded-2xl p-4 shadow-2xl">
              <div className="text-3xl font-black text-white">30+</div>
              <div className="text-red-200 text-xs font-medium">Years of Excellence</div>
            </div>

            {/* Location badge */}
            <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center gap-2 border border-white/10">
              <MapPin size={13} className="text-red-500" />
              <span className="text-white text-xs font-medium">Manston, Kent</span>
            </div>
          </div>

          {/* Content */}
          <div className="pb-6">
            <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Kent's Trusted Body<br />Repair <span className="text-red-500">Specialists</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              We offer a truly unique service within the auto repair industry. Not only are we skilled
              specialists in cosmetic vehicle repairs, but we also have direct access to a vast warehouse
              of recycled OEM parts — saving you both time and money.
            </p>

            <p className="text-gray-400 leading-relaxed mb-7">
              Based in Manston, Kent, we cover the whole county using our own recovery fleet. With over
              30 years of experience, our state-of-the-art facility handles everything from minor scratches
              to major accident repairs.
            </p>

            <ul className="space-y-2.5 mb-8">
              {[
                'All makes and models including classics & EVs',
                'Direct access to recycled OEM parts warehouse',
                'Insurance repair work accepted',
                'Collection and delivery available across Kent',
                'Environmentally approved facility',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 size={15} className="text-red-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a
                href="#quote"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-[0_0_25px_rgba(220,38,38,0.4)]"
              >
                Get a Free Quote
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:bg-white/5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Facility highlights */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((h) => (
            <div
              key={h.title}
              className="bg-zinc-900 rounded-xl p-5 border border-white/5 hover:border-red-600/20 transition-colors"
            >
              <div className="text-red-500 mb-3">{h.icon}</div>
              <h4 className="text-white font-bold mb-1.5">{h.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
