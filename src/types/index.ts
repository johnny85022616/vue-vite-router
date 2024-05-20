export interface PersonInter {
  name: string ,
  age: number,
  cars: carInter
}

interface carInter {
  car1: string
  car2: string
}

export type PersonList = Array<PersonInter>

