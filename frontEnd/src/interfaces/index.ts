export interface RefreshResponse {
    success: boolean;
    user:    User;
    token:   string;
}

export interface User {
    id:       string;
    email:    string;
    fullName: string;
    role:     string;
}
