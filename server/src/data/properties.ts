interface Property {
  id: number;
  propertyName: string;
  propertyAddress: string;
  specs: Specs;
}

interface Specs {
  beds: number;
  rooms: number;
}

export const properties: Record<number, Property[]> = {
  '1': [
    {
      id: 6564,
      propertyName: 'Property 6564',
      propertyAddress: '738 Example Street, Location 1',
      specs: {
        beds: 1,
        rooms: 2,
      },
    },
    {
      id: 1173,
      propertyName: 'Property 1173',
      propertyAddress: '733 Example Street, Location 1',
      specs: {
        beds: 1,
        rooms: 8,
      },
    },
    {
      id: 1173,
      propertyName: 'Property 1173',
      propertyAddress: '853 Example Street, Location 1',
      specs: {
        beds: 4,
        rooms: 4,
      },
    },
    {
      id: 5464,
      propertyName: 'Property 5464',
      propertyAddress: '243 Example Street, Location 1',
      specs: {
        beds: 2,
        rooms: 7,
      },
    },
  ],
  '2': [
    {
      id: 1131,
      propertyName: 'Property 1131',
      propertyAddress: '6 Example Street, Location 2',
      specs: {
        beds: 5,
        rooms: 2,
      },
    },
    {
      id: 4443,
      propertyName: 'Property 4443',
      propertyAddress: '231 Example Street, Location 2',
      specs: {
        beds: 3,
        rooms: 10,
      },
    },
    {
      id: 3440,
      propertyName: 'Property 3440',
      propertyAddress: '481 Example Street, Location 2',
      specs: {
        beds: 3,
        rooms: 3,
      },
    },
    {
      id: 3527,
      propertyName: 'Property 3527',
      propertyAddress: '357 Example Street, Location 2',
      specs: {
        beds: 2,
        rooms: 5,
      },
    },
  ],
  '3': [
    {
      id: 7318,
      propertyName: 'Property 7318',
      propertyAddress: '747 Example Street, Location 3',
      specs: {
        beds: 4,
        rooms: 8,
      },
    },
    {
      id: 2000,
      propertyName: 'Property 2000',
      propertyAddress: '890 Example Street, Location 3',
      specs: {
        beds: 3,
        rooms: 10,
      },
    },
    {
      id: 1037,
      propertyName: 'Property 1037',
      propertyAddress: '904 Example Street, Location 3',
      specs: {
        beds: 2,
        rooms: 9,
      },
    },
  ],
  '4': [
    {
      id: 6461,
      propertyName: 'Property 6461',
      propertyAddress: '742 Example Street, Location 4',
      specs: {
        beds: 1,
        rooms: 3,
      },
    },
    {
      id: 5511,
      propertyName: 'Property 5511',
      propertyAddress: '614 Example Street, Location 4',
      specs: {
        beds: 3,
        rooms: 10,
      },
    },
    {
      id: 7458,
      propertyName: 'Property 7458',
      propertyAddress: '598 Example Street, Location 4',
      specs: {
        beds: 3,
        rooms: 9,
      },
    },
    {
      id: 4901,
      propertyName: 'Property 4901',
      propertyAddress: '958 Example Street, Location 4',
      specs: {
        beds: 3,
        rooms: 7,
      },
    },
    {
      id: 5483,
      propertyName: 'Property 5483',
      propertyAddress: '711 Example Street, Location 4',
      specs: {
        beds: 3,
        rooms: 7,
      },
    },
  ],
  '5': [
    {
      id: 2497,
      propertyName: 'Property 2497',
      propertyAddress: '409 Example Street, Location 5',
      specs: {
        beds: 5,
        rooms: 5,
      },
    },
    {
      id: 7956,
      propertyName: 'Property 7956',
      propertyAddress: '932 Example Street, Location 5',
      specs: {
        beds: 3,
        rooms: 7,
      },
    },
    {
      id: 5125,
      propertyName: 'Property 5125',
      propertyAddress: '754 Example Street, Location 5',
      specs: {
        beds: 2,
        rooms: 10,
      },
    },
    {
      id: 1896,
      propertyName: 'Property 1896',
      propertyAddress: '315 Example Street, Location 5',
      specs: {
        beds: 4,
        rooms: 10,
      },
    },
  ],
  '6': [
    {
      id: 3653,
      propertyName: 'Property 3653',
      propertyAddress: '562 Example Street, Location 6',
      specs: {
        beds: 3,
        rooms: 7,
      },
    },
    {
      id: 2644,
      propertyName: 'Property 2644',
      propertyAddress: '264 Example Street, Location 6',
      specs: {
        beds: 1,
        rooms: 5,
      },
    },
    {
      id: 7725,
      propertyName: 'Property 7725',
      propertyAddress: '464 Example Street, Location 6',
      specs: {
        beds: 2,
        rooms: 4,
      },
    },
    {
      id: 4900,
      propertyName: 'Property 4900',
      propertyAddress: '331 Example Street, Location 6',
      specs: {
        beds: 2,
        rooms: 4,
      },
    },
    {
      id: 5893,
      propertyName: 'Property 5893',
      propertyAddress: '654 Example Street, Location 6',
      specs: {
        beds: 1,
        rooms: 9,
      },
    },
    {
      id: 7470,
      propertyName: 'Property 7470',
      propertyAddress: '911 Example Street, Location 6',
      specs: {
        beds: 5,
        rooms: 8,
      },
    },
  ],
  '7': [
    {
      id: 6720,
      propertyName: 'Property 6720',
      propertyAddress: '880 Example Street, Location 7',
      specs: {
        beds: 1,
        rooms: 6,
      },
    },
    {
      id: 8112,
      propertyName: 'Property 8112',
      propertyAddress: '913 Example Street, Location 7',
      specs: {
        beds: 2,
        rooms: 4,
      },
    },
    {
      id: 4512,
      propertyName: 'Property 4512',
      propertyAddress: '538 Example Street, Location 7',
      specs: {
        beds: 4,
        rooms: 5,
      },
    },
    {
      id: 2184,
      propertyName: 'Property 2184',
      propertyAddress: '883 Example Street, Location 7',
      specs: {
        beds: 1,
        rooms: 3,
      },
    },
  ],
  '8': [
    {
      id: 8749,
      propertyName: 'Property 8749',
      propertyAddress: '994 Example Street, Location 8',
      specs: {
        beds: 4,
        rooms: 10,
      },
    },
    {
      id: 6626,
      propertyName: 'Property 6626',
      propertyAddress: '29 Example Street, Location 8',
      specs: {
        beds: 2,
        rooms: 6,
      },
    },
    {
      id: 5306,
      propertyName: 'Property 5306',
      propertyAddress: '221 Example Street, Location 8',
      specs: {
        beds: 5,
        rooms: 5,
      },
    },
    {
      id: 5138,
      propertyName: 'Property 5138',
      propertyAddress: '70 Example Street, Location 8',
      specs: {
        beds: 4,
        rooms: 5,
      },
    },
    {
      id: 3427,
      propertyName: 'Property 3427',
      propertyAddress: '27 Example Street, Location 8',
      specs: {
        beds: 1,
        rooms: 9,
      },
    },
    {
      id: 8133,
      propertyName: 'Property 8133',
      propertyAddress: '882 Example Street, Location 8',
      specs: {
        beds: 1,
        rooms: 4,
      },
    },
  ],
  '9': [
    {
      id: 5156,
      propertyName: 'Property 5156',
      propertyAddress: '506 Example Street, Location 9',
      specs: {
        beds: 3,
        rooms: 9,
      },
    },
    {
      id: 4860,
      propertyName: 'Property 4860',
      propertyAddress: '576 Example Street, Location 9',
      specs: {
        beds: 2,
        rooms: 6,
      },
    },
    {
      id: 6728,
      propertyName: 'Property 6728',
      propertyAddress: '567 Example Street, Location 9',
      specs: {
        beds: 5,
        rooms: 8,
      },
    },
    {
      id: 4757,
      propertyName: 'Property 4757',
      propertyAddress: '792 Example Street, Location 9',
      specs: {
        beds: 4,
        rooms: 9,
      },
    },
    {
      id: 3361,
      propertyName: 'Property 3361',
      propertyAddress: '943 Example Street, Location 9',
      specs: {
        beds: 2,
        rooms: 3,
      },
    },
    {
      id: 2621,
      propertyName: 'Property 2621',
      propertyAddress: '258 Example Street, Location 9',
      specs: {
        beds: 4,
        rooms: 6,
      },
    },
  ],
  '10': [
    {
      id: 4852,
      propertyName: 'Property 4852',
      propertyAddress: '705 Example Street, Location 10',
      specs: {
        beds: 4,
        rooms: 9,
      },
    },
    {
      id: 7876,
      propertyName: 'Property 7876',
      propertyAddress: '385 Example Street, Location 10',
      specs: {
        beds: 5,
        rooms: 2,
      },
    },
    {
      id: 3302,
      propertyName: 'Property 3302',
      propertyAddress: '422 Example Street, Location 10',
      specs: {
        beds: 5,
        rooms: 10,
      },
    },
    {
      id: 5338,
      propertyName: 'Property 5338',
      propertyAddress: '480 Example Street, Location 10',
      specs: {
        beds: 4,
        rooms: 8,
      },
    },
    {
      id: 2864,
      propertyName: 'Property 2864',
      propertyAddress: '984 Example Street, Location 10',
      specs: {
        beds: 3,
        rooms: 9,
      },
    },
    {
      id: 2915,
      propertyName: 'Property 2915',
      propertyAddress: '602 Example Street, Location 10',
      specs: {
        beds: 4,
        rooms: 3,
      },
    },
  ],
};
