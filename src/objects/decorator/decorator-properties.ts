function decorator(classPrototype: any, name: string | symbol): any {
  let valueProperty: any;
  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string') {
        valueProperty = value;
        return;
      }
      valueProperty = value;
    },
  };
}

export class OnePerson {
  @decorator
  name: string;
  @decorator
  lastName: string;
  @decorator
  age: number;

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  methods(msg: string): string {
    return `${this.name} ${this.lastName}: ${msg}`;
  }

  get fullName(): string {
    return this.name + ' ' + this.lastName;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastName = words.join(' ');
  }
}

const person = new OnePerson('Naiara', 'Gabriela', 5);
const method = person.methods('Olá mundo');
console.log(method);
