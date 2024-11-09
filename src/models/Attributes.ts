export class Attributes<T extends object> {
  constructor(private data: T) {}

  // Constrains K to be one of the Keys declared in T
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    // Copy and overwrite this.data object with update object
    Object.assign(this.data, update);
  }
}
