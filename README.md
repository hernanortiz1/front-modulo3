# 👕 Lannister - Tienda de Ropa
---

## 🧾 Descripción del Proyecto

**Lannister** es una aplicación web desarrollada como proyecto final del curso **Full Stack en Rolling Code School**.  
El sistema está diseñado para gestionar un **catálogo de productos de una tienda de ropa**, permitiendo a los administradores mantener un **control de stock** mientras los usuarios pueden navegar y visualizar los productos disponibles de forma sencilla e intuitiva.

---

## 🌐 Deploy en Producción

🔗 [Lannister - Tienda de Ropa (Vercel)](https://proyecto-modulo3.vercel.app/)

---
## ⚙️ Tecnologías Utilizadas

**Frontend:**
- React.js
- Bootstrap 5
- React Router
- Axios
- React Hook Form
- React Icons
- Vite

**Backend (conectado desde el frontend):**
- Node.js
- Express
- MongoDB (Mongoose)
- JWT para autenticación
- Bcrypt para encriptado de contraseñas
- Cloudinary y Multer para manejo de imágenes

---

## ✨ Funcionalidades Principales

### 🛍️ Usuario final
- Visualización del catálogo completo de productos.  
- Filtros por **categoría** y búsqueda por **nombre**.  
- Páginas informativas: *Quiénes somos*, *Contacto*, *Galería*, *Error 404*.

### 🔐 Administrador
- Sistema de **login y autenticación con JWT**.  
- Panel de administración con CRUD de productos:
  - Crear, editar, eliminar y listar productos.
  - Validaciones de formularios.
  - Control de stock y fecha de última actualización.  
- Gestión de usuarios registrados (solo visible para administradores).

---

## 🧩 Estructura del Proyecto




---

## 🚀 Instalación y Ejecución Local

### 1️⃣ Clonar el repositorio
1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/hernanortiz1/front-modulo3.git
   ```

2. **Instala las dependencias**  
   ```bash
   npm install
   ```

3. **Ejecuta el proyecto**  
   ```bash
   npm run dev
   ```
   Abre tu navegador en: [http://localhost:5173](http://localhost:5173)  

---
## **📂 Estructura del Proyecto**  
```
proyecto-modulo3/
├── src/
|   └── assets/
|   |       └── banners/         # Imágenes del banner
|   |       └── sobreNosotros/   # Imágenes del banner
|   └── pages/
│   |   └── Categorias/
|   |   |    └──  funcion/
|   |   |    |        └──  BtnScroll.jsx
|   |   |    |        └──  operaciones.js
|   |   |    └── AbrigosCamperas.jsx
|   |   |    └── Anteojos.jsx
|   |   |    └── Bermudas.jsx
|   |   |    └── Camisas.jsx
|   |   |    └── Gorras.jsx
|   |   |    └── Pantalones.jsx
|   |   |    └── RemerasChombas.jsx
|   |   |    └── Shorts.jsx
|   |   |    └── SweatersBuzos.jsx
│   |   └── componentsAdministrador/
|   |   |    └── ItemProducto.jsx
|   |   |    └── ItemUsuario.jsx
│   |   └── componentsInicio/
|   |   |    └── BannerPublicidad.jsx
│   |   └── ropa/
|   |   |    └── CardCategoriaProducto.jsx
|   |   |    └── CardRopa.jsx
|   |   |    └── FormularioRopa.jsx
│   │   └── Administrador.jsx
│   │   └── Contacto.jsx
│   │   └── DetalleProducto.jsx
│   │   └── Error404.jsx
│   │   └── Inicio.jsx
│   │   └── Login.jsx
│   │   └── Registro.jsx
│   │   └── SobreNosotros.jsx
│   ├── routes/
│   │   └── ProtectorAdmin.jsx
│   └── shared/
│   |   └── Footer.jsx
│   |   └── Header.jsx
│   ├── helpers/
│   │   └── queries.js
│   └── App.jsx
│   └── index.css
│   └── main.jsx
```

---
## 👤 Autores


- **Juan Manuel Blanco:** *Desarrollador*
  [GitHub](https://github.com/juanchiblanco)
- **Lucas Figueroa:** *Desarrollador*
  [GitHub](https://github.com/Lucaspozziok64)
- **Ignacio Joaquín Barrojo:** *Desarrollador*
  [GitHub](https://github.com/TucuNacho)
- **Hernán Ortiz:** *Desarrollador*
 [GitHub](https://github.com/hernanortiz1)



