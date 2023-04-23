class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Adds node to the end of the list
  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  // Adds node to the beginning of the list
  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  // Deletes node with given value
  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode;
    }
  }

  // Finds node with given value
  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  // Deletes node at given index
  deleteAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this._findAtIndex(index - 1);
    if (previous && previous.next) {
      previous.next = previous.next.next;
    }
  }

  // Inserts node at given index

  insertAt(value, index) {
    if (!this.head || index === 0) {
      this.prepend(value);
      return;
    }

    const previous = this._findAtIndex(index - 1);
    const newNode = { value: value, next: previous.next };
    previous.next = newNode;
  }
}

const linkedList = new LinkedList();
