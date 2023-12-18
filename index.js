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
    shift(keyValue);
    textResult.value = encodeFunc(textInput.value);
  }
});

decodeButton.addEventListener("click", () => {
  let keyValue = Number(keyInput.value);
  if (keyValue < 0) {
    textResult.value = "Please enter a positive number";
  } else {
    shift(keyValue);
    textResult.value = decodeFunc(textInput.value);
  }
});

// Start of the cipher code
var alphabet = "abcdefghijklmnopqrstuvwxyz"; // Create a new variable that holds the alphabet
var newalpha = ""; // Create another variable for a new alphabet and keep it empty

function shift(n) {
  newalpha = ""; // Reset newalpha before shifting
  for (let i = 0; i < alphabet.length; i++) {
    let offset = (i + n) % alphabet.length;
    newalpha += alphabet[offset];
  }
}

function encodeFunc(message) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (alphabet.includes(char)) {
      let index = alphabet.indexOf(char);
      result += newalpha[index];
    } else {
      // If the character is not alphabetic, keep it unchanged
      result += char;
    }
  }
  return result;
}

function decodeFunc(message) {
  let result = "";
  message = message.toLowerCase();
  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (alphabet.includes(char)) {
      let index = newalpha.indexOf(char);
      result += alphabet[index];
    } else {
      // If the character is not alphabetic, keep it unchanged
      result += char;
    }
  }
  return result;
}
