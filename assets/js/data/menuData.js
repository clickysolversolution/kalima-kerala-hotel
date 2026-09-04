/**
 * Kalima Kerala Kitchen Hotel - Menu Data Store
 * Fully dynamic dataset with real hotel dish photos, pricing, and categories.
 */
export const menuCategories = [
  { id: "all", name: "All Dishes", icon: "sparkles" },
  { id: "specials", name: "Chef's Specials", icon: "star" },
  { id: "biryani", name: "Biryani & Rice", icon: "flame" },
  { id: "porotta", name: "Porotta & Combos", icon: "layers" },
  { id: "meals", name: "Pothichoru & Meals", icon: "leaf" },
  { id: "seafood", name: "Seafood Specials", icon: "fish" },
  { id: "curries", name: "Nadan Curries", icon: "soup" },
  { id: "snacks", name: "Snacks & Drinks", icon: "coffee" }
];

export const menuItems = [
  {
    id: "kbb-01",
    name: "Kerala Beef Biriyani",
    category: "biryani",
    isSpecial: true,
    price: 274,
    diet: "non-veg",
    spicyLevel: 3,
    badge: "Bestseller",
    description: "Authentic Kerala spiced Beef Dum Biryani slow-cooked with fragrant short-grain Kaima rice, tender juicy beef chunks, caramelized shallots, mint, and roasted spices. Served with raita and pickle.",
    image: "./assets/images/dish_kerala_beef_biriyani.jpg"
  },
  {
    id: "kpb-02",
    name: "Kerala Plain Biriyani",
    category: "biryani",
    isSpecial: false,
    price: 184,
    diet: "veg",
    spicyLevel: 1,
    badge: "Special Aroma",
    description: "Aromatic Malabar Biryani Kushka rice delicately cooked with whole spices, saffron ghee, and rich vegetable/spice stock. Served with raita and date pickle.",
    image: "./assets/images/dish_kerala_plain_biriyani.jpg"
  },
  {
    id: "pbc-03",
    name: "Puttu with Beef Curry",
    category: "porotta",
    isSpecial: true,
    price: 349,
    diet: "non-veg",
    spicyLevel: 3,
    badge: "Iconic Combo",
    description: "Traditional soft steamed rice flour cylinder layered with freshly grated coconut (Puttu) paired with intensely flavorful, spicy slow-roasted Kerala beef curry.",
    image: "./assets/images/dish_puttu_beef_curry.jpg"
  },
  {
    id: "gr-04",
    name: "Malabar Ghee Rice (Neychoru)",
    category: "biryani",
    isSpecial: false,
    price: 184,
    diet: "veg",
    spicyLevel: 0,
    badge: "Classic",
    description: "Famous Malabar Neychoru prepared with fragrant Jeerakasala rice, golden pure cow ghee, crisp fried onions, cashews, raisins, and mild whole spices.",
    image: "./assets/images/dish_ghee_rice.jpg"
  },
  {
    id: "pcm-05",
    name: "Authentic Pothichoru Meal",
    category: "meals",
    isSpecial: true,
    price: 350,
    diet: "non-veg",
    spicyLevel: 2,
    badge: "Chef's Pride",
    description: "Nostalgic Kerala meal packed inside a flame-roasted banana leaf, filled with hot Matta rice, fish fry / omelette, avial, thoran, chammanthi, moru curry, and spicy achar.",
    image: "./assets/images/dish_pothichoru_meal.jpg"
  },
  {
    id: "ckp-06",
    name: "Chicken Kothu Parotta",
    category: "porotta",
    isSpecial: true,
    price: 270,
    diet: "non-veg",
    spicyLevel: 3,
    badge: "Popular Hit",
    description: "Flaky layered Malabar porotta shredded and vigorously tossed on a sizzling tawa with tender chicken pieces, scrambled eggs, onions, green chillies, and rich spiced salna.",
    image: "./assets/images/dish_chicken_kothu_parotta.jpg"
  },
  {
    id: "tcb-07",
    name: "Thalassery Chicken Dum Biryani",
    category: "biryani",
    isSpecial: true,
    price: 240,
    diet: "non-veg",
    spicyLevel: 2,
    badge: "Signature",
    description: "Famous Thalassery chicken dum biryani cooked in pure ghee, short Kaima rice, succulent chicken, fried cashews, and aromatic Malabar spices.",
    image: "./assets/images/dish_thalassery_biryani.jpg"
  },
  {
    id: "kp-08",
    name: "Kerala Porotta with Spicy Beef Roast",
    category: "porotta",
    isSpecial: true,
    price: 260,
    diet: "non-veg",
    spicyLevel: 3,
    badge: "Must Try",
    description: "Set of crispy, flaky layered Malabar porotta served with dark spicy slow-cooked Kerala beef roast, coconut slices, and curry leaves.",
    image: "./assets/images/dish_porotta_beef.jpg"
  },
  {
    id: "sf-09",
    name: "Karimeen Pollichathu",
    category: "seafood",
    isSpecial: true,
    price: 360,
    diet: "non-veg",
    spicyLevel: 3,
    badge: "Heritage",
    description: "Fresh Pearl Spot fish marinated in spicy Kerala red masala, wrapped in fresh banana leaf, and pan-roasted in pure coconut oil.",
    image: "./assets/images/dish_karimeen.jpg"
  },
  {
    id: "vs-10",
    name: "Grand Kerala Banana Leaf Sadya",
    category: "meals",
    isSpecial: false,
    price: 220,
    diet: "veg",
    spicyLevel: 1,
    badge: "Full Feast",
    description: "Traditional 18-course Kerala vegetarian feast on banana leaf with Sambar, Avial, Thoran, Olan, Pachadi, Inji Puli, Papadam, Red Rice, and Payasam.",
    image: "./assets/images/dish_kerala_sadya.jpg"
  },
  {
    id: "cu-11",
    name: "Kerala Nadan Kozhi Curry",
    category: "curries",
    isSpecial: false,
    price: 210,
    diet: "non-veg",
    spicyLevel: 2,
    badge: "Homestyle",
    description: "Homestyle country chicken curry prepared with roasted coconut paste, whole spices, and curry leaves.",
    image: "./assets/images/dish_porotta_beef.jpg"
  },
  {
    id: "sn-12",
    name: "Pazham Pori & Sulaimani Tea",
    category: "snacks",
    isSpecial: false,
    price: 70,
    diet: "veg",
    spicyLevel: 0,
    badge: "Evening Special",
    description: "Golden fried ripe banana fritters in coconut oil, served with hot spiced Sulaimani lemon-mint black tea.",
    image: "./assets/images/hero_kerala_kitchen.jpg"
  },
  {
    id: "sn-13",
    name: "Malabar Special 'Meter' Chaya",
    category: "snacks",
    isSpecial: false,
    price: 35,
    diet: "veg",
    spicyLevel: 0,
    badge: "Authentic",
    description: "Famous frothy pulled Malabar tea brewed with strong tea dust, fresh milk, and cardamom aroma.",
    image: "./assets/images/hero_kerala_kitchen.jpg"
  }
];
