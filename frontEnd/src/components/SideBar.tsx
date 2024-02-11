
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
     
          <Col md={2} className="bg-secondary sidebar">
            <Nav className="bg-secondary flex-column">
              <Link to="/" className="nav-link">
                Tareas
              </Link>
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </Nav>
           
            </Col>

  );
};
