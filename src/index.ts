import { User } from "./models/User";

const user = new User({ name: "new record", age: 100 });
const user2 = new User({ name: "test", age: 99});

user.save();
