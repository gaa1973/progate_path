import {Outlet} from "react-router-dom";

export function ProductsLayout() {
  return (
    <div style={{backgroundColor: "lightyellow"}}>
      <h2>PRODUCTS</h2>
      <Outlet />
    </div>
  );
}
