function check(a, x) {
  // your code here
      if (a.includes(x)) {
            return true;
      }
      else {
            return false;
      }
}
console.log(check([1, 2, 3], 2)); // Output: true
console.log(check([1, 2, 3], 4)); // Output: false