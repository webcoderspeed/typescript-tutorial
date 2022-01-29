// type MyFlexibleDogInfo = {
//   name: string;
// } & Record<string, string>;

type MyFlexibleDogInfo = {
  name: string;
  [key: string]: string | number;
};


const dog: MyFlexibleDogInfo = {
  name: 'Fido',
  breed: 'Labrador',
  age: 5
}


interface DogInfo {
  name: string;
  age: number;
}

type OptionsFlags<Type> = {
  [Property in keyof Type]: string | number;
}

type DogInfoOptions = OptionsFlags<DogInfo>;

type Listeners<Type> = {
  [Property in keyof Type as `on${Capitalize<string  & Property>}Change`]?: (newValue: Type[Property]) => void;
} & {
  [Property in keyof Type as `on${Capitalize<string  & Property>}Delete`]?: (newValue: Type[Property]) => void;
}

function listenToObject<T> (obj: T, listener?: Listeners<T>): void {
  throw "Needs to be implemented";
} 


const lg: DogInfo = {
  name: 'Fido',
  age: 5
};

type DogInfoListener = Listeners<DogInfo>;

listenToObject(lg, {
  onAgeChange: (newAge: number) => {
    console.log(`Age changed to ${newAge}`);
  },
})






