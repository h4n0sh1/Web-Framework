import { Eventing } from "./Eventing";
export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // Copy and overwrite this.data object with update object
    Object.assign(this.data, update);
  }
}
