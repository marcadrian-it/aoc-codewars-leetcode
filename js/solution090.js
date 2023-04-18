// less code but not constant time complexity version of queue

class Queue {
  constructor() {
    this.q = [];
  }
  enqueue(item) {
    this.q.unshift(item);
  }
  dequeue() {
    return this.q.pop();
  }
  size() {
    return this.q.length;
  }
}

queue = new Queue();
