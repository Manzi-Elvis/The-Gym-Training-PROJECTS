/*
Integral numbers can be even or odd.

Even numbers satisfy n = 2m ( with m also integral ) and we will
 ( completely arbitrarily ) think of odd numbers as n = 2m + 1.

Now, some odd numbers can be more odd than others: when for some n,
 m is more odd than for another's. Recursively. :]
Even numbers are just not odd.

Task:
     Given a finite list of integral ( not necessarily non-negative ) numbers,
     determine the number that is odder than the rest.
     If there is no single such number, no number is odder than the rest;
     return Nothing, null or a similar empty value.

Examples
oddest([1,2]) => 1
oddest([1,3]) => 3
oddest([1,5]) => null
Hint
Click here.
How odd is -1 ?
*/

function oddness(n: number) : number {
  let score = 0;
  while(n % 2 !== 0){
    score++;
    if(n === -1) return Infinity;
    n =  (n - 1) / 2;
  }
  return score;
}
export function oddest(a: number[]): number | null {
  if(a.length === 0) return null;
  const scores = a.map(oddness);
  const highest = Math.max(...scores);
  const oddestNum = a.filter((curr, i ) => scores[i] === highest)
  return oddestNum.length === 1 ? oddestNum[0] : null;
}

// EXPLANATION:

/*
The code works by first defining an oddness() function that calculates how odd
a number is by repeatedly checking whether it is odd using n % 2 !== 0, increasing
the score each time, and transforming the number into (n - 1) / 2 until it becomes
even; if the number reaches -1, it returns Infinity because applying the transformation
would keep it at -1 forever. The oddest() function then checks whether the input array is
empty and returns null if it is; otherwise, it uses map() to calculate the oddness score
of every number, Math.max(...scores) to find the highest score, and filter() to collect
all numbers whose scores equal that maximum. Finally, it returns the number if exactly
one number has the highest score, or null if multiple numbers tie for the highest score.
*/