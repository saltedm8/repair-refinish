import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CONTACT, SERVICES } from '../data/content';
import { LOGO } from '../data/images';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const handleHashNav = (hash: string) => {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-red-600 text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
              <Phone size={13} />
              <span>Mobile: {CONTACT.phone}</span>
            </a>
            <a href={`tel:${CONTACT.landline}`} className="flex items-center gap-1.5 hover:text-red-200 transition-colors">
              <Phone size={13} />
              <span>Landline: {CONTACT.landline}</span>
            </a>
          </div>
          <div className="flex items-center gap-6 text-red-100 text-xs">
            <span>Mon–Fri: 8am–5pm &nbsp;|&nbsp; Sat: 8am–12pm</span>
            <a href={`mailto:${CONTACT.email}`} className="hover:text-white transition-colors">
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-black/97 backdrop-blur-md shadow-[0_2px_20px_rgba(220,38,38,0.12)]'
            : 'bg-black/92 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={LOGO.main}
              alt="Repair and Refinish Bodyworks"
              className="h-11 w-auto object-contain"
              onError={(e) => {
                const el = e.target as HTMLImageElement;
                el.src = LOGO.transparent;
                el.onerror = () => { el.style.display = 'none'; };
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              Home
            </Link>

            {/* Services dropdown — pure CSS group-hover, no gap issue */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5">
                Services
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              {/* pt-2 bridges the gap between button and panel so mouse-leave never fires mid-travel */}
              <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
                <div className="w-64 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-red-600/15 transition-colors border-b border-white/5 last:border-0"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/gallery"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              Gallery
            </Link>

            <Link
              to="/about"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              About Us
            </Link>

            <button
              onClick={() => handleHashNav('#reviews')}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              Reviews
            </button>

            <button
              onClick={() => handleHashNav('#contact')}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/5"
            >
              Contact
            </button>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:07550200000"
              className="flex items-center gap-1.5 text-gray-300 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} className="text-red-500" />
              {CONTACT.phone}
            </a>
            <button
              onClick={() => handleHashNav('#quote')}
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] active:scale-95"
            >
              Free Quote
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-zinc-950 border-t border-white/10 max-h-[85vh] overflow-y-auto">
            <div className="px-6 py-4 space-y-1">
              <Link to="/" className="block py-2.5 text-gray-300 hover:text-white font-medium border-b border-white/5">
                Home
              </Link>

              <div className="border-b border-white/5">
                <p className="py-2.5 text-gray-400 text-xs uppercase tracking-wider font-semibold">Services</p>
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="flex items-center gap-2 py-2 pl-3 text-gray-300 hover:text-red-400 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {s.title}
                  </Link>
                ))}
              </div>

              <Link to="/gallery" className="block py-2.5 text-gray-300 hover:text-white font-medium border-b border-white/5">
                Gallery
              </Link>
              <Link to="/about" className="block py-2.5 text-gray-300 hover:text-white font-medium border-b border-white/5">
                About Us
              </Link>
              <button onClick={() => handleHashNav('#reviews')} className="block w-full text-left py-2.5 text-gray-300 hover:text-white font-medium border-b border-white/5">
                Reviews
              </button>
              <button onClick={() => handleHashNav('#contact')} className="block w-full text-left py-2.5 text-gray-300 hover:text-white font-medium border-b border-white/5">
                Contact
              </button>

              <button
                onClick={() => handleHashNav('#quote')}
                className="block w-full mt-3 bg-red-600 hover:bg-red-700 text-white text-center font-semibold py-3 rounded-lg transition-colors"
              >
                Get Free Quote
              </button>
              <div className="pt-4 space-y-2 text-sm text-gray-400">
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-white">
                  <Phone size={14} /> {CONTACT.phone}
                </a>
                <p className="text-xs">Mon–Fri: 8am–5pm &nbsp;|&nbsp; Sat: 8am–12pm</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
