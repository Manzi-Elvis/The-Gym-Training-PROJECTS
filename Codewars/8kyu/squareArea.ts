/*
Description:
Complete the function that calculates the area of the red square,
when the length of the circular arc A is given as the input.

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

round the answer to 2 decimals
*/

export const squareArea = (num : number) : number => ((2 * num) / Math.PI) ** 2;