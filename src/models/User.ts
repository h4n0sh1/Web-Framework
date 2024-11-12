import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attributes";
import { AxiosResponse } from "axios";
import { Model } from "./Model";
export interface UserProps {
  id?: string;
  name?: string;
  age?: number;
}
const rootUrl = "http://localhost:3000/users";
export class User extends Model<UserProps> {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;
}
