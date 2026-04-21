class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives <= 0) {
      return false;
    }
    if (n === this.number) {
      return true;
    }
    this.lives--;
    return false;
  }
}
console.log(new Guesser(10, 3).guess(10)); // Output: true
console.log(new Guesser(10, 3).guess(5)); // Output: false
console.log(new Guesser(10, 3).guess(5)); // Output: false
console.log(new Guesser(10, 3).guess(5)); // Output: false
console.log(new Guesser(10, 3).guess(5)); // Output: false (no lives left)
