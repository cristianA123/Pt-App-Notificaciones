import { Modal, Stack } from "react-bootstrap";
import { NewIncidentForm } from "./NewIncidentForm";
import { Incident } from "../interfaces/incident.interface";

interface NewIncidentProps {
  show: boolean;
  handleClose: () => void;
  GetIndicidents: () => void;
  incidentSelected: Incident | null;
  setIncidentSelected: (incident: Incident | null) => void;
}

export const NewIncidentComponent = ({
  show,
  handleClose,
  GetIndicidents,
  incidentSelected,
  setIncidentSelected,
}: NewIncidentProps) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Crear Incidente</Modal.Title> */}
          <Modal.Title>
            {incidentSelected ? "Actualizar Incidente" : "Crear Incidente"}
          </Modal.Title>{" "}
          {/* Cambia el título según si se está creando o actualizando */}
        </Modal.Header>
        <Modal.Body>
          <Stack gap={2} className="  mx-4 my-4">
            <NewIncidentForm
              handleClose={handleClose}
              GetIndicidents={GetIndicidents}
              incidentSelected={incidentSelected}
              setIncidentSelected={setIncidentSelected}
            />
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
};
