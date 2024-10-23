
# Filarmonía RadioWeb

Este proyecto está desplegado en las siguiente plataforma:

- **Netlify**: [https://filarmonia.netlify.app/](https://filarmonia.netlify.app/)

Este proyecto es una remaquetación funcional del sitio web de **Filarmonía 102.7 FM**, la radio cultural del Perú, basado en la web original [Filarmonía Radio](https://www.filarmonia.org/radio.aspx). Este repositorio ha sido creado como un proyecto propio, manteniendo las funcionalidades principales, pero con un enfoque moderno en la estructura y el diseño.

## Descripción

El proyecto fue diseñado utilizando **React** junto con **Vite** para crear una experiencia rápida y optimizada. La aplicación permite a los usuarios escuchar la transmisión en vivo de la estación de radio, ver la programación de los programas y obtener información sobre los presentadores.

### Características principales:
- **Transmisión en vivo** de la emisora de radio.
- **Sección de programación** con detalles sobre los programas actuales y futuros.
- **Presentadores**: Información sobre los conductores de los programas.
- **Compatibilidad móvil**: Diseño responsive para dispositivos móviles y tablets.

## Librerías y Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción rápida para proyectos React.
- **React Router**: Para la navegación entre las distintas secciones de la página.
- **Axios**: Utilizado para hacer peticiones HTTP a las API (si es necesario).
- **React Icons**: Proporciona los íconos SVG utilizados en la interfaz.
- **CSS Modules**: Utilizado para estilizar componentes de forma modular y evitar conflictos de nombres.
- **Google Fonts**: Fuente **Roboto** utilizada para el diseño moderno y limpio.

## Instalación

Para clonar y ejecutar el proyecto en tu entorno local, sigue los siguientes pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/Filarmonia-RadioWeb.git
   ```

2. Entra en el directorio del proyecto:

   ```bash
   cd Filarmonia-RadioWeb
   ```

3. Instala las dependencias:

   ```bash
   npm install
   # o si usas yarn
   yarn install
   ```

## Uso

Para ejecutar el proyecto en modo de desarrollo:

```bash
npm run dev
# o con yarn
yarn dev
```

Esto abrirá el servidor de desarrollo y podrás acceder al proyecto en [http://localhost:3000](http://localhost:3000).

### Generar una versión de producción

Para generar una versión optimizada para producción:

```bash
npm run build
# o con yarn
yarn build
```

Esto creará una carpeta `dist` con los archivos listos para ser desplegados.

## Descripción de los Componentes

### `NavBar.jsx`
Este componente maneja la barra de navegación principal, que incluye enlaces a las distintas secciones del sitio web como "Inicio", "Radio en Vivo", "Programación", entre otros. Utiliza `React Router` para la navegación.

### `Player.jsx`
El reproductor de radio en vivo que utiliza un iframe o un componente HTML `<audio>` para la transmisión de la estación de radio. Permite a los usuarios reproducir y pausar el audio.

### `ProgramSchedule.jsx`
Componente que muestra la programación de los programas de la emisora en un formato de tabla o lista. Este componente también puede incluir botones para filtrar los programas por día de la semana.

### `Footer.jsx`
El pie de página del sitio web que contiene enlaces a las redes sociales de Filarmonía y otra información relevante.

## Estructura del Proyecto

```
Filarmonia-RadioWeb/
├── public/             # Archivos estáticos
├── src/
│   ├── assets/         # Archivos de imágenes, fuentes, etc.
│   ├── components/     # Componentes React reutilizables
│   ├── pages/          # Páginas principales del sitio web
│   ├── App.jsx         # Componente principal de React
│   ├── main.jsx        # Punto de entrada del proyecto
├── package.json        # Dependencias y scripts
└── README.md           # Este archivo
```

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y realiza commits (`git commit -m 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en ponerte en contacto:
- Email: angeleonh2000o@gmail.com
