import { User } from "./models/User";

const user = new User({ name: "new record", age: 100 });

user.on("change", () => {
  console.log("User got changed!");
});

user.trigger("change");
