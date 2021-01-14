const fishCollection = [
  {
    name: "Lil Man",
    species: "Crappie",
    diet: "crawfish",
    location: "Southeast United States",
    length: "6-14 inches",
    image:
      "https://images.unsplash.com/photo-1506192135-2afa42cfdca9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
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
      "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2FsbW9uJTIwZmlzaHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
  },
  {
    name: "Marvin",
    species: "Moorish Idol",
    diet: "plankton",
    location: "Southern Gulf of California south to Peru",
    length: "4-9 inches",
    image: "moorishidol.jpg",
  },
];

export const useFish = () => {
  return fishCollection.slice();
};
