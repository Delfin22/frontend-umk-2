const sum = (arr) => {
  var s = 0;
  arr.forEach((element) => {
    s += element;
  });
  return s;
};
var l = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
console.log(sum(l));
