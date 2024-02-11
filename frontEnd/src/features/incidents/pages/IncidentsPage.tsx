import { useEffect } from "react";

import { DataTableComponent } from "../components/DataTableComponent.tsx";
import { useIncident } from "../hooks/useIncident.ts";
import { SearchComponent } from "../components/SearchComponent.tsx";
// import { NewIncidentComponent } from "../components/NewIncidentComponent.tsx";

export const IncidentsPage = () => {
  const {
    incidents,
    GetIndicidents,
    onDeleteIndicent,
    showNewInsident,
    handleShowNewInsident,
    handleCloseNewInsident,
    incidentSelected,
    setIncidentSelected,
  } = useIncident();

  useEffect(() => {
    GetIndicidents();
  }, []);

  return (
    <div className="m-4">
      <SearchComponent
        GetIndicidents={GetIndicidents}
        showNewInsident={showNewInsident}
        handleShowNewInsident={handleShowNewInsident}
        handleCloseNewInsident={handleCloseNewInsident}
        incidentSelected={incidentSelected}
        setIncidentSelected={setIncidentSelected}
      />
      <DataTableComponent
        incidents={incidents}
        onDeleteIndicent={onDeleteIndicent}
        GetIndicidents={GetIndicidents}
        setIncidentSelected={setIncidentSelected}
        showNewInsident={showNewInsident}
        handleShowNewInsident={handleShowNewInsident}
        handleCloseNewInsident={handleCloseNewInsident}
      />
    </div>
  );
};
