let observer;

let charNodeList = [];
let charLetterList = [];
let localIndex = 0;

// Manager

/**
 * Adds a DOM node to the list.
 *
 * @param {object} value Requires a DOM node.
 */
const addCharNode = function (node) {
  if (charNodeList.length < 1) node.classList.add("phrase__char--focus");

  charNodeList.push(node);
  charLetterList.push(node.textContent);
};

const clearCharNodes = function () {
  charNodeList = [];
  charLetterList = [];
  localIndex = 0;
};

// Functional

/**
 * Used to check if the user pressed the correct letter in the current phrase.
 * Modifies classes for animations and controls the game state.
 *
 * @param {string} str Requires the current keyboard input.
 */
const compareInput = function (str) {
  if (str == charLetterList[localIndex]) {
    charNodeList[localIndex].classList.add("phrase__char--correct");
    charNodeList[localIndex].classList.remove("phrase__char--incorrect");

    charNodeList[localIndex].classList.replace(
      "phrase__char--focus",
      "phrase__char--blur"
    );

    // Check game state
    if (!charLetterList[localIndex + 1]) {
      clearCharNodes();
      observer();
      return;
    }
    localIndex++;

    charNodeList[localIndex].classList.add("phrase__char--focus");
  } else {
    charNodeList[localIndex].classList.add("phrase__char--incorrect");
    charNodeList[localIndex].classList.remove("phrase__char--correct");
  }
};

/**
 * Configures the observer, a function that executes when a phrase ends.
 *
 * @param {object} callback Requires a function.
 */
const setObserver = function (callback) {
  observer = callback;
};

export const CharNodes = {
  addCharNode,
  compareInput,
  setObserver,
};
