
//Convert to Binary
export function toBinary(n: number): number {
   return Number(n.toString(2));
}

//Grasshopper - Function syntax debugging
export function main(verb: string, noun: string): string {
   return verb + noun
}

//Hello, Name or World!
export function hello(name: string = ''): string {
   return name ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!` : 'Hello, World!';
}

//Hex to Decimal
export function hexToDec(hexString: string): number {
   return parseInt(hexString, 16);
}

//Welcome to the City
export const sayHello = (names: string[], city: string, state: string): string => {
   return `Hello, ${names.join(' ')}! Welcome to ${city}, ${state}!`;
}

//Multiple of index
export function multipleOfIndex(array: number[]): number[] {
   return array.filter((e, i) => e % i === 0 || (e === 0 && i === 0))//e===i
}

//Simple Fun #1: Seats in Theater
export function seatsInTheater(nCols: number, nRows: number, col: number, row: number) {
   return (nCols - col + 1) * (nRows - row)
}

//Holiday VIII - Duty Free
export function dutyFree(normPrice: number, discount: number, hol: number): number {
   return Math.floor(hol / (normPrice * discount * 0.01))
}

//Find out whether the shape is a cube
export function cubeChecker(volume: number, side: number): boolean {
   return (volume === side ** 3 && !!side);
}

//L1: Bartender, drinks!
export function getDrinkByProfession(profession: string): string {
   let AlcoDict = {
      "jabroni": "Patron Tequila",
      "school counselor": "Anything with Alcohol",
      "programmer": "Hipster Craft Beer",
      "bike gang member": "Moonshine",
      "politician": "Your tax dollars",
      "rapper": "Cristal",
   }
   return AlcoDict[profession.toLowerCase() as keyof typeof AlcoDict] || "Beer"
}

//Count the number of cubes with paint on
export function countSquares(cuts: number): number {
   return cuts === 0 ? 1 : (cuts + 1) ** 3 - (cuts - 1) ** 3
}


//Learning TypeScript. Basic Types. Type Assertions
export class SuccessServerResult {
   constructor(public httpCode: number, public resultObject: Object) { }
}

export class ErrorServerResult {
   constructor(public httpCode: number, public message: string) { }
}

export function getResult(result: SuccessServerResult | ErrorServerResult): Object | string {
   if (result?.httpCode === 200) {
      result = result as SuccessServerResult

      // Returning resultObject if everything is OK
      return result.resultObject;
   } else {

      result = result as ErrorServerResult

      // Returning result.message in case of error
      // FIXME: help TypeScript Compiler to understand that result here 
      // is the instance of ErrorServerResult...
      return result?.message;
   }
}