'use strict';

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    tipoUsuario: String
});

const Usuario = module.exports = mongoose.model('Usuario', usuarioSchema);