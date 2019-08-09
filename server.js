const express = require('express');

const HubsRouter = require('./hubs/hubs-router')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use('/api/hubs', HubsRouter)

module.exports = server