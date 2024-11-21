const fib = (n) => {
  var i = 1;
  var j = 1;
  var temp;
  for (var k = 2; k < n; k++) {
    temp = j;
    j = i + j;
    i = temp;
  }
  return j;
};
console.log(fib(9));
