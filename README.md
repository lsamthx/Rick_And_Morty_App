🚀 Rick and Morty Explorer

Aplicación Frontend desarrollada con React + Vite, que consume la Rick and Morty API para mostrar personajes, ver detalles en un modal, y realizar búsquedas y paginación.
Incluye pruebas unitarias con Vitest, Testing Library y MSW para mockear peticiones HTTP.

🧩 Características principales

-Obtención de personajes desde RickAndMortyAPI

-Renderizado de tarjetas con diseño responsivo

-Búsqueda de personajes por nombre

-Paginación

-Modal con información detallada al hacer clic en un personaje

-Pruebas unitarias para componentes y lógica interna

-Mock Service Worker (MSW) para simular peticiones a la API

-Proyecto creado con Vite para rendimiento optimizado

🛠️ Tecnologías utilizadas

React ->	UI y componentes
Vite ->	Bundler y dev server
CSS / Bulma ->	Estilos
Vitest ->	Framework de testing
React Testing Library ->	Pruebas de componentes
MSW ->	Mock de API
Axios / fetch ->	Consumo de API

🚀 Cómo ejecutar el proyecto en local
1. Clonar el repositorio
git clone https://github.com/lsamthx/Rick_And_Morty_App.git

2. Instalar dependencias
npm install

3. Ejecutar en modo desarrollo
npm run dev

4. Build de producción
npm run build

5. Vista previa del build
npm run preview

🧪 Ejecutar las pruebas unitarias
1. Correr todas las pruebas
npm run test

2. Correr pruebas en modo watch
npm run test:watch

3. Ver cobertura
npm run coverage

🧪 ¿Cómo funcionan los mocks (MSW)?

El proyecto usa Mock Service Worker para simular las respuestas de la API en pruebas:

handlers.js → define endpoints mockeados

server.js → levanta un servidor virtual durante los tests

📦 Deploy en Vercel

El proyecto ya está listo para desplegarse en Vercel.

Si quieres incluir un enlace:

👉 Demo en producción: https://rick-and-morty-app-ruddy-tau.vercel.app/

🧑‍🎨 Autor

Samantha Valencia – Desarrolladora Frontend
GitHub: @lsamthx

📄 Licencia

Este proyecto puede usarse libremente según los términos de la licencia MIT.
