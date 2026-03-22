const express = require('express');
const app = express();

app.use(express.json());

const pedidosRoutes = require('./routes/pedidosRoutes');

app.use('/api/pedidos', pedidosRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});