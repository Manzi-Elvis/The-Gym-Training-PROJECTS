/*
Pythagoras(569-500 B.C.E.) discovered the relation a² + b² = c² for
rectangle triangles,a, b and c are the side values of these special triangles.
A rectangle triangle has an angle of 90°. In the following animated image,
you can see a rectangle triangle with the side values of (a, b, c) = (3, 4, 5)
The pink square has an area equals to 9 (a² = 3²),
the green square an area equals to 16 (b² = 4²) and
the square with pink and green an area of 25 (c² = 5²)
Adding the pink area to the green one, we obtain 9 + 16 = 25

source: imgur.com

A Pythagorean Triple (a, b, c) is such that a ≤ b < c, the three
are integers, and a² + b² = c².

A Primitive Pythagorean Triple has another  additional 
property: a, b and c are co-primes. Two numbers are co-primes when
the Greatest Common Divisor of every pair of the triple is 1. So G.C.D.(a, b) = 1,
G.C.D.(b, c) = 1 and G.C.D.(a, c) = 1

Just to visualize the primitives triples, we may see them, each one
represented like a rectangle triangle displayed in a 2D arrengement
done by Adam Cunningham and John Ringland (March 2012):

source: imgur.com

The perimeter for a pythagorean triple is: per = a + b + c

The first 16 primitive pythagorean triples with their corresponding perimeter beside,
having c below or equal 100 (c ≤ 100) are:

 (3, 4, 5),   12        (5, 12, 13),  30          (8, 15, 17),  40        (7, 24, 25),  56
(20, 21, 29), 70        (12, 35, 37), 84          (9, 40, 41),  90        (28, 45, 53), 126
(11, 60, 61), 132       (16, 63, 65), 144         (33, 56, 65), 154       (48, 55, 73), 176
(13, 84, 85), 182       (36, 77, 85), 198         (39, 80, 89), 208       (65, 72, 97), 234

The primitive triple that has the maximum perimeter, with c ≤ 100 is (65, 72, 97)
with a perimeter equals to 234

Your task is to make a function that receives an argument returns
the triple with the maximum perimeter having the side c below or equal its argument.

The function will output a 2D array, see examples bellow

findMaxTriple(50) == 
[['number triples below-eq 50',7],['max perimeter', 90], ['largest triple', [[9, 40, 41]]]];

findMaxTriple(100) == 
[['number triples below-eq 100', 16], ['max perimeter', 234], ['largest triple', [[65, 72, 97]]]];

findMaxTriple(150) == 
[['number triples below-eq 150', 24], ['max perimeter', 340], ['largest triple', [[51, 140, 149]]]];
Hint, see at: https://en.wikipedia.org/wiki/Formulas_for_generating_Pythagorean_triples

Your code will be tested for values of c_max up to 10000.

(Memoizations is advisable)

*/

function findMaxTriple(cMax) {
  let count = 0;
  let maxPer = 0;
  let best = [];
  
  function gcd(a,b){
    while(b){
      [a,b] = [b, a % b];
    }
    return a;
  }
  for(let m = 2; m * m <= cMax; m++){
    for(let n = 1; n < m; n++){
      if(((m - n) & 1) === 0) continue;
      if(gcd(m, n) !== 1)continue;
      
      let a = m * m - n * n;
      let b = 2 * m * n;
      let c = m * m + n * n;
      
      if(c > cMax) continue;
      if(a > b) [a, b] = [b, a];
      
      count++;
      
      let per = a + b + c;
      
      if(per > maxPer){
        maxPer = per;
        best = [a, b, c];
      }
    }
  }
    return [
      ["number triples below-eq " + cMax, count],
      ["max perimeter" , maxPer],
      ["largest triple" , [best]]
    ];
}