import {useMutation, useQueryClient} from "@tanstack/react-query";
import React, {useState} from "react";
import {User} from "./types";

async function createUser(user: Usere): Promise<User> {
  const url = "/api/users";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!res.ok) {
    throw new Error("Failed to create user");
  }
  return await res.json();
}

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      setName("");
      setEmail("");
      console.log("User created successfully");
      queryClient.invalidateQueries({queryKey: ["users"]});
    },
    onError: error => {
      console.error(error.message);
      alert("Failed to create user. Plese try again.");
    },
  });

  const handleSubmit: React.MouseEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (!name || !email) {
      alert("Input your name and email");
      return;
    }

    mutation.mutate({name, email});
  };

  return (
    <div className="form">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add user</button>
      </form>
    </div>
  );
}
