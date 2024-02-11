import create from 'zustand';
import { User } from '../features/auth/interfaces/auth.interface';

interface AuthStore {
    isLoggedIn: number | boolean;
    user: User | null;
    login: (data: User) => void;
    logout: () => void;
} 


const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoggedIn: false,
  login: (data: User) => {
    set({ user: data, isLoggedIn: true });
  },
  logout: () => {
    set({ isLoggedIn: false, user: null});
  },
}));

export default useAuthStore;