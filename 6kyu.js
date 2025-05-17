

//Multiples of 3 or 5
function solution(number) {
   let sum = 0;
   for (let i = 3; i < number; i++) {
      if (i % 3 === 0) {
         sum += i

      } else if (i % 5 === 0) {
         sum += i
      }
   }

   return sum
}


//Stop gninnipS My sdroW!
function spinWords(string) {
   return string.split(" ").map(w => w.length > 4 ? w.split("").reverse().join("") : w).join(" ")
}


//Who likes it?
function likes(names) {
   const nLen = names.length;
   if (nLen === 0) {
      return "no one likes this"

   } else if (nLen === 1) {
      return `${names[0]} likes this`

   } else if (nLen === 2) {
      return `${names[0]} and ${names[1]} like this`

   } else if (nLen === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`

   }
   return `${names[0]}, ${names[1]} and ${nLen - 2} others like this`
}

//Find the odd int
function findOdd(A) {
   let res = A[0]
   for (let i = 0; i < A.length; i++) {
      res = A[i];
      let counter = 0;
      for (let j = 0; j < A.length; j++) {
         if (res === A[j]) {
            counter++
         }
      }
      if (counter % 2 === 1) return res
   }
   return res;
}


//Array.diff
function arrayDiff(a, b) {
   const removers = new Set(b)

   return a.filter((e) => !removers.has(e))

}


//Sum of Digits / Digital Root
function digitalRoot(n) {
   let res = n.toString()
   while (res.length > 1) {
      res = res.split('').reduce((a, v) => a + Number(v), 0).toString()
   }
   return Number(res)
}

//Create Phone Number
function createPhoneNumber(numbers) {
   let i = 0
   return '(xxx) xxx-xxxx'.replace(/x/g, () => numbers[i++])
}

//Bit Counting
const countBits = function (n) {
   let arr = []
   let res = n
   while (res !== 0) {
      arr.push(res % 2)
      res = Math.floor(res / 2)
   }
   return arr.reduce((c, v) => c + v, 0)

};

//Find The Parity Outlier
function findOutlier(integers) {
   let evenC = 0;
   let oddC = 0;
   integers.forEach((v) => v % 2 ? oddC++ : evenC++)
   let find = evenC > oddC ? 1 : 0;
   console.log(find, integers)
   for (let i = 0; i < integers.length; i++) {
      if (integers[i] % 2 === find || integers[i] % 2 === -find) {
         return integers[i]
      }
   }
}


//Counting Duplicates
function duplicateCount(text) {
   text = text.toLowerCase()
   const onlyOnes = new Set()
   const dublicates = new Set()
   text.split('').forEach((l) => onlyOnes.has(l) ? dublicates.add(l) : onlyOnes.add(l))
   return dublicates.size
}

//Duplicate Encoder
function duplicateEncode(word) {
   word = word.toLowerCase()
   const onlyOnes = new Set()
   const dublicates = new Set()
   word.split('').forEach((l) => onlyOnes.has(l) ? dublicates.add(l) : onlyOnes.add(l))

   return word.split('').map((v) => dublicates.has(v) ? ')' : '(').join('');
}


//Take a Ten Minutes Walk
function isValidWalk(walk) {
   if (walk.length !== 10) return false
   let cords = [0, 0]
   for (let i = 0; i < 10; i++) {
      if (walk[i] === 'n') cords[0]++
      if (walk[i] === 's') cords[0]--
      if (walk[i] === 'e') cords[1]++
      if (walk[i] === 'w') cords[1]--
   }
   return !(cords[0] || cords[1])
}


//Replace With Alphabet Position
function alphabetPosition(text) {
   return text.toUpperCase().split('').map((s) => (s.charCodeAt() > 64 && s.charCodeAt() < 91 ? s.charCodeAt() - 64 : 0)).filter((v) => v > 0).join(' ');
}


//Persistent Bugger
const multNumWhileNotOneDigit = function (n, multCouter = 0) {
   if (n > 9) {
      n = `${n}`.split('').reduce((a, v) => a * Number(v), 1)
      return multNumWhileNotOneDigit(Number(n), ++multCouter)
   } else {

      return multCouter;
   }

};

function persistence(num) {
   return multNumWhileNotOneDigit(num)
}


//Convert string to camel case
function toCamelCase(str) {

   let words = str.replace(/[_-]+/g, " ").split(' ');

   for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1)
   }
   return words.join('')
}

//Does my number look big in this?
function narcissistic(value) {
   const numLen = value.toString().length

   return value === value.toString().split('').reduce((a, v) => a + Number(v) ** numLen, 0)
}


//Your order, please
function order(words) {
   let wordsArr = words.split(' ')
   let res = []
   for (let i = 1; i <= wordsArr.length; i++) {
      for (let j = 0; j < wordsArr.length; j++) {
         if (wordsArr[j].includes(i)) {
            res.push(wordsArr[j])
         }
      }

   }
   return res.join(' ')
}

//Tribonacci Sequence
function tribonacci(signature, n) {
   const res = []


   for (let i = 0; i < n; i++) {
      if (i < 3) {
         res.push(signature[i])
      } else {
         res.push(res[i - 3] + res[i - 2] + res[i - 1])
      }

   }
   return res
}


//Fibonacci, Tribonacci and friends
function Xbonacci(signature, n) {
   const res = []
   const len = signature.length
   for (let i = 0; i < n; i++) {
      if (i < signature.length) {
         res.push(signature[i])
      } else {
         let sum = 0;
         for (let j = 0; j < len; j++) {
            sum += res[j + i - len]
         }
         res.push(sum)
      }

   }
   return res
}


//Unique In Order
var uniqueInOrder = function (iterable) {
   const res = []
   for (let i = 0; i < iterable.length; i++) {
      let temp = iterable[i]
      if (temp !== iterable[i + 1]) {
         res.push(temp)
      }
   }
   return res
}

//Detect Pangram
function isPangram(string) {
   let isHasAllAlphabetLetters = true
   const alphabet = new Set()
   for (let i = 97; i < 123; i++) alphabet.add(String.fromCharCode(i))
   let strChars = new Set(string.toLowerCase())
   alphabet.forEach((l) => strChars.has(l) ? l : isHasAllAlphabetLetters = false)
   return isHasAllAlphabetLetters
}

//Playing with digits
function digPow(n, p) {
   let k = -1
   const arrOfDigits = String(n).split('').map(n => +n)
   let sumByPowerStartsFromP = 0;
   for (let i = 0; i < arrOfDigits.length; i++) {
      sumByPowerStartsFromP += arrOfDigits[i] ** (p + i)
   }

   k = (sumByPowerStartsFromP / n) % 1 === 0 ? sumByPowerStartsFromP / n : -1

   return k
}

//Decode the Morse code
const decodeMorse = function (morseCode) {
   return morseCode.split('   ').map((s) => s.split(' ').map((l) => MORSE_CODE[l]).join('')).join(' ').trim()
   // Your code here
   // You can use MORSE_CODE[morse]
}