function solve(s){
      const isPalindrome = (str) => {
            const rev = str.split('').reverse().join('')
            if(rev === str){
                  return "OK"
            }
      }
      let left = 0;
      let right = s.length - 1;
      while(left < right){
            if(s[left] !== s[right]){
                  const skipLeft = s.slice(0, left) + s.slice(left + 1)
                  const skipRight = s.slice(0, right) + s.slice(right + 1)
                  if(isPalindrome(skipLeft) || isPalindrome(skipRight)){
                        return "remove one"
                  }
                  return "not possible"
            }
            left++;
            right--;
      }

      return "OK";
}