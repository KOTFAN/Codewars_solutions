

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