// stack implementation using arrays constant time because it's a LIFO data structure

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  size() {
    return this.stack.length;
  }
}
