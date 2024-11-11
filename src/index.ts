import { User } from "./models/User";

const user = new User({ id: "4e0c" });

console.log(user.get("name"));

user.on("change", () => {
  console.log(user);
});

user.set({ name: "Sephiroth" });
