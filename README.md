<div align="center">

# Juan Cañas

### Salesforce Developer · Web projects · Ideas

Portfolio personal de **Juan Cañas Cañete**, donde comparto proyectos, tecnologías y un poco de lo que hago.

[**Ver portfolio →**](https://jcanas.es/)

<br />

![React](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?logo=tailwindcss&logoColor=white)
![Licencia](https://img.shields.io/badge/licencia-privado-lightgrey)

</div>

---

## ✨ Sobre el proyecto

Una web personal, rápida y adaptable, diseñada para presentar mi trabajo de forma clara. Está disponible en **español e inglés**, y permite elegir entre tema claro, oscuro o el tema del sistema.

### Qué encontrarás

- **Proyectos:** aplicaciones personales y colaborativas, con enlaces a sus demos y repositorios.
- **Sobre mí:** experiencia en Salesforce y desarrollo web.
- **Certificación:** Salesforce Platform App Builder.
- **Diseño adaptable:** navegación optimizada para móvil y escritorio.
- **Preferencias guardadas:** idioma y tema permanecen en el navegador.

## 🧩 Proyectos destacados

| Proyecto | Descripción | Tecnologías |
| --- | --- | --- |
| [Sushi Counter](https://sushi-counter.jcanas.es/) | Aplicación web para gestionar un contador de sushi. | React · TypeScript |
| [Kahoot Builder](https://kahoot-builder.jcanas.es/) | Herramienta colaborativa para preparar quizzes. | React · TypeScript |
| [Finance Tools](https://github.com/unjuannito/finance-tools) | Herramientas financieras en desarrollo. | React Router · TypeScript · Tailwind |
| [Yambo](https://yambo.cabrasky.net/) | Proyecto colaborativo para una comunidad juvenil. | Web · Comunidad |

## 🛠️ Tecnologías

- **Interfaz:** React 19, TypeScript y Tailwind CSS 4
- **Desarrollo y compilación:** Vite 8
- **Idiomas:** i18next y react-i18next
- **Calidad:** ESLint
- **Despliegue:** Docker y Nginx

## 🚀 Empezar

Necesitas Node.js 24 o posterior y npm.

```bash
git clone https://github.com/unjuannito/portfolio.git
cd portfolio
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir el portfolio. Abre `/og-preview.html` durante el desarrollo para comparar los banners en español e inglés.

### Comandos disponibles

| Comando | Acción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Comprueba los tipos y genera la versión de producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Ejecuta ESLint. |

El build genera banners PNG de 1200 × 630 en `public/share/` con el favicon y `profile-photo.jpeg` cuando está disponible. La página de vista previa local no se copia a producción.

## 🐳 Ejecutar con Docker

El contenedor de producción sirve el sitio con Nginx en el puerto `38742`. Para incluir la foto de perfil, coloca `profile-photo.jpeg` en la raíz del proyecto antes de iniciar el contenedor.

```bash
docker compose up --build -d
```

Con la configuración incluida, queda disponible en `http://localhost:38742`.

## 📬 Contacto

- [Portfolio](https://jcanas.es/)
- [LinkedIn](https://www.linkedin.com/in/juan-canas-canete/)
- [GitHub](https://github.com/unjuannito)
- [Salesforce Trailblazer](https://www.salesforce.com/trailblazer/juan-canas-canete)

<div align="center">

Hecho con ☕ por **Juan Cañas**

</div>
