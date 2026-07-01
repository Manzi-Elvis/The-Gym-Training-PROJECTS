/*
Your task is simply to count the total number of lowercase letters in a string.

Examples:
      "abc" ===> 3
      "abcABC123" ===> 3
      "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
      "" ===> 0;
      "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
      "abcdefghijklmnopqrstuvwxyz" ===> 26
*/

const lowercaseCount = (str) =>{
      let count = 0;
      for(const char of str){
            const code = char.charCodeAt(0)
            count += code >= 97 && code <= 122 ? 1 : 0;
      }
      return count
}

///////////////OR///////////////
lowercaseCount2=s=>(s.match(/[a-z]/g)||[]).length;