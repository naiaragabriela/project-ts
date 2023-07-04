interface ProtocolPerson<T = string, U = number> {
  name: T;
  lastName: T;
  age: U;
}

export const Student: ProtocolPerson = {
  name: 'Naiara',
  lastName: 'Gabriela',
  age: 30,
};

export const Student1: ProtocolPerson<string, number> = {
  name: 'Luiz',
  lastName: 'Miranda',
  age: 40,
};

export const Student2: ProtocolPerson<number, number> = {
  name: 123,
  lastName: 456,
  age: 20,
};

console.log(Student, Student1, Student2);
