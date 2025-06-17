

//Vowel Count
function getCount(str) {
   const vowels = ['a', 'e', 'i', 'o', 'u']
   return str.split('').reduce((s, v) => vowels.includes(v) ? s + 1 : s, 0);
}


//Disemvowel Trolls
function disemvowel(str) {
   const vowels = ['a', 'e', 'i', 'o', 'u']
   return str.split('').filter((l) => !vowels.includes(l.toLowerCase())).join('');
}

//Square Every Digit
function squareDigits(num) {
   return parseInt(num.toString().split('').map((n) => (+n) ** 2).join(''))
}

//Highest and Lowest
function highAndLow(numbers) {
   let arrOfNuns = numbers.split(' ').map((n) => +n)
   let max = Math.max(...arrOfNuns)
   let min = Math.min(...arrOfNuns)

   return `${max} ${min}`
}

//Descending Order
function descendingOrder(n) {
   return parseInt(n.toString().split('').sort((a, b) => b - a).join(''))
}
//List Filtering
function filter_list(l) {
   return l.filter((c) => typeof c === "number")
}



//Find the Middle of the Product
function findMiddle(str) {
   if (typeof str !== "string") {
      return -1
   }
   const intsArr = str.split('').map((n) => parseInt(n)).filter((c) => !isNaN(c));
   if (intsArr.length > 0) {
      const prod = intsArr.reduce((p, v) => p * v, 1).toString()
      const midleLen = prod.length % 2 === 1 ? 1 : 2;
      const delCount = (prod.length - midleLen) / 2
      const res = prod.length > 2 ? parseInt(prod.slice(delCount).slice(0, midleLen)) : parseInt(prod)

      return prod.length > 0 ? res : -1
   }
   return -1
}


//Get the Middle Character
function getMiddle(s) {
   const sL = s.length;
   if (s.length < 3) {
      return s
   }
   return sL % 2 === 0 ? s.slice(Math.floor(sL / 2 - 1), -Math.floor(sL / 2 - 1)) : s.slice(Math.floor(sL / 2), -Math.floor(sL / 2));
}


//You're a square!
const isSquare = function (n) {
   return Math.sqrt(n) === Math.floor(Math.sqrt(n));
}


//Mumbling
function accum(s) {
   let res = [];
   for (let i = 0; i < s.length; i++) {
      res.push(s[i].toUpperCase())

      for (let j = 0; j < i; j++) {

         res.push(s[i].toLowerCase())
      }

      res.push('-')

   }
   res.pop()
   return res.join('')
}


//Isograms
function isIsogram(str) {
   str = str.toLowerCase()

   for (let i = 0; i < str.length; i++) {

      for (let j = 0; j < str.length; j++) {
         if (str[i] === str[j] && i !== j) {
            return false
         }
      }
   }

   return true
}

//Exes and Ohs
function XO(str) {
   return !str.toLowerCase().split('').reduce((counter, value) => value === 'x' ? counter + 1 : (value === 'o' ? counter - 1 : counter), 0)
}


//Jaden Casing Strings
Object.defineProperty(
   String.prototype,
   'toJadenCase',
   {
      value:
         function toJadenCase() {
            const words = this.split(' ')
            for (let i = 0; i < words.length; i++) {
               words[i] = words[i][0].toUpperCase() + words[i].slice(1);
            }
            return words.join(' ')
         }
   }
);

//Shortest Word
function findShort(s) {
   return s.split(' ').map((w) => w.length).sort((a, b) => a - b)[0]
}


//Complementary DNA
function dnaStrand(dna) {
   let res = '';
   for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
         case 'A':
            res += 'T'
            break;

         case 'T':
            res += 'A'
            break;

         case 'C':
            res += 'G'
            break;

         case 'G':
            res += 'C'
            break;

      }
   }
   return res;
}


// Credit Card Mask
function maskify(cc) {
   return cc.length > 4 ? '#'.repeat(cc.length - 4) + cc.slice(-4) : cc.slice(-4)
}

//Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
   numbers.sort((a, b) => a - b)
   return numbers[0] + numbers[1]
}

//Beginner Series #3 Sum of Numbers
function getSum(a, b) {
   const sorted = [a, b].sort((a, b) => a - b)
   let res = 0;
   for (let i = sorted[0]; i <= sorted[1]; i++) {
      res += i
   }
   return res
}

//Friend or Foe?
function friend(friends) {
   const res = friends.filter((f) => f.length === 4)
   return res
}

//Two to One
function longest(s1, s2) {
   let res = [];
   const set = new Set(s1 + s2).forEach((v) => res.push(v))

   return res.sort().join('')
}

//Categorize New Member
function openOrSenior(data) {
   return data.map((v) => v[0] >= 55 && v[1] > 7 ? 'Senior' : 'Open')
}


//String ends with?
function solution(str, ending) {
   str = str.split('').reverse()
   ending = ending.split('').reverse()


   for (let i = 0; i < ending.length; i++) {
      console.log(str[i])
      if (ending[i] !== str[i]) {
         return false
      }
   }
   return true
}

//endsWith )


//Find the next perfect square!
function findNextSquare(sq) {
   let n = Math.sqrt(sq)
   if (n === Math.floor(n)) {
      return (n + 1) * (n + 1)
   }
   return -1;
}

//Printer Errors
function printerError(s) {
   return `${s.split('').reduce((c, v) => v.charCodeAt() < 110 ? c + 0 : c + 1, 0)}/${s.length}`
}


//Reduce My Fraction
function reduce(fraction) {
   const devider = nsd(fraction[0], fraction[1])
   return [fraction[0] / devider, fraction[1] / devider]
}

function nsd(num1, num2) {
   if (num2 === 0) {
      return num1
   }
   return nsd(num2, num1 % num2)
}

//Looking for a benefactor
function newAvg(arr, newavg) {
   const donation = Math.ceil(newavg * (arr.length + 1) - arr.reduce((a, v) => a + v, 0))


   if (donation > 0) { return donation }
   else {
      throw new Error("Expected New Average is too low");
   }

}

//N-Dimensional Vector Magnitude
function magnitude(vector) {
   return vector.reduce((a, v) => a + v * v, 0) ** (1 / 2)
}

//Lorraine Wants to Win the TV Contest
function unscramble(scramble) {
   const arrWithSortedLetters = []
   const scrambleSorted = scramble.split('').sort().join('')
   for (let i = 0; i < wordList.length; i++) {
      arrWithSortedLetters.push(wordList[i].split('').sort().join(''))
   }

   const filteredArr = arrWithSortedLetters.filter((w) => w === scrambleSorted)
   const indices = [];
   let idx = arrWithSortedLetters.indexOf(scrambleSorted);
   while (idx !== -1) {
      indices.push(idx);
      idx = arrWithSortedLetters.indexOf(scrambleSorted, idx + 1);
   }
   const res = []
   for (let i = 0; i < indices.length; i++) {
      res.push(wordList[indices[i]])
   }
   return res;
}
// Doggy Daycare
Dog.prototype.checkDog = function () {
   if (this.vaccinated && this.wormed) return `${this.name} can be accepted`
   if (this.vaccinated || this.wormed) return `${this.name} can only be accepted by itself`
   if (!(this.vaccinated && this.wormed)) return `${this.name} can not be accepted`

}

//Refactored Greeting
class Person {
   constructor(name) {
      this.name = name;
   }
   greet(yourName) {
      return `Hello ${yourName}, my name is ${this.name}`;
   }
}

//Fun with ES6 Classes #4 - Cubes and Setters
class Cube {
   constructor(length) {
      this.length = length;
   }
   get volume() {
      return this.length ** 3
   }
   set volume(value) {
      this.length = value ** (1 / 3)
   }

   get surfaceArea() {
      return 6 * (this.length ** 2)
   }
   set surfaceArea(value) {
      this.length = (value / 6) ** (1 / 2)
   }
}

// JavaScript class-like objects
class Animal {
   constructor(name, type) {
      this.name = name;
      this.type = type;
   }
   toString() {
      return `${this.name} is a ${this.type}`
   }

}

//Fun with ES6 Classes #2 - Animals and Inheritance
class Shark extends Animal {
   constructor(name, age, status) {
      super(name, age, 0, "shark", status);
   }
}

class Cat extends Animal {
   constructor(name, age, status) {
      super(name, age, 4, "cat", status);
   }
   introduce() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
   }
}

class Dog extends Animal {
   constructor(name, age, status, master) {
      super(name, age, 4, "dog", status);
      this.master = master;
   }
   greetMaster() {
      return `Hello ${this.master}`
   }
}

//Singleton Pattern
class Singleton {
   constructor() {
      if (Singleton.instance) return Singleton.instance;
      Singleton.instance = this;
      return this;
   }
};

//SantaClausable Interface
function isSantaClausable(obj) {
   if (typeof obj.sayHoHoHo === 'function' &&
      typeof obj.distributeGifts === 'function' &&
      typeof obj.goDownTheChimney === 'function') {
      return true;
   }
   return false;
}

//Building blocks
class Block {

   constructor([width, length, height]) {
      this.width = width;
      this.length = length;
      this.height = height;

   }
   getWidth() {
      return this.width;
   }
   getLength() {
      return this.length
   }
   getHeight() {
      return this.height
   }
   getVolume() {
      return (this.width * this.length * this.height);
   }
   getSurfaceArea() {

      return (2 * ((this.width * this.length) + (this.width * this.height) + (this.length * this.height)));
   }

}
//Bug fix: Is this component visible?
class Component {
   #id;
   #parent;
   #children;
   #visibility;

   constructor(id, children) {
      this.#id = id;
      this.#children = children;
      this.#visibility = null;
      this.#parent = null;
      this.#children.forEach(child => child.#parent = this);
   }

   set visibility(value) {
      this.#visibility = value;
   }

   get isVisible() {
      console.log(this.#visibility)

      //good
      if (this.#visibility !== null) return this.#visibility
      if (this.#id === 'Root') return true

      //bad
      else {
         let parrent = this.#parent;
         while (parrent !== null) {
            if (parrent.#visibility !== null) return parrent.#visibility
            parrent = parrent.#parent;
         }
         return true
      }
   }

   toString() {
      return this.#id;
   }
}

//Static privacy
class Class {
   static #foo = 42;
   static get foo() {
      return Class.#foo;
   }

}

//Weight of its Contents
function contentWeight(bottleWeight, scale) {
   const [times, _, comparisonType] = scale.split(' ');
   switch (comparisonType) {
      case 'larger':
         return Math.round(bottleWeight / (1 + 1 / Number(times)))
      case 'smaller':
         return bottleWeight / (1 + Number(times))
   }
}


//Is this a triangle?
function isTriangle(...sides) {
   if (sides.every((s) => s > 0)) {
      const [biggest, ...restSides] = sides.sort((a, b) => b - a)
      if (biggest < restSides.reduce((a, v) => a + v, 0)) {
         return true
      }
   }
   return false
}

//Sum of odd numbers
function rowSumOddNumbers(n) {
   return n ** 3
}

//Regex validate PIN code
function validatePIN(pin) {
   const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
   if ((pin.length === 4 || pin.length === 6) && pin.split('').every(n => nums.includes(n))) {
      return true
   }
   return false
}

//Binary Addition
function addBinary(a, b) {
   return (a + b).toString(2)
}

//Growth of a Population
function nbYear(p0, percent, aug, p) {
   const saldo = 1 + percent * 0.01;
   let year = 0;
   let populationNow = p0;
   while (populationNow < p) {
      populationNow = Math.floor(populationNow * saldo + aug);
      year++
   }
   return year

}


//What a "Classy" Song
class Song {
   #uniqueDAL;
   #allListeners;
   constructor(title, artist) {
      this.title = title;
      this.artist = artist;
      this.#uniqueDAL = 0;
      this.#allListeners = []

   }
   howMany(arr) {
      arr.map(name => name.toLowerCase()).forEach(name => {
         if (!this.#allListeners.includes(name)) {
            this.#allListeners.push(name);
            this.#uniqueDAL++
         }
      })
      const todayListen = this.#uniqueDAL;
      this.#uniqueDAL = 0
      return todayListen
   }
}

//Competitive eating scoreboard
function scoreboard(whoAteWhat) {
   return whoAteWhat
      .map(({ name, chickenwings, hamburgers, hotdogs }) => ({
         name,
         score: chickenwings * 5 + hamburgers * 3 + hotdogs * 2
      }))
      .sort((a, b) => {
         if (a.score === b.score) {
            return a.name.localeCompare(b.name)
         }
         return b.score - a.score
      })
}

//Thinkful - Object Drills: Quarks
class Quark {
   constructor(color, flavor) {
      this.color = color;
      this.flavor = flavor;
   }
   get baryon_number() {
      return 1 / 3
   }
   interact(otherQuark) {
      [otherQuark.color, this.color] = [this.color, otherQuark.color];

   }
}
//Re-open class
String.prototype.myNewMethod = function () {
   return this.toUpperCase()
}

//Numbers in different systems
function sysNums(n, sys) {

   const newNum = n.toString(sys);
   if (isNaN(Number(newNum)) || newNum.includes('e')) {
      return newNum
   }
   return Number(newNum)
}

//Ones and Zeros
const binaryArrayToNumber = arr => {
   let res = 0;

   for (let i = arr.length - 1; i >= 0; i--) {
      res += arr[i] * 2 ** (arr.length - i - 1)
      console.log(arr[i])
   }

   return res
};


Array.prototype.map = function (cb) {
   const arr = [];
   for (let i = 0; i < this.length; i++) {
      arr.push(cb(this[i]))
   }
   return arr
}

//Number of People in the Bus
var number = function (busStops) {
   let peopleInBus = 0;
   busStops.forEach(([pIn, pOut]) => peopleInBus += (pIn - pOut))
   return peopleInBus

}

//Find the divisors!
function divisors(integer) {
   const res = [];
   for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
         res.push(i)
      }
   }
   if (res.length) {
      return res
   } else {
      return `${integer} is prime`
   }
}

//Reverse words
function reverseWords(str) {
   return str.split(' ').map((w) => w.split('').reverse().join('')).join(' ')
}


//Odd or Even?
function oddOrEven(arr) {
   const sum = arr.reduce((a, v) => a + v, 0)
   if (sum % 2 === 0) {
      return 'even'
   }
   return 'odd'

}

//Sum of the first nth term of Series
function SeriesSum(n) {
   let sum = 0;
   if (n < 1) {
      return '0.00'
   }
   for (let i = 0; i < n; i++) {
      sum += 1 / (1 + 3 * i)
   }

   const res = (Math.round(sum * 100) / 100).toFixed(2)

   return res
}