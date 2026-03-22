let pedidos = [];
let contador = 1;
let contadorBusqueda = 0;

const crearPedido = (req, res) => {
    const { fecha, producto, prioridad } = req.body;

    const nuevoPedido = {
        id: contador++,
        fecha,
        producto,
        prioridad
    };

    pedidos.push(nuevoPedido);

    res.json(nuevoPedido);
};

const obtenerPedidos = (req, res) => {
    res.json(pedidos);
};

const buscarPedido = (req, res) => {
    const { producto } = req.query;

    contadorBusqueda++;

    const resultados = pedidos.filter(p =>
        p.producto.toLowerCase().includes(producto.toLowerCase())
    );

    res.json({
        numeroBusqueda: contadorBusqueda,
        resultados
    });
};

const eliminarPedido = (req, res) => {
    const { id } = req.params;

    pedidos = pedidos.filter(p => p.id != id);

    res.json({ mensaje: "Eliminado" });
};

module.exports = {
    crearPedido,
    obtenerPedidos,
    buscarPedido,
    eliminarPedido
};