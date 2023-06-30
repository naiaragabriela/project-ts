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
  getFullName(): string {
    return 'Isso vem do aluno: ' + this.name + ' ' + this.lastName;
  }
}
export class Customer extends Person {
  getFullName(): string {
    return 'Isso vem do cliente: ' + this.name + ' ' + this.lastName;
  }
}

const student = new Student('Naiara', 'Gabriela', 30, '000.000.000-00');
const customer = new Customer('Naiara', 'Gabriela', 30, '000.000.000-00');
const person = new Person('Naiara', 'Gabriela', 30, '000.000.000-00');

console.log(person);
console.log(student);
console.log(customer);
console.log(person.getFullName());
console.log(student.getFullName());
console.log(customer.getFullName());
