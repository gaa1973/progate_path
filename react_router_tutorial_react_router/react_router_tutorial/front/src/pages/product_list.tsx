import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useSearchParams} from "react-router-dom";

// 以下の配列を追加
const products = [
  {id: 1, name: "Green Tea", category: "beverage", price: 500},
  {id: 2, name: "Sushi", category: "food", price: 12000},
  {id: 3, name: "T-Shirt", category: "clothing", price: 3000},
  {id: 4, name: "Ramen", category: "food", price: 1000},
  {id: 5, name: "Coffee", category: "beverage", price: 800},
];

export function ProductListPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category") || "";

  const fileterdProducts = products.filter(
    product => !category || product.category === category,
  );

  const handleCstegoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;

    if (selectedCategory === "") {
      navigate("/products");
      return;
    }

    navigate(`/products?category=${selectedCategory}`);
  };

  return (
    <>
      <div>
        <label>
          Category:
          <select
            name="category"
            value={category}
            onChange={handleCstegoryChange}
            data-test="category"
          >
            <option value="">All</option>
            <option value="beverage">Beverage</option>
            <option value="food">Food</option>
            <option value="clothing">Clothing</option>
          </select>
        </label>
      </div>
      <ul>
        {fileterdProducts.map(product => (
          <li className="item" key={product.id}>
            {product.name} - {product.category} - ¥{product.price}
          </li>
        ))}
      </ul>
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
