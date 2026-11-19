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

/* ------------------------------------------------------------------------------------------
 * Catalogue products, extracted from the Hansa Light Studio catalogue (PDF).
 * The catalogue has no product names or prices; the names below are descriptive labels based
 * on each photo and can be renamed freely. Images live in public/catalogue/<slug>.jpg.
 * ---------------------------------------------------------------------------------------- */

export const CATALOGUE_CATEGORIES = [
  {
    id: "art-glass",
    name: "Art Glass Installations",
    blurb:
      "Hand-crafted glass birds, leaves, ribbons and crystal rain, made to order for atriums, stairwells and lobbies.",
  },
  {
    id: "sky-lights",
    name: "Sky Lights",
    blurb:
      "Artificial skylight panels for grand entrances, dining rooms, ballrooms, offices and showrooms.",
  },
  {
    id: "cement-block",
    name: "Cement Block Lighting",
    blurb: "Sculpted cement relief lights for grand entrances, dining rooms and ballrooms.",
  },
  {
    id: "garden",
    name: "Garden Lights",
    blurb: "Decorative outdoor lighting for gardens, railings, corners and pathways.",
  },
] as const;

export type CatalogueCategoryId = (typeof CATALOGUE_CATEGORIES)[number]["id"];

export type CatalogueProduct = {
  slug: string;
  name: string;
  category: CatalogueCategoryId;
  /** One line, shown on the card */
  description: string;
  /** A fuller write-up, shown in the product preview */
  details: string;
  /** Spaces the piece suits, shown as tags in the preview */
  idealFor: string[];
};

export const CATALOGUE: CatalogueProduct[] = [
  // ---------------------------------------------------------------- Art glass installations
  {
    slug: "golden-cascade-stair",
    name: "Golden Cascade Stair Installation",
    category: "art-glass",
    description:
      "A spiralling column of clear and gold glass petals that follows a curved staircase.",
    details:
      "Hundreds of hand-blown glass petals in clear and champagne gold are hung at staggered heights so the installation traces the full sweep of a spiral staircase. By day it catches natural light; at night integrated spotlights make every petal glow, turning the stairwell into the centrepiece of the home.",
    idealFor: ["Spiral staircases", "Double-height foyers", "Villa entrances"],
  },
  {
    slug: "ruby-cloud-crystal",
    name: "Ruby Cloud Crystal Installation",
    category: "art-glass",
    description:
      "Thousands of ruby and clear crystals suspended in a sweeping cloud over a cove ceiling.",
    details:
      "A dense, flowing cloud of faceted ruby and clear crystals, each on its own fine wire, shaped to follow the line of a cove or tray ceiling. Pin-spot LEDs set into the ceiling scatter deep red sparkle across the room, giving lounges and banquet halls a rich, theatrical glow.",
    idealFor: ["Banquet halls", "Hotel lounges", "Living rooms with cove ceilings"],
  },
  {
    slug: "teal-vortex-crystal",
    name: "Teal Vortex Crystal Installation",
    category: "art-glass",
    description: "A tapering vortex of teal glass droplets for double-height lobbies.",
    details:
      "Teal and aqua glass droplets descend from a broad ceiling canopy and narrow into a twisting vortex, like water spiralling down. The colour gradient and the way the piece tapers make it a strong focal point when seen from any floor of an atrium.",
    idealFor: ["Corporate lobbies", "Atriums", "Hotel receptions"],
  },
  {
    slug: "atrium-crystal-rain",
    name: "Grand Atrium Crystal Rain",
    category: "art-glass",
    description: "A full-height curtain of champagne crystal strands for palatial atriums.",
    details:
      "Thousands of champagne and clear crystal strands fall from ceiling to near floor level, forming a shimmering curtain of light between columns or arches. It is designed for palatial heights, where its sheer scale and gentle movement create a sense of grandeur.",
    idealFor: ["Palace-style atriums", "Wedding venues", "Grand ballrooms"],
  },
  {
    slug: "origami-glass-birds",
    name: "Origami Glass Birds",
    category: "art-glass",
    description:
      "Folded glass birds in amber, clear and teal, taking flight beneath a mirrored canopy.",
    details:
      "Each bird is shaped by hand to look like folded paper, in clear, amber and teal glass, then suspended at different heights beneath a mirrored ceiling plate. The mirror doubles the flock and the light, so the installation feels larger and livelier than its footprint.",
    idealFor: ["Restaurants", "Kids' and family spaces", "Boutique hotels"],
  },
  {
    slug: "azure-butterfly-cascade",
    name: "Azure Butterfly Cascade",
    category: "art-glass",
    description: "Blue glass butterflies drifting down from a round crystal ceiling plate.",
    details:
      "Azure glass butterflies and crystal drops flutter down from a round illuminated ceiling plate in a loose, natural spiral. It brings a light, playful elegance to stairwells and lobbies and looks just as striking from below as from the side.",
    idealFor: ["Stairwells", "Lobbies", "Salons and spas"],
  },
  {
    slug: "crystal-rain-stairwell",
    name: "Crystal Rain Stairwell Drop",
    category: "art-glass",
    description: "A long, slender drop of crystal strands and glass butterflies for stairwells.",
    details:
      "A narrow, very tall drop of crystal strands with glass butterflies woven through, designed to fill the void at the centre of a stairwell. It lights every landing on the way up and keeps a slim profile, so it works where a wide chandelier would not fit.",
    idealFor: ["Stairwell voids", "Narrow atriums", "Multi-storey homes"],
  },
  {
    slug: "gilded-wave-cluster",
    name: "Gilded Wave Glass Cluster",
    category: "art-glass",
    description: "Rippling clear glass waves edged in gold, suspended in a loose cluster.",
    details:
      "Sculpted clear glass forms with rippling, gold-edged rims are gathered into a loose floating cluster. Light passing through the glass throws soft patterns on the ceiling, while the gold edges add warmth and a touch of luxury.",
    idealFor: ["Dining rooms", "Hotel lobbies", "Luxury showrooms"],
  },
  {
    slug: "ivory-gold-leaf-canopy",
    name: "Ivory & Gold Leaf Canopy",
    category: "art-glass",
    description: "Sculpted ivory and gold glass leaves floating beneath a mirrored ceiling.",
    details:
      "Large sculpted leaves in matte ivory and polished gold glass drift beneath a mirrored ceiling, as if caught on a breeze. The mix of soft ivory and reflective gold gives the canopy a calm, organic feel that suits both modern and classic interiors.",
    idealFor: ["Living rooms", "Restaurants", "Hotel lounges"],
  },
  {
    slug: "silver-swirl-column",
    name: "Silver Swirl Column Wrap",
    category: "art-glass",
    description: "Silver-blue glass ribbons that swirl around a feature column.",
    details:
      "Ribbons of silver-blue glass spiral up and around a feature column, turning a structural element into a sculpture. Hidden lighting traces the swirl, so the column becomes a glowing landmark in lobbies and reception areas.",
    idealFor: ["Feature columns", "Reception areas", "Mall atriums"],
  },
  {
    slug: "teal-wave-glass",
    name: "Teal Wave Glass Installation",
    category: "art-glass",
    description: "Clear and teal glass waves suspended on fine wires in a sweeping arc.",
    details:
      "Clear and teal glass pieces shaped like breaking waves are hung on near-invisible wires in a sweeping arc. The installation brings a fresh, coastal calm to a space and can be shaped to follow a curved ceiling or wall.",
    idealFor: ["Spas", "Resort lobbies", "Waterfront homes"],
  },
  {
    slug: "golden-shard-chandelier",
    name: "Golden Shard Chandelier",
    category: "art-glass",
    description: "Angular gold and textured-glass shards arranged in a dramatic hanging cone.",
    details:
      "Angular shards of gold and textured clear glass are layered into a dramatic inverted cone. Against a dark ceiling the shards catch and bounce light like facets of a gemstone, making a bold statement over a dining table or bar.",
    idealFor: ["Dining tables", "Bars and lounges", "Statement foyers"],
  },
  {
    slug: "icicle-crown-chandelier",
    name: "Icicle Crown Chandelier",
    category: "art-glass",
    description: "A long crown of clear and amber glass icicles for banquet and lobby ceilings.",
    details:
      "Clear and amber glass icicles hang in a long, crown-like band that can stretch across a banquet hall or wrap a circular ceiling dome. It brings sparkle and warmth to large ceilings and can be made in a straight run or a ring.",
    idealFor: ["Banquet halls", "Ceiling domes", "Hotel lobbies"],
  },
  {
    slug: "gold-phoenix-chandelier",
    name: "Gold Phoenix Chandelier",
    category: "art-glass",
    description: "Flowing clear glass feathers tipped in gold, gathered into a phoenix-like form.",
    details:
      "Flowing clear glass feathers tipped in gold are gathered into a rising, phoenix-like form. Lit from above against a dark ceiling, the gold tips flicker like flame, giving the piece a sense of movement and celebration.",
    idealFor: ["Grand entrances", "Wedding and event venues", "Luxury residences"],
  },
  {
    slug: "rose-blossom-drift",
    name: "Rose Blossom Ceiling Drift",
    category: "art-glass",
    description: "Rose-tinted glass blossoms drifting across a living-room ceiling.",
    details:
      "Rose-tinted glass blossoms are hung in a soft, drifting band across the ceiling, like petals carried on the wind. It adds colour and romance to a room without overwhelming it, and the band can be shaped to suit the room's layout.",
    idealFor: ["Living rooms", "Bedrooms", "Bridal studios"],
  },
  {
    slug: "silk-ribbon-sculpture",
    name: "Silk Ribbon Sculpture",
    category: "art-glass",
    description: "Soft peach ribbon forms that twist through tall, light-filled spaces.",
    details:
      "Large, soft ribbon forms in peach and ivory twist and loop through a tall space like fabric caught mid-air. Seen from different floors the ribbons change shape, which makes the sculpture ideal for multi-level atriums and cafés.",
    idealFor: ["Multi-level atriums", "Cafés", "Retail spaces"],
  },
  {
    slug: "halo-ribbon-led",
    name: "Halo Ribbon LED Light",
    category: "art-glass",
    description: "A glowing LED ribbon that loops freely beneath timber ceilings.",
    details:
      "A continuous ribbon with an integrated LED edge loops freely through the air, drawing a line of warm light beneath the ceiling. It gives general light as well as drama, and is especially striking under timber or exposed ceilings.",
    idealFor: ["Timber ceilings", "Restaurants", "Clubhouses"],
  },
  {
    slug: "cloud-ribbon-chandelier",
    name: "Cloud Ribbon Chandelier",
    category: "art-glass",
    description: "Layered translucent ribbons forming a floating cloud over dining areas.",
    details:
      "Layers of translucent ribbon are folded into a soft, floating cloud with light glowing from within. It diffuses light evenly over a dining or lounge area and softens large, open rooms.",
    idealFor: ["Dining areas", "Open-plan lounges", "Hotel restaurants"],
  },
  {
    slug: "golden-koi-swirl",
    name: "Golden Koi Swirl",
    category: "art-glass",
    description: "Clear and golden glass koi swimming in a crescent above a lounge.",
    details:
      "Clear and golden glass koi swim in a sweeping crescent overhead. Koi are a symbol of prosperity and good fortune, which makes this piece a meaningful choice for homes, offices and restaurants alike.",
    idealFor: ["Lounges", "Office receptions", "Asian-inspired restaurants"],
  },
  {
    slug: "swan-flight-installation",
    name: "Swan Flight Installation",
    category: "art-glass",
    description: "White glass swans in flight, suspended on fibre-optic strands.",
    details:
      "White and clear glass swans in mid-flight are suspended among glowing fibre-optic strands, creating a graceful, dreamlike scene. Against a dark ceiling the strands look like falling light, making it a favourite for wedding venues and grand halls.",
    idealFor: ["Wedding venues", "Grand halls", "Hotel ballrooms"],
  },

  // ---------------------------------------------------------------- Sky lights
  {
    slug: "grid-panel-sky-light",
    name: "Grid Panel Sky Light",
    category: "sky-lights",
    description: "A grid of blue-sky panels that brings daylight into showrooms and garages.",
    details:
      "A grid of artificial skylight panels shows a realistic blue sky, bringing the feeling of daylight into spaces with no windows. It is ideal for car showrooms, basements and garages, where it makes the space feel open and premium.",
    idealFor: ["Car showrooms", "Basements", "Garages"],
  },
  {
    slug: "atrium-sky-light",
    name: "Atrium Sky Light",
    category: "sky-lights",
    description: "A slim skylight strip above an indoor garden and floating staircase.",
    details:
      "A slim artificial skylight strip that sits above an indoor garden or staircase, giving plants and people the look of natural light from above. It makes internal courtyards and stair halls feel like they open to the sky.",
    idealFor: ["Indoor gardens", "Stair halls", "Internal courtyards"],
  },
  {
    slug: "lounge-sky-ceiling",
    name: "Lounge Sky Ceiling",
    category: "sky-lights",
    description: "A recessed sky panel that opens up lounges and terraces.",
    details:
      "A large recessed sky panel set into the ceiling gives lounges and covered terraces the feel of open air. It keeps the room bright and relaxed throughout the day, whatever the weather outside.",
    idealFor: ["Lounges", "Covered terraces", "Home theatres"],
  },
  {
    slug: "retail-sky-panels",
    name: "Retail Sky Panels",
    category: "sky-lights",
    description: "Evenly spaced sky panels that keep retail floors bright and natural.",
    details:
      "Evenly spaced sky panels across a retail ceiling give even, natural-looking light, so products show in their true colours. Shoppers feel as though they are in daylight, which makes the store more inviting.",
    idealFor: ["Retail stores", "Showrooms", "Supermarkets"],
  },
  {
    slug: "concourse-sky-light",
    name: "Concourse Sky Light",
    category: "sky-lights",
    description: "Linear sky lighting for concourses, corridors and public halls.",
    details:
      "Long, linear sky lighting runs along concourses and public halls, guiding people through the space with a bright, open feel. It is designed for large public areas such as metro stations, malls and airports.",
    idealFor: ["Metro and transit halls", "Malls", "Public buildings"],
  },
  {
    slug: "corridor-sky-light",
    name: "Corridor Sky Light",
    category: "sky-lights",
    description: "A continuous sky strip for clinics, offices and long corridors.",
    details:
      "A continuous sky strip along a corridor ceiling turns a narrow, enclosed passage into a calm, bright space. It is particularly popular in hospitals and clinics, where a view of the sky helps patients and staff feel at ease.",
    idealFor: ["Hospitals and clinics", "Office corridors", "Schools"],
  },

  // ---------------------------------------------------------------- Cement block lighting
  {
    slug: "heritage-temple-block",
    name: "Heritage Temple Block Light",
    category: "cement-block",
    description: "A classical temple facade carved in cement and lit from within.",
    details:
      "A classical temple facade with columns and a pediment is sculpted in cement and lit from within, so warm light glows through its doorways and windows. It works as a wall feature or a standalone display piece with a strong sense of heritage.",
    idealFor: ["Entrance walls", "Pooja rooms", "Heritage hotels"],
  },
  {
    slug: "buddha-grotto-block",
    name: "Buddha Grotto Block Light",
    category: "cement-block",
    description: "A serene Buddha relief glowing inside a carved cement grotto.",
    details:
      "A serene seated Buddha is carved in relief inside a rough-hewn cement grotto, with soft light glowing from within the cave. It brings calm and focus to meditation corners, spas and living rooms.",
    idealFor: ["Meditation corners", "Spas and wellness centres", "Living rooms"],
  },
  {
    slug: "pagoda-relief-block",
    name: "Pagoda Relief Block Light",
    category: "cement-block",
    description: "A detailed pagoda relief with warm light glowing through its windows.",
    details:
      "A detailed multi-tier pagoda is carved in relief into a cement block, with warm light glowing through each window and tier. It makes a striking wall feature for restaurants, lounges and Asian-inspired interiors.",
    idealFor: ["Restaurants", "Feature walls", "Asian-inspired interiors"],
  },
  {
    slug: "arched-niche-block",
    name: "Arched Niche Wall Light",
    category: "cement-block",
    description: "Layered cement arches and steps that cast soft light across a wall.",
    details:
      "Layered cement arches and steps are set into a wall niche, with hidden light washing softly across the forms. It adds depth and a gentle architectural glow to bedrooms, lounges and hallways.",
    idealFor: ["Bedrooms", "Hallways", "Reading corners"],
  },

  // ---------------------------------------------------------------- Garden lights
  {
    slug: "mushroom-garden-lights",
    name: "Mushroom Garden Lights",
    category: "garden",
    description: "Glowing white mushroom lights in mixed heights for lawns and beds.",
    details:
      "White mushroom-shaped lights in mixed heights glow softly among grass and ground cover, creating a magical, fairy-tale garden after dark. Group them in clusters along lawns, beds and around stones.",
    idealFor: ["Lawns", "Flower beds", "Resort gardens"],
  },
  {
    slug: "bronze-mushroom-path",
    name: "Bronze Mushroom Path Light",
    category: "garden",
    description: "Dark bronze mushroom-cap path lights for planted borders.",
    details:
      "Dark bronze path lights with mushroom-shaped caps cast a soft pool of light downward onto plants and pathways. Their slim stems and dark finish blend into planting by day and light the way at night.",
    idealFor: ["Pathways", "Planted borders", "Courtyards"],
  },
  {
    slug: "tall-mushroom-stakes",
    name: "Tall Mushroom Stake Lights",
    category: "garden",
    description: "Slender, tall mushroom stake lights that rise above ground cover.",
    details:
      "Slender, tall mushroom stake lights rise above ground cover and low shrubs at different heights. They add vertical interest and a playful glow to gardens, rockeries and lawn edges.",
    idealFor: ["Rock gardens", "Lawn edges", "Landscaped beds"],
  },
  {
    slug: "moon-sculpture-light",
    name: "Moon Sculpture Garden Light",
    category: "garden",
    description: "A large glowing moon sphere with a silhouetted scene, for feature gardens.",
    details:
      "A large glowing moon sphere with a silhouetted scene, such as a deer under a tree, set among planting and rocks. It becomes the focal point of a garden at night and makes a memorable setting for photos.",
    idealFor: ["Feature gardens", "Resorts", "Restaurant courtyards"],
  },
  {
    slug: "glowing-moon-spheres",
    name: "Glowing Moon Spheres",
    category: "garden",
    description: "Moon-textured light spheres scattered across patios and lawns.",
    details:
      "Moon-textured spheres in different sizes glow softly when placed across patios, lawns and pebble beds. They give outdoor seating areas a warm, relaxed atmosphere and can be grouped or spread out.",
    idealFor: ["Patios", "Outdoor seating", "Pebble beds"],
  },
  {
    slug: "pebble-stone-lights",
    name: "Pebble Stone Lights",
    category: "garden",
    description: "Soft marble-effect pebble lights that glow among flower beds.",
    details:
      "Smooth, marble-effect pebble lights sit naturally among mulch, gravel and flower beds and glow gently from within. They look like stones by day, so they blend into the landscape until night falls.",
    idealFor: ["Flower beds", "Gravel gardens", "Garden borders"],
  },
  {
    slug: "linear-bollard-lights",
    name: "Linear Bollard Lights",
    category: "garden",
    description: "Minimal vertical light bars for modern garden paths.",
    details:
      "Minimal vertical light bars of varying heights line paths and planting with clean, modern lines of light. They suit contemporary homes and commercial landscapes where a crisp, architectural look is wanted.",
    idealFor: ["Modern pathways", "Driveways", "Commercial landscapes"],
  },
  {
    slug: "disc-top-bollards",
    name: "Disc-Top Bollards",
    category: "garden",
    description: "Slim bollards with disc tops for planters, terraces and railings.",
    details:
      "Slim bollards topped with a flat disc cast a soft downward glow onto planters, decking and terrace edges. Their low profile keeps views open while lighting the way safely.",
    idealFor: ["Terraces", "Planters", "Rooftop gardens"],
  },
  {
    slug: "cage-lantern-sphere",
    name: "Cage Lantern Sphere",
    category: "garden",
    description: "A glowing sphere inside a dark metal cage, for decks and seating areas.",
    details:
      "A warm glowing sphere sits inside a dark metal cage frame, combining a modern lantern look with soft, inviting light. Place them on decks, beside seating or at entrances; they also work as side tables.",
    idealFor: ["Decks", "Outdoor seating", "Entrances"],
  },
  {
    slug: "daisy-flower-stakes",
    name: "Daisy Flower Stake Lights",
    category: "garden",
    description: "Daisy-shaped stake lights that bloom along borders at night.",
    details:
      "Daisy-shaped stake lights with glowing white petals 'bloom' along borders and among shrubs after dark. They add a cheerful, decorative touch to home gardens, cafés and kids' play areas.",
    idealFor: ["Garden borders", "Cafés", "Play areas"],
  },
  {
    slug: "dandelion-fiber-lights",
    name: "Dandelion Fibre Lights",
    category: "garden",
    description: "Delicate fibre-optic dandelions that sparkle along walkways.",
    details:
      "Delicate fibre-optic dandelion heads sparkle on slender stems, looking like seed heads caught in light. Lining walkways or planted among flowers, they create a soft, enchanting effect at night.",
    idealFor: ["Walkways", "Wedding lawns", "Flower gardens"],
  },
];

// BASE_URL is "/" normally and "/<repo>/" on GitHub Pages
export const catalogueImage = (slug: string) => `${import.meta.env.BASE_URL}catalogue/${slug}.jpg`;

// Lets any "Enquire" button pre-fill the enquiry form with a product.
export const ENQUIRE_EVENT = "ls:enquire";
export type EnquireDetail = { product: string; interest: string };
export function requestEnquiry(detail: EnquireDetail) {
  window.dispatchEvent(new CustomEvent<EnquireDetail>(ENQUIRE_EVENT, { detail }));
  document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth", block: "start" });
}
