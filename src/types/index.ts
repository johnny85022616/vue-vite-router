export interface PersonInter {
  name: string ,
  age: number,
  cars: carInter
}

interface carInter {
  car1: string
  car2: string
}
//寫法1
export type PersonList = Array<PersonInter>


//寫法2
// export type PersonList = PersonInter[]

