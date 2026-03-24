function arrayDiff(a, b) {
      return a.filter(x => !b.includes(x));
}
console.log(arrayDiff([1, 2, 3, 4], [1, 2]));