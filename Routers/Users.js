const express = require('express');
//const Users = require('../Models/Users');
const router = express.Router();
const UsersController = require('../Controllers/Users')

//GET Todos los Users
router.get("", UsersController.getAllUsers);

//GET Informacion de 1 Usuario por 2 parametros
router.get('/:correo/:edad', UsersController.getUserByNameAndEmail);

//POST Nuevo User - Exlusivo para crear datos, no parte de la tarea
router.post("", UsersController.postCreateUser);

//PUT Modificar usuario por ID o crear nuevo
router.put("/:id", UsersController.putUpdateUser);

//DELETE usuario por ID
router.delete("/:id", UsersController.deleteUser);

module.exports = router;