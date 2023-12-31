export default class LRU<K, V> {
  private length: number;
  private capacity: number;
  private cache: Map<K, V>;
  private recentKeys: K[];

  constructor(capacity: number) {
    this.length = 0;
    this.capacity = capacity;
    this.cache = new Map<K, V>();
    this.recentKeys = [];
  }

  update(key: K, value: V): void {
    if (this.cache.has(key)) {
      // If the key exists, update its value and make it the most recent key
      this.cache.set(key, value);
      this.updateRecentKeys(key);
    } else {
      // If the key doesn't exist, add it to the cache and recentKeys
      this.cache.set(key, value);
      this.recentKeys.push(key);
      this.length++;

      if (this.length > this.capacity) {
        const leastRecentKey = this.recentKeys.shift(); // Remove the least recently used key
        if (leastRecentKey !== undefined) {
          this.cache.delete(leastRecentKey);
          this.length--;
        }
      }
    }
  }

  get(key: K): V | undefined {
    if (this.cache.has(key)) {
      this.updateRecentKeys(key);
      return this.cache.get(key);
    }
    return undefined;
  }

  private updateRecentKeys(key: K): void {
    // Move the accessed key to the end of recentKeys (most recently used position)
    this.recentKeys = this.recentKeys.filter((k) => k !== key);
    this.recentKeys.push(key);
  }
}
