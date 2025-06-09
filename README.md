# 🧼 Proyecto 6 – Servicios de Limpieza (Backend)

Aplicación backend construida con Node.js, Express y MongoDB para la gestión de usuarios y servicios (productos). Implementa autenticación con JWT, operaciones CRUD y control de acceso.

## 📦 Tecnologías utilizadas

- Node.js + Express.js
- MongoDB + Mongoose
- JWT (JSON Web Token)
- Bcrypt.js (encriptación)
- Dotenv (variables de entorno)
- Thunder Client (pruebas locales)
- Render.com + MongoDB Atlas (despliegue opcional)

---

## 👥 Endpoints de Usuario

| Método | Endpoint                 | Descripción                                 |
|--------|--------------------------|---------------------------------------------|
| POST   | `/api/user/register`     | Registro de nuevo usuario                   |
| POST   | `/api/user/login`        | Inicio de sesión y generación de token      |
| GET    | `/api/user/verifytoken`  | Verifica validez de token JWT               |
| PUT    | `/api/user/update`       | Actualización de datos de usuario (autenticado) |

---

## 🛠️ Endpoints de Servicios

| Método  | Endpoint                        | Descripción                                     |
|---------|----------------------------------|-------------------------------------------------|
| POST    | `/api/product/create`           | Crear un nuevo servicio (requiere token)        |
| GET     | `/api/product/readall`          | Leer todos los servicios                        |
| GET     | `/api/product/readone/:id`      | Leer un servicio específico por ID              |
| PUT     | `/api/product/update/:id`       | Actualizar un servicio (requiere token)         |
| DELETE  | `/api/product/delete/:id`       | Eliminar un servicio (requiere token)           |

---

## ⚙️ Estructura de Carpetas

proyecto6-servicios-limpieza/
├── controllers/
│ ├── userController.js
│ └── serviceController.js
├── middleware/
│ └── authMiddleware.js
├── models/
│ ├── userModel.js
│ └── serviceModel.js
├── routes/
│ ├── userRoutes.js
│ └── serviceRoutes.js
├── .env
├── .gitignore
├── package.json
├── server.js

yaml
Copy
Edit

---

## 🔒 Autenticación

- Se utiliza **JWT** para proteger rutas privadas.
- Los tokens deben ser enviados en el header:  
  `Authorization: Bearer TU_TOKEN`

---

## ✅ Requisitos cumplidos

✅ CRUD completo para servicios  
✅ Registro, login, verificación y update para usuarios  
✅ Autenticación vía middleware  
✅ Estructura modular y clara  
✅ Pruebas realizadas con Thunder Client  
✅ Control de versiones en Git y GitHub  
✅ Despliegue opcional preparado (Render + Atlas)

---

## 🚀 Despliegue

El backend puede ser desplegado en [Render.com](https://render.com)  https://proyecto6-2pkw.onrender.com
Y la base de datos en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 📬 Autor

- Alex Ancelovici  
- Proyecto 6 – Bootcamp Full Stack (UDD)
