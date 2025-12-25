import {JSX} from "react";

export function Footer(props: {children: React.ReactNode}): JSX.Element {
  return (
    <>
      <footer>
        {props.children}
        <div>© 2020 TARO TANAKA</div>
      </footer>
    </>
  );
}
