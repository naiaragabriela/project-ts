// Declaration merging
interface Person {
  name: string;
}

interface Person {
  readonly lastName: string;
  readonly street: readonly string[];
  age?: number;
}

const people: Person = {
  name: 'Luiz',
  lastName: 'Miranda',
  street: ['Av. Brasil'],
  age: 30,
};

people.age = 31;
console.log(people);
