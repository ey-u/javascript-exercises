const fibonacci = function (place) {
  let arg = place;
  if (typeof place !== "number") arg = parseInt(place);
  if (arg < 0) return "OOPS";

  let total = 0;
  let curr = 1;
  let prev = 0;
  for (i = 0; i < arg; i++) {
    total = curr + prev;
    prev = curr;
    curr = total;
  }
  return prev;
};

// Do not edit below this line
module.exports = fibonacci;
