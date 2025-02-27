

//Vowel Count
function getCount(str) {
   const vowels = ['a', 'e', 'i', 'o', 'u']
   return str.split('').reduce((s, v) => vowels.includes(v) ? s + 1 : s, 0);
}


