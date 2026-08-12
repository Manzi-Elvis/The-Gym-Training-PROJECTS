// Make me slow! Calling makeMeSlow() should take at least 7 seconds.
const makeMeSlow = () => {
  const start = Date.now();
  while((Date.now() - start) < 7000){}
}