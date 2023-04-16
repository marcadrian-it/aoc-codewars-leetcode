// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }
  enqueue(element) {
    this.storage[this.tail] = element;
    this.tail++;
    this.length++;
  }
  dequeue() {
    if (this.length === 0) return undefined;
    let removed = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    this.length--;
    return removed;
  }
  size() {
    return this.length;
  }
}

const queue = new Queue();
