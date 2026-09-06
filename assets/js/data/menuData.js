/**
 * Kalima Kerala Kitchen Hotel - Menu Data Store
 * Fully dynamic dataset with real hotel dish photos, pricing, and categories.
 */
export const menuCategories = [
  { id: "all", name: "All Dishes", icon: "sparkles" },
  { id: "specials", name: "Chef's Specials", icon: "star" },
  { id: "biryani", name: "Biryani & Rice", icon: "flame" },
  { id: "porotta", name: "Porotta & Combos", icon: "layers" },
  { id: "meals", name: "Meals & Thali", icon: "leaf" },
  { id: "seafood", name: "Seafood Specials", icon: "fish" },
  { id: "curries", name: "Nadan Curries", icon: "soup" },
  { id: "beverages", name: "Shakes & Juices", icon: "glass" },
  { id: "snacks", name: "Tea & Snacks", icon: "coffee" }
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
    id: "bkp-02",
    name: "Beef Kothu Porota with Salna",
    category: "porotta",
    isSpecial: true,
    price: 280,
    diet: "non-veg",
    spicyLevel: 3,
    badge: "House Signature",
    description: "Flaky layered Malabar porottas shredded and vigorously beaten on a fiery tawa with tender Kerala beef roast, scrambled eggs, onions, green chillies, and served with rich spiced Salna gravy.",
    image: "./assets/images/dish_beef_kothu_porotta.jpg"
  },
  {
    id: "aym-03",
    name: "Nadan Ayala Meen Fry",
    category: "seafood",
    isSpecial: true,
    price: 190,
    diet: "non-veg",
    spicyLevel: 3,
    badge: "Catch of the Day",
    description: "Fresh whole Mackerel (Ayala) fish marinated in fiery traditional Kerala red chili masala, crisp shallow-fried in coconut oil with fresh curry leaves, and served with onion rings and lemon.",
    image: "./assets/images/dish_ayala_meen.jpg"
  },
  {
    id: "vt-04",
    name: "Kerala Banana Leaf Veg Thali",
    category: "meals",
    isSpecial: true,
    price: 160,
    diet: "veg",
    spicyLevel: 1,
    badge: "Full Feast",
    description: "Traditional Kerala vegetarian feast served on a fresh banana leaf with aromatic Kerala rice, Sambar, Moru curry, Thoran, Kootu curry, Chammanthi, Pickle, and crispy Pappadam.",
    image: "./assets/images/dish_veg_thali.jpg"
  },
  {
    id: "mjf-05",
    name: "Mango Juice & Fruit Salad Sundae",
    category: "beverages",
    isSpecial: true,
    price: 180,
    diet: "veg",
    spicyLevel: 0,
    badge: "Chef's Delight",
    description: "Fresh thick chilled Alphonso mango juice jar paired with a towering tropical fruit salad sundae loaded with creamy vanilla ice cream, strawberry syrup, and crispy wafer cones.",
    image: "./assets/images/dish_mango_juice_fruit_salad.jpg"
  },
  {
    id: "cvm-06",
    name: "Chocolate & Vennila Milkshakes",
    category: "beverages",
    isSpecial: false,
    price: 130,
    diet: "veg",
    spicyLevel: 0,
    badge: "Duet Special",
    description: "Thick and creamy duo of decadent chocolate and smooth vanilla milkshakes, drizzled with chocolate fudge, fruit glaze, and crunchy sweet toppings.",
    image: "./assets/images/dish_chocolate_vanilla_milkshake.jpg"
  },
  {
    id: "csm-07",
    name: "Candy Gems Chocolate Milkshake",
    category: "beverages",
    isSpecial: false,
    price: 150,
    diet: "veg",
    spicyLevel: 0,
    badge: "Kids & Youth Special",
    description: "Ultra-rich chocolate milkshake topped with fluffy whipped cream, chocolate dusting, and loaded with crunchy colorful chocolate Gems candies.",
    image: "./assets/images/dish_candy_milkshake.jpg"
  },
  {
    id: "ms-08",
    name: "Special Malabar Milkshake",
    category: "beverages",
    isSpecial: false,
    price: 120,
    diet: "veg",
    spicyLevel: 0,
    badge: "Chilled Treat",
    description: "Classic creamy chilled milkshake swirled with pistachio and strawberry syrups, topped with ice cream, chopped nuts, and glazed cherry.",
    image: "./assets/images/dish_milkshake.jpg"
  },
  {
    id: "lt-09",
    name: "Kerala Sulaimani Lemon Tea",
    category: "snacks",
    isSpecial: false,
    price: 40,
    diet: "veg",
    spicyLevel: 0,
    badge: "Refreshing",
    description: "Traditional Malabar spiced Sulaimani black tea freshly brewed with whole spices, infused with fresh lemon juice, crushed mint, and warmth.",
    image: "./assets/images/dish_lemon_tea.jpg"
  },
  {
    id: "pcm-10",
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
    id: "pbc-11",
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
    id: "ckp-12",
    name: "Chicken Kothu Parotta",
    category: "porotta",
    isSpecial: false,
    price: 270,
    diet: "non-veg",
    spicyLevel: 3,
    badge: "Popular Hit",
    description: "Flaky layered Malabar porotta shredded and vigorously tossed on a sizzling tawa with tender chicken pieces, scrambled eggs, onions, green chillies, and rich spiced salna.",
    image: "./assets/images/dish_chicken_kothu_parotta.jpg"
  },
  {
    id: "kpb-13",
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
    id: "gr-14",
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
    id: "cu-15",
    name: "Kerala Nadan Kozhi Curry",
    category: "curries",
    isSpecial: false,
    price: 210,
    diet: "non-veg",
    spicyLevel: 2,
    badge: "Homestyle",
    description: "Homestyle country chicken curry prepared with roasted coconut paste, whole spices, and curry leaves.",
    image: "./assets/images/dish_chicken_kothu_parotta.jpg"
  }
];
