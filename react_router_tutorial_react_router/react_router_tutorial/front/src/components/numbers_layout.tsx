import {Link, Outlet} from "react-router-dom";

export function NumbersLayout() {
  return (
    <div style={{backgroundColor: "lightgray"}}>
      <h2>
        <Link to={"/numbers"}>NUMBERS</Link>
      </h2>
      <Outlet />
    </div>
  );
}
