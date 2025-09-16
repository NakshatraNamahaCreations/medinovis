// /data/products.js
export const PRODUCTS = [
  {
    id: 1,
    name: 'NOVIS BT',
    image: '/images/Novis-bt (2).jpg',
    rating: 4.3,
    ratingsCount: 612,
    category: 'Diabetes',
    description: 'NOVIS BT Tablet is used to treat nutritional deficiencies.'
  },
  {
    id: 2,
    name: 'ESMOGERD DSR',
    image: '/images/Esmo-gerdDSR.jpg',
    rating: 4.2,
    ratingsCount: 1744,
    category: 'Diabetes',
    description: 'Used to treat GERD, Zollinger-Ellison syndrome, and ulcers.'
  },
  {
    id: 3,
    name: 'EDONOVIS-TH4',
    image: '/images/EDonovis-TH4 (1).jpg',
    rating: 4.4,
    ratingsCount: 1601,
    category: 'Diabetes',
    description: 'Treats conditions related to excess stomach acid production.'
  },
  {
    id: 4,
    name: 'CITINOVIS-500',
    image: '/images/Citinovis-500-min1.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Diabetes',
    description: 'For stroke rehab, head trauma, Alzheimer’s, Parkinson’s.'
  },
  {
    id: 5,
    name: 'CITINOVIS-PLUS',
    image: '/images/citinovis-plu.jpeg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Vitamins & Nutritions',
    description: 'Used in stroke rehabilitation; cognitive enhancer.'
  },
  {
    id: 6,
    name: 'NEURO RELIEF NT',
    image: '/images/Neurorelief_NT (1).jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Vitamins & Nutritions',
    description: 'Combo (pregabalin, nortriptyline, methylcobalamin) for nerve pain.'
  },
  {
    id: 7,
    name: 'SHELLWORK D3',
    image: '/images/Shellwork-D3 (1).jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Vitamins & Nutritions',
    description: 'Sugar-free vitamin D3 syrup for bone/muscle/joint care.'
  },
  {
    id: 8,
    name: 'ROSUNOVIS-F',
    image: '/images/Rosunovis-f1.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Vitamins & Nutritions',
    description: 'Rosuvastatin + Fenofibrate for high lipids.'
  },
  {
    id: 9,
    name: 'TELMINOVIS-25',
    image: '/images/Telminovis-m25.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Immunity Boosters',
    description: 'For hypertension & heart failure; kidney protective in diabetics.'
  },
  {
    id: 10,
    name: 'TELMINOVIS H',
    image: '/images/TelmiNovis-h.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Immunity Boosters',
    description: 'Telmisartan for hypertension; reduces fluid retention.'
  },
  {
    id: 11,
    name: 'TELMINOVIS-50',
    image: '/images/telminovis-m50.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Immunity Boosters',
    description: 'SR combo for type-2 diabetes; improves insulin utilization.'
  },
  {
    id: 12,
    name: 'VILDANOVIS M FORTE',
    image: '/images/vildanovis-m.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Immunity Boosters',
    description: 'Vildagliptin + Metformin (1000 mg) for type-2 diabetes.'
  },
  {
    id: 13,
    name: 'IVORY-MAX',
    image: '/images/IVORY-MAX (1).jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Fitness & Health',
    description: 'Low-sugar nutrition for diabetics: protein, vitamins, minerals.'
  },
  {
    id: 14,
    name: 'ROSUNOVIS-ASP',
    image: '/images/Rosunovis-ASP (1).jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Fitness & Health',
    description: 'For hypertension (includes metoprolol 25).'
  },
  {
    id: 15,
    name: 'RUTOSIA DS',
    image: '/images/RutosiaDS.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Fitness & Health',
    description: 'For hypertension; early post-MI benefits.'
  },
  {
    id: 16,
    name: 'BILICHOL-300',
    image: '/images/Bilichol-3001-min1 (1).jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Fitness & Health',
    description: 'Ursodeoxycholic acid: dissolves certain gallstones; PBC therapy.'
  },
  {
    id: 17,
    name: 'CWID SAVE',
    image: '/images/CwidSave.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Fitness & Health',
    description: 'Alpha ketoanalogues support in CKD; lowers urea; delays dialysis.'
  },
  {
    id: 18,
    name: 'ACEBROMED FM',
    image: '/images/acebromed-fm-min (2).jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Fitness & Health',
    description: 'Allergy/asthma relief; widens air passages for easier breathing.'
  },
  {
    id: 19,
    name: 'FASCICLE-P',
    image: '/images/Fascicle-p1.jpg',
    rating: 4.0,
    ratingsCount: 500,
    category: 'Fitness & Health',
    description: 'For neuropathic pain (peripheral/diabetic).'
  },
];

// Handy helpers (optional)
export const getProductById = (id) =>
  PRODUCTS.find((p) => String(p.id) === String(id));

export const getCategories = () =>
  Array.from(new Set(PRODUCTS.map((p) => p.category).filter(Boolean))).sort();

export default PRODUCTS;
