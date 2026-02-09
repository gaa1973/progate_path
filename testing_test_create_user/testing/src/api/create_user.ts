import {User} from "@/api/models/user";

export const createUser = async (
  name: string,
  email: string,
): Promise<User | null> => {
  if (name === "" || email === "") {
    return null;
  }
  const user = new User(name, email);
  await user.save();
  return user;
};
