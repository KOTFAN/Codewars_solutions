//vectors colinearity

function collinearity(x1, y1, x2, y2) {
   if (x1 * y2 === y1 * x2) {//x1/x2 === y1/y2 => x1*y2===y1*x2
      return true;
   } else {
      return false;
   }

}

//=============================================
//neutralise

function neutralise(s1, s2) {
   let res = '';
   for (let i = 0; i < s1.length; i++) {
      if (s1[i] === s2[i]) {
         res = res + s1[i];
      }
      else {
         res = res + '0';
      }

   }
   return res;
}
//=============================================

//Upeprcase
function makeUpperCase(str) {
   return str.toUpperCase()
}



//The Wide-Mouthed frog!


function mouthSize(animal) {
   if (animal.toUpperCase() !== 'ALLIGATOR') {
      return "wide";
   }
   else {
      return "small";
   }
}

//======================================================


//Flick Switch
function flickSwitch(arr) {
   let res = [];
   let isflickhere = false;

   for (let i = 0; i < arr.length; i++) {

      if (arr[i] == "flick") {
         isflickhere = !isflickhere;
      }


      isflickhere ? res.push(false) : res.push(true)

   }

   return res;
}



//quadrant

function quadrant(x, y) {
   let res = 1;
   if (x * y > 0) {
      x > 0 ? res = 1 : res = 3;
   }
   else {
      x < 0 ? res = 2 : res = 4;
   }

   return res;
}


//Check same case


function sameCase(a, b) {


   let aInASCII = a.charCodeAt()
   let isaLetter = (aInASCII > 64 && aInASCII < 91) || (aInASCII > 96 && aInASCII < 123)


   let bInASCII = b.charCodeAt()
   let isbLetter = (bInASCII > 64 && bInASCII < 91) || (bInASCII > 96 && bInASCII < 123)



   return (isaLetter && isbLetter) ? (((aInASCII > 64 && aInASCII < 91) && (bInASCII > 64 && bInASCII < 91)) || ((aInASCII > 96 && aInASCII < 123) && (bInASCII > 96 && bInASCII < 123)) ? 1 : 0) : -1;
}



//Odd or even


function evenOrOdd(number) {
   return number % 2 ? "Odd" : "Even"
}



//String Templates - Bug Fixing #5

function buildString(...template) {
   return `I like ${template.join(', ')}!`;
}






//Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s) {

   const vowels = 'aeiouAEIOU';

   let arr = s.split("")

   for (let i = 0; i < arr.length; i++) {

      if (vowels.includes(arr[i])) {

         arr[i] = '!'
      }


   }
   let res = arr.join("");

   return res;
}


//


const STRANGE_STRING = "ß"

// const upDownLen = STRANGE_STRING.toUpperCase().toLowerCase().length === 2 (will be ss)

//========================================================





//Gravity Flip

const flip = (d, a) => {
   for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length - 1; j++) {
         if (a[j] > a[j + 1]) {
            const temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
         }
      }


   }

   return d === 'R' ? a : a.reverse()
}


//========================================================


//Quadratic Coefficients Solver 
function quadratic(x1, x2) {
   return [1, -x1 - x2, x1 * x2];
}



//Quarter of the year

const quarterOf = (m) => {
   if (m <= 3) {
      return 1
   } else if (m <= 6) {
      return 2
   } else if (m <= 9) {
      return 3
   }
   else {
      return 4
   }

}


//=========================================


//A wolf in sheep's clothing


function warnTheSheep(queue) {
   queue = queue.reverse();
   let woolfIndex = queue.indexOf("wolf")
   if (woolfIndex !== 0) {
      return `Oi! Sheep number ${woolfIndex}! You are about to be eaten by a wolf!`
   }
   return "Pls go away and stop eating my sheep"
}


//=========================================


//Total amount of points

function points(games) {
   let x = [];
   let y = [];
   let res = 0
   for (let i = 0; i < games.length; i++) {
      x.push(parseInt(games[i].slice(0, 1)))
      y.push(parseInt(games[i].slice(2, 3)))
   }

   for (let i = 0; i < games.length; i++) {
      if (x[i] > y[i]) {
         res += 3
      } else if (x[i] === y[i]) {


         res += 1
      }
   }

   return res
}


//=========================================



//Take the Derivative



function derive(c, e) {
   return `${c * e}x^${e - 1}`
}



//=========================================

//Surface Area and Volume of a Box
function getSize(width, height, depth) {
   return [2 * ((width * height) + (height * depth) + (width * depth)), width * height * depth]
}



//Return the day


function whatday(num) {

   const days = [0, "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

   return days[num] ? days[num] : "Wrong, please enter a number between 1 and 7"

}
//=========================================




//Unfinished Loop - Bug Fixing #1
function createArray(number) {
   const newArray = [];
   for (let counter = 1; counter <= number; counter++) {
      newArray.push(counter);
   }
   return newArray;
}

//=========================================


//Grasshopper - Bug Squashing



// var health = 100
// var position = 0
// var coins = 0

// function main (health,position,coins) {
//   rollDice()
//   move()
//   combat()
//   getCoins()
//   buyHealth()
//   printStatus()
// }



//=========================================

//Find the Integral


function integrate(c, e) {
   return `${c / (e + 1)}x^${e + 1}`
}



//=========================================


//Multiplication table for number

function multiTable(number) {
   let str = '';
   for (let i = 1; i <= 10; i++) {
      str = str + `${i} * ${number} = ${i * number}\n`
   }
   return str.slice(0, str.length - 1);
}


//Multiply

function multiply(a, b) {
   return a * b
}

//makeNegative
function makeNegative(num) {
   return num > 0 ? -1 * num : num
}



//  Sum of positive


function positiveSum(arr) {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
         sum = sum + arr[i]
      }
   }

   return sum;
}


//Reversed Strings
function solution(str) {
   return str.split('').reverse().join('')
}


//Convert a Number to a String!

function numberToString(num) {
   return `${num}`
}



//Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
   return bool ? "Yes" : "No"
}


//Square(n) Sum

function squareSum(numbers) {
   let res = 0;
   for (let i = 0; i < numbers.length; i++) {
      res += numbers[i] ** 2;
   }
   return res;
}


//Opposite number

function opposite(number) {
   return -number
}


//Remove First and Last Character

function removeChar(str) {
   return str.slice(1, str.length - 1)

};


//String repeat
function repeatStr(n, s) {
   return s.repeat(n);
}




//Grasshopper - Summation

function summation(num) {
   let sum = 0;

   for (let i = num; i > 0; i--) {
      sum += i
   }
   return sum
}


//Find the smallest integer in the array


function findSmallestInt(arr) {
   let min = arr[0];

   for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
         min = arr[i];
      }
   }

   return min;
}

//Remove String Spaces
function noSpace(x) {
   return x.split(" ").join('')
}



//Counting sheep...

function countSheeps(sheep) {
   let count = 0;
   for (let i = 0; i < sheep.length; i++) {
      sheep[i] ? count += 1 : count
   }
   return count
}


//Convert a String to a Number!
const stringToNumber = function (str) {
   return parseInt(str);
}


//Basic Mathematical Operations


function basicOp(op, v1, v2) {
   if (op === '+') {
      return v1 + v2;
   } else if (op === '-') {
      return v1 - v2;
   } else if (op === '*') {
      return v1 * v2;
   } else {
      return v1 / v2
   }

}


//Abbreviate a Two Word Name


function abbrevName(name) {
   name = name.toUpperCase().split(' ')
   name[0] = name[0].slice(0, 1)
   name[1] = name[1].slice(0, 1)
   return name.join('.')

}


//Century From Year


function century(year) {
   const strYear = year.toString();
   const fNums = +strYear.slice(0, strYear.length - 2)
   const lNums = +strYear.slice(strYear.length - 2, strYear.length)
   if (lNums !== 0) {
      return fNums + 1;
   }

   return fNums;
}

//Keep Hydrated!


function litres(time) {
   return Math.floor(time / 2);
}



//Convert number to reversed array of digits


function digitize(n) {
   return n.toString().split('').reverse().map(Number)
}


//Returning Strings


function greet(name) {
   return `Hello, ${name} how are you doing today?`
}

//Opposites Attract
function lovefunc(flower1, flower2) {
   return flower1 % 2 !== flower2 % 2 ? true : false
}


//A Needle in the Haystack

function findNeedle(haystack) {
   return `found the needle at position ${haystack.indexOf('needle')}`
}



//Is n divisible by x and y?
function isDivisible(n, x, y) {
   return !!(n % x === 0 && n % y === 0)
}

//Beginner - Lost Without a Map

function maps(x) {
   let arr = [];
   for (let i = 0; i < x.length; i++) {
      arr.push(2 * x[i])
   }
   return arr
}


//Beginner Series #1 School Paperwork

function paperwork(n, m) {
   if (n < 0 || m < 0) {
      return 0;
   }
   return n * m;
}


//Are You Playing Banjo?

function areYouPlayingBanjo(name) {

   return name[0].toUpperCase() === 'R' ? `${name} plays banjo` : `${name} does not play banjo`;
}

//Convert a Boolean to a String
function booleanToString(b) {
   return b.toString()
}


//Sum Arrays

function sum(numbers) {
   let sum = 0;

   for (let i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i]
   }

   return sum;
}





//How good are you really?

function betterThanAverage(classPoints, yourPoints) {
   let meanInClass = 0;


   for (let i = 0; i < classPoints.length; i++) {
      meanInClass = meanInClass + classPoints[i]
   }
   meanInClass = meanInClass / (classPoints.length)

   return meanInClass < yourPoints


}




//Beginner Series #2 Clock

function past(h, m, s) {
   return 1000 * (h * 60 * 60 + m * 60 + s)
}


//Calculate average
function findAverage(array) {
   let mean = 0;
   if (array.length) {

      for (let i = 0; i < array.length; i++) {
         mean += array[i]
      }

      mean = mean / array.length
   }

   return mean;
}



// Invert values


function invert(array) {

   if (array.length) {
      let result = [];
      for (let i = 0; i < array.length; i++) {
         result.push(-array[i])
      }
      return result;
   }
   return [];
}

//Simple multiplication
function simpleMultiplication(n) {
   return n % 2 ? n * 9 : n * 8
}




//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
   if (input && input.length) {
      let count = [0, 0]

      for (let i = 0; i < input.length; i++) {
         if (input[i] > 0) {
            count[0] += 1;
         } else {
            count[1] += input[i]
         }

      }
      return count;
   }
   return [];
}




//Sentence Smash
function smash(words) {

   return words.join(' ')
};



//Fake Binary
function fakeBin(x) {
   let bin = x.split('');

   for (let i = 0; i < bin.length; i++) {
      bin[i] = parseInt(bin[i]);
      if (bin[i] < 5) {
         bin[i] = 0;
      } else {
         bin[i] = 1;
      }
   }

   return bin.join('');

}


//You only need one - Beginner
function check(a, x) {
   return a.includes(x)
}