import { User } from "./models/User";

const user = User.buildUser({ name: "Vanguard" });

console.log(user.get("name"));

user.on("change", () => {
  console.log(user);
});

user.save();
