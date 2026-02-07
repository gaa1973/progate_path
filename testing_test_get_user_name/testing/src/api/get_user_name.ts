import {fetchUser} from "@/api/fetch_user";

export const getUserName = async (id: number): Promise<string | null> => {
  const user = await fetchUser(id);
  if (user === null) {
    return null;
  }
  return user.name;
};
