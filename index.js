const initUI = () => {
  const textInput = document.querySelector("#textInput");
  const textResult = document.querySelector("#textResult");
  const encodeButton = document.querySelector("#encode");
  const decodeButton = document.querySelector("#decode");
  const keyInput = document.querySelector("#key");

  encodeButton.addEventListener("click", () => {
    let keyValue = Number(keyInput.value);
    if (keyValue < 0) {
      textResult.value = "Please enter a positive number";
    } else {
      newalpha = shift(keyValue);
      textResult.value = encodeFunc(textInput.value);
    }
  });

  decodeButton.addEventListener("click", () => {
    let keyValue = Number(keyInput.value);
    if (keyValue < 0) {
      textResult.value = "Please enter a positive number";
    } else {
      newalpha = shift(keyValue);
      textResult.value = decodeFunc(textInput.value);
    }
  });
};

// Start of the cipher code
const alphabet =
  "abcdefghijklmnopqrstuvwxyz!#$%&'()*+-./:;<=>?@[\\]^_{|}~ 1234567890\""; // Create a new variable that holds the alphabet
let newalpha = ""; // Create another variable for a new alphabet and keep it empty

// The shift function takes an integer n and creates a shifted alphabet (newalpha).
// It uses a loop to iterate over each character in the original alphabet,
// calculates the new index after a circular shift by n, and builds the shifted alphabet.

function shift(n) {
  let result = ""; // Reset newalpha before shifting
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    result += alphabet[offset];
  }
  return result;
}

// The encodeFunc function takes a message and encodes it using the shifted alphabet (newalpha).
// It converts each character to lowercase, checks if it's in the original alphabet, finds its index,
// and replaces it with the corresponding character from the shifted alphabet. Non-alphabetic characters remain unchanged.

function encodeFunc(message) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (alphabet.includes(char)) {
      let index = alphabet.indexOf(char);
      result += newalpha[index];
    }
  }
  return result;
}

// The decodeFunc function takes an encoded message and decodes it by finding the index of each character in the shifted alphabet (newalpha)
// and replacing it with the corresponding character from the original alphabet.
// Non-alphabetic characters remain unchanged.

function decodeFunc(message) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (alphabet.includes(char)) {
      let index = newalpha.indexOf(char);
      result += alphabet[index];
    }
  }
  return result;
}

//Export functions for Node.js or initialize UI for the browser
if (typeof module !== "undefined") {
  module.exports = {
    shift,
    encodeFunc,
    decodeFunc,
  };
} else {
  initUI();
}
