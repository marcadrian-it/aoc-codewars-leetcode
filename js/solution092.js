class Stack {
  constructor() {
    this.storage = {};
    this.top = 0;
    this.length = 0;
  }
  push(element) {
    this.storage[this.top] = element;
    this.top++;
    this.length++;
  }
  pop() {
    if (this.length === 0) return undefined;
    this.top--;
    let removed = this.storage[this.top];
    delete this.storage[this.top];
    this.length--;
    return removed;
  }
  size() {
    return this.length;
  }
}

const stack = new Stack();
