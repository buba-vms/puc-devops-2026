const express = require('express');
const healthRouter = require('./routes/health');
const productsRouter = require('./routes/products');

const app = express();

app.use(express.json());

app.use('/health', healthRouter);
app.use('/produtos', productsRouter);

module.exports = app;
