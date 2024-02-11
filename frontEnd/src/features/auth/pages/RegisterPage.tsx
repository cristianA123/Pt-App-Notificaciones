import { Button, Form, Stack } from "react-bootstrap"
import { useRegisterForm } from "../hooks/useRegisterForm";


export const RegisterPage = () => {

  const { register, handleSubmit, errors, onSubmitRegister, backendError } = useRegisterForm();

  const getFormErrorMessage = (name: string) => {
    return <small className={`text-danger ${errors[name] ? 'visible' : 'invisible'}`}>{errors[name]?.message as string || '.'}</small>;
  }

  const getFormErrorMessageBackEnd = () => {
    return <small className={`text-danger ${backendError ? 'visible' : 'invisible'}`}>{backendError as string || '.'}</small>;
  }


  return (
    <Stack gap={2} className="col-md-4 raw-md-4 mx-auto my-4">
      <Form onSubmit={handleSubmit(onSubmitRegister)} className="m-4">
        <h2 >Registrar Usuario</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            placeholder="Juan Perez"
            {...register("fullName", { 
              required: "Nombre es requerido",
             })
            }
          />
           {getFormErrorMessage('email')}
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            placeholder="Enter email"
            {...register("email", { 
              required: "Correo es requerido",
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Correo inválido' }  })
            }
          />
           {getFormErrorMessage('email')}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password", { 
              required: "Contraseña es requerida",
              pattern: { 
                value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 
                message: "Password must contain at least one lowercase letter, one uppercase letter, and be at least 8 characters long"
              } 
              })
            }
          />
           {getFormErrorMessage('password')}
        </Form.Group>
        <div>
          {getFormErrorMessageBackEnd()}
        </div>
        <Button type="submit" >
          Submit
        </Button>
      </Form>
    </Stack>
  );
}
