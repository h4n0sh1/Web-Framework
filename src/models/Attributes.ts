export class Attributes<T extends object> {
  constructor(private data: T) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: T): void {
    // Copy and overwrite this.data object with update object
    Object.assign(this.data, update);
  }
}
