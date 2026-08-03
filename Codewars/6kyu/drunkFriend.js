/*
You're hanging out with your friends in a bar, when suddenly one
of them is so drunk, that he can't speak, and when he wants to say
something, he writes it down on a paper. However, none of the
words he writes make sense to you. He wants to help you, so he
points at a beer and writes "yvvi". You start to understand what
he's trying to say, and you write a script, that decodes his words.

Keep in mind that numbers, as well as other characters, can be
part of the input, and you should keep them like they are. You should
also test if the input is a string. If it is not, return "Input is not a string".
*/
function decode(str) {
  if(typeof str !== "string") return "Input is not a string";
  let result = "";
  for(let i = 0; i < str.length; i++){
      let code = str.charCodeAt(i)
      if(code >= 97 && code <= 122){
            result += String.fromCharCode(122 - (code - 97));
      }
      else if(code >= 65 && code <= 90){
            result += String.fromCharCode(90 - (code - 65));
      }
      else{
            result += str[i]
      }
  }
  return result;
}

decode("yvvi")// "beer"
decode("Blf zoivzwb szw 10 yvvih")// "You already had 10 beers"
decode("Ovg'h hdrn rm gsv ulfmgzrm!")// "Let's swim in the fountain!"
decode({})// "Input is not a string"
decode("Tl slnv, blf'iv wifmp")// "Go home, you're drunk"
decode("Hfiv r xzm wzmxv lm xlk'h xzi, slow nb yvvi")// "Sure i can dance on cop's car, hold my beer"
decode(true)// "Input is not a string"// "Input is not a string"
decode([])// "Input is not a string"