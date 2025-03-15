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


//made commit with wrong name