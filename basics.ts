let userName: string = 'Speed Sharma';
let isLoggedIn: boolean = true;

// isLoggedIn += 1; // Error connot be applied to types 'boolean' and 'number'

let myNumbers: number = 1;

console.log(myNumbers);

let myRegex: RegExp = /abc/;

const names: string[] = userName.split('');
console.log(names);

const myValues: Array<number> = [1, 2, 3];

// using Interface

interface Person {
  first: string;
  last: string;
  phone: number;
}

const myPerson: Person = {
  first: "Sanjeev",
  last: "Sharma",
  phone: 991025246
};

// maps

const ids: Record<number, string>  = {
  10: 'a',
  20: 'b'
};

ids[30] = 'c'



console.log(ids);

if (ids[30] === 'D') {}

for(let i = 0; i<=10; i++) {
  console.log(i);
}

[1,2,3].forEach((v : number) => console.log(v) )
const out: number[] = [5,6,7].map((v: number) => v*20);

console.log(out)