"use strict"
// 1..............................
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b
    }
    // var x = Math.max(a,b);
}
max(3, 9);
// 2.....................................
function maxOfThree(a, b, c) {
    var max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

}
var nums = new Array(5, 99, 72);
maxOfThree(nums);

// 3.......................................
function isVowel(argument) {

    var text;
    var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++) {
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
// 4...........................................
// 4a............
function sum() {
    var result = 0;
    for (let i = 0; i < input.length; i++) {
        result += input[i];
    }
    return result;
}
var input = [1, 4, 5, 7];
// 4b.............

function multiply() {
    var result = 1;
    for (let i = 0; i < input2.length; i++) {
        result *= input2[i];
    }
    return result;
}
var input2 = new Array(1, 4, 5, 2);


// 5..............................................

function reverse(input) {
    var reversed = '';

    for (var i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}
// 6......................................................

function findLongestWord(arr) {
    let longest = "";

    for (const i of arr) {
        if (i.length > longest.length)
            longest = i;
    }
    return longest;
    console.log("The longest word is: " + longest);

}
// 7............................................................

function filterLongWords(arr, num) {
    let longestList = [];

    for (const i of arr) {

        if (i.length > num) {
            longestList.push(i);
        }
    }
    return longestList;
}
// 8......................................................................
function computeSumOfSquares(a1) {

    var b = a1.map((c) => c * c);
    var sum = b.reduce((x, y) => x + y);
    return sum;
}
const a1 = [1, 2, 3];
computeSumOfSquares(a1);

//  9......................................................................
function printOddNumbersOnly(arr) {
    var odds = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odds.push(arr[i]);
        }
    }
    return odds;
}


// 10.........................................................................
function computeSumOfSquaresOfEvensOnly(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += (arr[i] * arr[i]);
        }
    }
    return sum;
}
// 11.........................................................................
// 11a..............
function sumImperative(arr) {
    var result = arr.reduce((x, y) => x + y);
    return result;
}

// 11b.............
function multiplyImperative(arr) {
    var result = arr.reduce((x, y) => x * y);
    return result;
}

// 12........................................................................
var findSecondBiggest = function (arr) {

    var max = Math.max.apply(null, arr), // get the max of the array
        maxi = arr.indexOf(max);
    arr[maxi] = -Infinity; // replace max in the array with -infinity

    var secondMax = Math.max.apply(null, arr); // get the new max 
    arr[maxi] = max;
    return secondMax;
};

// 13..........................................................................
function printFibo(x) {
    var a = 0;
    var b = 1;
    console.log(a);
    console.log(b);
    var c, i;
    for (let i = 2; i < x; i++) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;

    }
}
// printFibo(10);

// 14.............................................................................


// 15.............................................................................
// Found inside w1d5Lab folder with the name of counter clock.html. 







