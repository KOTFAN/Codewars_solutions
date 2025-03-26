
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