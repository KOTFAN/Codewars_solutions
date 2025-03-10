

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
