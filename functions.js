/**
 * Part 1
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    var forwardStr = String(str);                        //converts input to string, stores in Str
    var reverseStr = "";                                 //creates empty string reverseStr
    for (var i = forwardStr.length - 1; i >= 0; i--) {   //iterates through user input beginning w last char
      reverseStr += forwardStr[i];                       //appends characters to empty str reverseStr                                                   // outsputs
    }
    //console.log(reverseStr);
    return reverseStr;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 2
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
  var splitString = sentence.split(" ");
  var longest_word = "";
  //console.log(splitString);
  for (var i = 0; i < splitString.length; i++) {
    if (splitString[i].length > longest_word.length) {
      longest_word = splitString[i];
    }
  }
    // console.log(longest_word)
    return longest_word;
}

// console.log(findLongestWord("apple orange"));

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Florida") === "Florida")

/**
 * Part 3
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  //  console.log(sum);
    return sum;
}


console.assert(sumOfArray([1, 2]) === 3);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3]) === 6);
console.assert(sumOfArray([10, 9, 8]) === 27);

/**
 * Part 4
 *
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

function sum(a, b){
  var additionIsFun = a + b;
  return additionIsFun;

}

console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

/**
 * Part 5
 *
 * write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b){
  if (a === b) {
    return a;
  } else if (a>b) {
    return GCD(a-b,b);
  } else if (a<b) {
    return GCD(a,b-a);
  }
}

console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);

/**
 * Part 6
 *
 * write a function that prints out the Least Common Multiple of two numbers
 */

function LCM(a, b){
  if ((typeof a !== 'number') || (typeof b !== 'number'))
      return false;
    return (!a || !b) ? 0 : Math.abs((a * b) / GCD(a, b));
  }

console.assert(LCM(10,10) === 10)
console.assert(LCM(2,5) === 10)
console.assert(LCM(3,6) === 6)
console.assert(LCM(0,1) === 0)
