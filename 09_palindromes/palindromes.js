const palindromes = function (string) {
  let noPunctuation = string
    .toLowerCase()
    .replace(/[^\w\s\']|_/g, "")
    .replaceAll(" ", "");
  let reverse = noPunctuation.split("").reverse().join("");
  return noPunctuation === reverse;
};

// Do not edit below this line
module.exports = palindromes;
