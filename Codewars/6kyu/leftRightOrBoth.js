/*
Task
You have a keyboard like this:

!!

You strictly abide by the typing standard. That is, use the left hand
hit the left part of the keyboard, use the right hand hit the right part
of keyboard, the boundary is:

 L     1.....5 | 6.....0     R
 E     Q.....T | Y.....P     I
 F     A.....G | H.....'     G
 T     Z.....B | N...../     H
          SPACEBAR           T
Note: the SpaceBar is an exception, because both hands can be used to hit it.

Complete the function that accepts a string.

- if the string can be typed by the left hand only, return "Left"
- if the string can be typed by the right hand only, return "Right"
- if both hands are needed to type the string, return "Both"
- if the string is empty or contains only spaces, return an empty string ""

Please remember that we are discussing the keyboard above and not any other one.
The reason is that we need a standard. And we will not test characters that are
outside the control of both hands (please see the boundary).

Examples
"qwert"    -->  "Left"
"yuiop"    -->  "Right"
"abc"      -->  "Left"
"ABC"      -->  "Left"
"a b c"    -->  "Left"
"xyz"      -->  "Both"
"look up"  -->  "Right"
"^&*()"    -->  "Right"
""         -->  ""
"  "       -->  ""

*/

function leftRightOrBoth(text){
  const left = new Set("12345qwertasdfgzxcvbQWERTASDFGZXCVB");
  const right =  new Set("67890^&*()yuiophjk'lmnYUIOPHJKLNM");
  const hands = new Set();
  
  for(const t of text){
    if(t === " ")continue;
    if(left.has(t)){
      hands.add("Left")
    }
    else if(right.has(t)){
      hands.add("Right")
    }
  }
  if(hands.size === 0) return "";
  if(hands.size === 2) return "Both";
  
  return hands.values().next().value;
}

//////TEST CASES//////
console.log(leftRightOrBoth("qwert"));    // "Left"
console.log(leftRightOrBoth("yuiop"));    // "Right"
console.log(leftRightOrBoth("abc"));      // "Left"
console.log(leftRightOrBoth("ABC"));      // "Left"
console.log(leftRightOrBoth("a b c"));    // "Left"
console.log(leftRightOrBoth("xyz"));      // "Both"
console.log(leftRightOrBoth("look up"));  // "Right"
console.log(leftRightOrBoth("^&*()"));    // "Right"
console.log(leftRightOrBoth(""));         // ""
console.log(leftRightOrBoth("  "));       // ""