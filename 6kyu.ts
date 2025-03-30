//Highest Scoring Word
export const high = (str: string): string => {
   const wordsArr: string[] = str.split(' ')
   const numArr: number[] = []
   for (let word of wordsArr) {
      let sum: number = 0
      for (let letter of word) {
         sum += letter.charCodeAt(0) - 96
      }
      numArr.push(sum)
   }
   const biggestNum = Math.max(...numArr)
   console.log(numArr, biggestNum)
   return wordsArr[numArr.indexOf(biggestNum)]
}