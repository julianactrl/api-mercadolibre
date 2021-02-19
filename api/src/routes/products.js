const server = require('express').Router();



server.get('/products', (req, res) => {
    res.send('Hola!!!!')
})

// server.listen(3001, () => {
//     console.log("El servidor está inicializado en el puerto 3001");
// });

module.exports = server;