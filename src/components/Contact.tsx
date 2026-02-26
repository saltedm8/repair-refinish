import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { CONTACT } from '../data/content';
import QuoteForm from './QuoteForm';

const CONTACT_ITEMS = [
  {
    icon: <Phone size={20} />,
    label: 'Mobile',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
  },
  {
    icon: <Phone size={20} />,
    label: 'Landline',
    value: CONTACT.landline,
    href: `tel:${CONTACT.landline}`,
  },
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: CONTACT.address,
    href: 'https://maps.google.com/?q=Manston+Kent',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-red-500 text-sm font-bold tracking-widest uppercase mb-3">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Get Your Free Quote</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Fill in the form below or give us a call. We'll provide a no-obligation quote and get your
            vehicle back on the road looking immaculate.
          </p>
          <div className="mt-5 w-16 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form */}
          <div id="quote" className="lg:col-span-3 bg-zinc-900 rounded-2xl p-8 border border-white/5">
            <h3 className="text-xl font-bold text-white mb-6">Request a Repair Quote</h3>
            <QuoteForm />
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 space-y-5">
            {/* Contact details */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-5">Get In Touch</h3>
              <div className="space-y-4">
                {CONTACT_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'Location' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 bg-red-600/10 border border-red-600/20 rounded-lg flex items-center justify-center text-red-500 flex-shrink-0 group-hover:bg-red-600/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-red-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-zinc-900 rounded-2xl p-6 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock size={18} className="text-red-500" />
                Opening Hours
              </h3>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', hours: '8:00am – 5:00pm', open: true },
                  { day: 'Saturday', hours: '8:00am – 12:00pm', open: true },
                  { day: 'Sunday', hours: 'Closed', open: false },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-400 text-sm">{row.day}</span>
                    <span className={`text-sm font-medium ${row.open ? 'text-green-400' : 'text-gray-500'}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency call card */}
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-2">Need Urgent Help?</h3>
              <p className="text-red-200 text-sm mb-4">
                Call us directly for immediate assistance with your vehicle.
              </p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="block bg-white text-red-600 font-bold text-center py-2.5 rounded-xl hover:bg-red-50 transition-colors"
              >
                📞 {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
