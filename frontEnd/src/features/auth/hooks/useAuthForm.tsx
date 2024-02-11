
import { useForm } from 'react-hook-form'
import { apiService } from '../../../service/apiService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthResponse } from '../interfaces/auth.interface';
import useAuthStore from '../../../store/useAuthStore';

export type AuthForm = {
  email: string | null;
  password: string | null;
}

export const useAuthForm = () => {

  const { login } = useAuthStore()

  const navigate = useNavigate();
  const [backendError, setbackendError] = useState('')
  const defaultValues = {
    email: 'cristian@gmail.com',
    password: 'Ch123456',
  }

  const { watch, register, handleSubmit, formState: { errors }, reset } = useForm<AuthForm>({ defaultValues });

  const onSubmitLogin = async () => {
    const payload = {
      email: watch('email'),
      password: watch('password'),
    }
    try {
      const response = await apiService.post<AuthResponse>('/auth/login', payload);
      login(response.data.user);
      navigate("/");
      localStorage.setItem('token', response.data.token);
      reset();
    } catch (error) {
      setbackendError('Usuario o contraseña incorrectos')
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmitLogin,
    backendError
  };
}
