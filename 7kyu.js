

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