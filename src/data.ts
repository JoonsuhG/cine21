import { Movie, Article, Schedule } from './types';

export const MOVIES: Movie[] = [
  {
    id: 'night-drift',
    title: 'NIGHT DRIFT',
    category: 'NETFLIX',
    description: 'A cinematic night street scene in a futuristic Tokyo-style city. Neon purple and cyan lights reflect on wet pavement.',
    rating: '8.9',
    duration: '124',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaDIOxs0_p8SxRq72TP8pXP6AiLdEmkCWtgQF7EYH4bCJZPafK946JBRe0uhu-OPU8Gl7gWw5kd7cQbZ00uPvSUtcUa0WX6ljeJebGj0plKRl-hwHR_W7Gq9gre0BBMEaQ7_gAFI3NFYIzN-eXrwYjmpPiY4WtjB7Wu3qNrW4kMnMyvOUI-IQkuf87eRweLWop4rYzgA8g4cl4xQsj_15ZOPE-RIKKhIzAvAVvhxCi27fAB8kTSjMEKUnHAvGdC3ztsYiDtfelqs4',
    provider: 'NETFLIX',
    genre: 'NOIR'
  },
  {
    id: 'the-silent-bay',
    title: 'THE SILENT BAY',
    category: 'TVING',
    description: 'A dramatic black and white film frame showing a lone figure silhouetted against a foggy harbor at dawn.',
    rating: '9.0',
    duration: '108',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoe8zZrrEwourvJDvh3_STNBZag3eIpEQbHEJR_Dr8iOg2XQMGEymR2rnGJEApXofyAiq5j4Vidw-SqKoLisUNzbhWV3e2i9WNIeGrq8Y3KRH8ly5sHi8Z3GEYS2-w__mZbRtC-peCSBXZYrfP2f7bdfVs8YvzOiQyhzmikb2gGGk2OrktyvgHjTol7eqGpNyPUwkz_yxWL6QkCXeTxf0eOQLLp85NJEaDnZVQsH6w231VrPO1hurdrzMQjUTPHLwr5lNHuYdp4AQ',
    provider: 'TVING',
    genre: 'THRILLER'
  },
  {
    id: 'projector-x',
    title: 'PROJECTOR X',
    category: 'DISNEY+',
    description: 'Intense close-up of a vintage 35mm film projector lens, glowing with an internal golden light.',
    rating: '8.4',
    duration: '90',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQTRSnqbwlNnT635TJHV23JmO7dD8a8z_LjWqZJkdKBiIoGHfADPD3lbpblH9RLmBbe6akzh1oACAhqpRw-68XaGqoFkU8xB83x1amRihfXh3alQ9yFu_jQqxzkA1tZXhRfyQu41cEfqJTFsVWI4Vw__515Y__LqcQeYpJb2dzYmLtpCm22bz6Mi-9PEeoFiKZTTrRPRs56iyYLUa8Mig0SPlJ2tOF08bhVOYyV5hXNasevFb3liLjrzvED9iLauZjezPS4uXmrGY',
    provider: 'DISNEY+',
    genre: 'DOCUMENTARY'
  },
  {
    id: 'beyond-the-shadows',
    title: 'BEYOND THE SHADOWS',
    category: 'WEEKLY PICK',
    description: 'A masterpiece of restraint and visual storytelling. The best cinematography we\'ve seen this year.',
    rating: '9.2',
    duration: '142',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ugFX-kbEk7JwKVUIz-aPw9sBdqzNSQ8l2-vUq8okOhIHuXehD5UIQQOWjQoXB10DK8rqlmHaFStUXXCzjqX933CY_YpheAad1Ukbf2dHgO9icNITuBKxRZ2T0Ww3Q2m8_cswWvOQAlqy9JgT8oKaXTTFHgGQRlWvu4TdUkt98zlSHSnBzkLXPCrW-ARcNwgFMTGL8Odhhx2TrGfEqrOHNuZ_9T53M7CPBgJxt-1vzPXHk2ZvB_SG7vV5A',
    provider: 'NETFLIX',
    genre: 'NOIR'
  },
  {
    id: 'the-noir-code',
    title: 'THE NOIR CODE',
    category: 'CRITIC\'S CHOICE',
    description: 'Challenging, dark, and beautifully composed. A film that demands multiple viewings.',
    rating: '8.5',
    duration: '115',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhkYjE05M4U5M5rEIDCe3cbR4GY3O_y-iYHCxqFGZ5foPvMLLJcrAYMU2xJbveGdDsEb1cjl1LeMEUzO5S6C7SjO2tuTXSMGrED5bBvbsiSGR6fUQFR41NQ1tB530mTiq-jc2ocnyCtPKtruGS6-8E-qdl_xhNl4mjQ6LjTP8T1QAgYrCDie4f0vXbB-RUF_xZSsBFHYKOBqD_ZDWJhSQunQqwr2W4wDZlmfWM_wCGqhmWxAoHXU07mqbk',
    provider: 'TVING',
    genre: 'CRIME'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'reconstructing-the-frame',
    title: 'RECONSTRUCTING THE FRAME',
    subtitle: 'An exclusive deep-dive into the stylistic metamorphosis of modern Korean noir. We talk to the directors defining the visual vocabulary of the next decade.',
    category: 'COVER STORY',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uiKXa-fvP3vUk-mY9zNWrQjly-5PfzRltLxK9rQf9N8LefrIF3mhcaZewp72Yzt8NDX543JkEQCX8BOF4so2_n6iPzWEty257cGghQhaLuFu3TaSEQsa1i3JjYy7IlUB7tXwxP81kroR9zi2KwxewqyM_7Q0cscEUSyU2gViqstCdlppJ3ccyZLujjRk0jzrni5E268TU41_nPMvj2wYz9W1IsN3DTBnMTLExH5_krPnEd-DfQNvw946Kc',
    duration: '10 Min Read',
    author: 'CINE21 Editorial Board',
    content: `Korean noir is undergoing a radical visual transformation. Moving away from the classic grit of the late 90s, today's auteurs are reconstructing the cinematic frame using surgical symmetry, cold color palettes, and a highly polished architectural geometry. It is no longer just about blood-soaked alleys, but the psychological paralysis of the modern citizen reflected in glass skyscrapers, industrial concrete voids, and lonely harbor mist.\n\nDirectors like Park Chan-wook and Bong Joon-ho have pioneered an approach where the background talks as loudly as the characters. Spanning wet pavements illuminated by high-contrast cyan LEDs and the deep pitch-black shadows of rural ports, the tension of 21st-century suspense is primarily an exercise in lighting and framing. In this dossier, CINE21 talks with key cinematographers and production directors about their workflow and how they manipulate shadows to tell visceral stories of corruption, isolation, and redemption.`
  },
  {
    id: 'the-neon-awakening',
    title: 'THE NEON AWAKENING',
    subtitle: 'A high-contrast study of electrical luminescence in contemporary metropolitan thrillers. Inside the backstreets of cyberpunk expression.',
    category: 'EXCLUSIVE COVER',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhUNjUUVULNmVOMXL8hNsLAFxuAnLWD7EFJjSkik1P1LnaP9YeKHCVvHkp7nUMGBnd8_BAxRZhRCYZmzT3oU_pk05lznAqaPFC0-1kKhOcedn97l8ynkBz7t4PVljkItvFDoYizuxfEVhLhA7taj4jJp8Gzc7DfESUwi_YhnjTOxFyysQhehxiOIfVAeqei6QVkuZ0A1nsQ-v5av3msh40footg79yxFOTYMT2uIlelm2i4MGekTTj5Lv8',
    duration: '8 Min Read',
    author: 'Park Jung-min',
    content: `Luminescent, cold, yet deeply alive. Neon has evolved from a simple signifier of metropolitan nightlife to a psychological landscape of internal displacement. In modern cyberpunk and urban noir cinema, the contrast between infinite darkness and saturated, high-energy light tells a tale of individuals drowning in light while suffering in sensory overload.\n\nFrom the neon-reflecting puddles of dystopian Tokyo to the synthetic night of Seoul, we trace the optical lens setups, color timings, and production choices that make the city of the future feel both incredibly close and impossibly distant.`
  },
  {
    id: 'symmetry-of-chaos',
    title: 'SYMMETRY OF CHAOS: MODERN NOIR ARCHITECTURE',
    subtitle: 'How contemporary directors are utilizing industrial brutalism to redefine the visual language of suspense and isolation in 21st-century cinema.',
    category: 'FEATURE',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0uhSONSo05CoiKqHUgPE2h6rM4uuXlVwP70NNJHm9_WChwghxhuxP7E-1W9WrawbNXDtvidXjo1hSaToisi2md-9njurIDYF0JAGTo_bFATifRa7AgfZbPS4duTQ4gDnrnz4fIRdMg_VBxVIzlk9xvchYWXeZ_JiZ5ev5vvohhQ4R-BQrsooFwgY45RRIt8jGSUKe0PmeeUk86ovHoTpdPB4allfnIrCFVGtDQ7l0gYaMXP8cXXuRGsZkBs',
    duration: '12 Min Read',
    author: 'Lee Ji-won',
    content: `Architecture in cinema does not just house the action—it defines it. Industrial brutalism, with its cold, raw concrete and monolithic planes, has become the perfect canvas for modern suspense. When a single human figure stands against a towering wall of grey cement, the physical space tells a story of systematic oppression and utter insignificance.\n\nIn this analytical layout, CINE21 examines iconic sets and locations from recent high-profile noir thrillers, analyzing how symmetry, high-key backlighting, and heavy structural grids turn everyday architecture into a labyrinth of psychological terror.`
  },
  {
    id: 'the-void-within',
    title: 'THE VOID WITHIN',
    subtitle: 'Bong Joon Ho discusses the architectural geometry of class conflict and the visual anatomy of suspense.',
    category: 'DIRECTOR INSIGHT',
    image: 'https://lh3.googleusercontent.com/aida/ADBb0ujyHmybFvlzoF3yDFgeJVkLw61patw6eN1DD2WeFiq3zVmsRw2Bl3I4KcHPlrd7cnbJTBwNjSPQLmhESs7uKm7S111fKTaQwDgDhwXYaPfzUoeWM0JneneKn2tzkx0-EVLt1KAuvTIzqVp_du2_aKaclmDOf-fqK9UcNV50KsRnATEWSylifIEkwxo33putHBpE98xSJ0jpNDvbhldUvXzQ3nhjrJ8wNDD73OPqIT1SF2a9Mk-cqATkzg',
    duration: '6 Min Read',
    author: 'Bong Joon-ho',
    content: `In my films, space is the screenplay itself. When designing the physical boundary of a house, a basement, or a rainy sewer, we are actively determining the destiny of our characters. High and low columns, stairs that descend into darkness, and windows that segment the sun—these are the mathematical coordinates of tension inside contemporary Korean social dramas.`
  }
];

export const SCHEDULES: Schedule[] = [
  {
    id: 'sched-1',
    time: '14:00 — 16:30',
    title: 'BLADE RUNNER: FINAL CUT',
    info: 'RE-RELEASE • 4K HDR'
  },
  {
    id: 'sched-2',
    time: '17:00 — 19:15',
    title: 'PARASITE',
    info: 'DIRECTOR CHAT • SPECIAL'
  },
  {
    id: 'sched-3',
    time: '19:45 — 22:30',
    title: 'DUNE: PART TWO',
    info: 'IMAX EXPERIENCE'
  },
  {
    id: 'sched-4',
    time: '23:00 — 01:15',
    title: 'THE LIGHTHOUSE',
    info: 'MIDNIGHT MADNESS'
  }
];
