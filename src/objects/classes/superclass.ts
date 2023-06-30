export class Person {
  constructor(
    public name: string,
    public lastName: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getFullName(): string {
    return this.name + ' ' + this.lastName;
  }
}

export class Student extends Person {
  classroom: string;

  constructor(
    name: string,
    lastName: string,
    age: number,
    cpf: string,
    classroom: string,
  ) {
    super(name, lastName, age, cpf);
    this.classroom = classroom;
  }

  getFullName(): string {
    console.log('Fazendo algo antes');
    return super.getFullName();
  }
}
export class Customer extends Person {
  getFullName(): string {
    const result = super.getFullName();
    return result + '  HEEEEEEEEEEEEYYYYYYYYYY';
  }
}

const student = new Student('Naiara', 'Gabriela', 30, '000.000.000-00', '001');
const customer = new Customer('Naiara', 'Gabriela', 30, '000.000.000-00');
const person = new Person('Naiara', 'Gabriela', 30, '000.000.000-00');

console.log(person);
console.log(student);
console.log(customer);
console.log(person.getFullName());
console.log(student.getFullName());
console.log(customer.getFullName());
