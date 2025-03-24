
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


//RGB To Hex Conversion
function rgb(r, g, b) {

   return toHex(r) + toHex(g) + toHex(b)
}

const toHex = (n) => {
   if (n <= 0) return '00'

   if (n > 255) return 'FF'

   const Hex = n.toString(16).toUpperCase()

   return Hex.length > 1 ? Hex : '0' + Hex
}


//The Hashtag Generator
function generateHashtag(str) {
   let epmtyStr = ' ';
   let res = []
   for (let i = 0; i < str.length; i++) {
      if (str[i] !== ' ') {
         res.push(str[i])
         if (str[i + 1] === ' ') res.push(' ');
      }
   }
   if (res[res.length - 1] === ' ') res.pop();
   res = res.join('').split(' ')


   if (res.join('').length > 139 || res[0] === '') return false

   const UpCaseFirstLettr = res.map((w) => w[0].toUpperCase() + w.slice(1))
   return '#' + UpCaseFirstLettr.join('')

}