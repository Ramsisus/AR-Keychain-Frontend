# 🚀 Proyecto AR Keychain - Documentación Oficial

Este proyecto es una plataforma web inmersiva para interactuar con llaveros de Realidad Aumentada (AR). Se compone de dos partes principales: el **Frontend** (lo que ve el usuario final) y el **Admin Panel** (para gestionar y vincular las imágenes al escáner AR).

---

## 📂 Arquitectura del Proyecto

### 1. `ar-keychain-frontend`
Es la **Landing Page** principal. Está desarrollada en React con Vite, utilizando Tailwind CSS y Radix UI. 
- Contiene el diseño estético de presentación.
- Incluye el Escáner de Realidad Aumentada (`scanner.html` dentro de `public/`).
- Al presionar el botón "Abrir Escáner", se despliega en pantalla completa el entorno de cámara AR (MindAR + A-Frame) sin tener que recargar la página.

### 2. `ar-keychain-admin`
Es el **Panel de Administración**. Está construido con Node.js y Express.
- Su objetivo es **automatizar la actualización del frontend**.
- Permite subir el archivo compilado `targets.mind` y nuevas imágenes vinculadas.
- Al subir archivos, este backend guarda las imágenes en la carpeta pública del Frontend y **reescribe automáticamente** el código de `scanner.html` para sincronizar correctamente el `targetIndex` con las imágenes mostradas en la cámara.

---

## 🔐 Credenciales del Administrador

Para acceder al Panel de Administración y hacer cambios, necesitas las siguientes credenciales estáticas:

- **Usuario:** `admin`
- **Contraseña:** `1234`

*(Para cambiar esta contraseña, edita la validación en el archivo `ar-keychain-admin/public/index.html` en la sección de scripts).*

---

## 🛠️ Flujo de Trabajo y Actualización (Paso a Paso)

Cuando necesites agregar un **nuevo llavero / imagen** a la aplicación, sigue este proceso:

1. **Abre el Admin Panel:** Inicia los servidores (explicado más abajo) y da clic en "ADMIN" en la barra de navegación de tu Landing Page, o entra directo a `http://localhost:3000`. Inicia sesión.
2. **Abre el Compilador:** En el panel, presiona el botón azul "Abrir Compilador Oficial (.mind) ↗". 
3. **Genera el archivo `.mind`:** Sube **TODAS** tus imágenes (las anteriores y la nueva) a la página del compilador. Dale "Start" y descarga el archivo `targets.mind`.
4. **Sube al Admin Panel:** Regresa a tu panel local (`http://localhost:3000`). En el formulario:
   - Sube el archivo `targets.mind` que acabas de descargar.
   - Sube **SOLO LA NUEVA IMAGEN** (formato JPG/PNG).
5. **¡Listo!** El sistema actualizará el código de tu frontend y la próxima vez que abras el escáner web, la nueva imagen ya será detectada.

---

## 💻 ¿Cómo correr el proyecto localmente?

Necesitas tener **Node.js** instalado en tu computadora. Necesitas abrir dos terminales para correr ambos proyectos al mismo tiempo.

**Terminal 1: Correr el Frontend**
```bash
cd "ar-keychain-frontend"
npm install
npm run dev
```
*(Esto levantará tu página en `http://localhost:5173`)*

**Terminal 2: Correr el Admin Panel**
```bash
cd "ar-keychain-admin"
npm install
node server.js
```
*(Esto levantará el panel en `http://localhost:3000`)*
