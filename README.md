# 👕 Lannister - Tienda de Ropa
---

## 🧾 Descripción del Proyecto

**Lannister** es una aplicación web desarrollada como proyecto final del curso **Full Stack en Rolling Code School**.  
El sistema está diseñado para gestionar un **catálogo de productos de una tienda de ropa**, permitiendo al administrador, gerente y empleado mantener un **control de stock** mientras los usuarios pueden navegar y visualizar los productos disponibles de forma sencilla e intuitiva.  
Además, el sistema ahora incluye:  

- 💳 **Integración con Mercado Pago** para pagos online  
- 🛡️ **Gestión de roles de usuario**  
- ✨ **Selección de productos destacados aleatorios por categorías**  
- 📧 **Formulario de contacto funcional con EmailJS**, que envía automáticamente los datos ingresados por el usuario a una cuenta de **Gmail** configurada  

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
- Mercado Pago (integración de pagos online)

---

## ✨ Funcionalidades Principales

### 🔐 Administrador
- 🔑 Sistema de **login y autenticación con JWT**  
- 🖥️ Panel de administración con CRUD de productos:
  - Crear, editar, eliminar y listar productos  
  - Validaciones de formularios  
  - Control de stock y fecha de última actualización  
- 👥 Gestión de usuarios registrados (solo visible para administrador y gerente)  
- 🛡️ Gestión de **roles de usuario** (administrador, gerente, empleado, usuario) 

### 🛍️ Gerente, empleado, usuario
- 🔑 Sistema de **login y autenticación con JWT**  
- 🛒 Visualización del catálogo completo de productos  
- 🔍 Filtros por **categoría** y búsqueda por **nombre**  
- 🌟 Visualización de **10 productos destacados aleatorios** según las categorías seleccionadas  
- 💳 **Pagos online mediante Mercado Pago**  
- 📄 Páginas informativas: *Quiénes somos*, *Contacto*, *Error 404*  


---
## 🔐 Roles y Permisos

### **👑 Administrador**
- **Permisos:** Superusuario  
- **Puede:**
  - Realizar **CRUD de productos**  
  - Realizar **CRUD de usuarios** (gerentes, empleados y usuarios)  
  - Asignar roles a otros usuarios  

---

### **🧑‍💼 Gerente**
- **Permisos:** Gerente  
- **Puede:**
  - Realizar **CRUD de productos**  
  - Crear empleados  
  - Editar roles de empleados y usuarios  
- **No puede:**
  - Eliminar usuarios ni empleados  

---

### **👨‍💻 Empleado**
- **Permisos:** Gestión de productos  
- **Puede:**
  - Realizar **CRUD de productos**  
- **No puede:**
  - Realizar **CRUD de usuarios**  
  - Ver sección de usuarios  

---

### **🛒 Usuario**
- **Permisos:** Comprador  
- **Puede:**
  - Ver productos  
  - Agregar productos al carrito  
  - Realizar compras  

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
|   |   |    |        └──  WhatsAppButton.jsx
|   |   |    └── AbrigosCamperas.jsx
|   |   |    └── Anteojos.jsx
|   |   |    └── Bermudas.jsx
|   |   |    └── Camisas.jsx
|   |   |    └── CategoriaDestacada.jsx
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
|   |   |    └── FormularioProducto.css
|   |   |    └── FormularioRopa.jsx
│   │   └── Administrador.jsx
│   │   └── Carrito.jsx
│   │   └── Contacto.jsx
│   │   └── DetalleProducto.jsx
│   │   └── Error404.jsx
│   │   └── Inicio.jsx
│   │   └── PagoExitoso.jsx
│   │   └── PagoFallido.jsx
│   │   └── PagoPendiente.jsx
│   │   └── Login.jsx
│   │   └── Registro.jsx
│   │   └── SobreNosotros.jsx
│   ├── routes/
│   │   └── ProtectorRol.jsx
│   └── shared/
│   |   └── componentsMenu/
|   |   |    └── CartOffCanvas.jsx
│   |   └── Footer.jsx
│   |   └── Menu.jsx
│   ├── helpers/
│   │   └── CartContext.jsx
│   │   └── queries.js
│   │   └── queriesPagos.js
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



