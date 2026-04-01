function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const avg = classPoints.reduce((a,b) => a + b, 0) / classPoints.length;
  return yourPoints > avg;
}