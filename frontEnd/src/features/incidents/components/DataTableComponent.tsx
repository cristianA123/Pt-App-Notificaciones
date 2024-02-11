import { Dropdown, DropdownButton, Table } from "react-bootstrap";
import { Incident } from "../interfaces/incident.interface";

interface Props {
  incidents: Incident[];
  onDeleteIndicent: (id: string) => void;
  GetIndicidents: () => void;
  setIncidentSelected: (incident: Incident) => void;
  showNewInsident: boolean;
  handleShowNewInsident: () => void;
  handleCloseNewInsident: () => void;
}

export const DataTableComponent = ({
  incidents,
  onDeleteIndicent,
  GetIndicidents,
  setIncidentSelected,
  // showNewInsident,
  handleShowNewInsident,
  // handleCloseNewInsident,
}: Props) => {
  const handleDelete = async (id: string) => {
    await onDeleteIndicent(id);
    await GetIndicidents();
  };

  const handleUpdate = async (incidet: Incident) => {
    handleShowNewInsident();
    setIncidentSelected(incidet);
  };

  const getState = (state: string) => {
    switch (state) {
      case 'pendiente':
        return <small className={`bg-primary text-white px-4 py-2 rounded-pill`}>{state}</small>;
      case 'hecho':
        return <small className={`bg-success text-white px-4 py-2 rounded-pill`}>{state}</small>;
      case 'proceso':
        return <small className={`bg-warning text-white px-4 py-2 rounded-pill`}>{state}</small>;
      default:
        return <small className={`text-danger`}>{state}</small>;
    }
  }

  const getImage = (image: string) => {
    if (image) {
      return <img src={image} alt="imagen" width="80" height="80" />;
    } else {
      return <small className={`text-danger`}>Sin imagen</small>;
    }
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Asunto</th>
            <th>Tipo de Incidente</th>
            <th>Detalle de Incidentes</th>
            <th>Imagen</th>
            <th>Estado</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {incidents.map((incident) => (
            <tr key={incident.id}>
              <td>{incident.issue}</td>
              <td>{incident.type_of_incident}</td>
              <td>{incident.details_of_incidents}</td>
              <td>{getImage(incident.image)}</td>
              <td>{getState(incident.state)}</td>
              <td>
                <DropdownButton title="Acciones">
                  <Dropdown.Item onClick={() => handleUpdate(incident)}>
                    Actualizar
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => handleDelete(incident.id)}>
                    Eliminar
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
