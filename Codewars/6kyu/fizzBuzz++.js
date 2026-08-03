/*
Description:
There is a common problem given to interviewees in software, called FizzBuzz.
It works as follows: for the numbers between 1 and 100, print "fizz" if it is 
a multiple of 3 and "buzz" if it is a mutiple of 5, else print the number itself.

You are in an interview and they ask you to complete fizzbuzz 
(which can be done in a one-liner in a few langs) and you knock it out of the park.

Task
Surprised by your ability, the interviewer gives you a harder problem.
Given a list of coprime numbers, (that is that the greatest common
divisor of all the numbers = 1) and an equally sized list of words,
compute its fizzbuzz representation up until the pattern of strings repeats itself.

Notes:

- Your function should return a list/array, not print it.
- The list of numbers should start from 1.
- The strings are always concatenated from left to right in the appearance
of the given list of words.
- The list of numbers may not always be sorted - just use the given order of the numbers.
- All numbers in the first array will always be coprime. This is a safe assumption
for your program.
- The list stops where it does because if you were to filter the numbers out,
the remaining strings would repeat after this point.
Hint: What is the relation to the numbers given in the list and the length of the list?

Example
fizzbuzzPlusPlus([2, 3, 5], ['fizz', 'buzz', 'bazz'])
should return

[1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7, 'fizz', 'buzz',
'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17,
'fizzbuzz', 19, 'fizzbazz', 'buzz', 'fizz', 23, 'fizzbuzz',
'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']
*/

function fizzbuzzPlusPlus(numbers, words) {
  const limit = numbers.reduce((product, n) => product * n, 1);
  const result = [];
  for(let i = 1; i <= limit; i++){
    let text = "";
    for(let j = 0; j < numbers.length; j++){
      if(i % numbers[j] === 0){
        text += words[j];
      }
    }
    result.push(text || i)
  }
    return result;
}