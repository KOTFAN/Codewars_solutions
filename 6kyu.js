

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