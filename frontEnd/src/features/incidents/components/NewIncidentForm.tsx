import { Button, Form } from "react-bootstrap";
// import { useInsidentForm } from "../hooks/useInsidentForm";
import { useIncident } from "../hooks/useIncident";
import { Incident } from "../interfaces/incident.interface";
import { useEffect } from "react";

interface NewIncidentProps {
  handleClose: () => void;
  GetIndicidents: () => void;
  incidentSelected: Incident | null;
  setIncidentSelected: (incident: Incident | null) => void;
}

export const NewIncidentForm = ({
  handleClose,
  GetIndicidents,
  incidentSelected,
  setIncidentSelected,
}: NewIncidentProps) => {
  const {
    handleSubmit,
    register,
    onSubmitCreateIncident,
    backendError,
    errors,
    reset,
    onUpdateIndicent,
    // uploadFile,
    // watch
  } = useIncident();

  useEffect(() => {
    if (incidentSelected) {
      reset(incidentSelected); // Puebla el formulario con los datos de la incidencia existente
    }
  }, [incidentSelected]);

  const getFormErrorMessage = (name: string) => {
    return (
      <small
        className={`text-danger ${errors[name] ? "visible" : "invisible"}`}
      >
        {(errors[name]?.message as string) || "."}
      </small>
    );
  };

  const getFormErrorMessageBackEnd = () => {
    return (
      <small
        className={`text-danger ${backendError ? "visible" : "invisible"}`}
      >
        {(backendError as string) || "."}
      </small>
    );
  };

  const handleCreateIncident = async () => {
    if (incidentSelected) {
      await onUpdateIndicent(incidentSelected.id);
      await setIncidentSelected(null);
    } else {
      await onSubmitCreateIncident();
    }
    await GetIndicidents();
    handleClose();
  };

  // const handleChangeImage = async () => {
  //   const images = watch('image');
  //   if (images && images.length > 0) {
  //     const file = images[0];
  //     console.log('Cambio de imagen');
  //     console.log(file);
  //     await uploadFile(file);
  //     console.log('Imagen cargada correctamente');
  //   } else {
  //     console.log('No se seleccionó ningún archivo');
  //   }
  // }

  return (
    <>
      <Form onSubmit={handleSubmit(handleCreateIncident)} className="">
        <Form.Group controlId="Asunto">
          <Form.Label>Asunto</Form.Label>
          <Form.Control
            placeholder="Asunto"
            {...register("issue", {
              required: "Asunto es requerido",
            })}
          />
          {getFormErrorMessage("issue")}
        </Form.Group>
        <Form.Group controlId="formBasic">
          <Form.Label>Tipo de incidente</Form.Label>
          <Form.Control
            placeholder="Tipo de incidente"
            {...register("typeOfIncident", {
              required: "Correo es requerido",
            })}
          />
          {getFormErrorMessage("typeOfIncident")}
        </Form.Group>

        <Form.Group controlId="formBasic">
          <Form.Label>Detalle de incidente</Form.Label>
          <Form.Control
            placeholder="Detalle de incidente"
            {...register("detailsOfIncidents", {
              required: "Detalle de incidente es requerida",
            })}
          />
          {getFormErrorMessage("detailsOfIncidents")}
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Seleccionar imagen</Form.Label>
          <Form.Control type="file" 
            {...register('image',
              {
                required: "Imagen es requerida",
              })} 
          />
           {getFormErrorMessage('image')}
        </Form.Group>
        <div>{getFormErrorMessageBackEnd()}</div>
        <div className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handleCreateIncident}>
            Close
          </Button>
          <Button type="submit">Guardar</Button>
        </div>
      </Form>
    </>
  );
};
