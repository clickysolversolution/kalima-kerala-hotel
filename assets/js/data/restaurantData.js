/**
 * Kalima Kerala Kitchen Hotel - Core Business Information
 * Modular and dynamic data source ready for future backend/API integration.
 */
export const restaurantInfo = {
  name: "Kalima Kerala Kitchen Hotel",
  tagline: "Authentic Malabar & Kerala Culinary Delights",
  subtitle: "Savor the rich heritage of God's Own Country in Thousand Lights, Chennai",

  contact: {
    phone: "+91 9894080389",
    rawPhone: "9894080389",
    whatsappNumber: "9894080389",
    whatsappDefaultMsg: "Hello Kalima Kerala Kitchen, I would like to place an order / inquire about table reservation.",
    //email: "contact@kalimakitchen.com"
  },

  location: {
    addressLine1: "37, Aziz Mulk 1st St",
    addressLine2: "Thousand Lights West, Thousand Lights",
    city: "Chennai",
    state: "Tamil Nadu",
    pincode: "600006",
    fullAddress: "37, Aziz Mulk 1st St, Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu 600006",
    landmark: "Near Thousand Lights Mosque / Mount Road",
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=37+Aziz+Mulk+1st+St+Thousand+Lights+West+Chennai+Tamil+Nadu+600006",
    embedMapUrl: "https://maps.google.com/maps?q=37%2C%20Aziz%20Mulk%201st%20St%2C%20Thousand%20Lights%20West%2C%20Thousand%20Lights%2C%20Chennai%2C%20Tamil%20Nadu%20600006&t=&z=16&ie=UTF8&iwloc=&output=embed"
  },

  timings: [
    { days: "Monday – Sunday", hours: "11:30 AM – 11:00 PM" },
    { days: "Lunch Service", hours: "11:30 AM – 04:00 PM" },
    { days: "Evening Tea & Snacks", hours: "04:30 PM – 07:00 PM" },
    { days: "Dinner Service", hours: "07:00 PM – 11:00 PM" }
  ],

  badges: [
    { icon: "award", title: "100% Halal", desc: "Authentic Halal Certified Meats" },
    { icon: "flame", title: "Kerala Spices", desc: "Freshly Ground Spice Blends" },
    { icon: "utensils", title: "Dine-in & Takeaway", desc: "Cozy Ambiance & Fast Packing" },
    { icon: "truck", title: "Quick Delivery", desc: "Direct WhatsApp Delivery Orders" }
  ],

  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/919894080389"
  }
};
