
import { useForm } from 'react-hook-form'
import { apiService } from '../../../service/apiService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { RegisterResponse } from '../interfaces/auth.interface';
import useAuthStore from '../../../store/useAuthStore';

export type RegisterForm = {
  fullName: string | null;
  email: string | null;
  password: string | null;
}

export const useRegisterForm = () => {

  const { login } = useAuthStore()

  const navigate = useNavigate();
  const [backendError, setbackendError] = useState('')
  const defaultValues = {
    fullName: 'Cristian2',
    email: 'cristian2@gmail.com',
    password: 'Ch123456',
  }

  const { watch, register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({ defaultValues });

  const onSubmitRegister = async () => {
    const payload = {
      fullName: watch('fullName'),
      email: watch('email'),
      password: watch('password'),
    }
    try {
      const response = await apiService.post<RegisterResponse>('/auth/register', payload);
      login(response.data.user);
      navigate("/");
      localStorage.setItem('token', response.data.token);
      reset();
    } catch (error) {
      setbackendError('No se pudo registrar el usuario, intente nuevamente.')
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmitRegister,
    backendError
  };
}
