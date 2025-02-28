

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


function descendingOrder(n) {
   return parseInt(n.toString().split('').sort((a, b) => b - a).join(''))
}