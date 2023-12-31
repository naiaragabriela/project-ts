function reverseNameAndColor<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverse(args[0]);
      this.color = this.reverse(args[1]);
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@reverseNameAndColor
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('gato', 'roxo');
console.log(animal);
