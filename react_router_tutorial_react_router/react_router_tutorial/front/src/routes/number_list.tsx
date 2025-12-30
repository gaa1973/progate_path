import {Link} from "react-router-dom";

export function NumberListPage() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <div>Number List Page</div>
      <ul>
        {numbers.map(number => (
          <li key={number}>
            <Link to={`/numbers/${number}`}>{number}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <Link to={"/"}>Top</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
      </ul>
    </>
  );
}
