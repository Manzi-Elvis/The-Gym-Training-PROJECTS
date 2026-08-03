var encryptThis = (text) => {
  return text.split(" ").map(word => {
    if(word.length === 0) return 0;
    const chars = word.split("")
    const first = chars[0].charCodeAt(0)
    if(chars.length > 2){
      [chars[1], chars[chars.length - 1]] = [chars[chars.length - 1], chars[1]]
    }
    return first + chars.slice(1).join("")
  })
  .join(" ")
};

// TEST EXAMPLES:
encryptThis("Hello");        // "72olle"
encryptThis("good");         // "103doo"
encryptThis("hello world");  // "104olle 119drlo"
encryptThis("A");            // "65"
encryptThis("Ab");           // "65b"