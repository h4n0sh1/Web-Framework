import { User } from "./models/User";

const user = new User({ name: "new record", age: 100 });

console.log(user.get("name"));
