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

    for (let i = input.length - 1; i >= 0; i--) {
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
// or.....................................
// function filterLongWords2(arr, num){
//     return arr.filter(w=>w.length > num);
// }
// 8......................................................................
function computeSumOfSquares(a1) {

    var b = a1.map((c) => c * c);
    var sum = b.reduce((x, y) => x + y);
    return sum;
}
const a1 = [1, 2, 3];
computeSumOfSquares(a1);
// 0r .........................................
function computeSumOfSquares2(nums){
    return nums.map(n => n*n).reduce((s1, s2)=> s1 + s2);
}


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
// or .............................................
function printOddNumbersOnly2(nums){
    return nums.filter(n =>( n % 2 != 0)).forEach(o => console.log(0))
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
function computeSumOfSquaresOfEvensOnly2(nums){
    return nums.filter(n => n % 2 === 0).map( n => n*n).reduce((s1,s2) => s1+s2);
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
//    Done in w1d4WebFormLab on both webForm1.html and webForm2.html as the following

document.getElementById("btnSubmit").onclick = function () {
    let pnumber = document.getElementById("productNumber");
    let n = document.getElementById("name");
    let uprice = document.getElementById("unitPrice");
    let qstack = document.getElementById("quantityInStock");
    let supp = document.getElementById("supplier");
    let dateS = document.getElementById("dateSupplied");

    window.alert("Product number = " + pnumber.value + ", " + "Name = " + n.value + ", " + "Unit Price = " + uprice.value + ", " + "Quantity in siock = " + qstack.value + ", " + "Supplier = " + supp.value + ", " + "Date supplied = " + dateS.value);
}
document.getElementById("submit").onclick = function (){
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    console.log(email.value);
    console.log(password.value);           

};

// 15.............................................................................
// Found inside w1d5Lab folder with the name of counterClock.html as










