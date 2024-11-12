import { User } from "./models/User";

const user = User.buildUser({ id: "54ty" });

console.log(user.get("name"));

user.on("change", () => {
  console.log(user);
});

user.set({ name: "Sephiroth" });
user.save();
