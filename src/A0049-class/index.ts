class User<T, U> {
  constructor(
    public name: T,
    public age: U,
  ) {}
}

export const user = new User('felipe', 9);
export const user2 = new User<string, number>('felipe', 9);

// Stack - Pilha
export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  // Enqueue
  push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];
    return element;
  }

  // Dequeue
  isEmpty(): boolean {
    return this.counter === 0;
  }

  length(): number {
    return this.counter;
  }

  show(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const newStack = new Stack<number>();
newStack.push(10);
newStack.push(210);
newStack.push(130);
newStack.push(102);
newStack.push(1055);
newStack.show(); // 10

while (!newStack.isEmpty()) {
  console.log(newStack.pop());
}
// Quando o valor não for inferido no método ou no próprio atributo, você deve como boas práticas defini-lo assim que a classe for chamada
