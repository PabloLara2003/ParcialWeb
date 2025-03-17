# Too Good To Go - README

## Descripción del Proyecto
Too Good To Go es una aplicación web desarrollada en React.js que permite a los usuarios comprar comida sobrante de restaurantes a un precio reducido. La aplicación cuenta con funciones de autenticación, navegación, filtrado de productos y gestión de carrito de compras.

## Pasos para ejecutar el proyecto

### 1. Requisitos previos
Para ejecutar la aplicación, asegúrese de tener instalados:
- **Node.js** (versión recomendada: >= 16.x.x)
- **npm** o **yarn** (administrador de paquetes)
- **React.js** (incluido con `create-react-app`)

### 2. Clonar el repositorio
Ejecute el siguiente comando en la terminal:


### 3. Instalar dependencias
Ejecute el siguiente comando para instalar las dependencias necesarias:
npm install

Si hay errores de compatibilidad, intente instalar las dependencias manualmente


### 4. Ejecutar la aplicación
Para iniciar el servidor de desarrollo, ejecute:

npm start

La aplicación estará disponible en `http://localhost:3000/`.

## Componentes y Arquitectura

La aplicación está estructurada en componentes reutilizables en React.js. Se utilizaron rutas con `react-router-dom` para manejar la navegación y `react-intl` para la internacionalización.

### Componentes Principales

| Componente | Descripción |
|------------|------------|
| **App.js** | Configura la navegación y la internacionalización. |
| **Login.js** | Página de inicio de sesión con validación. |
| **Home.js** | Página principal con opciones de navegación. |
| **Menu.js** | Visualiza la lista de productos de los restaurantes. |
| **Stores.js** | Muestra las tiendas disponibles. |
| **Cart.js** | Página del carrito de compras. |
| **messages.js** | Define los textos en diferentes idiomas. |

### Librerías Utilizadas

| Librería | Uso en el Proyecto | Instalación |
|------------|------------------|--------------|
| **react-router-dom** | Manejo de rutas y navegación. | `npm install react-router-dom` |
| **react-intl** | Soporte para internacionalización. | `npm install react-intl` |
| **bootstrap** | Estilos y componentes UI. | `npm install bootstrap` |
| **react-bootstrap** | Componentes pre-diseñados de Bootstrap. | `npm install react-bootstrap` |

## Proceso de Desarrollo

El desarrollo de la aplicación se dividió en varias etapas:

1. **Configuración del Entorno**  
   - Creación del proyecto con `create-react-app`.  
   - Instalación de librerías necesarias (`react-router-dom`, `react-intl`, `bootstrap`).  

2. **Implementación de Componentes**  
   - Creación de componentes funcionales reutilizables.  
   - Configuración de rutas con `react-router-dom`.  
   - Implementación del sistema de autenticación.  

3. **Internacionalización**  
   - Uso de `react-intl` para permitir cambio de idioma dinámico.  
   - Implementación de `messages.js` con textos en inglés y español.  

4. **Integración de Datos**  
   - Consumo de datos desde una API mock en Mockaroo.  
   - Uso de `fetch` en `useEffect` para obtener productos y tiendas.  

5. **Optimización y Ajustes Finales**  
   - Validación de formularios en `Login.js`.  
   - Implementación de una estructura de diseño con `react-bootstrap`.  
   - Manejo del estado con `useState` y `useEffect`.  

## Ejecución Exitosa

Una vez que la aplicación está en ejecución, los usuarios pueden:

- Registrarse e iniciar sesión.
- Navegar entre `Menú`, `Tiendas` y `Carrito`.
- Filtrar y visualizar productos disponibles.
- Agregar productos al carrito y proceder a la compra.
- Cambiar el idioma de la aplicación entre inglés y español.

Este README proporciona toda la información necesaria para ejecutar y entender la estructura de la aplicación.


