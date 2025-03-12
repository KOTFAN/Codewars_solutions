
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
//Simple Pig Latin
function pigIt(str) {
   return str.split(' ').map((v) => v[0].charCodeAt() > 64 ? v.slice(1) + v[0] + 'ay' : v).join(' ')
}

//Human Readable Time
function humanReadable(seconds) {

   const hours = seconds / 3600
   const minutes = 60 * (hours - Math.floor(hours))
   const sec = 60 * (minutes - Math.floor(minutes))

   return `${Math.floor(hours) > 9 ? Math.floor(hours) : '0' + Math.floor(hours)}:${Math.floor(minutes) > 9 ? Math.floor(minutes) : '0' + Math.floor(minutes)}:${Math.round(sec) > 9 ? Math.round(sec) : '0' + Math.round(sec)}`;

}