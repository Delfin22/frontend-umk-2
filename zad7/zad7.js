const isHappy = (n) => {
  var tab = String(n).split("");
  var temp = 0;
  while (tab.length > 1) {
    for (var i = 0; i < tab.length; i++) {
      temp += Number(tab[i]) * Number(tab[i]);
    }
    tab = String(temp).split("");
    console.log(tab);
    temp = 0;
  }
  return Number(tab.join("")) === 1;
};

console.log(isHappy(19));
