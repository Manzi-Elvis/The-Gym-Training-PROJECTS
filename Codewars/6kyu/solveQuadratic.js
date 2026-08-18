/*
Quadratic equations are equations in the form: 
Ax^2 + Bx + C = 0
You can find x's value in terms of A, B, and C, using the formula:

 x = (-b +/- sqrt(b^2 - 4*a*c))/(2 * a);
 
Your job is to write a function that takes A, B, and C, and returns
either undefined (x cannot be found; the equation is unsolveable),
or an array of possible values for x (one or two numerical values).

NOTE: A, B, or C, can be 0. In these cases, x should still be found.
This may not require the full quadratic formula to solve,
but it's up to you how to find the answer.

You should do this as efficiently as possible; square-rooting
is a pretty CPU-intensive thing, so we want to use Math.sqrt as
few times as possible. If you use Math.sqrt more than is necessary, you won't pass the kata.

*/

function solveQuadratic(a, b, c) {
  if(a === 0){
    if (b === 0) return undefined;
    return[- c / b]
  }

  if(b === 0 && c === 0){
    return[0];
  }
  if(c === 0){
    return[0, -b/a]
  }
  
  const delta = (b * b) - (4 * a * c);
  
  if(delta < 0){
    return undefined;
  }
  
  if(delta === 0){
    const x = (-b)/(2 * a);
    return [x];
  }
  
  const sqrtDelta = Math.sqrt(delta);
  return [(-b + sqrtDelta)/(2 * a), (-b - sqrtDelta) / (2 * a)];
}