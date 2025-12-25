import {JSX} from "react";
import {Hobbies} from "./hobbies";

export function Body(props: {
  person: {name: string; age: number};
}): JSX.Element {
  return (
    <>
      <div>
        I'm {props.person.name}, {props.person.age} years old
      </div>
      <img src={"./sample.svg"} alt={"sample"} />
      <Hobbies />
    </>
  );
}
