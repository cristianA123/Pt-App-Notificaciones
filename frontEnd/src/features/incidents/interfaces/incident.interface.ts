export interface IndicentsResponse {
    success:  boolean;
    incident: Incident[];
}

export interface Incident {
    id:                   string;
    issue:                string;
    type_of_incident:     string;
    details_of_incidents: string;
    image:                string;
    state:                string;
    created_at:           Date;
    updated_at:           Date;
    user:                 User;
}

export interface User {
    id:       string;
    email:    string;
    fullName: string;
    isActive: boolean;
    role:     string;
    roles:    string[];
}
