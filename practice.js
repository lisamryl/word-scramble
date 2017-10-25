"use strict";

function swapLetters(wordList) {
    //randomly generating a number in range of length of wordList
    //floor rounds down all decimals
    let firstIndex = Math.floor(Math.random() * wordList.length);
    let secondIndex = Math.floor(Math.random() * wordList.length);

//logic of swap:
//a to temp, temp to b, b to a
    let temp = wordList[secondIndex];
    wordList[secondIndex] = wordList[firstIndex];
    wordList[firstIndex] = wordList[temp];

    // return wordList;
}

function printCandyMap(color, candyMap) { 
    if (candyMap.has(color)) {
        return candyMap.get(color);
    } else {
        console.log("Sorry, that color doesn't have a flavor, and I'm not printing your typo.");
    }
}

//horrifyingly ugly thing that can be pasted into console
let candyMap = new Map ([['purple', 'grape'], 
                         ['blue', 'blueberry'],
                         ['red', 'red flavor'],
                         ['yellow', 'lemon'],
                         ['green', 'lime' ]]);
// function printCandyMap(color, candyMap) { if (candyMap.has(color)) {return candyMap.get(color);} else {console.log("Sorry, that color doesn't have a flavor, and I'm not printing your typo.");}}
