const solution = (number) => {
      if(number < 0) return 0;
      return [...Array(number).keys()].filter(i => i % 3 === 0 || i % 5 === 0).reduce((sum, i) => sum + i, 0)
}


/// SECOND APPROACH:

const solution2 = (number) => {
    if (number < 0) return 0;

    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
};

console.log(solution(10)); // 23  (3 + 5 + 6 + 9)
console.log(solution(5));  // 3   (only 3)
console.log(solution(6));  // 8   (3 + 5)