export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  push(elements: T): void {
    this.elements[this.count] = elements;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;
    this.count--;
    const elements = this.elements[this.count];
    delete this.elements[this.count];
    return elements;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.showStack();

console.log('*************************');

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
