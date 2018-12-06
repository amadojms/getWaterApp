'use strict';

const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    clienteID: String,
    cantidad: Number,
    repartidor: String
});

const Pedido = module.exports = mongoose.model('Pedido', pedidoSchema);