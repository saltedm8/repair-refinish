import { useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import { SERVICES, CONTACT } from '../data/content';
import QuoteForm from '../components/QuoteForm';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).parentElement!.style.background =
              'linear-gradient(135deg, #1a1a1a, #2a2a2a)';
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Red left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-600 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-14">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            <div className="inline-block bg-red-600/20 border border-red-600/40 rounded-full px-3 py-1 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white">{service.title}</h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <p className="text-xl text-gray-300 leading-relaxed mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 size={16} className="text-red-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image grid */}
            {service.images.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  {service.title} — Our Work
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {service.images.map((img, i) => (
                    <div
                      key={i}
                      className={`relative overflow-hidden rounded-xl ${
                        i === 0 ? 'col-span-2 h-72' : 'h-48'
                      } bg-zinc-900`}
                    >
                      <img
                        src={img}
                        alt={`${service.title} example ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Why choose us for this service */}
            <div className="bg-zinc-900 rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                With over 30 years of experience, our Manston-based workshop is equipped with the latest
                technology including a Todd Engineering Spartan 2000 spray booth and Stanners Dent Expert
                COMBI system. We use Octoral paint systems for a perfect colour match every time.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We have direct access to a warehouse of thousands of recycled OEM parts, saving you both
                time and money without compromising on quality.
              </p>
            </div>
          </div>

          {/* Right: quote form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <div className="bg-zinc-900 rounded-2xl p-6 border border-white/5">
                <h3 className="text-lg font-bold text-white mb-1">Get a Free Quote</h3>
                <p className="text-gray-400 text-sm mb-5">
                  For {service.title} in Kent
                </p>
                <QuoteForm />
              </div>

              <div className="bg-red-600 rounded-2xl p-5 text-center">
                <p className="text-white font-semibold mb-1">Prefer to call us?</p>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-white text-xl font-black hover:text-red-200 transition-colors"
                >
                  📞 {CONTACT.phone}
                </a>
                <p className="text-red-200 text-xs mt-1">Mon–Fri 8am–5pm • Sat 8am–12pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8">Our Other Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group relative rounded-xl overflow-hidden h-48 bg-zinc-900 block"
              >
                <img
                  src={s.heroImage}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold group-hover:text-red-400 transition-colors">
                    {s.title}
                  </h3>
                  <div className="flex items-center gap-1 text-red-400 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
