const fishCollection = [
  {
    name: "Lil Man",
    species: "Crappie",
    diet: "crawfish",
    location: "Southeast United States",
    length: "6-14 inches",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7k0gzZRwo2r-Z9rWkXfa6_wHCpB5kTZ1X3A&usqp=CAU",
  },
  {
    name: "Marlin",
    species: "Amphiprioninae",
    diet: "seafood",
    location: "Great Barrier Reef, Australia",
    length: "2-6 inches",
    image:
      "https://www.aquariumofpacific.org/images/made_new/images-uploads-clownfish_600_q85.jpg",
  },
  {
    name: "Katie",
    species: "Large Mouth Bass",
    diet: "bluegill,crawfish,snakes",
    location: "United States of America",
    length: "8-16 inches",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ttvITVLfXG2A01Gwo1E-vBBj6qMwEPbavg&usqp=CAU",
  },
  {
    name: "Kenny",
    species: "Salmon",
    diet: "Mayflies",
    location: "Alaska",
    length: "12-20 inches",
    image:
      "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsbW9uJTIwZmlzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60.jpg",
  },
  {
    name: "Marvin",
    species: "Moorish Idol",
    diet: "plankton",
    location: "Southern Gulf of California south to Peru",
    length: "4-9 inches",
    image:
      "https://reefnation.com/wp-content/uploads/2015/02/1659263-Moorish-Idol-1.jpg",
  },
];

export const useFish = () => {
  return fishCollection.slice();
};

export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const holyFish = []

  for (const holyFish of mostHolyFish) {
    if (holyFish % 3 === 0)
    console.log(holyFish)
  }

  return holyFish
}

export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  for (const soldiers of soldierFish) {
    if (soldiers )
  }
  return soldiers
}

export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  return regularFish
}