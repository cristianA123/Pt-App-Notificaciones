import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRoutes = [
  {
    element: <LoginPage />,
    index: true,
  },
  {
    element: <LoginPage />,
    path: 'login',
  },
  {
    element: <RegisterPage />,
    path: 'register',
  },
]
