
export interface AuthResponse {
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

export interface RegisterResponse {
    success: boolean;
    user:    User;
    token:   string;
}


