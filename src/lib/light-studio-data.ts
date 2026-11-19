// Centralised content for the Light Studio Raipur landing page.

export const BRAND = {
  name: "Light Studio",
  city: "Raipur",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  email: "hello@lightstudioraipur.in",
  address: "Civil Lines, Raipur, Chhattisgarh 492001",
  hours: [
    { day: "Mon – Fri", time: "10:00 AM – 8:00 PM" },
    { day: "Saturday", time: "10:00 AM – 9:00 PM" },
    { day: "Sunday", time: "11:00 AM – 7:00 PM" },
  ],
};

export const HERO_IMAGE =
  "https://vibe.filesafe.space/1794646108292318410/assets/c664298b-498c-4a54-8add-862a8c3c545d.png";

export const SHOWROOM_IMAGE =
  "https://vibe.filesafe.space/1794646108292318410/assets/6df3ea0d-5b05-4e87-a8e0-e967c8589baf.png";

export type Collection = {
  name: string;
  description: string;
  image: string;
};

export const COLLECTIONS: Collection[] = [
  {
    name: "Chandeliers",
    description: "Statement crystal & gold chandeliers for grand interiors.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/717da67c-66cf-40bd-a582-559094e7e819.png",
  },
  {
    name: "Pendant Lights",
    description: "Sculptural pendants that anchor dining and living spaces.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/0db071c2-a1a4-4589-ba9b-5710837e1249.png",
  },
  {
    name: "Ceiling Lights",
    description: "Refined flush & semi-flush ceiling lighting in warm tones.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/e4d90d3f-8d64-4d2a-9bf8-e354b5b42836.png",
  },
  {
    name: "Wall Lights",
    description: "Elegant sconces that add warmth and depth to any wall.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/4130b755-901c-4ba8-868b-f0b40736165a.png",
  },
  {
    name: "Decorative Lights",
    description: "Designer table lamps and accent pieces with quiet luxury.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/45b0cca2-11e7-4d2f-877f-0d9b4243faf0.png",
  },
  {
    name: "Designer Ceiling",
    description: "Geometric gold-frame ceiling lights for modern homes.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/5a67fae2-ca4b-4df7-b69b-d48fb8f2eb48.png",
  },
];

export type Product = {
  name: string;
  description: string;
  image: string;
  price?: string;
};

export const PRODUCTS: Product[] = [
  {
    name: "Aurelia Crystal Chandelier",
    description: "A cascading crystal chandelier with a champagne gold frame.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/717da67c-66cf-40bd-a582-559094e7e819.png",
  },
  {
    name: "Lumière Pendant Trio",
    description: "Set of three hand-finished pendant lights in warm ivory.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/0db071c2-a1a4-4589-ba9b-5710837e1249.png",
  },
  {
    name: "Solene Ceiling Light",
    description: "Brushed gold rim with frosted ivory glass, soft ambient glow.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/e4d90d3f-8d64-4d2a-9bf8-e354b5b42836.png",
  },
  {
    name: "Mira Wall Sconce",
    description: "Champagne gold sconce casting a warm, layered wash of light.",
    image:
      "https://vibe.filesafe.space/1794646108292318410/assets/4130b755-901c-4ba8-868b-f0b40736165a.png",
  },
];

export const GALLERY_IMAGES = [
  {
    src: "https://vibe.filesafe.space/1794646108292318410/assets/665f2840-df1c-492a-9536-17875eab8bc3.png",
    alt: "Luxurious living room with a statement chandelier",
  },
  {
    src: "https://vibe.filesafe.space/1794646108292318410/assets/09d980ec-4852-4f96-9a11-7fb0d8733725.png",
    alt: "Elegant dining room with pendant lights over a wooden table",
  },
  {
    src: "https://vibe.filesafe.space/1794646108292318410/assets/816d5b82-1ced-4f5e-b7c9-7c91efbb8620.png",
    alt: "Serene bedroom with warm wall sconces",
  },
  {
    src: "https://vibe.filesafe.space/1794646108292318410/assets/0a91b858-f09e-4049-8e68-84eb30f45c41.png",
    alt: "Grand staircase illuminated by a cascading chandelier",
  },
  {
    src: "https://vibe.filesafe.space/1794646108292318410/assets/6df3ea0d-5b05-4e87-a8e0-e967c8589baf.png",
    alt: "Light Studio showroom interior",
  },
  {
    src: "https://vibe.filesafe.space/1794646108292318410/assets/c664298b-498c-4a54-8add-862a8c3c545d.png",
    alt: "Crystal chandelier glowing in a dark elegant interior",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ananya & Rohit Sharma",
    location: "Shankar Nagar, Raipur",
    quote:
      "The chandelier we chose transformed our living room completely. The team understood exactly the mood we wanted and guided us beautifully.",
  },
  {
    name: "Vikram Agrawal",
    location: "Civil Lines, Raipur",
    quote:
      "Easily the finest lighting showroom in Raipur. Premium quality, elegant designs, and genuinely helpful staff. Highly recommended.",
  },
  {
    name: "Dr. Meera Tiwari",
    location: "Telibandha, Raipur",
    quote:
      "From selection to installation, the experience was seamless. Our home feels warmer and more luxurious because of their lights.",
  },
];

export const FAQS = [
  {
    q: "Can I visit the showroom to see the lights in person?",
    a: "Absolutely. Our Raipur showroom is open six days a week. We encourage you to visit and experience the lighting in a real-room setting before you decide.",
  },
  {
    q: "Do you offer lighting for the entire home?",
    a: "Yes. From chandeliers and pendants to wall lights, ceiling lights and decorative pieces, we curate complete lighting solutions for every room.",
  },
  {
    q: "Can I enquire about a specific product before visiting?",
    a: "Of course. Use the enquiry form on this page or message us on WhatsApp with the product name, and our team will share details and availability with you.",
  },
  {
    q: "Do you help with selection and design advice?",
    a: "Yes. Our team offers personalised assistance to help you choose the right size, finish and style for your space and budget.",
  },
  {
    q: "Are the products covered under warranty?",
    a: "All our products come with manufacturer warranty. Specific warranty terms are shared at the time of purchase.",
  },
];
