function solution (roman) {
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let total = 0

  for (let i = 0; i < roman.length; i++) {
    const current = values[roman[i]]
    const next = values[roman[i + 1]]
    total += current < next ? -current : current
  }

	return total;
}
console.log(solution('XXI')) // 21
console.log(solution('I')) // 1
console.log(solution('IV')) // 4
console.log(solution('MMVIII')) // 2008
console.log(solution('MDCLXVI')) // 1666