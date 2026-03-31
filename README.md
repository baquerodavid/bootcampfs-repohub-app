# RepoHub App (Project Break 3 - Bootcamp)

Aplicación frontend para RepoHub, una plataforma de portfolio que muestra los repositorios desarrollados durante el bootcamp (workouts, challenges y proyectos).

Este frontend consume una API REST desarrollada en Node.js y permite visualizar, filtrar y explorar los repositorios de forma dinámica.

---

## 🚀 Tecnologías

- React
- React Router
- Fetch API
- CSS Modules
- JavaScript (ES6+)

---

## 📦 Estructura del proyecto

```
src/
  assets/
  components/
    Footer/
    GoToTop/
    Header/
    RepoCard/
  pages/
    Home/
    RepoDetail/
  routes/
    RoutesApp.jsx

App.jsx
App.css
index.css
main.jsx
```

---

## ▶️ Cómo empezar

### Instalar dependencias

```
npm install
```

### Ejecutar en desarrollo

```
npm run dev
```

### Build de producción

```
npm run build
```

---

## 🔗 Conexión con Backend

Este frontend consume la API desarrollada en el siguiente repositorio:

👉 https://github.com/baquerodavid/bootcampfs-repohub-back

Asegúrate de tener el backend levantado en local o desplegado para que las peticiones funcionen correctamente.

Ejemplo de endpoints utilizados:

GET /bootcamp-repos
GET /bootcamp-repos?type=project
GET /bootcamp-repos/:slug

---

## 📡 Funcionalidades principales
- Visualización de repositorios en formato de tarjetas
- Página de detalle por repositorio
- Filtro por tipo (workout, challenge, project, extra-workout)
- Búsqueda por texto (title, description, tags, etc.)
- Navegación mediante React Router
- Botón “Go to top” para mejorar la navegación

---

## 🎯 Objetivo del proyecto

Este frontend permite:
- Explorar los proyectos desarrollados durante el bootcamp
- Visualizar información detallada de cada repositorio
- Aplicar filtros y búsquedas para mejorar la navegación
- Servir como base para integrarlo en la web personal

---

## 📌 Notas

### Contexto del proyecto

Este proyecto ha sido desarrollado como parte del Project Break final de un bootcamp de Full-Stack Web Development, con un plazo de 2 semanas dedicadas a la construcción de un MVP funcional.

El objetivo principal ha sido consolidar conocimientos en React, consumo de APIs y organización de aplicaciones frontend, trabajando la estructura por componentes, el uso de hooks (useState, useEffect) y la gestión de rutas con React Router.

Durante el desarrollo se ha priorizado la simplicidad y funcionalidad del MVP, construyendo una base sólida que permita futuras mejoras y evolución del proyecto.

### Evolución futura

Este frontend está planteado como una base que seguirá creciendo con nuevas funcionalidades:
	•	Mejora de diseño y experiencia de usuario (UI/UX)
	•	Integración completa con backend desplegado
	•	Filtros avanzados y ordenación
	•	Gestión de estado más compleja (Context o librerías)
	•	Página de administración
	•	Optimización de rendimiento

---

## 👤 Autor

David Baquero: https://www.davidbaquero.com