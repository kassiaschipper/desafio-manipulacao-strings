function invertSentenceOrder(str) {

  const stringToArray = str.split(" ");
  const invertedSentence = stringToArray.reverse();
  const finalSentence = invertedSentence.join(" ");

  return finalSentence;
}

function removeDuplicates(str) {
  let result = "";

  for(let i = 0; i<str.length; i++) {
   
    if(new String(str[i]).toLowerCase() !== new String(str[i+1]).toLowerCase()){
      result += str[i]
    }
  
  }
  console.log(result)
  return result;
}

removeDuplicates("Hello, Word!");
invertSentenceOrder("Hello, Word! OpenAi is amazing.");
