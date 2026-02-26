import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT, SERVICES } from '../data/content';
import { LOGO } from '../data/images';

export default function Footer() {
  const scrollTo = (hash: string) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={LOGO.main}
                alt="Repair and Refinish Bodyworks"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  const el = e.target as HTMLImageElement;
                  el.src = LOGO.transparent;
                  el.onerror = () => { el.style.display = 'none'; };
                }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Expert car, van and bike body repairs in Kent. Over 30 years of excellence serving the local community.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 bg-zinc-800 hover:bg-red-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 bg-zinc-800 hover:bg-red-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-colors">
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-red-600 text-xs">›</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }); } },
                { label: 'About Us', href: '/about' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Reviews', action: () => scrollTo('#reviews') },
                { label: 'FAQ', action: () => scrollTo('#faq') },
                { label: 'Contact', action: () => scrollTo('#contact') },
              ].map((l) => (
                <li key={l.label}>
                  {l.href ? (
                    <Link to={l.href} className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center gap-2">
                      <span className="text-red-600 text-xs">›</span>
                      {l.label}
                    </Link>
                  ) : (
                    <button onClick={l.action} className="text-gray-400 hover:text-red-400 text-sm transition-colors flex items-center gap-2">
                      <span className="text-red-600 text-xs">›</span>
                      {l.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              {[
                { icon: <Phone size={14} />, label: CONTACT.phone, href: `tel:${CONTACT.phone}` },
                { icon: <Phone size={14} />, label: CONTACT.landline, href: `tel:${CONTACT.landline}` },
                { icon: <Mail size={14} />, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group text-sm"
                >
                  <div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 group-hover:bg-red-600/20 flex-shrink-0 transition-colors">
                    {item.icon}
                  </div>
                  {item.label}
                </a>
              ))}
              <div className="flex items-start gap-3 text-sm">
                <div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0">
                  <MapPin size={14} />
                </div>
                <div className="text-gray-400">
                  <p>Manston, Kent</p>
                  <p className="text-gray-500 text-xs mt-0.5">Mon–Fri: 8am–5pm</p>
                  <p className="text-gray-500 text-xs">Sat: 8am–12pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <p>© 2026 Repair and Refinish Bodyworks. All rights reserved. Sure Fired Success Limited.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
