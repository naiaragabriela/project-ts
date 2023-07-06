function reverseNameAndColor(param1: string, param2: string) {
  //Closure
  return () =>
    function <T extends new (...args: any[]) => any>(target: T): T {
      console.log('sou o decorador e recebi', target);

      return class extends target {
        name: string;
        color: string;

        constructor(...args: any[]) {
          super(...args);
          this.name = this.reverse(args[0]);
          this.color = this.reverse(args[1]);
        }

        reverse(value: string): string {
          return (
            value.split('').reverse().join('') + ' ' + param1 + ' ' + param2
          );
        }
      };
    };
}

@(reverseNameAndColor('valor1', 'valor2')())
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('gato', 'roxo');
console.log(animal);
