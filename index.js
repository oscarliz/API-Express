const express = require('express');

// crear el servidor de express
const app = express();


//rutas
app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'hola'
    });
});


app.listen(3000, () => {
    console.log('servidor corriendo en puerto ' + 3000);
});