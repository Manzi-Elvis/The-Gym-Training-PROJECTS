/*
Description:
In this kata you will create a function that takes a list of
non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

const filter_list = (l) =>  l.filter( item => typeof(item) === "number")

/// APROACH 2:
function filter_list2(l) {
  return l.filter(item => typeof item === "number");
}
////////// TEST CASES //////////
console.log(filter_list([1, 2, 'a', 'b']));// [1, 2]
console.log(filter_list([1, 'a', 'b', 0, 15]));// [1, 0, 15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));// [1, 2, 123]