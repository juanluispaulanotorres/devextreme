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

Este proyecto cuenta con 2 módulos principales:

    - AppModule: Localizado en src/app/app.module.ts, es el módulo principal de la aplicación, responsable del arranque y de la combinación de otros módulos.
    - SharedModule: Localizado en src/app/shared/shared.module.ts. Conjunto de componentes genéricos que se reutilizarán de cara a la creación de nuevos módulos.

A parte de los anteriores, habrá otros módulos que formen parte de otras secciones de la aplicación. En este caso, se darán a conocer los siguientes:

    - PagesModule: Localizado en src/app/pages/pages.module.ts. Aquí se encuentran los componentes que tienen en común los módulos siguientes:
        - UserModule: Localizado en src/app/pages/user/user.module.ts. Gestiona los componentes de DevExtreme incluidos en el módulo 'user'.
        - CountryModule: Localizado en src/app/pages/country/country.module.ts. Gestiona los componentes de DevExtreme incluidos en el módulo 'country'.


## Componentes usados

### Country

A continuación se explican los componentes utilizados en el módulo 'country', todos ellos compuestos por tres archivos con las siguientes extensiones: ts, html y scss.

- AddComponent:
Es el componente donde se implementa el código que se encarga de registrar en la aplicación un país nuevo.
Consta de un formulario con seis campos y dos botones.

    Para el formulario se ha hecho uso de la etiqueta <form> a la que, mediante el uso de la propiedad [formGroup], se ha vinculado al FormGroup 'addFormCountry' creado en el
    archivo add.component.ts.

    Dicho FormGroup contiene seis FormControls: name, region, language, population, urlFlag y description, con sus respectivas validaciones.

    Para cada uno de los campos, en el html, se han usado las etiquetas <dx-text-box>, <dx-number-box> y <dx-text-area>.
    Para los botones, se ha utilizado el componente genérico <app-button> (se explicará su composición en la sección "Componentes Genéricos").

    Para integrar las validaciones a la vista, se ha hecho uso de <dx-validator> y <dxi-validation-rule> y mediante la propiedad 'type', se ha especificado el tipo de validación.

    Respecto a los botones, en este caso son dos: 
    - Save: Botón que estará deshabilitado hasta que el formulario sea válido. Se encargará de enviar la información a backend para almacenarla en la base de datos.
    - Clear: Este botón se encargá simplemente de limpiar los campos del formulario.

    Al estar implementado con un componente genérico, ambos botones se encuentran dentro de la iteración de un bucle en la vista.
    Al hacer click sobre los dos botones se ejecuta el mismo método, en este caso 'clickOnButton()', al que se le pasa cada botón como parámetro.
    Una vez identificado cada botón, se ejecutará el método submit(), en caso de que el botón pulsado sea 'Save' o clear(), en caso de que se trate de 'Clear'.

- ListComponent:
En este componente se implementa el código encargado de visualizar el listado de los países almacenados en la base de datos.
Los datos se muestran en una tabla con una cabecera de cinco campos: country name, region, language, population y flag.

    Mediante una petición a backend, se obtienen un conjunto de países y se almacenan en un array de objetos (Country).
    Para la tabla, se utiliza la etiqueta <dx-data-grid> de DevExtreme y el array se vincula a ella mediante la propiedad [dataSource].

    Para cada una de las columnas se utilizan las etiquetas <dxi-column> y se relacionan con las propiedades de los objetos a través de la propiedad [dataField].
    Con la propiedad caption establecemos el título de cada columna.

    Para visualizar una bandera como una imagen se debe añadir la etiqueta <img> dentro de un <dxi-column>. Para llevar a cabo esto, es necesario hacer uso de la propiedad
    celltemplate, mediante la cual se puede relacionar el valor de dicha propiedad con un contenedor creado dentro de <dxi-column>.

    Al realizar esto, se podrá incluir una imagen en la columna que corresponda.

    Con las etiquetas <dxo-pager>, <dxo-editing> y <dxo-selection> se puede seleccionar, paginar y editar la tabla.

    Al hacer click sobre una de las celdas donde se encuentran las banderas, se ejecutará el método 'openGalleryPopup($event)' que es el encargado de abrir el popup genérico que muestra el nombre y la bandera del país seleccionado.

    En este componente también se lleva a cabo la petición para eliminar la información de un país de la base de datos.
    Para la eliminación, se realizan varios pasos:
        1º) Se hace click sobre un registro de la tabla.
        2º) Al hacer esto, se obtiene el id del país seleccionado y se muestra en pantalla el componente de DevExtreme <dx-speed-dial-action> (botón en pantalla).
        3º) Al hacer click sobre <dx-speed-dial-action>, aparecerá un modal (componente genérico).
        4º) Cuando se confirma la eliminación, se hará una petición a backend y se eliminará el país que previemente fue seleccionado.


- ConsultComponent:
En este componente se implementa el código encargado de visualizar los datos del país seleccionado que está almacenado en la base de datos.
Los datos se muestran justo debajo del componente <dx-select-box>, que se utiliza para indicar el país cuyos datos van a ser visualizados.

    Para mostrar los países, se usa el array 'arrayCountries', en el que se almacena cada país obtenido mediante una petición a backend. Este array es vinculado a la propiedad [dataSource] del mismo componente.

    Para mostrar tanto la bandera como el nombre de cada país, se utiliza la propiedad 'fieldTemplate', con la que se pueden almacenar otras etiquetas y contenedores html (misma función que cellTemplate, explicada en la línea 89).

    Una vez que se selecciona un país, su información será mostrada en un contenedor (<div>). Para esto, se almacena en el objeto 'country' sus datos, haciendo uso del método countrySelected($event), que se ejecutará al lanzarse el evento (onValueChanged) del componente <dx-select-box>.

