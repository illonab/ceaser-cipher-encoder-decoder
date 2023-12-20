const { shift, encodeFunc, decodeFunc } = require("./index.js");

//shiftFunc testing
test("Should return original alphabet if 0 is passed", () => {
  expect(shift(0)).toBe(
    "abcdefghijklmnopqrstuvwxyz!#$%&'()*+-./:;<=>?@[\\]^_{|}~ 1234567890\""
  );
});

test("Should return correct shifted alphabet when a positive number passed", () => {
  expect(shift(5)).toBe(
    "fghijklmnopqrstuvwxyz!#$%&'()*+-./:;<=>?@[\\]^_{|}~ 1234567890\"abcde"
  );
});

test("Should return correct shifted alphabet when passed a number bigger than alphabet length", () => {
  expect(shift(95)).toBe(
    "$%&'()*+-./:;<=>?@[\\]^_{|}~ 1234567890\"abcdefghijklmnopqrstuvwxyz!#"
  );
});

//encodeFunc testing
test("Should retun empty string if passed an empty string", () => {
  expect(encodeFunc("")).toBe("");
});

test("Should return encoded message when passed a simple string.", () => {
  expect(encodeFunc("abc", shift(1))).toBe("bcd");
});

// decodeFunc testing
test("Should return decoded message when passed a simple string.", () => {
  expect(decodeFunc("cggj", shift(1000))).toBe("hllo");
});
