import {Link} from "react-router-dom";

export function Top() {
  return (
    <div>
      <h1>Top</h1>
      <ul>
        <li>
          <Link to={"/numbers"}>Number List</Link>
        </li>
        <li>
          <Link to={"/products"}>Product List</Link>
        </li>
      </ul>
    </div>
  );
}
