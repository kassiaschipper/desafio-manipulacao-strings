import checkPalindrome from "./auxFunction/checkPalindorme.js";

export default function invertSentenceOrder(str) {

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
  if(str.length === 0){
    return str;
  }
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
  
  const result = capitalizedSentences.join("").trim();
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
capitalizingFirstLetter ("capitalize me. don't forget!")
invertSentenceOrder("Hello, Word! OpenAi is amazing.");
removeDuplicates("Hello, Word!");
findBiggestPalindrome("babaddeleveledsss")

/*---------------------- CASOS DE TESTE ------------------------------------------*/

function testInvertSentenceOrder() {
  console.log("\nCasos de Teste Q1");

  const testCases = [
    { str: "Hello World", expected: "World Hello" },
    { str: "The quick brown fox", expected: "fox brown quick The" },
    { str: "JavaScript is fun", expected: "fun is JavaScript" }
  ];

  for (let testCase of testCases) {
    const result = invertSentenceOrder(testCase.str);
    const isEqual = result === testCase.expected;
    console.log(`String: "${testCase.str}" - Expected: "${testCase.expected}" - Result: "${result}" - Pass: ${isEqual}`);
  }
}

testInvertSentenceOrder();

function testRemoveDuplicates() {
  console.log("\nCasos de Teste Q2");
  const testCases = [
    { str: "aabbcc", expected: "abc" },
    { str: "Hello", expected: "Helo" },
    { str: "Mississippi", expected: "Misisipi" }
  ];

  for (let testCase of testCases) {
    const result = removeDuplicates(testCase.str);
    const isEqual = result === testCase.expected;
    console.log(`String: "${testCase.str}" - Expected: "${testCase.expected}" - Result: "${result}" - Pass: ${isEqual}`);
  }
}

testRemoveDuplicates();

function testFindBiggestPalindrome() {
  console.log("\nCasos de Teste Q3");
  const testCases = [
    { str: "level", expected: "level" },
    { str: "racecar", expected: "racecar" },
    { str: "abcddcba", expected: "abcddcba" },
    { str: "hello", expected: "ll" },
    { str: "abccba", expected: "abccba" }
  ];

  for (let testCase of testCases) {
    const result = findBiggestPalindrome(testCase.str);
    const isEqual = result === testCase.expected;
    console.log(`String: "${testCase.str}" - Expected: "${testCase.expected}" - Result: "${result}" - Pass: ${isEqual}`);
  }
}

testFindBiggestPalindrome();

function testCapitalizingFirstLetter() {
  console.log("\nCasos de Teste Q4");
  const testCases = [
    { str: "hello. how are you? i'm fine, thank you.", expected: "Hello. How are you? I'm fine, thank you." },
    { str: "this is a test. it should work!", expected: "This is a test. It should work!" },
    { str: "capitalize me. don't forget!", expected: "Capitalize me. Don't forget!" },
    { str: "one. two. three.", expected: "One. Two. Three." },
    { str: "hello.", expected: "Hello." },
    { str: "", expected: "" }
  ];

  for (let testCase of testCases) {
    const result = capitalizingFirstLetter(testCase.str);
    const isEqual = result == testCase.expected;
    console.log(`String: "${testCase.str}" - Expected: "${testCase.expected}" - Result: "${result}" - Pass: ${isEqual}`);
  }
}

testCapitalizingFirstLetter();
function testIsAnagramOfPalindrome() {
  console.log("\nCasos de Teste Q5");
  const testCases = [
    { str: "racecar", expected: "true" },
    { str: "level", expected: "true" },
    { str: "Able was I ere I saw Elba", expected: "true" },
    { str: "hello", expected: "false" },
    { str: "aabbb", expected: "true" },
    { str: "abca", expected: "false" },
    { str: "aabbc", expected: "true" }
  ];

  for (let testCase of testCases) {
    const result = isAnagramOfPalindrome(testCase.str);
    const isEqual = result === testCase.expected;
    console.log(`String: "${testCase.str}" - Expected: ${testCase.expected} - Result: ${result} - Pass: ${isEqual}`);
  }
}

testIsAnagramOfPalindrome();

