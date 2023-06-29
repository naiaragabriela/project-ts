function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(10, 20));
console.log(add(10, 'oi'));
console.log(add('tudo', 20));
console.log(add('bem', '?'));
