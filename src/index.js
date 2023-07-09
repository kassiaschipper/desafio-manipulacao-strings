import checkPalindrome from "./auxFunction/checkPalindorme.js";

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

  return result;
}

function findBiggestPalindrome(str){
  let biggestPalindrome = "";

 for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      const substring = str.slice(i, j);
      if (checkPalindrome(substring) && substring.length > biggestPalindrome.length) {
        biggestPalindrome = substring;
      }
    }
  }

  return biggestPalindrome;
}


function capitalizingFirstLetter (str){
  const sentences = str.split(/([.!?;:])\s*/);
  
  const capitalizedSentences = sentences.map((sentence, index) => {
    if (index % 2 === 0) {
     
      if (sentence.length > 0) {
        const capitalizedSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
        return capitalizedSentence;
      }
      return sentence;
    } else {
      return sentence + " ";
    }
  });
  
  const result = capitalizedSentences.join("");

  return result;
}

function isAnagramOfPalindrome(str) {
  const charCount = {};

  for (let char of str) {
    if (char !== ' ') {
      char = char.toLowerCase();
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  }

  let oddCount = 0;
  for (let count in charCount) {
    if (charCount[count] % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) {
      return "false";
    }
  }
  
  return "true";
}

isAnagramOfPalindrome("Able was I saw Elba I ere") 
capitalizingFirstLetter ("hello. how are you? i'm fine, thank you.")
invertSentenceOrder("Hello, Word! OpenAi is amazing.");
removeDuplicates("Hello, Word!");
findBiggestPalindrome("babaddeleveledsss")

