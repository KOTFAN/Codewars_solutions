

//Driving Licence
export function driver(data: Array<string>): string {
   const firstLen: number = data[2].slice(0, 5).length
   const first: string = firstLen < 5 ? (data[2].slice(0, 5) + '9'.repeat(5 - firstLen)).toUpperCase() : data[2].slice(0, 5).toUpperCase()

   const second: string = String(data[3].at(-2))


   enum monthToMum {
      jan = 1,
      feb,
      mar,
      apr,
      may,
      jun,
      jul,
      aug,
      sep,
      oct,
      nov,
      dec,
   }
   const month: number = monthToMum[data[3].slice(3, 6).toLowerCase() as keyof typeof monthToMum]
   const third: string = data[4] === 'F' ? String(month + 50) : (month > 9 ? String(month) : '0' + String(month));


   const day: number = Number(data[3].slice(0, 2))
   const fourth: string = day > 9 ? String(day) : '0' + String(day);


   const fifth: string = String(data[3].at(-1))


   const sixth: string = data[0][0] + (data[1] ? data[1][0] : '9')

   const seventh: string = '9'

   const eighth: string = 'AA'


   return first + second + third + fourth + fifth + sixth + seventh + eighth
}


//FIXME: Get Full Name
export class Dinglemouse {

   constructor(private firstName: string, private lastName: string) {
   }

   getFullName(): string {
      if (!this.firstName && !this.lastName) return ''
      if (!this.firstName) return this.lastName
      if (!this.lastName) return this.firstName
      return `${this.firstName} ${this.lastName}`
   }

}

//Ninja vs Samurai: Strike
export class Warrior {
   private name: string;
   public health: number;
   constructor(name: string) {
      this.name = name;
      this.health = 100;
   }

   strike(enemy: Warrior, swings: number) {
      enemy.health = Math.max(0, enemy.health - (swings * 10));
   }
}

