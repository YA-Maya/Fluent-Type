import { PhraseBrain } from "./phraseBrain.js";
import { CharNodes } from "./charNodes.js";
import "./darkmode.js";

const phraseDom = document.querySelector(".phrase");
export const loader = document.getElementById("loader");

addEventListener("keypress", (e) => {
  CharNodes.compareInput(e.key);
});

async function GenerateFact() {
  phraseDom.innerHTML = "";

  loader.style.display = "initial";

  try {
    const factJson = await fetch("https://api.quotable.io/random");
    const factObj = await factJson.json();

    const title = factObj.content;

    PhraseBrain.createPhrase(title, phraseDom);
  } catch (error) {
    GenerateFact();
  }
}

GenerateFact();

CharNodes.setObserver(GenerateFact);
