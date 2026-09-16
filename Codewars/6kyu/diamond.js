/*
Task
You need to return a string that looks like a diamond shape when printed on the screen,
using asterisk (*) characters. Trailing spaces should be removed, and every line must
be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative,
as it is not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n){
  if(n <= 0 || n % 2 === 0) return null;
  let result = ""
  for(let i = 1; i <= n; i += 2){
    result += " ".repeat((n - i) / 2);
    result += "*".repeat(i);
    result += "\n"
  }
  for(let i = n - 2; i >= 1; i -= 2){
    result += " ".repeat((n - i) / 2);
    result += "*".repeat(i);
    result += "\n"
  }
  return result;
}