export type CoffeeProfile = {
  slug: string;
  name: string;
  subtitle: string;
  species: string;
  origin: string;
  regions: string[];
  processing: string[];
  cupProfile: string[];
  description: string;
  assets: {
    plant?: string;
    flower?: string;
    greenCherry?: string;
    ripeCherry?: string;
    greenBean?: string;
    roastedBean?: string;
    cup?: string;
    environment?: string;
  };
};

export const coffeeProfiles: Record<string, CoffeeProfile> = {
  sl28: {
    slug: 'sl28',
    name: 'SL28',
    subtitle: 'KENYAN SPECIALTY COFFEE',
    species: 'Arabica',
    origin: 'Kenya',
    regions: ['Central Highlands', 'Nyeri', 'Murang\'a'],
    processing: ['Fully Washed'],
    cupProfile: ['Bright acidity', 'Blackcurrant', 'Citrus', 'Fruit-forward'],
    description: "From Kenya's highlands to the world's finest roasteries.",
    assets: {}
  },
  sl34: {
    slug: 'sl34',
    name: 'SL34',
    subtitle: 'KENYAN SPECIALTY COFFEE',
    species: 'Arabica',
    origin: 'Kenya',
    regions: ['Central Highlands', 'Kirinyaga'],
    processing: ['Fully Washed', 'Natural'],
    cupProfile: ['Complex acidity', 'Dark Berry', 'Syrupy body', 'Sweet'],
    description: "Exceptional quality and resilience from the heart of Kenya.",
    assets: {}
  },
  "ruiru-11": {
    slug: 'ruiru-11',
    name: 'Ruiru 11',
    subtitle: 'KENYAN SPECIALTY COFFEE',
    species: 'Arabica',
    origin: 'Kenya',
    regions: ['Central Highlands', 'Kiambu'],
    processing: ['Fully Washed', 'Honey'],
    cupProfile: ['Cocoa', 'Citrus', 'Heavy body', 'Clean finish'],
    description: "A compact, high-yielding variety developed for resilience and classic Kenyan flavor.",
    assets: {}
  },
  batian: {
    slug: 'batian',
    name: 'Batian',
    subtitle: 'KENYAN SPECIALTY COFFEE',
    species: 'Arabica',
    origin: 'Kenya',
    regions: ['Mount Kenya Region'],
    processing: ['Fully Washed', 'Natural'],
    cupProfile: ['Floral', 'Stone fruit', 'Sweet', 'Juicy'],
    description: "A newer true-breeding variety offering superb cup quality and disease resistance.",
    assets: {}
  }
};
