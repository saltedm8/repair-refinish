const BASE = 'https://repair-refinish.co.uk/wp-content/uploads';

export const CONTACT = {
  phone: '07550 200000',
  landline: '01843 808063',
  email: 'info@repair-refinish.co.uk',
  address: 'Manston, Kent',
  hours: {
    weekdays: 'Monday – Friday: 8am – 5pm',
    saturday: 'Saturday: 8am – 12pm',
    sunday: 'Sunday: Closed',
  },
};

export const SERVICES = [
  {
    id: 'car-repair',
    slug: 'car-repair',
    title: 'Car Body Repair',
    shortDesc: 'Full bodywork repair for all makes and models, from minor scratches to major collision damage.',
    description:
      'Comprehensive bodywork repair for all makes and models. From minor scratches to major collision damage, we restore your vehicle to showroom condition using the latest repair techniques and recycled OEM parts.',
    icon: 'Car',
    heroImage: `${BASE}/2022/08/Car-Body-Repair-Reclamet-Repair-and-Refinish-Ltd.jpg`,
    images: [
      `${BASE}/2022/08/Accident-Repair-Reclamet-Repair-and-Refinish-Ltd.jpeg`,
      `${BASE}/2022/08/Accident-Repair-BMW-Car-Before-and-After.jpg`,
      `${BASE}/2022/08/Accident-Repair-Toyota-Corolla-Before-and-After.jpg`,
      `${BASE}/2022/08/Accident-Repair-BMW-Before-and-After.jpg.jpg`,
    ],
    features: [
      'All makes and models',
      'Recycled OEM parts available',
      'Latest collision repair techniques',
      'All dents, scratches and chips',
      'Colour-matched paint finish',
      'Guaranteed quality results',
    ],
  },
  {
    id: 'car-insurance-repair',
    slug: 'car-insurance-repair',
    title: 'Car Insurance Repair',
    shortDesc: 'Had an accident? You have the right to choose your own repairer — choose us.',
    description:
      'Had an accident? You have the right to choose who repairs your vehicle. Since a 2010 law change, insurers cannot force you to use their approved repairers. We work directly with insurance companies and guarantee outstanding results at competitive prices.',
    icon: 'ShieldCheck',
    heroImage: `${BASE}/2022/09/Car-Insurance-Repair.jpg`,
    images: [
      `${BASE}/2022/09/Car-Recovery-and-Repair-Service.jpg`,
      `${BASE}/2022/08/Accident-Repair-Reclamet-Repair-and-Refinish-Ltd.jpeg`,
      `${BASE}/2025/10/RRR-Case-Study-Land-Rover-Discovery.png`,
      `${BASE}/2025/10/RRR-Case-Study-Land-Rover-Discovery-After.png`,
    ],
    features: [
      'You choose your repairer — not the insurer',
      'We liaise directly with insurance companies',
      'No excess uplift',
      'Protect your no-claims bonus',
      'Recycled OEM parts to reduce costs',
      'Full repair guarantee',
    ],
  },
  {
    id: 'paintless-dent-repair',
    slug: 'paintless-dent-repair',
    title: 'Paintless Dent Repair',
    shortDesc: 'Remove dents without repainting using our Stanners Dent Expert COMBI system.',
    description:
      'Using our Stanners Dent Expert COMBI system, we remove dents from both steel and aluminium panels without any repainting. Faster, more affordable, and preserves your original paintwork and vehicle value perfectly.',
    icon: 'Hammer',
    heroImage: `${BASE}/2022/08/Paintless-Dent-Repair-Reclamet-Repair-and-Refinish-Ltd.png`,
    images: [
      `${BASE}/2023/09/Paintless-dent-repair-PDR-how-to-repair-dent-in-car.jpg`,
      `${BASE}/2025/10/RRR-Case-Study-VW-Golf-Before.png`,
      `${BASE}/2025/10/RRR-Case-Study-VW-Golf-After.png`,
      `${BASE}/2025/09/RRR-Case-Study-Ford-Focus-2020.png`,
    ],
    features: [
      'Stanners Dent Expert COMBI system',
      'Steel and aluminium panels',
      'No repainting required',
      'Preserves original paintwork',
      'Same-day results possible',
      'More affordable than panel replacement',
    ],
  },
  {
    id: 'smart-repair',
    slug: 'smart-repair',
    title: 'SMART Repair',
    shortDesc: 'Small to Medium Area Repair Technology — fast, localised, affordable paint and dent fixes.',
    description:
      'Small to Medium Area Repair Technology — a cost-effective solution for localised paint damage, scratches, scuffs, chips and small dents. SMART repairs are carried out on-site without the need for a full respray, saving you time and money.',
    icon: 'Sparkles',
    heroImage: `${BASE}/2022/08/SMART-Repair-Reclamet-Repair-and-Refinish-Ltd.jpg`,
    images: [
      `${BASE}/2022/08/SMART-Repair-Bumper-Before-and-After.jpg`,
      `${BASE}/2022/08/SMART-Repair-Car-Door-Before-and-After.jpg`,
      `${BASE}/2022/08/SMART-Repair-GTI-Before-and-After.jpg`,
      `${BASE}/2022/08/SMART-Repair-Porche-Before-and-After.jpg`,
    ],
    features: [
      'Scratches, scuffs and chips',
      'Bumper and panel repairs',
      'No full respray needed',
      'Localised, precise repairs',
      'Fast turnaround',
      'Perfect colour match',
    ],
  },
  {
    id: 'headlight-refurbishment',
    slug: 'headlight-refurbishment',
    title: 'Headlight Refurbishment',
    shortDesc: 'Restore cloudy, yellowed or scratched headlights to crystal-clear condition.',
    description:
      'Restore cloudy, yellowed, scratched or oxidised headlights to crystal-clear condition. Improve visibility, pass your MOT and transform the look of your vehicle — all at a fraction of replacement cost.',
    icon: 'Lightbulb',
    heroImage: `${BASE}/2025/10/headlights-RRR.jpg`,
    images: [
      `${BASE}/2025/10/headlights-RRR.jpg`,
      `${BASE}/2022/08/Car-Body-Repair-Reclamet-Repair-and-Refinish-Ltd.jpg`,
      `${BASE}/2025/10/Bodyshop-1-scaled.jpg`,
      `${BASE}/2025/11/20251103_151124-scaled.jpg`,
    ],
    features: [
      'Removes oxidation and yellowing',
      'Crystal-clear results',
      'Improved night visibility',
      'MOT compliance',
      'Fraction of replacement cost',
      'UV-protective coating applied',
    ],
  },
  {
    id: 'ev-hybrid-repairs',
    slug: 'ev-hybrid-repairs',
    title: 'EV & Hybrid Repairs',
    shortDesc: 'Fully trained and equipped to safely repair electric and hybrid vehicles.',
    description:
      'Fully trained and equipped to work on electric and hybrid vehicles. Our technicians follow strict manufacturer guidelines, safely isolating high-voltage systems before carrying out any bodywork or paint repairs. Safe, professional, and thorough.',
    icon: 'Zap',
    heroImage: `${BASE}/2022/08/Aluminum-Repair-Tesla.jpg`,
    images: [
      `${BASE}/2022/08/Aluminum-Repair-Tesla.jpg`,
      `${BASE}/2025/09/RRR-Case-Study-Merc-in-and-out.png`,
      `${BASE}/2025/10/Bodyshop-1-scaled.jpg`,
      `${BASE}/2022/08/Aluminium-Repair-Reclamet-Repair-and-Refinish-Ltd.jpg`,
    ],
    features: [
      'High-voltage isolation trained',
      'Manufacturer guidelines followed',
      'All EV and hybrid models',
      'Cosmetic and major bodywork',
      'Tesla, BMW, Mercedes and more',
      'Safe and certified process',
    ],
  },
];

export const REVIEWS = [
  {
    name: 'Sheila Roberts',
    date: '25 Sep 2025',
    rating: 5,
    text: 'My Ford Focus needed a car bonnet respray as it had a scratch and stone chips on it. Joe was very helpful and did a very good job — it looks as good as new now, all for a very fair price. He also collected and delivered the car to my home address for a small charge. I would highly recommend!',
  },
  {
    name: 'Chris Derbyshire',
    date: '22 Aug 2025',
    rating: 5,
    text: '1975 VW campervan with some extensive damage to both sides. Absolutely fantastic job by this place. The colour match is 1st class. If you have any bodywork or repair problems do not hesitate — Joe and his team are very friendly and expert. What a hidden gem! 100% recommend.',
  },
  {
    name: 'Alfie Gregson',
    date: '20 Aug 2025',
    rating: 5,
    text: 'Brilliant service! Car was picked up and dropped off same day. Had a deep scratch and they made it look brand new again. Thanks guys!',
  },
  {
    name: 'Donna Wenman',
    date: '10 Jan 2025',
    rating: 5,
    text: 'Fantastic job. Very helpful picking my car up and dropping it back. Had paint peeling off my bonnet due to a manufacturing defect. Lovely job done, looks like new. Quoted price was what I paid.',
  },
  {
    name: 'Robert Carvey',
    date: '21 Jan 2023',
    rating: 5,
    text: 'Damage to 3 panels plus a damaged front bumper. Full off side respray plus front bumper. Booked in within 2 days, car back 2 days later. Almost half the price of other local body shops.',
  },
  {
    name: 'Andy Martin',
    date: '18 Feb 2023',
    rating: 5,
    text: 'My car was damaged while left in a carpark and I was worried about claiming on insurance. The quote was good so I decided to go ahead and I was not disappointed — my car looks better now than it did before the incident.',
  },
];

export const FAQS = [
  {
    question: 'How do I repair scratches on my car?',
    answer:
      "To fix scratches, they can be rubbed with sandpaper and an abrasive compound, then a clear coat reapplied. But why have the hassle? Leave it to our scratch repair experts — we'll get it done professionally and affordably.",
  },
  {
    question: 'Does car insurance cover repairs?',
    answer:
      "You can choose who repairs your vehicle after an accident. Insurers can't force you to use their approved repairers since a 2010 law change. They must still pay out if you choose your own repairer. Get a best price quote from us instead.",
  },
  {
    question: 'How much does scratch repair cost?',
    answer:
      "The cost varies depending on the extent of the damage, your car model, and the parts and labour time required. Rest assured your car will return looking fresh, like out of the showroom — quality and affordability guaranteed.",
  },
  {
    question: "What will my car's value be after repair?",
    answer:
      'Our aim is to restore your car\'s value to the highest standard. Our accident repair centre is fully equipped to adhere to the uppermost safety and environmental demands using recycled OEM parts.',
  },
  {
    question: 'How do you repair dents?',
    answer:
      'From bumps and dings to more advanced dent repairs, our dent repair shop — equipped with a Stanners Dent Expert COMBI system — can get your vehicle back on the road in perfect condition.',
  },
  {
    question: "I've had a car accident — now what?",
    answer:
      "Accidents happen, but any damage to your car need not be a cause for concern. Our car accident repair service ensures your vehicle is repaired to the highest standards. Contact us and we'll handle everything.",
  },
  {
    question: 'What are the most common car repairs?',
    answer:
      'The most common repairs include dent removal, body repairs, bonnet repairs, scratch removal, SMART repair, paintless dent repair, bumper scuff repairs, and car body paintwork.',
  },
  {
    question: 'Can you repair electric and hybrid vehicles?',
    answer:
      'Yes! We are fully trained and equipped to work on electric and hybrid vehicles. Our technicians follow strict manufacturer guidelines and safely isolate high-voltage systems before carrying out any repairs.',
  },
];

export const AREAS = [
  'Ashford', 'Birchington', 'Broadstairs', 'Canterbury', 'Chatham', 'Dartford',
  'Deal', 'Ditton', 'Dover', 'Faversham', 'Folkestone', 'Gillingham',
  'Gravesend', 'Hartley', 'Herne Bay', 'Hythe', 'Maidstone', 'Manston',
  'Margate', 'Minster', 'Northfleet', 'Ramsgate', 'Rochester',
  'Royal Tunbridge Wells', 'Sevenoaks', 'Sheerness', 'Sittingbourne',
  'Swanley', 'Swanscombe', 'Thanet', 'Tonbridge', 'Whitstable',
];
