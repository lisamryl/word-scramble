

function swapLetters(wordList) {
    //randomly generating a number in range of length of wordList
    let firstIndex = Math.floor(Math.random() * wordList.length);
    let secondIndex = Math.floor(Math.random() * wordList.length);

    let returnList = wordList;

    returnList[firstIndex] = wordList[secondIndex];
    returnList[secondIndex] = wordList[firstIndex];

    return returnList;
}

function printCandyMap(color, candyMap) { 
    if (candyMap.has(color)) {
        return candyMap.get(color);
    } else {
        console.log("Sorry, that color doesn't have a flavor, and I'm not
            printing your typo.");
    }
}

//horrifyingly ugly thing that can be pasted into console
let candyMap = new Map ([['purple', 'grape'], ['blue', 'blueberry'], ['red', 'red flavor'], ['yellow', 'lemon'], ['green', 'lime' ]])
function printCandyMap(color, candyMap) { if (candyMap.has(color)) {return candyMap.get(color);} else {console.log("Sorry, that color doesn't have a flavor, and I'm not printing your typo.");}}
