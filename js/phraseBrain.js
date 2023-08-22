import { CharNodes } from "./charNodes.js";
import { loader } from "./main.js";

/**
 * Creates a DOM node that displays a letter in a stylized box.
 *
 * @param {string} str Requires the letter to be contained in this box.
 * @returns Returns a DOM node displaying the letter in a stylized box.
 */
const createChar = function (str) {
  const liItem = document.createElement("li");

  liItem.classList.add("phrase__char");

  liItem.textContent = str.toLowerCase();

  CharNodes.addCharNode(liItem); // Saving this element

  return liItem;
};

/**
 * Used to prevent words from being separated by line breaks.
 *
 * @returns Returns a DOM node used to encapsulate letter boxes.
 */
const createGlo = function () {
  const phraseGlue = document.createElement("div");

  phraseGlue.classList.add("phrase__glue");

  return phraseGlue;
};

/**
 * Used to generate a phrase.
 *
 * @param {array} phrase Requires a phrase as strings or an array of words.
 * @param {object} parent Requires a DOM node, where the phrase is generated.
 */
const createPhrase = function (phrase, parent) {
  let phraseLocal;
  if (typeof phrase === "string") phraseLocal = phrase.split(" ");
  else phraseLocal = [...phrase];

  phraseLocal.forEach((element) => {
    const phraseGlue = createGlo();

    for (let index = 0; index < element.length; index++) {
      let elementChar = element[index];

      if (/[.,'_-]/gi.test(elementChar)) break;

      const charElement = createChar(elementChar.toLowerCase());

      phraseGlue.appendChild(charElement);
    }
    parent.appendChild(phraseGlue);
  });

  loader.style.display = "none"; // Removing the loader
};

export const PhraseBrain = {
  createPhrase,
};
