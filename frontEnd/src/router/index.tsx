import { createBrowserRouter } from "react-router-dom";
import { PrivateRouting } from "./PrivateRouting";
import { PrivateLayout } from '../layouts/PrivateLayout';
import { AuthLayout, PublicLayout } from "../layouts";
import { AuthRouting } from "./AuthRouting";
import { PublicRouting } from "./PublicRouting";
import { NotFound } from "../components/NotFound";


export const router = createBrowserRouter([
  {
    element: <PrivateLayout/>,
    path: '/',
    children: PrivateRouting,
  },
  {
    path: '/',
    children: [
      {
        element: <AuthLayout />,
        path: 'auth',
        children: AuthRouting,
      },
      {
        element: <PublicLayout />,
        children: PublicRouting,
      },
    ],
  },
  { path: '*', element: <NotFound /> },
]);