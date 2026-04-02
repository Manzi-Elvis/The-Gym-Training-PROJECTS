function feast(beast, dish) {
//your function here
      if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
            return true;
      }
      else {
            return false;
      }
}
console.log(feast("great blue heron", "garlic naan")); // Output: true
console.log(feast("chickadee", "chocolate cake")); // Output: true