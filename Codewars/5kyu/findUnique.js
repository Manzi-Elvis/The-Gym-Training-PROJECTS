/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

This is the second kata in series:

Find the unique number
Find the unique string (this kata)
Find The Unique
*/

function findUniq(arr) {
  const result = arr.map(s => [...new Set(s.toLowerCase())].sort().join(''));
  return arr[result.findIndex(p => result.indexOf(p) === result.lastIndexOf(p))]
}

// OTHER APPROACHES:

findUniq2=(a,b=a.map(a=>[[...new Set(a.toLowerCase())].sort().join``,a]),c=b.map(a=>a[0]))=>b[c.findIndex(a=>c.indexOf(a)==c.lastIndexOf(a))][1]
function findUniq3(arr) {
   return arr.sort().filter((e, i, a) => e.match(new RegExp(`[^${a[1]}]`, 'gi')))[0];
}
let findUniq4 = xs => xs.find((x, i) => [...x].some(c => !xs.some((y, j) => i !== j && new RegExp(c, 'i').test(y))));

// TEST CASES
console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a'])); // "BbBb"
console.log(findUniq(['abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba'])); // "foo"