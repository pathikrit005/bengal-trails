// src/data/festivals.ts
export interface Festival {
  id: string;
  name: string;
  place: string;
  tagline: string;
  description: string;
  whenCelebrated: string;
  highlights: string[];
  culturalSignificance: string;
  image?: string;
}

// helper for festival images (single path)
function getFestivalImagePath(id: string) {
  return `/image/festivals/${id}.jpg`;
}

export const festivals: Festival[] = [
  {
    id: "durga-puja-kolkata",
    name: "Durga Puja",
    place: "Kolkata",
    tagline: "UNESCO Heritage: The Grandest Art Festival of the World.",
    description:
      "Durga Puja is the biggest festival of West Bengal, celebrating the victory of Goddess Durga over the demon Mahishasura. In 2021, Kolkata's Durga Puja was inscribed as a UNESCO Intangible Cultural Heritage. The city transforms into an open-air art gallery with thousands of pandals showcasing creative themes and magnificent idols.",
    whenCelebrated: "September-October (during Navaratri)",
    highlights: [
      "UNESCO Intangible Cultural Heritage",
      "Over 3000 community pandals across Kolkata",
      "Innovative themes and artistic installations",
      "Grand idol processions on Vijayadashami",
      "Street food and cultural programs",
      "Pandal hopping tradition",
      "Dhunuchi dance and dhak beats",
    ],
    culturalSignificance:
      "Durga Puja is not just a religious festival but a celebration of Bengali culture, art, and community spirit. It brings together people from all walks of life and showcases the creativity and artistic excellence of Bengal.",
    image: getFestivalImagePath("durga-puja-kolkata"),
  },
  {
    id: "durga-puja-sovabazar",
    name: "Durga Puja",
    place: "Sovabazar Rajbari, Kolkata",
    tagline: "A 250-Year Legacy: Where Tradition Meets Royalty.",
    description:
      "The Sovabazar Rajbari Durga Puja is one of the oldest and most traditional Durga Pujas in Kolkata, dating back to 1757. Celebrated in the ancestral palace of the Sovabazar royal family, it maintains age-old traditions and rituals that have been preserved for over 250 years.",
    whenCelebrated: "September-October (during Navaratri)",
    highlights: [
      "250+ years of unbroken tradition",
      "Traditional rituals and customs",
      "Royal family's ancestral palace setting",
      "Ancient idol-making techniques",
      "Classical cultural programs",
      "Traditional Bengali cuisine prasad",
      "Historic architecture and heritage",
    ],
    culturalSignificance:
      "This puja represents the aristocratic Bengali tradition and serves as a living museum of how Durga Puja was celebrated in royal households. It maintains rituals that have been passed down through generations.",
    image: getFestivalImagePath("durga-puja-sovabazar"),
  },
  {
    id: "durga-puja-sreebhumi",
    name: "Durga Puja",
    place: "Sreebhumi Sporting Club, Kolkata",
    tagline: "The Extravaganza of Theme: Lighting Up the Night Sky.",
    description:
      "Sreebhumi Sporting Club is famous for its grand thematic pandals and spectacular lighting displays. Each year, they create massive replicas of world-famous monuments and structures, attracting lakhs of visitors with their innovative designs and breathtaking illumination.",
    whenCelebrated: "September-October (during Navaratri)",
    highlights: [
      "Massive thematic pandal structures",
      "Spectacular lighting and illumination",
      "Replicas of world-famous landmarks",
      "Lakhs of daily visitors",
      "Award-winning designs",
      "Cultural performances and events",
      "Grand scale artistic installations",
    ],
    culturalSignificance:
      "Sreebhumi represents the modern, grand-scale celebration of Durga Puja, pushing boundaries of creativity and engineering. It has become a must-visit destination during the festival, showcasing Bengal's ability to blend tradition with contemporary art.",
    image: getFestivalImagePath("durga-puja-sreebhumi"),
  },
  {
    id: "durga-puja-kumartuli",
    name: "Durga Puja",
    place: "Kumartuli, Kolkata",
    tagline: "Where the Goddess Takes Form: The Potter's Holy Land.",
    description:
      "Kumartuli is the traditional potter's quarter of Kolkata where skilled artisans create the clay idols of Goddess Durga. Witnessing the idol-making process here is a spiritual and artistic experience, as generations of craftsmen breathe life into the clay goddess using techniques passed down through centuries.",
    whenCelebrated: "September-October (during Navaratri)",
    highlights: [
      "Traditional idol-making workshops",
      "Generations of skilled artisans",
      "Witness the creation process",
      "Ancient clay sculpting techniques",
      "Community puja with local flavor",
      "Authentic cultural experience",
      "Artisan heritage and craftsmanship",
    ],
    culturalSignificance:
      "Kumartuli is the birthplace of Durga idols and represents the artistic soul of Kolkata. The artisans here are the custodians of an ancient craft, and their work is integral to the celebration of Durga Puja across the world.",
    image: getFestivalImagePath("durga-puja-kumartuli"),
  },
  {
    id: "kali-puja-barasat",
    name: "Kali Puja",
    place: "Barasat",
    tagline: "Colossal Idols and Dazzling Illumination.",
    description:
      "Barasat, located in North 24 Parganas, is famous for its Kali Puja celebrations featuring enormous idols of Goddess Kali and spectacular lighting displays. The town transforms into a festival hub during Kali Puja night with thousands of devotees and visitors.",
    whenCelebrated: "October-November (on Diwali night)",
    highlights: [
      "Gigantic Kali idols reaching up to 100+ feet",
      "Spectacular illumination and decorations",
      "Multiple large-scale pandals",
      "Night-long celebrations",
      "Fireworks and traditional music",
      "Street food and local markets",
      "Community gatherings",
    ],
    culturalSignificance:
      "Kali Puja in Barasat showcases the fierce yet protective aspect of the Divine Mother. The colossal idols represent the power and magnitude of Shakti worship in Bengal.",
    image: getFestivalImagePath("kali-puja-barasat"),
  },
  {
    id: "kali-puja-kalighat",
    name: "Kali Puja",
    place: "Kalighat Temple, Kolkata",
    tagline: "Divine Fury and Maternal Compassion at the Shakti Peeth.",
    description:
      "The Kalighat Temple, one of the 51 Shakti Peethas, celebrates Kali Puja with immense devotion and traditional rituals. As one of the most sacred temples dedicated to Goddess Kali, it draws thousands of devotees who come to seek blessings on this auspicious night.",
    whenCelebrated: "October-November (on Diwali night)",
    highlights: [
      "Sacred Shakti Peetha celebration",
      "Traditional tantric rituals",
      "Night-long worship and aarti",
      "Thousands of devotees",
      "Animal sacrifice (traditional practice)",
      "Priests performing ancient rituals",
      "Deeply spiritual atmosphere",
    ],
    culturalSignificance:
      "Kalighat Temple's Kali Puja represents the authentic tantric tradition of Kali worship. It is believed that worshipping here on Kali Puja night brings protection, prosperity, and liberation.",
    image: getFestivalImagePath("kali-puja-kalighat"),
  },
  {
    id: "jagaddhatri-puja-chandannagar",
    name: "Jagaddhatri Puja",
    place: "Chandannagar",
    tagline: "The City of Lights: Gigantic Idols and World-Famous Lighting.",
    description:
      "Chandannagar, a former French colony, celebrates Jagaddhatri Puja with unmatched grandeur. The city is known for its stunning lighting decorations that illuminate the entire town and massive idols of Goddess Jagaddhatri that attract visitors from across India and abroad.",
    whenCelebrated: "November (4 days after Kali Puja)",
    highlights: [
      "World-famous street lighting",
      "Gigantic Jagaddhatri idols",
      "French colonial architecture backdrop",
      "Lakhs of visitors annually",
      "Strand Road illumination",
      "Competition among clubs for best pandal",
      "Four-day grand celebration",
    ],
    culturalSignificance:
      "Chandannagar's Jagaddhatri Puja is a unique blend of Bengali Hindu tradition and French colonial heritage. The lighting tradition is so famous that it's considered one of the best in Asia.",
    image: getFestivalImagePath("jagaddhatri-puja-chandannagar"),
  },
  {
    id: "jagaddhatri-puja-krishnanagar",
    name: "Jagaddhatri Puja",
    place: "Krishnanagar",
    tagline: "King Krishnachandra's Traditional Puja.",
    description:
      "Jagaddhatri Puja was started in Krishnanagar by Raja Krishnachandra in the 18th century. The royal family still continues the tradition with the same rituals and grandeur, making it one of the most authentic and traditional celebrations of the goddess.",
    whenCelebrated: "November (4 days after Kali Puja)",
    highlights: [
      "Royal family tradition since 18th century",
      "Traditional rituals and customs",
      "Historic royal palace celebration",
      "Classical cultural programs",
      "Ancient idol-making style",
      "Authentic Bengali traditions",
      "Heritage and aristocratic celebration",
    ],
    culturalSignificance:
      "This puja represents the royal patronage of Bengali festivals and preserves the aristocratic traditions of Jagaddhatri worship that originated in the royal courts.",
    image: getFestivalImagePath("jagaddhatri-puja-krishnanagar"),
  },
  {
    id: "saraswati-puja-shantiniketan",
    name: "Saraswati Puja / Basant Panchami",
    place: "Shantiniketan",
    tagline: "Basant Utsav: Yellow Hues and the Celebration of Knowledge.",
    description:
      "Shantiniketan celebrates Basant Panchami (Saraswati Puja) as Basant Utsav, a tradition started by Rabindranath Tagore. Students and faculty of Visva-Bharati University dress in yellow, sing Rabindra Sangeet, and celebrate the arrival of spring with cultural programs and the worship of Goddess Saraswati.",
    whenCelebrated: "January-February (Basant Panchami)",
    highlights: [
      "Tradition started by Rabindranath Tagore",
      "Students dressed in yellow attire",
      "Rabindra Sangeet and cultural programs",
      "Spring festival celebration",
      "Worship of Goddess Saraswati",
      "Dance performances and processions",
      "Academic and cultural significance",
    ],
    culturalSignificance:
      "Basant Utsav at Shantiniketan represents the fusion of Hindu tradition with Tagore's vision of cultural celebration. It honors education, art, and the beauty of nature's renewal in spring.",
    image: getFestivalImagePath("saraswati-puja-shantiniketan"),
  },
  {
    id: "ganga-sagar-mela",
    name: "Ganga Sagar Mela",
    place: "Sagar Island",
    tagline: "Makar Sankranti's Holy Dip at the Sea.",
    description:
      "The Ganga Sagar Mela is one of the largest pilgrimages in India, held annually on Makar Sankranti at Sagar Island where the Ganges meets the Bay of Bengal. Millions of pilgrims take a holy dip at the confluence, believing it washes away sins and brings salvation.",
    whenCelebrated: "January 14-15 (Makar Sankranti)",
    highlights: [
      "Second largest congregation after Kumbh Mela",
      "Holy dip at Ganga-Sagar confluence",
      "Millions of pilgrims gather",
      "Kapil Muni Temple visit",
      "Temporary tent city setup",
      "Spiritual discourses and bhajans",
      "Boat rides to Sagar Island",
    ],
    culturalSignificance:
      'The saying "Sab tirtha bar bar, Ganga Sagar ek bar" reflects the supreme importance of this pilgrimage.',
    image: getFestivalImagePath("ganga-sagar-mela"),
  },
  {
    id: "charak-puja",
    name: "Charak Puja / Gajan",
    place: "Rural Bengal / Bankura",
    tagline: "Shiva's Folk Festival of Endurance.",
    description:
      "Charak Puja, also known as Nil Puja or Gajan, is a folk festival dedicated to Lord Shiva celebrated mainly in rural Bengal. Devotees perform extreme acts of penance including body piercing and swinging on hooks to please Shiva and seek his blessings for prosperity.",
    whenCelebrated: "Mid-April (last day of Bengali calendar year)",
    highlights: [
      "Folk tradition of Shiva worship",
      "Extreme acts of devotion and penance",
      "Body piercing and hook swinging",
      "Fire walking and other rituals",
      "Rural community participation",
      "Traditional music and dance",
      "End of Bengali year celebration",
    ],
    culturalSignificance:
      "Charak Puja represents the folk religious traditions of Bengal and the devotion of rural communities to Lord Shiva. It showcases the cultural diversity of Hindu worship practices in Bengal.",
    image: getFestivalImagePath("charak-puja"),
  },
];
