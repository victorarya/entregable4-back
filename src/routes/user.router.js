const { getAll, create, getOne, remove, update, verifyCode, login, logged } = require('../controllers/user.controllers');
const express = require('express');
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJWT, getAll)
    .post(create);

routerUser.route('/login')
    .post(login)

routerUser.route('/me') // /users/me
    .get(verifyJWT, logged)

routerUser.route('/:id')
    .get(verifyJWT, getOne)
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

routerUser.route('/verify/:code')
    .get(verifyCode)

module.exports =routerUser;