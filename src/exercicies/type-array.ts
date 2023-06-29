//Array<T> - T[]

function multipleArgs(...args: Array<number>): number {
  return args.reduce((mult, value) => mult * value, 1);
}

export function concatenaString(...args: string[]): string {
  return args.reduce((mult, value) => mult + value);
}

export function toUpper(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}


const result = multipleArgs(1, 2, 3);
const concatenacao = concatenaString('a', 'b', 'c');
const upper = toUpper('a','b');

console.log(concatenacao);
console.log(result);
console.log(upper);

