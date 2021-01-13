import { useFish } from "./FishDataProvider.js";
import { Fish } from "./Fish.js";

/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

export const FishList = () => {
  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".containerLeft__fishList");
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
  }

  // Add a section, and all of the fish to the DOM
  contentElement.innerHTML += `
      <article class="fishList">
          ${fishHTMLRepresentations}
      </article>
  `;
};
// Add to the existing HTML in the content element
contentElement.innerHTML += `
        <article class="fishList">
            All the fish go here!
        </article>
    `;

// Fish();
