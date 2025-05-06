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


//Correct the mistakes of the character recognition software
function correct(string) {
   let dic = {
      0: 'O',
      1: 'I',
      5: 'S'
   }

   return string.replace(/[150]/g, l => dic[l]);

}


function testEven(n) {
   return !(n % 2)
}

//Cat years, Dog years
const humanYearsCatYearsDogYears = function (humanYears) {
   return [humanYears, humanYears >= 2 ? 15 + 9 + 4 * (humanYears - 2) : 15, humanYears >= 2 ? 15 + 9 + 5 * (humanYears - 2) : 15];
}


//Is it a palindrome?
function isPalindrome(x) {
   x = x.toLowerCase();
   for (let i = 0; i < Math.floor(x.length / 2); i++) { if (x[i] !== x[x.length - 1 - i]) return false; }
   return true;
}

//Powers of 2
function powersOfTwo(n) {
   let res = [];
   for (let i = 0; i <= n; i++) {
      res.push(2 ** i)
   }
   return res
}

//altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
   return this.split('').map((v) => v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join('')
}
//What is between?
function between(a, b) {
   const res = [];
   for (let i = a; i <= b; i++) {
      res.push(i)
   } return res;
}

//Count Odd Numbers below n
function oddCount(n) {
   return Math.floor(n / 2)
}

//Sum The Strings
function sumStr(a, b) {
   return `${Number(a) + Number(b)}`
}

//Find numbers which are divisible by given number
function divisibleBy(numbers, divisor) {
   return numbers.filter((n) => !(n % divisor))
}

//Welcome!
function greet(language) {
   const dic = {
      "english": "Welcome",
      "czech": "Vitejte"
      , "danish": "Velkomst"
      , "dutch": "Welkom"
      , "estonian": "Tere tulemast"
      , "finnish": "Tervetuloa"
      , "flemish": "Welgekomen"
      , "french": "Bienvenue"
      , "german": "Willkommen"
      , "irish": "Failte"
      , "italian": "Benvenuto"
      , "latvian": "Gaidits"
      , "lithuanian": "Laukiamas"
      , "polish": "Witamy"
      , "spanish": "Bienvenido"
      , "swedish": "Valkommen"
      , "welsh": "Croeso"
   }

   return dic[language] ?? "Welcome";
}



//I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(n) {
   //i love mod n
   const answs = {
      0: "not at all",
      1: "I love you",
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly",
   }
   return answs[n % 6]
}


//Grasshopper - Messi goals function
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}


//Student's Final Grade
function finalGrade(exam, projects) {
   if (exam > 90 || projects > 10) {
      return 100
   } else if (exam > 75 && projects >= 5) {
      return 90
   }
   else if (exam > 50 && projects >= 2) {
      return 75
   }
   console.log(exam, projects)
   return 0
}

//Grasshopper - Debug sayHello
function sayHello(name) {
   return 'Hello, ' + name
}

//Difference of Volumes of Cuboids
function findDifference(a, b) {
   return Math.abs(a.reduce((c, v) => c * v, 1) - b.reduce((c, v) => c * v, 1))
}

//Grasshopper - Terminal game move function
const move = (p, r) => p + 2 * r

//Sort and Star
function twoSort(s) {
   return s.sort()[0].split('').join('***')
}

//Training JS #7: if..else and ternary operator
function saleHotdogs(n) {
   if (n < 5) return n * 100
   if (n < 10) return n * 95
   return n * 90
}
//Is the string uppercase?
String.prototype.isUpperCase = function () {
   return this.toUpperCase() === String(this)
}


//Function 2 - squaring an argument
const square = (a) => a ** 2

//To square(root) or not to square(root)
function squareOrSquareRoot(array) {
   return array.map(v => v ** (1 / 2) % 1 ? v * v : v ** (1 / 2));
}

//Stringy Strings
function stringy(size) {
   let res = ''
   for (let i = 0; i < size; i++) {
      if (i % 2 === 0) {
         res += '1'
      }
      else {
         res += '0'
      }
   }

   return res
}


//Expressions Matter
function expressionMatter(a, b, c) {
   return Math.max(a + b + c, (a + b) * c, a * (b + c), a * b + c, a + b * c, a * b * c)
}

//Find Multiples of a Number
function findMultiples(integer, limit) {
   const res = [];
   for (let i = integer; i <= limit; i++) {
      if (i % integer === 0) {
         res.push(i)
      }
   }
   return res;
}


//Grasshopper - If/else syntax debug
function checkAlive(health) {
   if (health <= 0) {
      return false
   } else {
      return true
   }
}

//Filter out the geese
function gooseFilter(birds) {
   const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
   return birds.filter((b) => !geese.includes(b))

};

//My head is at the wrong end!
function fixTheMeerkat(arr) {
   return arr.reverse();
}

//Reverse List Order
function reverseList(list) {
   return list.reverse()
}

//Short Long Short
function solution(a, b) {
   const short = a.length < b.length ? a : b
   const long = short === a ? b : a
   return short + long + short
}

//Super Duper Easy
function problem(x) {
   if (typeof x === 'number') return 50 * x + 6
   return "Error"
}

//5 without numbers !!
function unusualFive() {
   return Math.round(Math.sqrt(Math.exp(Math.PI)));
}

//Well of Ideas - Easy Version
function well(x) {
   const GoodIdeasCount = x.filter(x => x === 'good').length
   return GoodIdeasCount > 2 ? 'I smell a series!' : GoodIdeasCount === 0 ? 'Fail!' : 'Publish!'
}


//Lario and Muigi Pipe Problem
function pipeFix(numbers) {
   const res = []
   for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {

      res.push(i)
   }
   return res
}


//Training JS #1: create your first JS function and print "Hello World!"
const helloWorld = () => {
   const str = 'Hello World!'
   console.log(str)
}
//Basic variable assignment
const name = "codewa.rs";

//Name Shuffler
function nameShuffler(str) {
   return str.split(' ').reverse().join(' ')
}


//What's the real floor?
function getRealFloor(n) {
   return n > 0 ? n > 13 ? n - 2 : n - 1 : n
}

//Grasshopper - Terminal game combat function
function combat(health, damage) {
   return health - damage > 0 ? health - damage : 0
}
//Get Nth Even Number
function nthEven(n) {
   return n * 2 - 2
}

//Drink about
function peopleWithAgeDrink(old) {
   if (old < 14) return 'drink toddy';
   if (old < 18) return 'drink coke';
   if (old < 21) return 'drink beer';

   return 'drink whisky';

};

//Exclusive "or" (xor) Logical Operator
function xor(a, b) {
   return !!(a ^ b)
}

//get character from ASCII Value
function getChar(c) {
   return String.fromCharCode(c)
}
//Find the position!
function position(l) {
   return 'Position of alphabet: ' + (l.charCodeAt() - 96)
}

function commitLover() {
   return "Ilove commit"
}

//simple calculator
function calculator(a, b, sign) {
   let res;
   switch (sign) {
      case "+":
         res = a + b
         break;
      case "-":
         res = a - b
         break;
      case "*":
         res = a * b;
         break;
      case "/":
         res = a / b
         break;
   }

   return typeof res === 'number' && !isNaN(res) ? res : "unknown value"
}


//Draw stairs
function drawStairs(n) {
   let res = ''
   for (let i = 1; i < n; i++) {
      res += 'I\n' + ' '.repeat(i)
   }

   return res + 'I';
}
//Template Strings
var templateStrings = function (noun, adjective) {
   return `${noun} are ${adjective}`
}

//USD => CNY
function usdcny(usd) {
   return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}

//BASIC: Making Six Toast
function sixToast(num) {
   return Math.abs(num - 6)
}


//String cleaning
function stringClean(s) {
   let res = '';
   for (let i = 0; i < s.length; i++) {
      if (isNaN(Number(s[i])) || s[i] === " ") {
         res += s[i];
      }
   }
   return res;
}


//Add Length
function addLength(str) {
   return str.split(' ').map((w) => `${w} ${w.length}`)
}


//8kyu interpreters: HQ9+
function HQ9(code) {
   switch (code) {
      case 'H':
         return 'Hello World!';
      case 'Q':
         return code;
      case '9':

         return '99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n96 bottles of beer on the wall, 96 bottles of beer.\nTake one down and pass it around, 95 bottles of beer on the wall.\n95 bottles of beer on the wall, 95 bottles of beer.\nTake one down and pass it around, 94 bottles of beer on the wall.\n94 bottles of beer on the wall, 94 bottles of beer.\nTake one down and pass it around, 93 bottles of beer on the wall.\n93 bottles of beer on the wall, 93 bottles of beer.\nTake one down and pass it around, 92 bottles of beer on the wall.\n92 bottles of beer on the wall, 92 bottles of beer.\nTake one down and pass it around, 91 bottles of beer on the wall.\n91 bottles of beer on the wall, 91 bottles of beer.\nTake one down and pass it around, 90 bottles of beer on the wall.\n90 bottles of beer on the wall, 90 bottles of beer.\nTake one down and pass it around, 89 bottles of beer on the wall.\n89 bottles of beer on the wall, 89 bottles of beer.\nTake one down and pass it around, 88 bottles of beer on the wall.\n88 bottles of beer on the wall, 88 bottles of beer.\nTake one down and pass it around, 87 bottles of beer on the wall.\n87 bottles of beer on the wall, 87 bottles of beer.\nTake one down and pass it around, 86 bottles of beer on the wall.\n86 bottles of beer on the wall, 86 bottles of beer.\nTake one down and pass it around, 85 bottles of beer on the wall.\n85 bottles of beer on the wall, 85 bottles of beer.\nTake one down and pass it around, 84 bottles of beer on the wall.\n84 bottles of beer on the wall, 84 bottles of beer.\nTake one down and pass it around, 83 bottles of beer on the wall.\n83 bottles of beer on the wall, 83 bottles of beer.\nTake one down and pass it around, 82 bottles of beer on the wall.\n82 bottles of beer on the wall, 82 bottles of beer.\nTake one down and pass it around, 81 bottles of beer on the wall.\n81 bottles of beer on the wall, 81 bottles of beer.\nTake one down and pass it around, 80 bottles of beer on the wall.\n80 bottles of beer on the wall, 80 bottles of beer.\nTake one down and pass it around, 79 bottles of beer on the wall.\n79 bottles of beer on the wall, 79 bottles of beer.\nTake one down and pass it around, 78 bottles of beer on the wall.\n78 bottles of beer on the wall, 78 bottles of beer.\nTake one down and pass it around, 77 bottles of beer on the wall.\n77 bottles of beer on the wall, 77 bottles of beer.\nTake one down and pass it around, 76 bottles of beer on the wall.\n76 bottles of beer on the wall, 76 bottles of beer.\nTake one down and pass it around, 75 bottles of beer on the wall.\n75 bottles of beer on the wall, 75 bottles of beer.\nTake one down and pass it around, 74 bottles of beer on the wall.\n74 bottles of beer on the wall, 74 bottles of beer.\nTake one down and pass it around, 73 bottles of beer on the wall.\n73 bottles of beer on the wall, 73 bottles of beer.\nTake one down and pass it around, 72 bottles of beer on the wall.\n72 bottles of beer on the wall, 72 bottles of beer.\nTake one down and pass it around, 71 bottles of beer on the wall.\n71 bottles of beer on the wall, 71 bottles of beer.\nTake one down and pass it around, 70 bottles of beer on the wall.\n70 bottles of beer on the wall, 70 bottles of beer.\nTake one down and pass it around, 69 bottles of beer on the wall.\n69 bottles of beer on the wall, 69 bottles of beer.\nTake one down and pass it around, 68 bottles of beer on the wall.\n68 bottles of beer on the wall, 68 bottles of beer.\nTake one down and pass it around, 67 bottles of beer on the wall.\n67 bottles of beer on the wall, 67 bottles of beer.\nTake one down and pass it around, 66 bottles of beer on the wall.\n66 bottles of beer on the wall, 66 bottles of beer.\nTake one down and pass it around, 65 bottles of beer on the wall.\n65 bottles of beer on the wall, 65 bottles of beer.\nTake one down and pass it around, 64 bottles of beer on the wall.\n64 bottles of beer on the wall, 64 bottles of beer.\nTake one down and pass it around, 63 bottles of beer on the wall.\n63 bottles of beer on the wall, 63 bottles of beer.\nTake one down and pass it around, 62 bottles of beer on the wall.\n62 bottles of beer on the wall, 62 bottles of beer.\nTake one down and pass it around, 61 bottles of beer on the wall.\n61 bottles of beer on the wall, 61 bottles of beer.\nTake one down and pass it around, 60 bottles of beer on the wall.\n60 bottles of beer on the wall, 60 bottles of beer.\nTake one down and pass it around, 59 bottles of beer on the wall.\n59 bottles of beer on the wall, 59 bottles of beer.\nTake one down and pass it around, 58 bottles of beer on the wall.\n58 bottles of beer on the wall, 58 bottles of beer.\nTake one down and pass it around, 57 bottles of beer on the wall.\n57 bottles of beer on the wall, 57 bottles of beer.\nTake one down and pass it around, 56 bottles of beer on the wall.\n56 bottles of beer on the wall, 56 bottles of beer.\nTake one down and pass it around, 55 bottles of beer on the wall.\n55 bottles of beer on the wall, 55 bottles of beer.\nTake one down and pass it around, 54 bottles of beer on the wall.\n54 bottles of beer on the wall, 54 bottles of beer.\nTake one down and pass it around, 53 bottles of beer on the wall.\n53 bottles of beer on the wall, 53 bottles of beer.\nTake one down and pass it around, 52 bottles of beer on the wall.\n52 bottles of beer on the wall, 52 bottles of beer.\nTake one down and pass it around, 51 bottles of beer on the wall.\n51 bottles of beer on the wall, 51 bottles of beer.\nTake one down and pass it around, 50 bottles of beer on the wall.\n50 bottles of beer on the wall, 50 bottles of beer.\nTake one down and pass it around, 49 bottles of beer on the wall.\n49 bottles of beer on the wall, 49 bottles of beer.\nTake one down and pass it around, 48 bottles of beer on the wall.\n48 bottles of beer on the wall, 48 bottles of beer.\nTake one down and pass it around, 47 bottles of beer on the wall.\n47 bottles of beer on the wall, 47 bottles of beer.\nTake one down and pass it around, 46 bottles of beer on the wall.\n46 bottles of beer on the wall, 46 bottles of beer.\nTake one down and pass it around, 45 bottles of beer on the wall.\n45 bottles of beer on the wall, 45 bottles of beer.\nTake one down and pass it around, 44 bottles of beer on the wall.\n44 bottles of beer on the wall, 44 bottles of beer.\nTake one down and pass it around, 43 bottles of beer on the wall.\n43 bottles of beer on the wall, 43 bottles of beer.\nTake one down and pass it around, 42 bottles of beer on the wall.\n42 bottles of beer on the wall, 42 bottles of beer.\nTake one down and pass it around, 41 bottles of beer on the wall.\n41 bottles of beer on the wall, 41 bottles of beer.\nTake one down and pass it around, 40 bottles of beer on the wall.\n40 bottles of beer on the wall, 40 bottles of beer.\nTake one down and pass it around, 39 bottles of beer on the wall.\n39 bottles of beer on the wall, 39 bottles of beer.\nTake one down and pass it around, 38 bottles of beer on the wall.\n38 bottles of beer on the wall, 38 bottles of beer.\nTake one down and pass it around, 37 bottles of beer on the wall.\n37 bottles of beer on the wall, 37 bottles of beer.\nTake one down and pass it around, 36 bottles of beer on the wall.\n36 bottles of beer on the wall, 36 bottles of beer.\nTake one down and pass it around, 35 bottles of beer on the wall.\n35 bottles of beer on the wall, 35 bottles of beer.\nTake one down and pass it around, 34 bottles of beer on the wall.\n34 bottles of beer on the wall, 34 bottles of beer.\nTake one down and pass it around, 33 bottles of beer on the wall.\n33 bottles of beer on the wall, 33 bottles of beer.\nTake one down and pass it around, 32 bottles of beer on the wall.\n32 bottles of beer on the wall, 32 bottles of beer.\nTake one down and pass it around, 31 bottles of beer on the wall.\n31 bottles of beer on the wall, 31 bottles of beer.\nTake one down and pass it around, 30 bottles of beer on the wall.\n30 bottles of beer on the wall, 30 bottles of beer.\nTake one down and pass it around, 29 bottles of beer on the wall.\n29 bottles of beer on the wall, 29 bottles of beer.\nTake one down and pass it around, 28 bottles of beer on the wall.\n28 bottles of beer on the wall, 28 bottles of beer.\nTake one down and pass it around, 27 bottles of beer on the wall.\n27 bottles of beer on the wall, 27 bottles of beer.\nTake one down and pass it around, 26 bottles of beer on the wall.\n26 bottles of beer on the wall, 26 bottles of beer.\nTake one down and pass it around, 25 bottles of beer on the wall.\n25 bottles of beer on the wall, 25 bottles of beer.\nTake one down and pass it around, 24 bottles of beer on the wall.\n24 bottles of beer on the wall, 24 bottles of beer.\nTake one down and pass it around, 23 bottles of beer on the wall.\n23 bottles of beer on the wall, 23 bottles of beer.\nTake one down and pass it around, 22 bottles of beer on the wall.\n22 bottles of beer on the wall, 22 bottles of beer.\nTake one down and pass it around, 21 bottles of beer on the wall.\n21 bottles of beer on the wall, 21 bottles of beer.\nTake one down and pass it around, 20 bottles of beer on the wall.\n20 bottles of beer on the wall, 20 bottles of beer.\nTake one down and pass it around, 19 bottles of beer on the wall.\n19 bottles of beer on the wall, 19 bottles of beer.\nTake one down and pass it around, 18 bottles of beer on the wall.\n18 bottles of beer on the wall, 18 bottles of beer.\nTake one down and pass it around, 17 bottles of beer on the wall.\n17 bottles of beer on the wall, 17 bottles of beer.\nTake one down and pass it around, 16 bottles of beer on the wall.\n16 bottles of beer on the wall, 16 bottles of beer.\nTake one down and pass it around, 15 bottles of beer on the wall.\n15 bottles of beer on the wall, 15 bottles of beer.\nTake one down and pass it around, 14 bottles of beer on the wall.\n14 bottles of beer on the wall, 14 bottles of beer.\nTake one down and pass it around, 13 bottles of beer on the wall.\n13 bottles of beer on the wall, 13 bottles of beer.\nTake one down and pass it around, 12 bottles of beer on the wall.\n12 bottles of beer on the wall, 12 bottles of beer.\nTake one down and pass it around, 11 bottles of beer on the wall.\n11 bottles of beer on the wall, 11 bottles of beer.\nTake one down and pass it around, 10 bottles of beer on the wall.\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer on the wall.\n9 bottles of beer on the wall, 9 bottles of beer.\nTake one down and pass it around, 8 bottles of beer on the wall.\n8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n7 bottles of beer on the wall, 7 bottles of beer.\nTake one down and pass it around, 6 bottles of beer on the wall.\n6 bottles of beer on the wall, 6 bottles of beer.\nTake one down and pass it around, 5 bottles of beer on the wall.\n5 bottles of beer on the wall, 5 bottles of beer.\nTake one down and pass it around, 4 bottles of beer on the wall.\n4 bottles of beer on the wall, 4 bottles of beer.\nTake one down and pass it around, 3 bottles of beer on the wall.\n3 bottles of beer on the wall, 3 bottles of beer.\nTake one down and pass it around, 2 bottles of beer on the wall.\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
      default: return
   }
}
//Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove(string) {
   return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string;
}

//Capitalization and Mutability
function capitalizeWord(word) {
   return word[0].toUpperCase() + word.slice(1, word.length);
}

//Is this my tail
const correctTail = (body, tail) => body[body.length - 1] === tail

//FIXME: Replace all dots
var replaceDots = function (str) {
   return str.replace(/\./g, '-');
}

//101 Dalmatians - squash the bugs, not the dogs!
function howManyDalmatians(number) {

   const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

   const respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number === 101 ? dogs[3] : dogs[2]))

   return respond
}

//Grasshopper - Debug
function weatherInfo(temp) {
   const c = convertToCelsius(temp)
   if (c > 0) return (c + " is above freezing temperature")
   else
      return (c + " is freezing temperature")
}

function convertToCelsius(temperature) {
   const celsius = (temperature - 32) * 5 / 9
   return celsius
}

//Fix your code before the garden dies!
function rainAmount(mm) {
   if (mm < 40) return `You need to give your plant ${40 - mm}mm of water`
   else return "Your plant has had more than enough water for today!"
}
//Swap Values
function swapValues(arr) {
   return arr.reverse()
}

//Incorrect division method
const solve = (x, y) => x / y

//Return to Sanity
function mystery() {
   const results = { sanity: 'Hello' };
   return results;
}

//Fix the Bugs (Syntax) - My First Kata
const myFirstKata = (a, b) => typeof a === 'number' && typeof b === 'number' ? a % b + b % a : false

//Unexpected parsing
function getStatus(isBusy) {
   var msg = isBusy ? "busy" : "available"
   return { status: msg }
}

//Switch/Case - Bug Fixing #6

function evalObject(value) {
   var result = 0;
   switch (value.operation) {
      case '+': result = value.a + value.b; break;
      case '-': result = value.a - value.b; break;
      case '/': result = value.a / value.b; break;
      case '*': result = value.a * value.b; break;
      case '%': result = value.a % value.b; break;
      case '^': result = Math.pow(value.a, value.b); break;
   }
   return result;
}

//Push a hash/an object into array
items = []
items.push({ a: "b", c: "d" })

//Semi-Optional
function wrap(value) {
   return { value: value };
}

//A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"
function yourFutureCareer() {
   let career = Math.random()
   if (career <= 0.32) {
      return 'FrontEnd Developer'
   } else if (career <= 0.65) {
      return 'BackEnd Developer'
   } else {
      return 'Full-Stack Developer'
   }
}


yourFutureCareer();

//Broken Counter
function Counter() {
   this.value = 0;
}

Counter.prototype.increase = function () {
   this.value++;
};

Counter.prototype.getValue = function () {
   return this.value;
};

Counter.prototype.reset = function () {
   this.value = 0;
};

//Max Headroom and JavaScript style
function getMax1() {
   let max = { name: 'Max Headroom' }
   return max;
}

function getMax2() {
   return { name: 'Max Headroom' }
}


//Shifty Closures
const greetAbe = () => 'Hello, Abe!'
const greetBen = () => 'Hello, Ben!'

//Hello Happy Codevarrior!
function Warrior(n) {
   let name = n;
   this.name = function (n) {
      if (n) name = n;
      return name;
   }
}

Warrior.prototype.toString = function () {
   return "Hi! my name's " + this.name();
}

//Invalid Login - Bug Fixing #11
function validate(username, password) {
   var database = new Database();
   if (username.includes('||') || password.includes('||') || username.includes('//') || password.includes('//')) {
      return 'Wrong username or password!'
   }
   return database.login(username, password);
}

//Reversing Words in a String
const reverse = (str) => str.split(' ').reverse().join(' ')

//Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
   return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)))
}

//Plural
const plural = n => n !== 1

//Triple Trouble
function tripleTrouble(one, two, three) {
   const res = []
   for (let i = 0; i < one.length; i++) {
      res.push(one[i] + two[i] + three[i])
   }
   return res.join('')
}

//Printing Array elements with Comma delimiters
function printArray(array) {
   return array.toString()
}

//They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?
String.prototype.swapReqiser = function () {
   return this.split('').map((l) => {
      if (l === l.toUpperCase()) {//A === A
         return l.toLowerCase()
      }
      else {
         return l.toUpperCase()
      }
   }).join('')
}

function isOpposite(s1, s2) {
   if (s1 && s1.swapReqiser() === s2) {
      return true
   }
   return false

}
//Age Range Compatibility Equation
function datingRange(age) {
   const minMaxDatingAge = [age, age]
   if (age <= 14) {
      minMaxDatingAge[0] = Math.floor(age - 0.10 * age)
      minMaxDatingAge[1] = Math.floor(age + 0.10 * age)
   } else {
      minMaxDatingAge[0] = Math.floor(age / 2 + 7)
      minMaxDatingAge[1] = Math.floor(2 * (age - 7))

   }
   return minMaxDatingAge.join('-')
}