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

//Beginner - Reduce but Grow
function grow(x) {
   let res = 1;
   for (let i = 0; i < x.length; i++) {
      res *= x[i]
   }
   return res;

}


//Calculate BMI

function bmi(w, h) {
   let res = w / (h ** 2)
   return res > 30 ? "Obese" : (res <= 18.5 ? "Underweight" : (res <= 25 ? "Normal" : "Overweight"))
}



//Reversed sequence
const reverseSeq = n => {
   let res = [];
   for (n; n > 0; n--) {
      res.push(n)
   }
   return res;
};



//Is he gonna survive?
function hero(bullets, dragons) {
   return dragons <= bullets / 2
}



//Count by X
function countBy(x, n) {
   let z = [];

   for (n; n > 0; n--) {
      z.push(n * x)
   }

   return z.reverse();
}


//Will you make it
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
   return distanceToPump <= mpg * fuelLeft
};

//DNA to RNA Conversion
function DNAtoRNA(dna) {
   return dna.split('').map((l) => l === 'T' ? l = 'U' : l).join('')
}



//You Can't Code Under Pressure #1
function doubleInteger(i) {
   // i will be an integer. Double it and return it.
   return 2 * i;
}

//Rock Paper Scissors!
const rps = (p1, p2) => {
   if (p1 === p2) {
      return "Draw!"
   } else {
      return (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') || (p1 === 'rock' && p2 === 'scissors') ? "Player 1 won!" : "Player 2 won!"
   }
};



//If you can't sleep, just count sheep!!
const countSheep = (num) => {
   let res = '';
   for (let i = 1; i <= num; i++) {
      res += `${i} sheep...`
   }
   return res;
}



//Convert a string to an array
let stringToArray = (string) => string.split(' ')


const min = function (list) {
   let min = list[0];
   if (list.length > 1) {

      for (let i = 1; i < list.length; i++) {
         if (min > list[i]) {
            min = list[i]
         }
      }
   }
   return min;
}


//Find Maximum and Minimum Values of a List
const min1 = function (list) {
   let min = list[0];
   if (list.length > 1) {

      for (let i = 1; i < list.length; i++) {
         if (min > list[i]) {
            min = list[i]
         }
      }
   }
   return min;
}

const max = function (list) {
   let max = list[0]

   if (list.length > 1) {

      for (let i = 1; i < list.length; i++) {
         if (max < list[i]) {
            max = list[i]
         }
      }
   }


   return max;
}




//Jenny's secret message
function greet(name) {

   if (name === "Johnny") return "Hello, my love!";
   return "Hello, " + name + "!";
}


//[BUG] XCOM-409: Flight distance of Interceptor planes is miscalculated
function travelDistance(avgSpeed, travelTime) {

   const travelHours = travelTime / 60;//hours

   const knotsToKmh = 1.852;
   const speadInKnots = avgSpeed * knotsToKmh


   const travelKms = speadInKnots * travelHours;

   return travelKms;
}


//Closest elevator

function elevator(left, right, call) {
   return Math.abs(left - call) >= Math.abs(right - call) ? 'right' : 'left'
}

//Pillars
function pillars(numPill, dist, width) {
   return numPill > 1 ? numPill * (100 * dist + width) - 100 * dist - 2 * width : 0
}


//Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
   return Math.abs(dadYearsOld - 2 * sonYearsOld)
}


//Total pressure calculation
solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
   return ((givenMass1 / molarMass1) + (givenMass2 / molarMass2)) * 0.082 * (temp + 273.15) / volume
}



//Reversed Words
function reverseWords(str) {
   return str.split(' ').reverse().join(' ');
}



//Grasshopper - Grade book
function getGrade(s1, s2, s3) {
   let score = (s1 + s2 + s3) / 3
   if (score >= 90) {
      return 'A';
   } else if (score >= 80) {
      return 'B';
   } else if (score >= 70) {
      return 'C';
   }
   else if (score >= 60) {
      return 'D';
   }
   else {
      return 'F'
   }

}

//Array plus array
function arrayPlusArray(arr1, arr2) {
   return arr1.reduce((sum, element) => sum + element, 0) + arr2.reduce((sum, element) => sum + element, 0);;
}



//Sum without highest and lowest number
function sumArray(array) {
   if (!array || array.length < 3) {
      return 0;
   }
   let min = array[0];
   let max = array[0];
   let sum = 0;
   for (let i = 0; i < array.length; i++) {
      sum += array[i]
      if (array[i] > max) {
         max = array[i];
      }

      if (array[i] < min) {
         min = array[i];
      }
   }
   return sum - min - max;

}

//Area or Perimeter
const areaOrPerimeter = function (l, w) {
   return w === l ? w * l : 2 * (w + l)
};

//Grasshopper - Personalized Message
const greet = (n, o) => n === o ? 'Hello boss' : 'Hello guest'



//Transportation on vacation
function rentalCarCost(d) {
   return d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40
}


//Sum Mixed Array
function sumMix(x) {
   return x.map((i) => parseInt(i)).reduce((sum, v) => sum + v, 0)
}

//Remove exclamation marks
function removeExclamationMarks(s) {
   return s.replace(/!/g, '');
}

//Get the mean of an array
function getAverage(marks) {
   return Math.floor(marks.reduce((s, v) => v + s) / marks.length)
}

//The Feast of Many Beasts
function feast(beast, dish) {
   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1] ? true : false
}

//Double Char
function doubleChar(str) {
   return str.split('').map((l) => l + l).join('')
}


//L1: Set Alarm
function setAlarm(employed, vacation) {
   return employed && !vacation ? true : false

}

//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
   return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
}

//Count the Monkeys!
function monkeyCount(n) {
   let res = [];
   for (let i = 1; i <= n; i++) {
      res.push(i)
   }
   return res;
}

//Do I get a bonus?
function bonusTime(salary, bonus) {
   return bonus ? `£${10 * salary}` : `£${salary}`
}

//Removing Elements
function removeEveryOther(arr) {
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
         res.push(arr[i])
      }
   }
   return res;
}

//Will there be enough space?
function enough(cap, on, wait) {
   return cap - on >= wait ? 0 : wait - (cap - on)
}


//Third Angle of a Triangle
function otherAngle(a, b) {
   return 180 - a - b;
}

//Beginner Series #4 Cockroach
function cockroachSpeed(s) {
   return Math.floor(s * 100000 / 3600)
}

//Keep up the hoop
function hoopCount(n) {
   return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"
}

//Grasshopper - Check for factor
function checkForFactor(base, factor) {
   return base % factor === 0
}

//All Star Code Challenge #18
function strCount(str, letter) {
   return str.split('').reduce((count, l) => l === letter ? count + 1 : count, 0)
}

//Find the first non-consecutive number
function firstNonConsecutive(arr) {
   for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
         return arr[i + 1]
      }
   }
   return null
}


//Parse nice int from char problem
function getAge(inputString) {
   return +inputString[0]
}

//Get Planet Name By ID

function getPlanetName(id) {
   let name;
   switch (id) {
      case 1:
         name = 'Mercury'
         break;
      case 2:
         name = 'Venus'
         break;
      case 3:
         name = 'Earth'
         break;
      case 4:
         name = 'Mars'
         break;
      case 5:
         name = 'Jupiter'
         break;
      case 6:
         name = 'Saturn'
         break;
      case 7:
         name = 'Uranus'
         break;
      case 8:
         name = 'Neptune'
         break;
   }

   return name;
}

//Volume of a Cuboid
class Kata {
   static getVolumeOfCuboid(l, w, h) {
      return l * w * h
   }
}

//Switch it Up!
function switchItUp(number) {
   let name;
   switch (number) {
      case 1:
         name = 'One'
         break;
      case 2:
         name = 'Two'
         break;
      case 3:
         name = 'Three'
         break;
      case 4:
         name = 'Four'
         break;
      case 5:
         name = 'Five'
         break;
      case 6:
         name = 'Six'
         break;
      case 7:
         name = 'Seven'
         break;
      case 8:
         name = 'Eight'
         break;
      case 9:
         name = 'Nine'
         break;
      case 0:
         name = 'Zero'
         break;
   }

   return name;

}