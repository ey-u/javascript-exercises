const removeFromArray = function (list, ...items) {
  for (let item of items) {
    let index = list.indexOf(item);
    while (index >= 0) {
      list.splice(index, 1);
      index = list.indexOf(item);
    }
  }
  return list;
};

// Do not edit below this line
module.exports = removeFromArray;
