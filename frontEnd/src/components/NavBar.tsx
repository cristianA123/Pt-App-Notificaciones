import { Nav, Navbar } from "react-bootstrap";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const { logout } = useAuthStore()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout()
    localStorage.removeItem('token')
    navigate('/auth/login')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="d-flex justify-content-between px-4">
      <Navbar.Brand href="#home">Prueba Tecnica</Navbar.Brand>
      <div >
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
