function isTuringEquation(s){
      const [left, c] = s.split("=");
      const [a, b] = left.split("+");

      const rev = str => parseInt(str.split('').reverse().join(''), 10);
      return rev(a) + rev(b) === rev(c);
}
console.log(isTuringEquation("73+42=16")); // true
console.log(isTuringEquation("5+8=13"));   // false
console.log(isTuringEquation("10+20=30")); // true