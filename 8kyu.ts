
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