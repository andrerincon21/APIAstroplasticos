const express = require('express');
const router = express.Router();

const {
    crearPedido,
    obtenerPedidos,
    buscarPedido,
    eliminarPedido
} = require('../Controllers/pedidosController');

router.post('/', crearPedido);
router.get('/', obtenerPedidos);
router.get('/buscar', buscarPedido);
router.delete('/:id', eliminarPedido);

module.exports = router;