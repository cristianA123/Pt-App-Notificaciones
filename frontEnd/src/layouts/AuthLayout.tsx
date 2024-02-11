// import { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import useAuthStore from "../store/useAuthStore";
// import { apiService } from "../service/apiService";
// import { RefreshResponse } from "../interfaces";
// import { LoadingSpinner } from "../components/LoadingSpinner";

import { Outlet } from "react-router-dom";


export const AuthLayout = () => {
  // const navigate = useNavigate()
  // const [firstLoading, setFirstLoading] = useState(false)

  // const { , login } = useAuthStore()

  // const onSubmit = async (): Promise<void> => {
  //   try {
  //     const response = await apiService.get<RefreshResponse>('/auth/refresh');
  //     navigate("/");
  //     login(response.data.user);
  //     console.log(response)
  //     setFirstLoading(true);
  //   } catch (error) {
  //     navigate("/auth/login");
  //     setFirstLoading(true);
  //   }
  // };

  // useEffect(() => {
  //   void onSubmit();
  // }, []);

  // if (!firstLoading) {
  //     return (<LoadingSpinner />)
  // }

  return (
    <main>
      <Outlet />
    </main>
  );
};

// export default AuthLayout
