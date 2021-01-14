import { Tips } from "./Tips.js";
import { useTips } from "./TipsDataProvider.js";

export const TipList = () => {
  const contentElement = document.querySelector(".contentContainer");
  const theTips = useTips();

  let tipHTMLRepresentations = "";
  for (const tipp of theTips) {
    /*
          Invoke the Fish component function
          and pass the current fish object as an argument.
          Each time, add the return value to the
          fishHTMLRepresentations variable with `+=`
      */
    tippHTMLRepresentations += Tips(tipp);
  }

  // Add a section, and all of the tips to the DOM
  contentElement.innerHTML += `
<article class="contentContainer__containerRight-tipCard">
    ${tippHTMLRepresentations}
</article>
`;
};
