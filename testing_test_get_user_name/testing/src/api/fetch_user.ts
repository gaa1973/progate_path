import {User} from "@/api/models/user";

export const fetchUser = async (id: number): Promise<User | null> => {
  const user = await User.find(id);
  if (user === undefined) return null;
  return user;
};
