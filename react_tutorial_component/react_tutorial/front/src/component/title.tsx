import {JSX} from "react";

export function Title({text}: {text: string}): JSX.Element {
  return <h1>{`Hello ${text}!`}</h1>;
}
