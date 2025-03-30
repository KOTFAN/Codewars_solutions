
//Count IP Addresses
export function ipsBetween(start: string, end: string): number {
   const ip1: number = start.split('.').reverse().map((n, i) => Number(n) * 256 ** i).reduce((a, v) => a + v)
   const ip2: number = end.split('.').reverse().map((n, i) => Number(n) * 256 ** i).reduce((a, v) => a + v)
   return ip2 - ip1;
}