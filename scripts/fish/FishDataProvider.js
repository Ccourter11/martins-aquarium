const fishCollection = [
  {
    name: "Lil Man",
    species: "Crappie",
    diet: "crawfish",
    location: "Southeast United States",
    length: 15,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k0gzZRwo2r-Z9rWkXfa6_wHCpB5kTZ1X3A&usqp=CAU",
  },
  {
    name: "Marlin",
    species: "Amphiprioninae",
    diet: "seafood",
    location: "Great Barrier Reef, Australia",
    length: 6,
    image:
      "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg",
  },
  {
    name: "Katie",
    species: "Large Mouth Bass",
    diet: "bluegill,crawfish,snakes",
    location: "United States of America",
    length: 18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ttvITVLfXG2A01Gwo1E-vBBj6qMwEPbavg&usqp=CAU",
  },
  {
    name: "Kenny",
    species: "Salmon",
    diet: "Mayflies",
    location: "Alaska",
    length: 21,
    image:
      "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsbW9uJTIwZmlzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60.jpg",
  },
  {
    name: "Marvin",
    species: "Moorish Idol",
    diet: "plankton",
    location: "Southern Gulf of California south to Peru",
    length: 8,
    image:
      "https://reefnation.com/wp-content/uploads/2015/02/1659263-Moorish-Idol-1.jpg",
  },
];

export const useFish = () => {
  return fishCollection.slice();
};

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish

  const holyFish = [];

  for (const fishObj of fishCollection) {
    if (fishObj.length % 3 == 0) {
      holyFish.push(fishObj);
    }
  }
  console.log("Array of Holy Fish", holyFish);
  return holyFish;
};

export const soldierFish = () => {
  const aSoldier = [];
  // 5, 10, 15, 20, 25, etc... fish
  for (const fishObj of fishCollection) {
    if (fishObj.length % 5 == 0) {
      aSoldier.push(fishObj);
    }
  }
  console.log("Array of soldier fish", aSoldier);
  return aSoldier;
};

export const nonHolyFish = () => {
  const regularFish = [];
  // Any fish not a multiple of 3 or 5
  for (const fishObj of fishCollection) {
    if (fishObj.length % 5 !== 0 && fishObj.length % 3 !== 0) {
      regularFish.push(fishObj);
    }
  }

  console.log("Array of regular fish", regularFish);
  return regularFish;
};
