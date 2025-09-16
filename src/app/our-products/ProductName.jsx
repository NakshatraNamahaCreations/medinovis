// /data/productName.js

// helper
export const slugify = (s = "") =>
  s
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");

export const PRODUCT_NAME_DATA = [
  {
    id: 1,
    title: "NOVIS BT",
    image: "/images/Novis-bt (2).jpg",
    images: ["/images/Novis-bt (2).jpg", "/images/Novis-bt2.jpg", "/images/Novis-bt3.jpg", "/images/Novis-bt4.jpg"],
    description:
      "NOVIS BT Tablet is used to treat nutritional deficiencies. It effectively treats various conditions caused by lack of vitamins, such as vitamin B6 and B12 deficiencies, diabetic neuropathy (nerve damage due to diabetes), and peripheral neuropathy (nerve damage in the hands and feet).",
    highlights: ["Used to treat nutritional deficiencies. ", "Peripheral neuropathy", "It treats various  conditions caused by lack of vitamins"],
    uses: ["To treat nutritional dificiencies", "Treats conditions caused by lack of Vitamins"],
    faqs: [
      { q: "What is NOVIS BT used for?", a: "For vitamin B6/B12 deficiency and nerve-related issues like diabetic and peripheral neuropathy." },
      { q: "How should I take it?", a: "Exactly as prescribed; usually once daily, with or without food, at the same time each day." },
      { q: "Any common side effects?", a: "Mild nausea, dizziness, or stomach upset. Stop and consult a doctor if severe reactions occur." }
    ]
  },
  {
    id: 2,
    title: "ESMOGERD DSR",
    image: "/images/Esmo-gerdDSR.jpg",
    images: ["/images/Esmo-gerdDSR.jpg", "/images/Esmo-gerdDSR1.jpg", "/images/Esmo-gerdDSR2.jpg", "/images/Esmo-gerdDSR3.jpg"],
    description:
      "EMOGERD DSR Capsule is used to treat gastroesophageal reflux disease (GERD), Zollinger-Ellison syndrome, and stomach ulcers. It contains Esomeprazole and Domperidone, which blocks acid production and increases the movements and contractions of stomach muscles. Thus, helps in treating acidity-related problems.",
    highlights: ["Used to treat gastroesophageal reflux disease.", "Helps in treating acidity related problems", "It also helps to block acid production in stomach"],
    uses: ["Used to treat Zollinger-Ellison syndrome and stomach ulcers", "It contains Esomeprazole and Domperidone"],
    faqs: [
      { q: "When should I take ESMOGERD DSR?", a: "Preferably 30–60 minutes before a meal, or as directed by your doctor." },
      { q: "Can it be taken long term?", a: "Long-term use should be monitored by a doctor due to possible nutrient absorption issues." },
      { q: "What if I feel drowsy?", a: "Domperidone may cause mild drowsiness. Avoid driving if you feel sleepy and speak to your doctor." }
    ]
  },
  {
    id: 4,
    title: "CITINOVIS -500",
    image: "/images/Citinovis-500-min1.jpg",
    images: ["/images/Citinovis-500-min1.jpg", "/images/Citinovis-50011-min.jpg", "/images/Citinovis-50021-min.jpg", "/images/Citinovis-50031.jpg"],
    description:
      "CITINOVIS 500 mg Tablet is used to treat stroke, head trauma or injury, Alzheimer's disease, Parkinson's disease, and glaucoma. A stroke occurs due to an insufficient blood supply to the brain. Alzheimer's disease is a progressive age-related memory loss.",
    highlights: ["It is used to treat stroke, head trauma or injury"],
    uses: ["Used to treat Alzheimer's disease, Parkinson's disease and glaucoma"],
    faqs: [
      { q: "How does it help after stroke?", a: "It supports brain recovery and may improve cognitive function during rehabilitation." },
      { q: "How long before I see benefits?", a: "Cognitive benefits can take weeks; continue as advised and attend follow-ups." },
      { q: "Can seniors use it?", a: "Yes, under medical supervision, with dose adjusted to overall health." }
    ]
  },
  {
    id: 5,
    title: "CITINOVIS PLUS",
    image: "/images/citinovis-plu.jpeg",
    images: ["/images/citinovis-plu.jpeg", "/images/citinovis-plus.jpeg", "/images/citinovis-plus2-min (1).jpg"],
    description:
      "CITINOVIS Plus Tablet is a medicine used in stroke rehabilitation and as a cognitive enhancer. It protects the nerve cells in the brain from damage and also helps to repair the damaged nerve cells. It may also be used in the treatment of brain trauma",
    highlights: ["It is used for stroke rehabilition", "It protects nerve damages in brain", "Used in treatment of brain trauma"],
    uses: ["Helps to repair the damages nerve cells"],
    faqs: [
      { q: "Is it the same as CITINOVIS 500?", a: "PLUS combines actives aimed at neuroprotection and cognitive support; your doctor chooses based on need." },
      { q: "Any food restrictions?", a: "No specific foods, but a balanced diet aids recovery." },
      { q: "Can I take it with blood thinners?", a: "Inform your doctor; they’ll review interactions before combining." }
    ]
  },
  {
    id: 6,
    title: "NEURO RELIEF NT",
    image: "/images/Neurorelief_NT (1).jpg",
    images: ["/images/Neurorelief_NT (1).jpg", "/images/Neurorelief_NT1.jpg", "/images/Neurorelief_NT2.jpg", "/images/Neurorelief_NT3.jpg", "/images/Neurorelief_NT4.jpg"],
    description:
      "NEURORELIEF NT Tablet is a combination of three medicines: pregabalin, nortriptyline, and methylcobalamin. This medicine is useful in the treatment of nerve pain (neuropathic pain). This medicine calms the damaged or overactive nerves by acting on brain, thereby decreasing the pain sensation.",
    highlights: ["Useful in the treatment of nerve pain", "It aslo helps to calm the damage of nerves in brain"],
    uses: ["It is a combination of three medicines: pregabalin, nortriptyline and methylcobalamin"],
    faqs: [
      { q: "Will it make me drowsy?", a: "It can. Take at night if advised and avoid driving until you know your response." },
      { q: "How quickly does it work?", a: "Some relief within days, full benefit may take 2–4 weeks." },
      { q: "Can I stop abruptly?", a: "No. Taper only under medical guidance to avoid withdrawal symptoms." }
    ]
  },
  {
    id: 7,
    title: "SHELLWORK D3",
    image: "/images/Shellwork-D34.jpg",
    images: ["/images/Shellwork-D34.jpg", "/images/Shellwork-D32.jpg", "/images/Shellwork-D31.jpg", "/images/Shellwork-D3 (1).jpg"],
    description:
      "SHELL WORK D3 syrup is used to manage calcium deficiency, helps strengthen the bones and supports bone, muscle and joint care. Key Ingredients: Cholecalciferol - 60000 IU (In a Nanodroplet Form) In A Flavoured Sugar-free Base.",
    highlights: ["Used to manage calcium deficiency", "Helps in strenghtening the bones"],
    uses: ["Used to increase strenght of bones, muscles and joints"],
    faqs: [
      { q: "How often should I take 60,000 IU?", a: "Typically once weekly or as prescribed; do not exceed the advised schedule." },
      { q: "With food or empty stomach?", a: "Better with meals that contain fat to aid absorption." },
      { q: "Any lab monitoring?", a: "Your doctor may check vitamin D and calcium levels periodically." }
    ]
  },
  {
    id: 14,
    title: "ROSUNOVIS-ASP",
    image: "/images/Rosunovis-ASP (1).jpg",
    images: ["/images/Rosunovis-ASP (1).jpg", "/images/Rosunovis-ASP2.jpg"],
    description:
      "Potential uses include improving symptoms of heart failure, potentially reducing the frequency of migraines, improving sperm and egg quality for fertility, and helping with muscle weakness in some cases of muscular dystrophy. CoQ10 is marketed as a dietary supplement and is not regulated by the FDA for any specific health benefits.",
    highlights: ["it helps in improving symptoms of heart failure", "Reduces the frequency of migraines", "It also helps with muscle weakness", "Used to treat musscle dystrophy"],
    uses: ["Helps to reduce the frequency of migraines", "Helps with muscle weakness in some muscular dystrophy"],
    faqs: [
      { q: "Is this a prescription drug?", a: "CoQ10 products are supplements; use under medical advice if you have heart conditions." },
      { q: "Can I take it with statins?", a: "Often used alongside statins; confirm with your doctor first." },
      { q: "How long until effects are felt?", a: "Benefits may take several weeks of consistent use." }
    ]
  },
  {
    id: 8,
    title: "ROSUNOVIS F",
    image: "/images/Rosunovis-f1.jpg",
    images: ["/images/Rosunovis-f1.jpg", "/images/Rosunovis-f2.jpg"],
    description:
      "ROSUNOVIS F (10/160 mg) Tablet is a medicine that consists of Rosuvastatin and Fenofibrate. It is used in the treatment of hyperlipidaemia (high levels of fat). It helps to reduce the level of bad cholesterol and fats in the body and thus prevents the risk of heart attack and stroke.",
    highlights: ["It consists of Rosuvastatin and Fenofibrate", "Used in treatment of hyperlipidaemia", "Helps to reduce level of bad cholesterol", "Also prevents the risk of heart attack"],
    uses: ["Consists of Rosuvastatin and Fenofibrate", "Used in treatment of High level of fats", "Prevents the risk of heart attack and stroke"],
    faqs: [
      { q: "Do I need liver tests?", a: "Yes, periodic liver function tests and lipid profile checks are common." },
      { q: "Any food restrictions?", a: "Limit alcohol and follow a low-fat diet for best results." },
      { q: "Muscle pain warning?", a: "Report unexplained muscle pain/weakness to your doctor promptly." }
    ]
  },
  {
    id: 11,
    title: "TELMINOVIS 50",
    image: "/images/telminovis-m50.jpg",
    images: ["/images/telminovis-m50.jpg", "/images/telminovis-m501.jpg", "/images/telminovis-m503.jpg", "/images/telminovis-m504.jpg"], // fixed key
    description:
      "TELMINOVIS 50mg Tablet is a medicine used to treat high blood pressure and heart failure. Lowering blood pressure helps prevent future heart attacks and strokes. This medicine is also effective in preserving kidney function in patients with diabetes",
    highlights: ["Used to treat blood pressure and heart failure", "It is also effective in preserving kidney functions"],
    uses: ["Used to treat high blood pressure", "Used to preserve kidney functioning in diabetic patients"],
    faqs: [
      { q: "Best time to take?", a: "Same time daily; morning is common unless advised otherwise." },
      { q: "Can I take it with diuretics?", a: "Often combined, but monitor blood pressure and electrolytes as advised." },
      { q: "What if I feel dizzy?", a: "Stand up slowly; if persistent, speak to your doctor about dose adjustment." }
    ]
  },
  {
    id: 10,
    title: "TELMINOVIS H",
    image: "/images/TelmiNovis-h.jpg",
    images: ["/images/TelmiNovis-h.jpg", "/images/TelmiNovis-h1.jpg", "/images/TelmiNovis-h3.jpg", "/images/TelmiNovis-h4.jpg", "/images/TelmiNovis-h5.jpg"],
    description:
      "TELMINOVIS H Tablet is used for the treatment of hypertension (high blood pressure). It contains Telmisartan and Hydrochlorothiazide, which helps to relax and widen the blood vessels (arteries). Also, it prevents absorption of excess salt in the body, preventing fluid retention.",
    highlights: ["Used in treatment of hypertension", "It contains Telmisartan & Hydroclorothiazide", "It prevents absorption of excess salt in the body"],
    uses: ["Used to treat hypertension", "Helps to relax and widen the blood vessels"],
    faqs: [
      { q: "Will it increase urination?", a: "Yes, due to HCTZ. Take earlier in the day to avoid night urination." },
      { q: "Do I need electrolyte tests?", a: "Your doctor may periodically check potassium and sodium." },
      { q: "Safe in diabetes?", a: "Often used; monitor sugars and kidney function as advised." }
    ]
  },
  {
    id: 9,
    title: "TELMINOVIS-M 25",
    image: "/images/Telminovis-m25.jpg",
    images: ["/images/Telminovis-m25.jpg", "/images/Telminovis-m252.jpg", "/images/Telminovis-m253.jpg", "/images/Telminovis-m254.jpg"],
    description:
      "PIONOVIS GM 2 Tablet SR is a combination medicine that helps control blood sugar levels. This medicine is used together with diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus. It helps in proper utilisation of insulin, thereby lowering the blood sugar levels.",
    highlights: ["Combination of medicine that helps control blood sugar levels", "It helps to improve blood sugar control", "It helps in lowering the blood sugar levels"],
    uses: ["Used to improve blood sugar control", "Helps in proper utilization of insulin"],
    faqs: [
      { q: "Can it cause low sugar?", a: "Risk exists with some combinations—carry sugar and monitor regularly." },
      { q: "Alcohol use?", a: "Avoid or limit; alcohol may affect glucose control and increase side-effects." },
      { q: "Missed dose?", a: "Skip if near next dose; never double up." }
    ]
  },
  {
    id: 12,
    title: "VILDANOVIS M FORTE",
    image: "/images/vildanovis-m.jpg",
    images: ["/images/vildanovis-m.jpg", "/images/Vildanovis-m1.jpg", "/images/Vildanovis-m2.jpg", "/images/Vildanovis-m3.jpg", "/images/Vildanovis-m4.jpg"],
    description:
      "VILDANOVIS M FORTE 50mg/1000mg Tablet is a combination of two medicines that control high blood sugar levels in people with type 2 diabetes mellitus. This helps prevent serious complications of diabetes, such as kidney damage and blindness, and may also reduce your chances of having a heart attack or stroke",
    highlights: ["helps to control type 2 diabetes mettitus", "Prevents serious complications of diabetes", "Reduces the chance of heart attack"],
    uses: ["Used to treat people with type 2 diabetes mellitus", "Used to prevent complications like kidney damage and blindness caused due to diabetes"],
    faqs: [
      { q: "Take with meals?", a: "Yes, to reduce gastric side-effects and improve tolerance." },
      { q: "Any kidney precautions?", a: "Dose may change with kidney function; follow your doctor’s advice." },
      { q: "Exercise needed?", a: "Diet and exercise are essential for best control." }
    ]
  },
  {
    id: 15,
    title: "RUTOSIA DS",
    image: "/images/RutosiaDS.jpg",
    images: ["/images/RutosiaDS.jpg", "/images/RutosiaDS1.jpg", "/images/RutosiaDS2.jpg", "/images/RutosiaDS3.jpg", "/images/RutosiaDS4.jpg"],
    description:
      "PROTOVAN SF powder is a nutritional supplement primarily used for individuals with diabetes or prediabetes to support overall health and manage blood sugar levels. It provides a balanced mix of proteins, vitamins, and minerals, including fibre and antioxidants, which aid in digestion, energy levels, immunity, and glucose metabolism. The powder is formulated to be low in added sugar and contains ingredients like chromium and complex carbohydrates to help control glucose release and improve insulin response.",
    highlights: ["Used for individuals with diabetes", "Provides a balanced mix of proteins & minerals", ""],
    uses: ["Used to manage overall health", "To manage blood sugar levels", "It improves insulin response"],
    faqs: [
      { q: "How do I take it?", a: "Mix the recommended scoop in water/milk or as directed by your clinician." },
      { q: "Is it sugar-free?", a: "Formulated for glycemic control; check label and follow diet advice." },
      { q: "Can I replace meals?", a: "It’s a supplement, not a full meal replacement unless advised." }
    ]
  },
  {
    id: 16,
    title: "BILICHOL-300",
    image: "/images/Bilichol-3001-min1 (1).jpg",
    images: ["/images/Bilichol-3001-min1 (1).jpg", "/images/Bilichol-3001-min1.jpg", "/images/Bilichol-30021-min1.jpg", "/images/Bilichol-30031-min1.jpg"],
    description:
      "BILICHOL 300 Tablet is primarily used for two main conditions - to dissolve certain gallstones and to treat a liver disease known as primary biliary cirrhosis. For gallstones, it works by breaking down cholesterol that has hardened into stones in the gallbladder, helping to dissolve them over time",
    highlights: ["Used to dissolve gallstones", "To treat liver disease known as primary biliary cirrhosis"],
    uses: ["Used to breakdown cholestrol in gallbladder", "Helps to dissolve gallstones over time"],
    faqs: [
      { q: "Does it dissolve all gallstones?", a: "Only certain cholesterol stones; not effective for all types." },
      { q: "How long is therapy?", a: "Often months; ultrasound monitoring is common." },
      { q: "Any diet tips?", a: "Low-fat diet helps reduce gallbladder stress." }
    ]
  },
  {
    id: 17,
    title: "CWID SAVE",
    image: "/images/CwidSave.jpg",
    images: ["/images/CwidSave.jpg", "/images/CwidSave1.jpg", "/images/CwidSave2.jpg"],
    description:
      "Tablet is used to treat chronic kidney disease. It contains Alpha Ketoanalogue, which works by lowering urea levels in the blood and improving kidney function////OR////Tablet is a nutritional supplement used in the treatment of chronic kidney disease. It reduces urea levels in the blood and helps prevent the progression of kidney disease. This way it delays the risk of undergoing long-term dialysis.17",
    highlights: ["To treat chronic kidney disease", "Prevents progression of kidney disease", "Prevents the risk of undergoing long-term dialysis"],
    uses: ["Contains Aplha Ketoanalogue, which lowers urea levels in blood"],
    faqs: [
      { q: "Do I need a protein-restricted diet?", a: "Often yes; follow the renal diet plan advised by your nephrologist." },
      { q: "Can it replace dialysis?", a: "No; it may delay progression but does not replace dialysis if needed." },
      { q: "Any monitoring?", a: "Regular kidney function and electrolyte tests are important." }
    ]
  },
  {
    id: 18,
    title: "ACEBROMED FM",
    image: "/images/acebromed-fm3-min.jpg",
    images: ["/images/acebromed-fm3-min.jpg", "/images/acebromed-fm-min (2).jpg", "/images/acebromed-fm1-min.jpg", "/images/acebromed-fm2-min.jpg"],
    description:
      "ACEBROMED FM is a combination medicine used in the prevention of asthma. It relieves allergy symptoms such as runny nose, stuffy nose, sneezing, watery eyes and congestion or stuffiness. It also helps in relaxing the muscles of the air passages, thus widening it and making it easier to breathe",
    highlights: ["Prevents asthma", "Helps in relaxing the muscles of the air passages", "It relieves allergy symptoms such as runny nose"],
    uses: ["Used in the prevention of asthma", "Used in reliefing allergies"],
    faqs: [
      { q: "Is it a rescue medicine?", a: "No. It’s for prevention/symptom control; keep your rescue inhaler as prescribed." },
      { q: "Drowsiness risk?", a: "Antihistamine component may cause drowsiness in some users." },
      { q: "Can I stop when better?", a: "Continue as advised; abrupt stopping may worsen control." }
    ]
  },
  {
    id: 13,
    title: "IVORY-MAX",
    image: "/images/IVORY-MAX (1).jpg",
    images: ["/images/IVORY-MAX (1).jpg", "/images/IVORY-MAX1.jpg", "/images/IVORY-MAX2.jpg", "/images/IVORY-MAX3.jpg"],
    description:
      "EDONOVIS TH 60mg/4mg Tablet is a combination medicine that contains a painkiller as well as a muscle relaxant. It is used to relieve pain, inflammation, and swelling in conditions that affect muscles. Also, it effectively relieves muscle stiffness or spasm, thereby improving muscle movement",
    highlights: ["Contains painkiller and muscle relaxant", "Used to improve muscle movement"],
    uses: [" Used to relieve pain, inflammation, and swelling in conditions that affect muscles"],
    faqs: [
      { q: "Will it make me sleepy?", a: "Muscle relaxants can cause drowsiness; avoid driving if affected." },
      { q: "How long should I take it?", a: "Usually short courses; follow your doctor’s duration to avoid overuse." },
      { q: "Can I take with other painkillers?", a: "Only if approved by your doctor to avoid duplication/side-effects." }
    ]
  },
  {
    id: 19,
    title: "FASCICLE P",
    image: "/images/Fascicle-p1.jpg",
    images: ["/images/Fascicle-p1.jpg", "/images/Fascicle-p (1).jpg"],
    description:
      "Fascicle P ... It is indicated in the treatment of nerve pain and nerve damage in peripheral neuropathy, diabetic neuropathy (nerve damage due to high blood sugar levels), and alcoholic neuropathy where the person experiences numbness and a loss of sensation.",
    highlights: ["To treat peripheral neuropathy", "Used to treat alcoholic neuropathy"],
    uses: ["Used to prevent nerve damage due to high blood sugar levels", "Used to treat nerve pain and nerve damage"],
    faqs: [
      { q: "How soon does it relieve nerve pain?", a: "Relief may begin in days but can take weeks for full effect." },
      { q: "Alcohol precautions?", a: "Avoid alcohol as it worsens neuropathy and may interact with treatment." },
      { q: "Any vitamin components?", a: "Some combos include B-vitamins; check label or ask your pharmacist." }
    ]
  },
  {
    id: 3,
    title: "EDONOVIS-TH4",
    image: "/images/EDonovis-TH4 (1).jpg",
    images: ["/images/EDonovis-TH4 (1).jpg", "/images/EDonovis-TH41.jpg", "/images/EDonovis-TH42.jpg", "/images/EDonovis-TH43.jpg"],
    description:
      "Novis gold …address nutritional deficiencies and nerve-related conditions, especially diabetic neuropathy. Alpha-lipoic acid acts as an antioxidant, protecting cells from damage, while vitamin B12 and folic acid (vitamin B9) are crucial for nerve health, red blood cell formation, and regulating homocysteine levels which are linked to heart health. This combination also helps improve general metabolic function and can alleviate nerve pain and numbness.",
    highlights: ["Treats nutritional deficiencies and nerve-related conditions", "Prevents cells from damage", "It regulates the formation of red blood cell", "Improves general metabolic functions"],
    uses: ["Used to treat diabetic neuropaty", "Regulates homocysteine levels linked to heart health"],
    faqs: [
      { q: "What does alpha-lipoic acid do?", a: "Acts as an antioxidant that may reduce nerve pain and oxidative stress." },
      { q: "Can I take with B-complex?", a: "Often paired; check with your doctor for appropriate doses." },
      { q: "Duration of use?", a: "Depends on symptoms and labs; follow your clinician’s plan." }
    ]
  }
];

// helpers
export const getProductById = (id) =>
  PRODUCT_NAME_DATA.find((p) => String(p.id) === String(id));

export function getProductBySlug(slug) {
  const s = slugify(String(slug || ""));
  return PRODUCT_NAME_DATA.find(
    (p) =>
      (p.slug && slugify(p.slug) === s) ||
      slugify(p.title || p.name || "") === s
  );
}

// derived list for grids/cards
export const productsData = PRODUCT_NAME_DATA.map((p) => ({
  id: p.id,
  title: p.title,
  description: p.description,
  image: p.image,
  slug: p.slug ?? slugify(p.title),
}));

// optional default export for compatibility
export default getProductBySlug;
