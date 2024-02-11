
import { useForm } from 'react-hook-form'
import { apiService } from '../../../service/apiService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Incident, IndicentsResponse } from '../interfaces/incident.interface';

export type InsidentForm = {
  issue: string | null;
  typeOfIncident: string | null;
  detailsOfIncidents: string | null;
  image: string | null;
  state: string | null;
}

interface File {
  name: string,
  lastModified: number,
  lastModifiedDate: Date,
  webkitRelativePath: string,
  size: number,
  type: string
}

export const useIncident = () => {

  // const { login } = useAuthStore()

  const navigate = useNavigate();
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [incidentSelected, setIncidentSelected] = useState<Incident| null>(null);
  const [backendError, setbackendError] = useState('')

  const [showNewInsident, setShowNewInsident] = useState(false);

  const handleCloseNewInsident = () => setShowNewInsident(false);
  const handleShowNewInsident = () => setShowNewInsident(true);


  const defaultValues = {
    issue: 'robo de celular',
    typeOfIncident: 'robo',
    detailsOfIncidents: 'um jovem de 20 anos foi assaltado na rua tal e perdeu seu celular',
    image: '',
    state: 'pendiente',

  }

  const { watch, register, handleSubmit, formState: { errors }, reset } = useForm<InsidentForm>({ defaultValues });

  const onSubmitCreateIncident = async () => {

    const formData = new FormData()
    
    formData.append('issue', watch('issue'));
    formData.append('type_of_incident', watch('typeOfIncident'));
    formData.append('details_of_incidents', watch('detailsOfIncidents'));
    formData.append('image', watch('image')[0]);
    formData.append('state', watch('state'));

    // formData.append('file', file);

    // const payload = {
    //     issue: watch('issue'),
    //     type_of_incident: watch('typeOfIncident'),
    //     details_of_incidents: watch('detailsOfIncidents'),
    //     image: watch('image'),
    //     state: watch('state'),
    // }
    try {
      await apiService.post<IndicentsResponse>('/incidents', formData);
      navigate("/");
      reset();
    } catch (error) {
      setbackendError('No se pudo crear el incidente')
    }
  };

  const GetIndicidents = async () => {
    try {
      const response = await apiService.get<IndicentsResponse>('/incidents');
      setIncidents(response.data.incident);
      reset();
    } catch (error) {
      setbackendError('No se pudo listar los incidentes')
    }
  };

  const onDeleteIndicent = async (id: string) => {
    try {
      await apiService.delete(`/incidents/${id}`);
      navigate("/");
      // reset();
    } catch (error) {
      setbackendError('No se pudo Eliminar el incidentes')
    }
  };

  const onUpdateIndicent = async (id: string) => {

    const formData = new FormData()
    
    formData.append('issue', watch('issue'));
    formData.append('type_of_incident', watch('typeOfIncident'));
    formData.append('details_of_incidents', watch('detailsOfIncidents'));
    formData.append('image', watch('image')[0]);
    formData.append('state', watch('state'));

  //   const payload = {
  //     issue: watch('issue'),
  //     type_of_incident: watch('typeOfIncident'),
  //     details_of_incidents: watch('detailsOfIncidents'),
  //     image: watch('image'),
  //     state: watch('state'),
  // }
  try {
    await apiService.patch(`/incidents/${id}`, formData);
    navigate("/");
    reset();
  } catch (error) {
    setbackendError('No se pudo crear el incidente')
  }
  };

  const uploadFile = async (file: File) => {

    const formData = new FormData()
    
      formData.append('file', file);

    try {
      await apiService.post('/files/incident', formData);
    } catch (error) {
      setbackendError('No se pudo Subir imagen')
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    backendError,
    incidents,
    showNewInsident,
    handleCloseNewInsident,
    handleShowNewInsident,
    GetIndicidents,
    setShowNewInsident,
    onSubmitCreateIncident,
    onDeleteIndicent,
    onUpdateIndicent,
    incidentSelected,
    setIncidentSelected,
    reset,
    uploadFile,
    watch
  };
}
