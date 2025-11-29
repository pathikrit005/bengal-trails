// src/data/locations.ts
export interface Location {
  id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  bestTime: string;
  howToReach: string;
  coordinates?: { lat: number; lng: number };
  image?: string[]; // we store array of candidate URLs
}

function getLocationImagePath(id: string, category?: string) {
  const candidates: string[] = [];
  const safeId = id;
  if (category) {
    const folder = category.toLowerCase().replace(/[^a-z0-9\-]+/g, "-");
    candidates.push(`/image/locations/${folder}/${safeId}.jpg`);
    candidates.push(`/image/locations/${folder}/${safeId}.png`);
  }
  // fallback to top-level locations images
  candidates.push(`/image/locations/${safeId}.jpg`);
  candidates.push(`/image/locations/${safeId}.png`);
  return candidates;
}

export const locations: Location[] = [
  // Kolkata & Nearby
  {
    id: "kolkata-howrah-bridge",
    name: "Kolkata (Howrah Bridge)",
    category: "Kolkata & Nearby",
    description:
      "The Howrah Bridge is an iconic cantilever bridge over the Hooghly River, connecting Kolkata with Howrah. Built in 1943, it is one of the busiest cantilever bridges in the world and a symbol of Kolkata.",
    highlights: [
      "Iconic cantilever bridge structure",
      "Beautiful night illumination",
      "Historic significance dating back to 1943",
      "Best viewed from Princep Ghat or Mullick Ghat Flower Market",
    ],
    bestTime: "October to March",
    howToReach:
      "Located in central Kolkata, easily accessible by metro, bus, or taxi. Nearest metro station is Howrah.",
    image: getLocationImagePath("kolkata-howrah-bridge"),
  },
  {
    id: "victoria-memorial",
    name: "Victoria Memorial",
    category: "Kolkata & Nearby",
    description:
      "A magnificent white marble building dedicated to Queen Victoria, the Victoria Memorial is now a museum housing rare collections of paintings, sculptures, and artifacts from the British era.",
    highlights: [
      "Stunning Indo-Saracenic architecture",
      "Museum with extensive British-era collections",
      "Beautiful gardens perfect for evening walks",
      "Sound and light show in the evenings",
    ],
    bestTime: "October to March",
    howToReach:
      "Located on Queens Way. Nearest metro station is Maidan. Accessible by taxi, bus, or metro.",
    image: getLocationImagePath("victoria-memorial"),
  },
  {
    id: "prinsep-ghat",
    name: "Prinsep Ghat",
    category: "Kolkata & Nearby",
    description:
      "A riverside promenade on the Hooghly River, Prinsep Ghat features Gothic and Greek architecture. It is a popular spot for boat rides and offers stunning views of the Vidyasagar Setu bridge.",
    highlights: [
      "Beautiful riverside location",
      "Gothic-style Palladian porch",
      "Boat rides on the Hooghly River",
      "Stunning sunset views",
      "Popular photography spot",
    ],
    bestTime: "October to March, especially during sunset",
    howToReach:
      "Located near Esplanade. Accessible by metro (Esplanade station), taxi, or bus.",
    image: getLocationImagePath("prinsep-ghat"),
  },
  {
    id: "kalighat-temple",
    name: "Kalighat Temple",
    category: "Kolkata & Nearby",
    description:
      "One of the 51 Shakti Peethas, Kalighat Temple is dedicated to Goddess Kali and is one of the most sacred pilgrimage sites in India. The temple has been a center of worship for centuries.",
    highlights: [
      "Ancient Shakti Peetha",
      "Rich spiritual significance",
      "Traditional Bengali temple architecture",
      "Daily rituals and pujas",
      "Nearby Kalighat paintings (traditional art form)",
    ],
    bestTime: "Year-round, early morning or evening for less crowds",
    howToReach:
      "Located in South Kolkata. Nearest metro station is Kalighat. Well connected by bus and taxi.",
    image: getLocationImagePath("kalighat-temple"),
  },
  {
    id: "belur-math",
    name: "Belur Math",
    category: "Kolkata & Nearby",
    description:
      "The headquarters of the Ramakrishna Math and Mission, Belur Math is a spiritual and cultural center founded by Swami Vivekananda. The architecture beautifully blends Hindu, Christian, and Islamic styles.",
    highlights: [
      "Headquarters of Ramakrishna Mission",
      "Unique architectural fusion of different religions",
      "Peaceful and serene atmosphere",
      "Museum dedicated to Sri Ramakrishna and Swami Vivekananda",
      "Evening aarti ceremony",
    ],
    bestTime: "October to March",
    howToReach:
      "Located in Howrah district. Accessible by ferry from Dakshineswar or by road via taxi or bus.",
    image: getLocationImagePath("belur-math"),
  },
  {
    id: "dakshineswar-kali-temple",
    name: "Dakshineswar Kali Temple",
    category: "Kolkata & Nearby",
    description:
      "A famous Hindu temple dedicated to Goddess Kali, Dakshineswar Temple was built in 1855 and is associated with the saint Sri Ramakrishna Paramahamsa who served as its priest.",
    highlights: [
      "Sacred temple associated with Sri Ramakrishna",
      "Beautiful temple complex by the Hooghly River",
      "Nine-spired temple architecture",
      "Peaceful riverside setting",
      "Daily aarti and worship ceremonies",
    ],
    bestTime: "October to March",
    howToReach:
      "Located in North Kolkata. Nearest metro station is Dakshineswar. Also accessible by taxi and bus.",
    image: getLocationImagePath("dakshineswar-kali-temple"),
  },
  {
    id: "indian-museum",
    name: "Indian Museum",
    category: "Kolkata & Nearby",
    description:
      "Established in 1814, the Indian Museum is the oldest and largest museum in India. It houses rare collections of antiques, armor, ornaments, fossils, skeletons, mummies, and Mughal paintings.",
    highlights: [
      "Oldest museum in India (established 1814)",
      "Extensive collection of artifacts and antiquities",
      "Egyptian mummies and fossils",
      "Art and archaeology galleries",
      "Natural history section",
    ],
    bestTime: "Year-round",
    howToReach:
      "Located on Jawaharlal Nehru Road. Nearest metro station is Park Street or Esplanade. Easily accessible by taxi or bus.",
    image: getLocationImagePath("indian-museum"),
  },
  {
    id: "science-city",
    name: "Science City",
    category: "Kolkata & Nearby",
    description:
      "Science City Kolkata is the largest science center in the Indian subcontinent. It features interactive exhibits, a space theater, evolution park, and various science galleries perfect for families and students.",
    highlights: [
      "Largest science center in India",
      "Interactive science exhibits",
      "Space Odyssey 3D theater",
      "Evolution Park and Butterfly Garden",
      "Time Machine and Dynamotion Hall",
      "Maritime Centre and Energy Park",
    ],
    bestTime: "Year-round, weekdays for less crowds",
    howToReach:
      "Located in East Kolkata Township. Accessible by metro (Gitanjali/Kavi Nazrul stations) or taxi.",
    image: getLocationImagePath("science-city"),
  },
  {
    id: "eco-park",
    name: "Eco Park (New Town)",
    category: "Kolkata & Nearby",
    description:
      "Eco Park is a massive urban park in New Town, Kolkata, spread over 480 acres. It features themed gardens, water bodies, bamboo gardens, and recreational facilities, making it a perfect weekend destination.",
    highlights: [
      "One of the largest urban parks in India",
      "Themed gardens and landscapes",
      "Boating facilities and water bodies",
      "Bamboo garden and medicinal garden",
      "Cycling tracks and walking paths",
      "Musical fountain and amphitheater",
    ],
    bestTime: "October to March",
    howToReach:
      "Located in New Town, Kolkata. Accessible by metro (Biswa Bangla Gate station) or taxi.",
    image: getLocationImagePath("eco-park"),
  },

  // Culture & Heritage
  {
    id: "shantiniketan",
    name: "Shantiniketan (Birbhum)",
    category: "Culture & Heritage",
    description:
      "Founded by Maharshi Debendranath Tagore and later expanded by Nobel laureate Rabindranath Tagore, Shantiniketan is a cultural and educational hub known for Visva-Bharati University and its artistic heritage.",
    highlights: [
      "Home to Visva-Bharati University",
      "Rich artistic and cultural traditions",
      "Kala Bhavana (art school)",
      "Tagore's Ashram and residence",
      "Sonajhuri forest and mud houses",
      "Baul music and local handicrafts",
    ],
    bestTime: "October to March, especially during Basant Utsav (spring festival)",
    howToReach:
      "Located 160 km from Kolkata. Accessible by train from Howrah Station (Shantiniketan Express) or by road (3-4 hours drive).",
    image: getLocationImagePath("shantiniketan"),
  },
  {
    id: "hazarduari-palace",
    name: "Hazarduari Palace (Murshidabad)",
    category: "Culture & Heritage",
    description:
      'The "Palace of Thousand Doors" was built in 1837 during the reign of Nawab Nazim Humayun Jah. Now a museum, it showcases a rich collection of artifacts, paintings, arms, and antiques from the Nawabi era.',
    highlights: [
      "1000 doors (100 real, 900 false)",
      "Grand Durbar Hall and Royal Gallery",
      "Collection of Nawabi-era artifacts",
      "Arms and armor gallery",
      "European and Indian paintings",
      "Library with rare manuscripts",
    ],
    bestTime: "October to March",
    howToReach:
      "Located in Murshidabad, 220 km from Kolkata. Accessible by train to Berhampore Court station or by road (5-6 hours).",
    image: getLocationImagePath("hazarduari-palace"),
  },
  {
    id: "bishnupur-temples",
    name: "Bishnupur Terracotta Temples (Bankura)",
    category: "Culture & Heritage",
    description:
      "Famous for its exquisite terracotta temples built by the Malla dynasty between the 17th and 18th centuries, Bishnupur is a treasure trove of Bengali temple architecture and craftsmanship.",
    highlights: [
      "Unique terracotta temple architecture",
      "Rasmancha, Jor Bangla, and Madanmohan temples",
      "Intricate terracotta carvings depicting epics",
      "Bishnupur Baluchari sarees",
      "Traditional Bishnupur gharana music",
      "Ancient cannon (Dalmadal)",
    ],
    bestTime: "October to March",
    howToReach:
      "Located 150 km from Kolkata. Accessible by train from Howrah to Bishnupur station or by road (4 hours).",
    image: getLocationImagePath("bishnupur-temples"),
  },
  {
    id: "tarapith-temple",
    name: "Tarapith Temple (Birbhum)",
    category: "Culture & Heritage",
    description:
      "One of the most important Shakti Peethas in India, Tarapith is dedicated to Goddess Tara. The temple is also famous for its association with the Tantric saint Bamakhepa (the 'mad saint').",
    highlights: [
      "Sacred Shakti Peetha",
      "Temple of Goddess Tara",
      "Cremation ground (shamshan) for Tantric rituals",
      "Bamakhepa's samadhi and ashram",
      "Unique spiritual atmosphere",
      "Annual Tara Puja festival",
    ],
    bestTime: "Year-round, though October to March is most comfortable",
    howToReach:
      "Located in Birbhum district, 265 km from Kolkata. Accessible by train to Rampurhat station followed by taxi, or by road (6 hours).",
    image: getLocationImagePath("tarapith-temple"),
  },
  {
    id: "mayapur-iskcon",
    name: "Mayapur ISKCON (Nadia)",
    category: "Culture & Heritage",
    description:
      "The birthplace of Chaitanya Mahaprabhu, Mayapur is the spiritual headquarters of ISKCON (International Society for Krishna Consciousness). The temple complex is a major pilgrimage site for Vaishnavites worldwide.",
    highlights: [
      "Birthplace of Chaitanya Mahaprabhu",
      "ISKCON headquarters and temple complex",
      "Magnificent architecture and gardens",
      "Daily aarti and bhajan sessions",
      "Vegetarian food prasadam",
      "Spiritual courses and programs",
    ],
    bestTime: "October to March, especially during Gaura Purnima festival",
    howToReach:
      "Located 130 km from Kolkata. Accessible by train to Nabadwip station or by road (3 hours).",
    image: getLocationImagePath("mayapur-iskcon"),
  },
  {
    id: "cooch-behar-rajbari",
    name: "Cooch Behar Rajbari",
    category: "Culture & Heritage",
    description:
      "The Cooch Behar Palace is a landmark building modeled after Buckingham Palace in London. Built in 1887, it showcases classical Western architecture with Italian influence and served as the residence of the Maharajas.",
    highlights: [
      "Architectural marvel inspired by Buckingham Palace",
      "Classical European style with 123 rooms",
      "Museum displaying royal artifacts",
      "Durbar Hall and libraries",
      "Beautiful grounds and gardens",
      "Historic significance of the Koch dynasty",
    ],
    bestTime: "October to March",
    howToReach:
      "Located in Cooch Behar, 700 km from Kolkata. Accessible by train to Cooch Behar station or by flight to Bagdogra followed by road (3 hours).",
    image: getLocationImagePath("cooch-behar-rajbari"),
  },

  // Hills & Adventure
  {
    id: "darjeeling",
    name: "Darjeeling (Kanchenjunga View, Tiger Hill)",
    category: "Hills & Adventure",
    description:
      'The "Queen of the Hills," Darjeeling is famous for its tea plantations, stunning views of Mount Kanchenjunga, the Darjeeling Himalayan Railway (Toy Train), and vibrant Tibetan culture.',
    highlights: [
      "Spectacular views of Kanchenjunga",
      "Sunrise at Tiger Hill",
      "UNESCO Heritage Toy Train",
      "World-famous Darjeeling tea gardens",
      "Batasia Loop and War Memorial",
      "Peace Pagoda and monasteries",
      "Himalayan Mountaineering Institute",
    ],
    bestTime: "March to May and October to December",
    howToReach:
      "Located 700 km from Kolkata. Fly to Bagdogra Airport then taxi (3 hours) or take train to New Jalpaiguri followed by taxi.",
    image: getLocationImagePath("darjeeling"),
  },
  {
    id: "teesta-rafting",
    name: "Teesta River Rafting (Kalimpong)",
    category: "Hills & Adventure",
    description:
      "Experience thrilling white-water rafting on the Teesta River, one of the fastest-flowing rivers in India. The river offers rapids ranging from Grade I to Grade IV, suitable for both beginners and experts.",
    highlights: [
      "White-water rafting adventure",
      "Rapids from Grade I to Grade IV",
      "Scenic mountain landscapes",
      "Professional rafting guides",
      "Multiple rafting routes available",
      "Photography opportunities",
    ],
    bestTime: "October to May",
    howToReach:
      "Located near Kalimpong and Darjeeling. Accessible from Siliguri/NJP by taxi. Rafting points at Triveni and Melli.",
    image: getLocationImagePath("teesta-rafting"),
  },
  {
    id: "ajodhya-hills",
    name: "Ajodhya Hills (Purulia)",
    category: "Hills & Adventure",
    description:
      "Part of the Dalma Hills, Ajodhya Hills is known for its scenic beauty, waterfalls, and rocky terrain. It is a popular destination for trekking, rock climbing, and nature walks.",
    highlights: [
      "Scenic hill station in Purulia",
      "Trekking and rock climbing opportunities",
      "Turga Falls and other waterfalls",
      "Bamboo cottages and eco-tourism",
      "Sunrise and sunset viewpoints",
      "Rich biodiversity and birdwatching",
    ],
    bestTime: "October to March",
    howToReach:
      "Located 350 km from Kolkata. Accessible by train to Purulia followed by taxi (35 km) or by road (7 hours from Kolkata).",
    image: getLocationImagePath("ajodhya-hills"),
  },
  {
    id: "maithon-dam",
    name: "Maithon Dam (Bardhaman/Jharkhand border)",
    category: "Hills & Adventure",
    description:
      "Built on the Barakar River, Maithon Dam is one of the first multipurpose river valley projects in India. The reservoir offers boating, water sports, and scenic views of surrounding hills.",
    highlights: [
      "Massive earthfill dam structure",
      "Beautiful reservoir and lake",
      "Boating and water sports",
      "Underground power station",
      "Scenic picnic spots",
      "Surrounding gardens and parks",
    ],
    bestTime: "October to March",
    howToReach:
      "Located 240 km from Kolkata near Asansol. Accessible by train to Asansol followed by taxi (50 km) or by road (5 hours).",
    image: getLocationImagePath("maithon-dam"),
  },

  // Beaches & Islands
  {
    id: "digha-beach",
    name: "Digha Beach",
    category: "Beaches & Islands",
    description:
      "One of the most popular beach destinations in West Bengal, Digha offers a long sandy beach, calm waters, and a variety of seaside attractions. It is perfect for a family weekend getaway.",
    highlights: [
      "Long sandy beach with gentle waves",
      "Marine Aquarium and Research Centre",
      "Amarabati Park and Science Centre",
      "New Digha Beach and Old Digha Beach",
      "Local seafood delicacies",
      "Sunset and sunrise views",
    ],
    bestTime: "October to March",
    howToReach:
      "Located 185 km from Kolkata. Accessible by train to Digha station or by road (4 hours). Buses and taxis available from Kolkata.",
    image: getLocationImagePath("digha-beach"),
  },
  {
    id: "mandarmani",
    name: "Mandarmani",
    category: "Beaches & Islands",
    description:
      "Known for its pristine beach and drivable shoreline, Mandarmani is the longest drivable beach in India. It offers a peaceful retreat with water sports, beach activities, and fresh seafood.",
    highlights: [
      "Longest drivable beach in India",
      "Pristine and less crowded beach",
      "Water sports and beach activities",
      "ATV rides and horse riding",
      "Fresh seafood restaurants",
      "Peaceful and scenic atmosphere",
    ],
    bestTime: "October to March",
    howToReach:
      "Located 180 km from Kolkata. Accessible by road via NH116 (3.5 hours drive). Private taxis and buses available from Kolkata.",
    image: getLocationImagePath("mandarmani"),
  },
  {
    id: "mousuni-island",
    name: "Mousuni Island",
    category: "Beaches & Islands",
    description:
      "A small island in the Sundarbans delta region, Mousuni Island offers an offbeat beach experience with serene landscapes, fishing villages, and a glimpse of rural coastal life.",
    highlights: [
      "Offbeat island destination",
      "Quiet and serene beaches",
      "Traditional fishing villages",
      "Mangrove forests nearby",
      "Boat rides and birdwatching",
      "Authentic rural coastal experience",
    ],
    bestTime: "October to March",
    howToReach:
      "Located 135 km from Kolkata. Accessible by road to Namkhana (3 hours) followed by a short boat ride to the island.",
    image: getLocationImagePath("mousuni-island"),
  },

  // Wildlife & Nature
  {
    id: "sundarbans",
    name: "Sundarbans National Park",
    category: "Wildlife & Nature",
    description:
      "A UNESCO World Heritage Site, the Sundarbans is the largest mangrove forest in the world and home to the famous Royal Bengal Tiger. It features unique biodiversity and stunning natural beauty.",
    highlights: [
      "UNESCO World Heritage Site",
      "Home to Royal Bengal Tigers",
      "Largest mangrove forest in the world",
      "Boat safaris through river channels",
      "Rich biodiversity - crocodiles, spotted deer, birds",
      "Watchtowers for wildlife spotting",
      "Unique ecosystem and natural beauty",
    ],
    bestTime: "November to February",
    howToReach:
      "Located 110 km from Kolkata. Accessible by road to Godkhali (3 hours) followed by boat. Organized tours available from Kolkata.",
    image: getLocationImagePath("sundarbans"),
  },
  {
    id: "jaldapara",
    name: "Jaldapara National Park (Alipurduar)",
    category: "Wildlife & Nature",
    description:
      "Famous for its population of Indian one-horned rhinoceros, Jaldapara National Park is situated at the foothills of the Eastern Himalayas. It offers elephant safaris and rich wildlife viewing opportunities.",
    highlights: [
      "Indian one-horned rhinoceros habitat",
      "Elephant safaris through grasslands",
      "Rich wildlife - elephants, leopards, deer, bison",
      "Over 240 species of birds",
      "Torsa River flowing through the park",
      "Watchtowers for panoramic views",
      "Dense forests and grasslands",
    ],
    bestTime: "November to April",
    howToReach:
      "Located 650 km from Kolkata. Accessible by train to Madarihat station or flight to Bagdogra followed by taxi (4 hours).",
    image: getLocationImagePath("jaldapara"),
  },

  // Gateway
  {
    id: "siliguri-gateway",
    name: "Gateway to Northeast India (Siliguri/Assam entry point)",
    category: "Gateway",
    description:
      "Siliguri serves as the gateway to Northeast India, Bhutan, Nepal, and Bangladesh. It is a major commercial and transport hub connecting the region and offers access to numerous hill stations and wildlife sanctuaries.",
    highlights: [
      "Strategic location connecting multiple countries",
      "Gateway to Darjeeling, Sikkim, and Northeast India",
      "ISKCON Temple Siliguri",
      "Hong Kong Market for shopping",
      "Mahananda Wildlife Sanctuary nearby",
      "Tea gardens and scenic landscapes",
      "Base for exploring North Bengal",
    ],
    bestTime: "October to March",
    howToReach:
      "Located 580 km from Kolkata. Accessible by train to New Jalpaiguri (NJP) station, flight to Bagdogra Airport, or by road (NH12).",
    image: getLocationImagePath("siliguri-gateway"),
  },
];
