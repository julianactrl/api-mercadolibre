const server = require("express").Router();
const axios = require("axios");
const { cache } = require('../cache');

server.get("/api/search", cache(60), (req, res) => {
  const product = req.query.q;
  const regex = /-I./;

  axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
    .then((product) => {
      const result = product.data.results;
      if (result.length > 0) {
        let products = result.map((product) => {
          return {
            id: product.id,
            title: product.title,
            price: product.price,
            currency_id: product.currency_id,
            available_quantity: product.available_quantity,
            thumbnail: product.thumbnail.replace(regex, "-O."),
            condition: product.condition,
            permalink : product.permalink 
          };
        });
        res.status(200).send(products);
      } 
      else {
        throw "Product not found.";
      }
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

server.get("/api/categories", cache(20), (req, res) => {
  
  axios.get('https://api.mercadolibre.com/sites/MLA/categories')
  .then(({data}) => {
    res.status(200).send(data)
  }
  )
  .catch((err) =>{
    res.status(404).send(err);
  })
});

  
module.exports = server;