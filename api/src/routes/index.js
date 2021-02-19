const { Router } = require('express');
// import all routers;
const productRouter = require('./products.js');

const router = Router();

router.use('/products', productRouter);


module.exports = router;