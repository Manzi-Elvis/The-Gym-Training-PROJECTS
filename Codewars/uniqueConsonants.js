function countConsonants(str) {
      const unique = [];
      str.toLowerCase().split('').map(char => {if(char >= "a" && char <= "z" && !"aeiou".includes(char) && !unique.includes(char) )unique.push(char);})
      return unique.length;
}