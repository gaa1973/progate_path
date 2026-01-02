import {RouteObject} from "react-router-dom";
import {Top} from "@/pages/top";
import {NumberListPage} from "@/routes/number_list";
import {NumberDetailsPage} from "@/pages/number_details";
import {ProductListPage} from "@/pages/product_list";
import {Layout} from "@/components/layout";
import {NumbersLayout} from "@/components/numbers_layout";
import {ProductsLayout} from "@/components/products_layout";

export const AppRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {index: true, element: <Top />},
      {
        path: "numbers",
        element: <NumbersLayout />,
        children: [
          {index: true, element: <NumberListPage />},
          {path: ":id", element: <NumberDetailsPage />},
        ],
      },
      {
        path: "products",
        element: <ProductsLayout />,
        children: [{index: true, element: <ProductListPage />}],
      },
    ],
  },
];
