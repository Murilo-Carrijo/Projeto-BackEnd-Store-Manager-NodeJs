require('dotenv').config();
const express = require('express');

const productsRouters = require('./routeers/productsRouters');
const salessRouters = require('./routeers/salesRouters');

const app = express();

app.use(express.json());
app.use('/products', productsRouters);
app.use('/sales', salessRouters);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
