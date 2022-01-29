class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const lgg = new Doggy('LG', 2);
// lgg.name = "Foo"; // error
console.log(lgg.name);

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs = () => this.doggies; 
}

DogList.addDog(lgg);
console.log(DogList.instance.getDogs());

