# memory

# Descripción

Construye el famoso juego de cartas conocido como Concentration o Memory.
El juego consiste en:

- La primera vez que un usuario ingrese al juego se le debe solicitar el nombre.
- Mostrar un tablero con un grupo de cartas boca abajo y un marcador con un espacio para mostrar:
  --Errores.
  --Aciertos.
- El jugador debe ir volteando las cartas intentando adivinar las cartas que se repiten.
- Todas las cartas se encuentran repetidas 1 vez en el tablero.
- Por cada turno el jugador debe voltear 2 cartas.
- Si las cartas no coinciden, se debe sumar 1 punto de error en el marcador.
- Si las cartas coinciden, se debe sumar 1 punto de acierto en el marcador.
- Las cartas que el usuario acierte deben quedar boca arriba mientras que las cartas de error deben volver a quedar boca abajo.
- Una vez que el usuario logre adivinar todas las cartas, se debe mostrar un mensaje de felicitación con el nombre del usuario.

# Requerimientos tecnológicos del proyecto

- Codigo entendible hecho en javascript
  --Vue/angular/react
  -Bootstrap 5/tailwindcss

# Consideraciones

- Utiliza alguna metodología de nombramiento de clases css ej: BEM
- Todas las variables, métodos, clases o cualquier cosa relacionada con el código debe ser en inglés.
- Incluir instrucciones para probar el proyecto en local en un fichero de nombre README.md ubicado en la raíz del proyecto o en su defecto desplegarlo en algún ambiente explicando en el readme que método se utilizó para el despliegue.
- Para las imágenes de las cartas se deben mostrar fotos de animales. Las fotos de animales se deben obtener utilizando peticiones asíncronas desde el siguiente endpoint:
  -- GET: https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20
- Las imágenes no vienen repetidas, así que la lógica para poder construir el juego debe quedar en el Frontend.
- El diseño se debe adaptar a los distintos tipos de dispositivos (diseño responsivo).
- Los test no son requeridos pero suman puntos si los agrega correctamente.
- Proponer un diseño de interfaz para la vista. Más abajo se muestra una imagen con una estructura de referencia, pero darle un estilo más personalizado sumará puntos.
- Preocupación por el performance y accesibilidad de la aplicación.
- El desafío se debe subir a Github en un proyecto público y se debe compartir el Link con tu recruiter.
- El nombre del usuario debe ser solicitado una vez y almacenado para futuros juegos (sin importar si se refresca el browser)

# Estrategia de branch

Se

# Instalacion

1. Clonar el repositorio 'git clone https://github.com/johanjaguardev/memory.git'
2. Navegar al directorio cd memory
3. Instalar las dependencias con el comando 'npm install'

# Uso

1. Corre la aplicacion con el comando 'npm run dev'
2. Abre tu navegador y ve a la direccion http://localhost:5173/
3. Ingresa tu nombre y haz click en iniciar el juego (Primera vez).
4. Juega volteando las cartas e intentando encontrar la carta identica entre que estan aun tapadas.
5. Al destapar todas las parejas, habra un mensaje de felicitaciones.

# Tecnologias usadas

- JavaScript (ES6)
- ReactJS
- Redux
- Axios
- SASS
- Bootstrap 5
- BEM (Metodologia CSS)
- Vitest
- React Testing Library

# Versionamiento

Para la estrategia de versionamiento, se ha decidido utilizar la estrategia Trunk-Based Development (TBD). Esta estrategia implica que todas las ramas de código se desarrollan en una única rama principal (para este proyecto 'main'). Los desarrolladores deben hacer integraciones frecuentes y la integración se considera una parte clave del trabajo diario. Esta estrategia se adapta bien a proyectos pequeños y equipos pequeños, y es ideal para proyectos de tipo hobby o individuales.

# Metodología de CSS

La metodología de CSS utilizada en este proyecto es BEM (Block Element Modifier). BEM es una convención de nomenclatura para nombrar clases en HTML y CSS. Esta convención de nomenclatura es útil para mantener el código modular, reutilizable y fácil de mantener.

En BEM, los nombres de las clases están basados en el componente o elemento que se está estilizando, y están estructurados de la siguiente manera:

- block representa el componente principal o bloque.
- block\_\_element representa un elemento dentro del bloque.
- block--modifier representa una variación del bloque.

Esta convención de nomenclatura hace que sea fácil entender la relación entre los elementos de la página y su estilo correspondiente.
