export default class ArrayList<T> {
  public length: number;
  private items: T[];

  constructor() {
    this.items = [];
    this.length = 0;
  }

  prepend(item: T): void {
    this.items.unshift(item);
    this.length++;
  }
  insertAt(item: T, idx: number): void {
    if (idx >= 0 && idx <= this.length) {
      this.items.splice(idx, 0, item);
      this.length++;
    }
  }
  append(item: T): void {
    this.items.push(item);
    this.length++;
  }
  remove(item: T): T | undefined {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.length--;
      return this.items.splice(index, 1)[0];
    }
    return undefined;
  }
  get(idx: number): T | undefined {
    if (idx >= 0 && idx < this.length) {
      return this.items[idx];
    }
    return undefined;
  }
  removeAt(idx: number): T | undefined {
    if (idx >= 0 && idx < this.length) {
      this.length--;
      return this.items.splice(idx, 1)[0];
    }
    return undefined;
  }
}
