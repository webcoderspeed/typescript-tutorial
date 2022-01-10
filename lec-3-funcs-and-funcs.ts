// function with callback -> A callback is function that is passed to another function as an argument.

export const printToFile = (title: string, callback: () => void): void => {
  console.log(title);
  callback();	
}

// functions with params

// export function arrayMutate(
//   numbers: number[],
//   mutate: (num: number) => number
// ): number[] {
//   return numbers.map(mutate);
// }

console.log(arrayMutate([1, 2, 3], (num) => num * 2));

// defining function with use of types

export type MutationFunction =  (num: number, val?:number) => number;

export function arrayMutate(
  numbers: number[],
  mutate: MutationFunction
): number[] {
  return numbers.map(mutate);
}



const myNewMutateFunction: MutationFunction = (num: number, val?: number) => val ? num * val : num * 2;

console.log(arrayMutate([1, 2, 3], myNewMutateFunction));

export function createAdder(num: number): MutationFunction {
  return (val: number) => val ? num + val : num + 2;
}

const addOne = createAdder(1);
console.log(addOne(2));




