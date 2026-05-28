function powers(n) {
  const result = [];
  let power = 1;

  while (n > 0) {
    if (n % 2 === 1) {
      result.push(power);
    }
    n = Math.floor(n / 2);
    power *= 2;
  }

  return result;
}
