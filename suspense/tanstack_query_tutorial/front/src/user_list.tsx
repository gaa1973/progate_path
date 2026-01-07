import {useSuspenseQuery} from "@tanstack/react-query";
import {User} from "./types";

async function getUsers(): Promise<User[]> {
  const url = "/api/users";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export function UserList() {
  const {data: users} = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return (
    <div className="list">
      <h2>User List</h2>
      <ul id="users">
        {users.map(user => (
          <li key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
