# Película App - Versión SSR (Next.js + App Router)

Segunda parte de la Práctica 2 de React. En esta versión, se ha migrado la aplicación de películas a **Next.js**, aprovechando el **Server Side Rendering (SSR)** para optimizar la carga de datos y el SEO. 

## Funcionalidades

**Renderizado en Servidor (SSR)**: Las páginas se generan en el servidor, mejorando la velocidad percibida y el rendimiento. 
**Página de Inicio (`/`)**: Muestra las películas populares obtenidas directamente en el servidor.
**Buscador (`/search`)**: Implementado mediante parámetros de búsqueda en la URL y Server Components para los resultados. 
**Detalle de Película (`/movie/[id]`)**: Uso de rutas dinámicas para visualizar información detallada de cada filme. 
**Navegación**: Sistema de enrutamiento basado en el directorio `app/`. 

## Tecnologías Utilizadas

- **Next.js 14+** (App Router) 
- **React** (Server & Client Components)
- **TMDB API** (Fuente de datos)
- **Tailwind CSS** (Estilos rápidos y responsivos)

## Instalación y Ejecución

Sigue estos pasos para ejecutar la versión SSR en tu máquina local:

**Clonar el repositorio:**
   ```bash
   git clone https://github.com/luisquintom/peli-app-ssr
   cd peli-app-ssr
   ```
**Instalar dependencias:**

```Bash
npm install
```
**Configurar variables de entorno:**
Crea un archivo .env.local en la raíz del proyecto con tu llave de TMDB:
```bash
TMDB_KEY=tu_api_key_aqui
```
Lanzar la aplicación:
```Bash
npm run dev
```
La aplicación estará disponible en http://localhost:3000.

## Estructura del Proyecto (App Router)
```Plaintext
src/app/
 ├── layout.js       # Contenedor raíz con Navbar compartido
 ├── page.js         # Página de inicio (SSR)
 ├── movie/[id]/     # Ruta dinámica para detalles de película
 └── search/         # Página de resultados de búsqueda
src/components/      # Componentes de cliente (Buscador, Navbar)
src/lib/             # Lógica de servidor y llamadas a la API
```
Desarrollado por Luis Enrique Quinto.