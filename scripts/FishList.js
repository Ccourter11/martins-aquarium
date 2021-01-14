import { Fish } from "./Fish.js";
import { useFish } from "./FishDataProvider.js";

/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const FishList = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".containerLeft");
  const fishes = useFish();

  let fishHTMLRepresentations = "";
  for (const fish of fishes) {
    /*
          Invoke the Fish component function
          and pass the current fish object as an argument.
          Each time, add the return value to the
          fishHTMLRepresentations variable with `+=`
      */
    fishHTMLRepresentations += Fish(fish);
    // console.log(fishHTMLRepresentations);
  }

  // Add a section, and all of the fish to the DOM
  contentElement.innerHTML += `
      <article class="containerLeft__fishList contentArticle">
          ${fishHTMLRepresentations}
      </article>
  `;
};
FishList();
