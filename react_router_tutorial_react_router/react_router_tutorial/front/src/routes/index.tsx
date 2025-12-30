import {RouteObject} from "react-router-dom";
import {Top} from "@/pages/top";
import {NumberListPage} from "@/routes/number_list";
import {ProductListPage} from "@/pages/product_list";

export const AppRoutes: RouteObject[] = [
  {path: "/", element: <Top />},
  {path: "/numbers", element: <NumberListPage />},
  {path: "/products", element: <ProductListPage />},
];
