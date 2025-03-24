const express = require('express');

const server = express();

server.listen(3000);

server.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.sendFile('page.html', { root: __dirname });
});

server.get('*', (request, response) => {
    response.status(404).sendFile('page-not-found.html', { root: __dirname });
});