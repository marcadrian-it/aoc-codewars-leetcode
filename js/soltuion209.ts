export default class Map<T extends string | number, V> {
  private keys: T[] = [];
  private values: V[] = [];

  get(key: T): V | undefined {
    const index = this.keys.indexOf(key);
    return index !== -1 ? this.values[index] : undefined;
  }

  set(key: T, value: V): void {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      // If key already exists, update the value
      this.values[index] = value;
    } else {
      // If key doesn't exist, add a new key-value pair
      this.keys.push(key);
      this.values.push(value);
    }
  }

  delete(key: T): V | undefined {
    const index = this.keys.indexOf(key);
    if (index !== -1) {
      // Remove key and value from the arrays
      const deletedValue = this.values.splice(index, 1)[0];
      this.keys.splice(index, 1);
      return deletedValue;
    }
    return undefined;
  }

  size(): number {
    return this.keys.length;
  }
}
