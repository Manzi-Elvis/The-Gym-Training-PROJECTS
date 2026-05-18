function countConsonants(str) {
      const vowels = "aeiou";
      const unique = [];
      let count = 0;
      str.toLowerCase().split('').map(char =>{
            if(char >= "a" && char <= "z" && !vowels.includes(char) && !unique.includes(char) ){
                  unique.push(char);
            }
      })
    return unique.length;
}