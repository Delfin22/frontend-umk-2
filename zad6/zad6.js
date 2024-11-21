const palindrom = (s) => {
  return s.split("").reverse().join("") === s;
};

console.log(palindrom("kajak"));
console.log(palindrom("dom"));
