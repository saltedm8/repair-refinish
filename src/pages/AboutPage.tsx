import { ArrowLeft, CheckCircle2, Wrench, Zap, Palette, Truck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ABOUT_IMAGES } from '../data/images';

const TEAM_HIGHLIGHTS = [
  {
    icon: <Wrench size={24} />,
    title: 'Stanners Dent Expert COMBI',
    desc: 'Dedicated tools for both steel and aluminium, allowing us to tackle dents of every shape and size with precision.',
  },
  {
    icon: <Zap size={24} />,
    title: 'EV & Hybrid Trained',
    desc: 'Fully trained technicians who safely isolate high-voltage systems before carrying out any repairs.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Todd Engineering Spartan 2000',
    desc: 'State-of-the-art spray booth for a premium, durable and flawless finish every time.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Octoral Paint Systems',
    desc: 'Advanced paint mixing booth using Octoral products — renowned for finish quality and perfect colour accuracy.',
  },
  {
    icon: <Truck size={24} />,
    title: 'Own Recovery Fleet',
    desc: 'Multiple recovery vehicles allowing us to collect and return vehicles across all of Kent.',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Manston, Kent',
    desc: 'Easy access to the dual carriageway network linking London, Ramsgate, Dover, Folkestone and Maidstone.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <img
          src={ABOUT_IMAGES.workshop}
          alt="Our Workshop"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).parentElement!.style.background = '#1a1a1a';
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-14">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-5 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="inline-block bg-red-600/20 border border-red-600/40 rounded-full px-3 py-1 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">
              Repair and Refinish<br />
              <span className="text-red-500">Bodyworks</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* Main story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Over 30 Years of <span className="text-red-500">Excellence</span> in Kent
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              We offer a truly unique service within the auto repair, panel craft, and body shop industry.
              Not only are we skilled specialists in cosmetic vehicle repairs, but we also have direct access
              to a vast warehouse stocked with thousands of ready-to-use, recycled OEM auto parts.
            </p>
            <p className="text-gray-400 leading-relaxed mb-5">
              This means no waiting for parts to arrive from elsewhere and no need to pay inflated prices for
              new ones. The savings — both in time and cost — are significant.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our workshop is based in Manston, Kent, with easy access to the dual carriageway network
              linking London, Ramsgate, Dover, Folkestone, Ashford, and Maidstone. With our own fleet of
              recovery vehicles, we can transport multiple vehicles at once.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden h-56 bg-zinc-900">
              <img src={ABOUT_IMAGES.interior1} alt="Workshop interior" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <div className="rounded-xl overflow-hidden h-56 bg-zinc-900">
              <img src={ABOUT_IMAGES.interior2} alt="Workshop interior 2" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <div className="rounded-xl overflow-hidden h-56 bg-zinc-900 col-span-2">
              <img src={ABOUT_IMAGES.interior3} alt="Workshop interior 3" className="w-full h-full object-cover object-center" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          </div>
        </div>

        {/* Facility & equipment */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
              Our Facility
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">State-of-the-Art Equipment</h2>
            <div className="mt-4 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM_HIGHLIGHTS.map((h) => (
              <div key={h.title} className="bg-zinc-900 rounded-xl p-6 border border-white/5 hover:border-red-600/20 transition-colors">
                <div className="text-red-500 mb-3">{h.icon}</div>
                <h3 className="text-white font-bold mb-2">{h.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Spray booth & paint images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden h-52 bg-zinc-900 col-span-2">
              <img src={ABOUT_IMAGES.sprayBooth} alt="Todd Engineering Spartan 2000 Spray Booth" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <div className="rounded-xl overflow-hidden h-48 bg-zinc-900">
              <img src={ABOUT_IMAGES.paint} alt="Paint mixing and colour matching" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
            <div className="rounded-xl overflow-hidden h-48 bg-zinc-900">
              <img src={ABOUT_IMAGES.oem} alt="OEM Parts Warehouse" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          </div>
          <div>
            <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
              Why We're Different
            </span>
            <h2 className="text-3xl font-black text-white mb-5">
              Quality You Can <span className="text-red-500">See and Trust</span>
            </h2>
            <ul className="space-y-3">
              {[
                'Direct access to recycled OEM parts warehouse',
                'Perfect colour matching with Octoral paint systems',
                'EV and hybrid vehicle specialists',
                'Recovery and collection service throughout Kent',
                'Insurance repairs accepted — you choose your repairer',
                'Same quoted price is the price you pay',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/#quote"
              className="inline-flex items-center gap-2 mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

