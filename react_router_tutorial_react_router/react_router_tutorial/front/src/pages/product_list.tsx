import {Link} from "react-router-dom";

export function ProductListPage() {
  return (
    <>
      <div>Product List Page</div>
      <ul>
        <li>
          <Link to={"/"}>Top</Link>
        </li>
        <li>
          <Link to={"/numbers"}>Numbers</Link>
        </li>
      </ul>
    </>
  );
}
