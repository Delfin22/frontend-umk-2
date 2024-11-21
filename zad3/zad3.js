const range = (a, b) => {
  var arr = [];
  for (var i = min(a, b); i <= max(a, b); i++) {
    arr.push(i);
  }
  return arr;
};
console.log(range(4, 1));
