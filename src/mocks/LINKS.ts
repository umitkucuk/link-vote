export const MOCK_LINKS = [
  {
    id: 'Z9lMWdPYrb',
    name: 'Facebook',
    url: 'https://www.facebook.com/',
    points: 2,
    created: 1632602581594,
    updated: 1632602581594,
  },
  {
    id: 'EGR6l99Osp',
    name: 'Amazon',
    url: 'https://www.amazon.com/',
    points: 1,
    created: 1632602608367,
    updated: 1632602608367,
  },
  {
    id: 'gSaaGa8une',
    name: 'Microsoft',
    url: 'https://www.microsoft.com/',
    points: 6,
    created: 1632602566383,
    updated: 1632602566383,
  },
  {
    id: '6_w88PES3R',
    name: 'Apple',
    url: 'https://www.apple.com/',
    points: 8,
    created: 1632520021354,
    updated: 1632520021354,
  },
  {
    id: '8Emah8ozzb',
    name: 'Google',
    url: 'https://www.google.com/',
    points: 10,
    created: 1632520011700,
    updated: 1632520011700,
  },
  {
    id: 'zWFWorQnA-',
    name: 'Uber',
    url: 'https://uber.com/',
    points: 1,
    created: 1632664727659,
    updated: 1632674829013,
  },
]

export const TEST_LINKS = {
  input: [
    {
      id: '8Emah8ozzb',
      name: 'Google',
      url: 'https://www.google.com/',
      points: 10,
      created: 1632520011700,
      updated: 1632520011700,
    },
    {
      id: '6_w88PES3R',
      name: 'Apple',
      url: 'https://www.apple.com/',
      points: 8,
      created: 1632520021354,
      updated: 1632520021354,
    },
    {
      id: 'gSaaGa8une',
      name: 'Microsoft',
      url: 'https://www.microsoft.com/',
      points: 8,
      created: 1632602566383,
      updated: 1632674829013,
    },
  ],
  expected1: [
    {
      id: 'gSaaGa8une',
      name: 'Microsoft',
      url: 'https://www.microsoft.com/',
      points: 8,
      created: 1632602566383,
      updated: 1632674829013,
    },
    {
      id: '6_w88PES3R',
      name: 'Apple',
      url: 'https://www.apple.com/',
      points: 8,
      created: 1632520021354,
      updated: 1632520021354,
    },
    {
      id: '8Emah8ozzb',
      name: 'Google',
      url: 'https://www.google.com/',
      points: 10,
      created: 1632520011700,
      updated: 1632520011700,
    },
  ],
  expected2: [
    {
      id: 'gSaaGa8une',
      name: 'Microsoft',
      url: 'https://www.microsoft.com/',
      points: 8,
      created: 1632602566383,
      updated: 1632674829013,
    },
    {
      id: '6_w88PES3R',
      name: 'Apple',
      url: 'https://www.apple.com/',
      points: 8,
      created: 1632520021354,
      updated: 1632520021354,
    },
    {
      id: '8Emah8ozzb',
      name: 'Google',
      url: 'https://www.google.com/',
      points: 10,
      created: 1632520011700,
      updated: 1632520011700,
    },
  ],
  expected3: [
    {
      id: '8Emah8ozzb',
      name: 'Google',
      url: 'https://www.google.com/',
      points: 10,
      created: 1632520011700,
      updated: 1632520011700,
    },
    {
      id: 'gSaaGa8une',
      name: 'Microsoft',
      url: 'https://www.microsoft.com/',
      points: 8,
      created: 1632602566383,
      updated: 1632674829013,
    },
    {
      id: '6_w88PES3R',
      name: 'Apple',
      url: 'https://www.apple.com/',
      points: 8,
      created: 1632520021354,
      updated: 1632520021354,
    },
  ],
}
