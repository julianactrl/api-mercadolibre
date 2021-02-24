# Labs Challenge

En este proyecto el objetivo fue construir un Front-End y un Back-End que interactue con la API pública de Mercado Libre.

De ella vamos se extraejeron publicaciones que luego se  guarda en el back-end usando un caché. Para el Fron-end se desarrolló una serie de Componentes de React para poder mostrar e interactuar con las publicaciones antes mencionadas.


## Back-End

Se utilizo el siguiente endpoint de Mercado Libre https://api.mercadolibre.com/sites/MLA/search?q={query}. Recibe un queryString con el parámetro q con un string que indica el keyword a buscar.\
Tecnologías usar para el back: node js, express js, axios y memory caché.

## Front-End

Es una apilicación creada en react con hooks y redux, axios, react-router-dom, tailwinds, react-modal npm.\
Se emplearon los siguientes componentes:



### `SearchBar`

Un formulario controlado con un input de búsqueda, que dispare los requests a la API (a nuestro BACK-END, no a Mercado Libre).

### `Product Card`

En este componente se muestra un producto en particular, debemos mostrar:

    su imagen.
    su titulo.
    su precio (con la moneda).
    su condicion.
    si tiene stock o no.


### `Catalogo`



Este componente va mostrar un arreglo de productos (obtenidos de la API) usando Product Card. Tambien debe posibilitar:

    Poder ordenar los productos en base a su precio, de forma ascendete o descendente.
    Poder filtrar por condicion.
    Poder páginar los resultados de a 30 productos por página.



