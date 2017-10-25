// Create a function that reverses a word
"use strict";

let reverseWord = function (aString) {

    let newWord = '';
    for (let i = aString.length -1; i >= 0; i -=1 ) {
        newWord += aString.charAt(i);
    }
    return newWord;

};

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

let reversedWords = function (wordArrays) {

//.map is way of for looping

    wordArrays.map(reverseWord);
//curly brace for function, semi colon is for let =
 };

// We never finished these functions. Redo them. Correct ones are at the bottom
// Create a function that returns a random word from an array



// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?


// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.



// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.


// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.

"use strict";

// Create a function that reverses a word

// Create a function that returns a random word from an array

function randomWord(words) {
  return words[Math.floor(Math.random() * words.length)];
}

const words = ["strawberry", "stitch", "indecipherable", "donut"];

const reveresedWords = reversedWords(words);

// Create a function that takes an array of words and returns a map with the
// keys as the reversed word and the values as the original word.


function reverseWordAnswers(words) {
  let wordReverse = new Map();
  for (let word of words) {
    wordReverse.set(reverseWord(word), word);
  }
  return wordReverse;
}

// Create a function that takes two strings and a map, like the one you created
// above. If the first string matches the value of the scrambled word in the map,
// return true, otherwise return false

function checkWord(guess, scrambledWord, wordMap) {
  if (wordMap.get(scrambledWord) === guess) {
    return true;
  } else {
    return false;
  }
}
////////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

function scramble(str) {
    return str.split('').sort(function()
        {
            return 0.5-Math.random()
        }).join('');
}

function scrambleWordAnswers(words) {
  let wordReverse = new Map();
  for (let word of words) {
    wordReverse.set(scramble(word), word);
  }
  return wordReverse;
}

function scrambleWords(words) {
  return words.map(scramble);
}

function getRandomScramble(wordMap) {
  return randomWord(Array.from(wordMap.keys()));
}
