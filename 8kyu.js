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