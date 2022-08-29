export type SexType = "man" | "woman"

export interface IHuman {
  name: string;
  age: string;
  sex: SexType;
}

export class Human implements IHuman {
  name: string;
  age: string;
  sex: SexType;
  constructor(name: string, age: string, sex: SexType) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
}

export function HumanFactory(name: string, age: string, sex: SexType): IHuman {
  return new Human(name, age, sex)
}