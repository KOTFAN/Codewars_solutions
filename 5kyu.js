
//Moving Zeros To The End
function moveZeros(arr) {
   const normal = []
   const zeros = []
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
         zeros.push(0)
      } else {
         normal.push(arr[i])
      }
   }
   return normal.concat(zeros)
}