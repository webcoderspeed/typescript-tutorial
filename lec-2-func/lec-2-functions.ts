export default function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

export const addStrings = (str1: string, str2: string = ''): string =>
  `${str1} ${str2}`;

//  union type
export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

// void type
export const printFormat = (title: string, param: string | number): void =>
  console.log(title, param);

// Promise
export const fetchData = (url: string): Promise<string> =>
  Promise.resolve(`Data from ${url}`);

export function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join(' ')}`;
}

export function getName(user: { first: string; last: string }): string {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
}


