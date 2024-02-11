// import { Outlet, useLocation, useNavigate } from 'react-router-dom'
// import { NavbarAdmin, SidebarAdmin } from '..';
// import { SidebarMobileAdmin } from '../sidebar/SidebarMobileAdmin';
// import { AppState, useAppDispatch, useAppSelector } from '../../../../core/store/store';
// import { useEffect, useRef, useState } from 'react';
// import { LoadingSpinnerComponent } from '../../../shared/components/Pages/LoadingSpinnerComponent';
// import { userService } from '../../../auth/services/userService';
// import { authSliceActions } from '../../../auth/store/authSlice';
// import { Toast } from 'primereact/toast';
// import { uiSliceActions } from '../../store/uiSlice';
// import { SchoolSession } from '../../../../core/service/apiService';
// import { getRoutesByRole } from '../../utils/routes-valid-by-role';

import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import useAuthStore from "../store/useAuthStore";
import { apiService } from "../service/apiService";
import { RefreshResponse } from "../interfaces";

export const PrivateLayout = () => {

  const navigate = useNavigate()
  const [firstLoading, setFirstLoading] = useState(false)

  const {login } = useAuthStore()

  const onSubmit = async (): Promise<void> => {
    try {
      const response = await apiService.get<RefreshResponse>('/auth/refresh');
      navigate("/");
      login(response.data.user);
      setFirstLoading(true);
    } catch (error) {
      navigate("/auth/login");
      setFirstLoading(true);
    }
  
    // if (isLoggedIn) {
    //   navigate("/");
    //   setFirstLoading(true)
    //   return
    // } else {
    //   setFirstLoading(true)
    //   navigate("/auth/login");
    // }

  };

  useEffect(() => {
    void onSubmit();
  }, [navigate]);

  if (!firstLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <NavBar />
      <Container fluid className="p-4">
        <main>
        <Row className="">
          {/* <SideBar /> */}
          <Col md={12} className="">
            <Outlet />
          </Col>
        </Row>
        </main>
      </Container>
    </>
  );
};
