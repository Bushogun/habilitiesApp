const express = require('express');
const debug = require('debug')('app:main');

//obtengo de config variables de entorno en ENV
const { Config } = require('./src/config/index');
const { ProductsAPI } = require('./src/products/index');
const{ UsersAPI } = require('./src/users/index');
//users
const { IndexAPI,NotFoundAPI } = require('./src/index/index');

const app = express();
app.use(express.json());

//modulos
IndexAPI(app);
ProductsAPI(app);
NotFoundAPI(app);
UsersAPI(app);

app.listen(Config.port, () => {
    debug(`Servidor escuchando en puerto ${Config.port}`)
});