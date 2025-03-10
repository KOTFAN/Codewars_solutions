

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