import { Award, ThumbsUp, Leaf, Wrench, ShieldCheck, Truck } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: <Award size={16} />, text: '30+ Years Experience' },
  { icon: <ThumbsUp size={16} />, text: '5-Star Rated Business' },
  { icon: <ShieldCheck size={16} />, text: 'Insurance Repairs Accepted' },
  { icon: <Wrench size={16} />, text: 'All Makes & Models' },
  { icon: <Leaf size={16} />, text: 'Environmentally Approved' },
  { icon: <Truck size={16} />, text: 'Collection & Delivery' },
];

export default function TrustBar() {
  // Duplicate items so the scroll loops seamlessly
  const items = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <div className="bg-red-600 py-3 overflow-hidden">
      <div
        className="flex items-center gap-0"
        style={{ animation: 'marquee 28s linear infinite' }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-white text-sm font-medium whitespace-nowrap px-6"
          >
            {item.icon}
            <span>{item.text}</span>
            <span className="text-red-400 ml-4">•</span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
