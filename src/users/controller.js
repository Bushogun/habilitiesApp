const createError = require('http-errors');
const debug = require('debug')('app:module-users-controller');

const { UsersService } = require('./services')
const { Response } = require('../common/response')

module.exports.UsersController = {
    getUsers:async (req, res) => {
        try{
            let users = await UserService.getAll();
            Response.sucess(res, 200, 'Lista de Usuarios', users)
            //res.json(products);
        }catch(error){
            debug(error);
            Response.error(res)
            //res.status(500).json({ message: "Internal server error"});
        }
    },
    getUser: async (req, res) => {
        try{
            const { params : { id },} = req;
            let user = await UsersService.getById(id);
            if (!user){
                Response.error(res, new createError.NotFound());
            }else{
                Response.sucess(res, 200, `User ${id}`, User);
                //res.json(product);
            }
        } catch ( error ) {
            debug( error );
            Response.error(res);
            //res.status(500).json({ message: "Internal server error" });
        }
    },
    createUser: async (req, res) => {
        try { 
            const { body } = req;
            if (!body || Object.keys(body).length === 0){
                Response.error(res, new createError.BadRequest());
            }else{
                const insertedId = await UsersService.create(body);
                Response.sucess(res, 201, 'Usuario agregado', insertedId);
                //res.json(insertedId);
            }
            //console.log(body)
        }catch (error) {
            debug(error);
            Response.error(res)
            //res.status(500).json({ message: "Internal Server error"});
        }
    },
}