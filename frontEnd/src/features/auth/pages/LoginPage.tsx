import { Button, Form, Stack } from "react-bootstrap"
import { useAuthForm } from "../hooks/useAuthForm";


export const LoginPage = () => {

  const { register, handleSubmit, errors, onSubmitLogin, backendError } = useAuthForm();

  const getFormErrorMessage = (name: string) => {
    return <small className={`text-danger ${errors[name] ? 'visible' : 'invisible'}`}>{errors[name]?.message as string || '.'}</small>;
  }

  const getFormErrorMessageBackEnd = () => {
    return <small className={`text-danger ${backendError ? 'visible' : 'invisible'}`}>{backendError as string || '.'}</small>;
  }


  return (
    <Stack gap={2} className="col-md-4 raw-md-4 mx-auto my-4">
      <Form onSubmit={handleSubmit(onSubmitLogin)} className="m-4">
        <h2 >Login</h2>
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
        <Button type="submit" onClick={handleSubmit(onSubmitLogin)}>
          Submit
        </Button>
      </Form>
    </Stack>
  );
}
