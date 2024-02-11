# Pt-App-Notificaciones

Este es un proyecto de tipo de cambio desarrollado con:
 * Nest.js 
 * con Docker para manejar la bd
 * React vite 


## Documentacion
http://localhost:3000/api/#/Auth

## Levantar proyecto back
* crear `.env` copiando el `.env.example`
 * ejecutar el comando para levantar la bd en Docker
  ```
    docker-compose up --build -d
  ```
 * Instalar dependencias
  ```
   npm run install
  ```
 * Levantar el proyecto
```
    npm run start:dev
  ```

## Levantar proyecto Front
 * crear `.env` copiando el `.env.example`
  * installar dep
    ```
    npm i
    ```
 * Levanta el front
    ```
    npm run dev
    ```

___________________________________________________________________________________________________________________________________________

## Instrucciones de Uso

#### Autenticación

Para iniciar sesión y obtener un token de autenticación, realiza una solicitud POST a la siguiente URL:

- **URL de Inicio de Sesión**: http://localhost:5173/auth/login
- **POST**
```
{
    "email": "cristian@gmail.com",
    "password": "Ch123456"
}
```
- **URL de Registrar Usuario**: http://localhost:5173/auth/register
- **POST**
```
{
    "fullName": "cristian@gmail.com",
    "email": "cristian@gmail.com",
    "password": "Ch123456"
}
```

- **URL Plataforma**: http://localhost:5173
