import { Fish } from "./Fish.js";
// import { useFish } from "./FishDataProvider.js";
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";

const buildFishListHTML = (arrayOfFish, heading) => {
  let fishHTMLRepresentation = `<h3>${heading}</h3>`;
  for (const fishObj of arrayOfFish) {
    fishHTMLRepresentation += Fish(fishObj);
    console.log(fishHTMLRepresentation);
  }

  return fishHTMLRepresentation;
};

export const FishList = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".containerLeft");
  // const fishes = useFish();

  const holyFishArray = mostHolyFish();

  const holyFishHTMLRepresentation = buildFishListHTML(
    holyFishArray,
    "Holy Fish"
  );

  const soldierFishArray = soldierFish();

  const soldierFishHTMLRepresentation = buildFishListHTML(
    soldierFishArray,
    "Soldier Fish"
  );

  const regularFishArray = nonHolyFish();

  const regularFishHTMLRepresentation = buildFishListHTML(
    regularFishArray,
    "Regular Fish"
  );

  // Add a section, and all of the fish to the DOM
  contentElement.innerHTML += `
      <article class="containerLeft__fishList contentArticle">
          ${holyFishHTMLRepresentation}
          ${soldierFishHTMLRepresentation}
          ${regularFishHTMLRepresentation}
      </article>
  `;
};
// FishList();
