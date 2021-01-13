const fishCollection = [
  {
    name: "Lil Man",
    species: "Crappie",
    food: "crawfish",
    length: "6-14 inches",
    image:
      "https://images.unsplash.com/photo-1506192135-2afa42cfdca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
  {
    name: "Marlin",
    species: "Amphiprioninae",
    food: "seafood",
    length: "2-6 inches",
  },
  {
    name: "Katie",
    species: "Large Mouth Bass",
    food: "bluegill,crawfish,snakes",
    length: "8-16 inches",
  },
  {
    name: "Kenny",
    species: "Salmon",
    food: "Mayflies",
    length: "12-20 inches",
  },
  {
    name: "Marvin",
    species: "Moorish Idol",
    food: "plankton",
    length: "4-9 inches",
  },
];

export const useFish = () => {
  return fishCollection.slice();
};
