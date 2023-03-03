# AppDevextremeProyect

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.


## Instalación

Para instalar un proyecto Angular junto con DevExtreme sólo tenemos que realizar los siguientes pasos:

    1º) Creamos un directorio para almacenar en él el futuro proyecto.
    2º) Desde la terminal, ejecutar el siguiente comando: npx -p devextreme-cli devextreme new angular-app app-name
    3º) npm i (Necesario para utilizar el gestor de paquetes de node)
    4º) Desde el proyecto que hemos creado, ejecutar lo siguiente: npm run start


## Aplicación

Esta aplicación está orientada al aprendizaje de DevExtreme (v22.2.4), una librería que proporciona componentes para el desarrollo web responsive.

El proyecto trata sobre la gestión de países y usuarios. 
Para dicha gestión, se ha realizado un mantenimiento completo (alta, listado, consulta, modificación y eliminación) y este mantenimiento se lleva a cabo mediante un conjunto de
componentes, haciendo uso de la herramienta DevExtreme.


## Estructura
Al crear el proyecto de Angular junto con DevExtreme, se define una estructura por defecto.

    src / app
            |
            layouts: Directorio en el que se guardan los layouts, por defecto, los tipos de disposiciones de los menús.
            pages: Aquí se almacenan los componentes de angular junto con sus archivos .html y hojas de estilo.
            shared: Conjunto de recursos que se reutilizarán en la aplicación.
                  |
                  components: Componentes genéricos.
                  services: Servicios a nivel global.

## Módulos

Este proyecto cuenta con 3 módulos principales:

- AppModule: Localizado en src/app/app.module.ts, es el módulo principal de la aplicación, responsable del arranque y de la combinación de otros módulos.
- CountryModule: Localizado en src/app/pages/country/country.module.ts. Gestiona los componentes de DevExtreme incluidos en el módulo 'country'.
- SharedModule: Localizado en src/app/shared/shared.module.ts. Conjunto de componentes genéricos que se reutilizarán de cara a la creación de nuevos módulos.
