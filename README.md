# Proyecto MINTIC - UTP - Ciclo 3 - Semana3 - Grupo 34

## Descripción

Elaborar un login

## Colaboradores
Rodrigo Gallo - Full Stack developer
Harvy Santiago Rosero - Full Stack developer
Juan Sebastian Franco - Full Stack developer

### Contenido

## Requerimiento Secciones Iniciales

- Sección superior, cabecera o header: esta sección deberá contar con el menú de navegación a tres páginas internas del sitio web y su respectivo enlace al inicio. Debe contar con una imagen que ocupe el ancho del sitio.
  El menú debe de estar en un tag `<nav></nav>`.
- Sección de servicios: aquí los estudiantes deberán dividir en ancho del sitio en 3 partes y en cada parte se deberá incluir un servicio. Cada servicio debe contar con una breve descripción, un logo, ícono o imagen que lo identifique y un enlace al detalle de los servicios. El elemento donde están los servicios debe de tener un `id=”services”`
- Sección de noticias: El estudiante encargado de la sección de noticias, deberá dividir el ancho del sitio web en 2 filas y dos columnas para presentar 4 noticias. Cada noticia debe contar con un resumen, una imagen y un enlace a leer la noticia completa.
  El elemento donde están los servicios debe de tener un `id=”news”`

- Sección de equipo: El estudiante deberá dividir el ancho del sitio entre el número de participantes del equipo e incluir junto con cada uno una foto o imagen, el nombre y algún dato como la institución educativa, edad, pasatiempo, entre otros.
  El elemento donde están los servicios debe de tener un `id=”team”`

- Sección Footer o pie del sitio: el estudiante deberá crear el pie del sitio web en donde se incluye información de contacto, deberá estar dividido en dos partes, en una se tendrá la información del sitio web como el motivante del desarrollo y el enlace al repositorio de github, y en la otra los contacto de los miembros del equipo con sus nombres y roles. La sección debe de estar en un tag <footer></footer>

## Requerimiento Ajuste a Secciones Iniciales
- Los estudiantes basados en el sitio web construido durante la sesión 4 en donde se actualizó utilizando VUE, el sitio web desarrollado en la sesión 1; deberán hacer uso de los componentes reutilizables de VUE y de las APIs explicadas durante la sesión 3.
- El sitio web resultante deberá contar con las secciones de encabezado, en donde estará el menú y el banner, una sección intermedia que presentará, en el mismo formato de las 4 noticias en dos filas y 2 columnas, el uso de una API a elección de los estudiantes, recomendamos una API de noticias como Colombia news API o la API de películas vista durante la sesión 3.
- Se debe contar con una sección para los integrantes que consumirá la información de los miembros desde un JSON tal como se explicó en la sesión 4.
- Como ejemplo del resultado esperado durante la sesión se mostrará el sitio web funcionando con los componentes base necesarios.

## Secciones

1. Header
2. Servicios
3. Noticias
4. Equipo
5. Footer

## API Noticias

### GNews API
GNews is an API to search for articles from a variety of sources, including Google News. We also provide top headlines from which you can filter by topic such as world, business, sports...

#### URL API 
...
https://gnews.io/api/v4/search?q=technology&max=4&lang=Spanish&token=TOKEN_API
...

#### Sitio Web
See [Sitio Web](https://gnews.io/).

## Estructura

- /public
  - /images
  - /css
  - index.html
- /src
  - /assets
    - files
      - servicios.json
      - team.json
    - images
  - /components
    - SiteFooter.vue
    - SiteHeader,vue
    - SiteNews.vue
    - SiteServices.vue
    - TeamCard.vue
  - App.vue
  - main.js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Proceso GIT

1. Crear repositorio GitHub 
   1. Ubicacion de github : https://github.com/
2. Crear branches de control de código
   1. Master o Main : Solo para Releases
   2. dev :  rama de desarrollo usada para controlar los pull requests de funcionaldiades subidas
3. Crear carpeta local 
   1. En windows con el comando 
   ```
   MD Directorio
   ```
   o
   ```
   MKDIR Directorioo 
   ```
4. Clonar repositorio 
   ```
   git clone repositorio
   ```
   ```
   git remote add origin URL_repositorio
   ```
5. Crear branch de trabajo 
   ```
   git checkout -b newbranch
   ```
6. Realizar sitio - Creado en VSCode (https://code.visualstudio.com/)
7. Guardar cambios en repositorio local 
   ```
   git add .
   ```
   ```
   git commit -m "Mensaje de commit"
   ```
8. Subir cambios a repositorio como branch nuevo
   ```
   git push origin newbranch
   ```
9.  Realizar pull request en github
   1. Usar funcionalidad  web en github
10. Hacer pull request en sitio local para actualizar
    ```
    git pull origin dev
    ```
12. Repetir desde el paso 4 hasta tener el sitio release listo



&copy; Copyright 2020 

