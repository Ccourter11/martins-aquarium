import { Fish } from "./Fish.js";
// import { useFish } from "./FishDataProvider.js";
import { mostHolyFish, soldierFish, nonHolyFish } from "./FishDataProvider.js";
/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const FishList = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".containerLeft");
  // const fishes = useFish();

  const holyFishArray = mostHolyFish();

  const soldierFishArray = soldierFish();

  const regularFishArray = nonHolyFish();

  let holyFishHTMLRepresentations = "<h3>Holy Fish</h3>";
  for (const theFish of holyFishArray) {
    fishHTMLRepresentations += Fish(theFish);
    // console.log(fishHTMLRepresentations);
  }

  // Add a section, and all of the fish to the DOM
  contentElement.innerHTML += `
      <article class="containerLeft__fishList contentArticle">
          ${holyFishHTMLRepresentations}
      </article>
  `;
};
// FishList();
