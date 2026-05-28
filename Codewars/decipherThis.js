const decipherThis = (str) => {
  return str.split(" ").map( word => {
    const code = word.match(/^\d+/)[0]
    const first = String.fromCharCode(code)
    let chars = word.slice(code.length).split("")
    if(chars.length > 1){
      [chars[0] , chars[chars.length - 1]] = [chars[chars.length - 1] , chars[0]]
    }
    return first + chars.join("")
  })
  .join(" ")
}

// TEST EXAMPLES:

decipherThis("72olle 103doo 100ya");
// "Hello good day"

decipherThis("82yade 115te 103o");
// "Ready set go"