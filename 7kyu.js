

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