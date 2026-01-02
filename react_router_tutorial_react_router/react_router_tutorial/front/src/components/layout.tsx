import {Link, Outlet} from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header>
        <Link to={"/"} data-test="header-logo">
          REACT ROUTER TUTORIAL
        </Link>
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
