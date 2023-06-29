type HasName = { name: string };
type HasLasName = { lastName: string };
type HasYearsOld = { yearsOld: number };
type Person = HasLasName & HasName & HasYearsOld;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;
const intersection: Intersection = 'A';
console.log(intersection);

const person: Person = {
  name: 'naiara',
  lastName: 'gabriela',
  yearsOld: 20,
};

console.log(person);

export { person };
