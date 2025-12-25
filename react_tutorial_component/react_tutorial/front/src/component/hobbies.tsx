import {JSX} from "react";

export function Hobbies(): JSX.Element {
  const hobbies = ["reading", "traveling", "swimming"];
  return (
    <ul>
      {hobbies.map(hobby => (
        <li key={hobby}>{hobby}</li>
      ))}
    </ul>
  );
}
