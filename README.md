# 🎬 Media Tracker - Frontend

Frontend de la aplicación **Media Tracker** desarrollado con **React + TypeScript**.  
Autenticación con backend en Spring Boot y pantallas protegidas según login del usuario.

---

## 🛠 Tecnologías usadas

- ⚛️ React 18  
- 💎 TypeScript  
- 🚀 Vite  
- 🎨 CSS  
- 🌐 Fetch API  
- 🔑 LocalStorage para tokens JWT

---

## ✨ Funcionalidades implementadas

- 🔐 Pantalla de **login** con manejo de errores claro.  
- 💾 Guardado de tokens JWT (`accessToken` y `refreshToken`) en `localStorage`.  
- 🏆 Pantalla **protegida** post-login que muestra mensaje:  
  **"Bienvenido, ya estás logueado, campeón!"**  
- 🚪 Botón de **logout** que limpia tokens y vuelve a la pantalla de login.

---

## ⚡ Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/HoroHoro79/media-tracker-front.git
cd media-tracker-front
