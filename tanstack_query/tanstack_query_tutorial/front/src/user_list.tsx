import {useQuery} from "@tanstack/react-query";
import {User} from "./types";

async function getUsers(): Promise<User[]> {
  const url = "/api/users";
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export function UserList() {
  const {
    data: users,
    isPending,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isPending) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">something went wrong</div>;
  }

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
