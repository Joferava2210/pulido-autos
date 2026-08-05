# Pulido Autos Premium

Landing page para un servicio de pulido automotriz con diseño responsive, secciones de servicios, paquetes, galería, testimonios, FAQ y contacto.

## Uso

1. Abrir `index.html` en un navegador o servir con un pequeño servidor local.
2. Editar datos personales en `index.html`.

## Estructura

- `index.html` — página principal
- `assets/css/styles.css` — estilos
- `assets/js/main.js` — interacciones y animaciones
- `assets/images/` — imágenes usadas en la página

## Flujo de ramas

- `develop` — rama de trabajo para ajustar y seguir mejorando el proyecto.
- `master` — rama de producción que sirve el sitio en GitHub Pages.

Para publicar cambios de `develop` a producción:

1. Crear un pull request de `develop` hacia `master`.
2. Revisar los cambios.
3. Hacer merge en `master`.
4. GitHub Pages desplegará el contenido de `master`.

## Despliegue

Este repositorio usa GitHub Actions para desplegar el sitio desde la rama `master` a `gh-pages`.
