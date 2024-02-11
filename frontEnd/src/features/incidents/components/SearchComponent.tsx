import { Button, Col, Form, Row } from "react-bootstrap";
import { NewIncidentComponent } from "./NewIncidentComponent";
import { Incident } from "../interfaces/incident.interface";

interface SearchProps {
  GetIndicidents: () => void;
  showNewInsident: boolean;
  handleShowNewInsident: () => void;
  handleCloseNewInsident: () => void;
  incidentSelected: Incident | null;
  setIncidentSelected: (incident: Incident | null) => void;
}

export const SearchComponent = ({
  GetIndicidents,
  showNewInsident,
  handleShowNewInsident,
  handleCloseNewInsident,
  incidentSelected,
  setIncidentSelected
}: SearchProps) => {
  return (
    <div>
      <Row className="pb-2">
        <Col md={9} className="bg-primary">
          <Row className="">
            <Col md={8} className="bg-primary">
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control type="email" placeholder="Buscar..." />
                </Form.Group>
              </Form>
            </Col>
            <Col md={2}>
              <Button variant="primary" onClick={handleCloseNewInsident}>
                Buscar
              </Button>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <Button variant="success" onClick={handleShowNewInsident}>
            Crear Insidencia
          </Button>
        </Col>
      </Row>
      <NewIncidentComponent
        show={showNewInsident}
        handleClose={handleCloseNewInsident}
        GetIndicidents={GetIndicidents}
        incidentSelected={incidentSelected}
        setIncidentSelected={setIncidentSelected} // Fix: Pass the setIncidentSelected function instead of incidentSelected
      />
    </div>
  );
};
