type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class SinglyLinkedList<T> {
  public length: number;
  private head?: Node<T> | null;
  private tail?: Node<T> | null;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  append(item: T): void {
    this.length++;
    const node = { value: item } as Node<T>;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.head) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length) {
      throw new Error("Index out of bounds");
    }

    if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }

    const node = { value: item } as Node<T>;
    let curr = this.head;
    for (let i = 0; curr && i < idx - 1; i++) {
      curr = curr.next;
    }
    if (!curr) {
      return;
    }
    this.length++;
    node.next = curr.next;
    curr.next = node;
  }

  remove(item: T): T | undefined {
    if (!this.head) {
      return undefined;
    }

    if (this.head.value === item) {
      const node = this.head;
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null;
      }
      this.length--;
      return node.value;
    }

    let curr = this.head;
    while (curr.next) {
      if (curr.next.value === item) {
        const node = curr.next;
        curr.next = node.next;
        if (!node.next) {
          this.tail = curr;
        }
        this.length--;
        return node.value;
      }
      curr = curr.next;
    }
    return undefined;
  }

  get(idx: number): T | undefined {
    if (idx >= 0 && idx < this.length) {
      let curr = this.head;
      for (let i = 0; curr && i < idx; i++) {
        curr = curr.next;
      }
      return curr ? curr.value : undefined;
    }
    return undefined;
  }

  removeAt(idx: number): T | undefined {
    if (idx >= 0 && idx < this.length) {
      if (idx === 0) {
        const node = this.head;
        if (!node) {
          return undefined;
        }
        this.head = node.next;
        if (!node.next) {
          this.tail = null;
        }
        this.length--;
        return node.value;
      }

      let curr = this.head;
      for (let i = 0; curr && i < idx - 1; i++) {
        curr = curr.next;
      }
      if (!curr || !curr.next) {
        return undefined;
      }
      const node = curr.next;
      curr.next = node.next;
      if (!node.next) {
        this.tail = curr;
      }
      this.length--;
      return node.value;
    }
    return undefined;
  }
}
