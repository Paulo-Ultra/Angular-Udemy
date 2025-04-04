const express = require('express');
const cors = require('cors');

const server = express();

server.use(cors());

server.listen(3000);

const users = [
    {
        id: 0,
        name: 'Paulo',
        age: 38
    }
];

server.get('/users', (request, response) => {
    //response.status(200).send(users);
    response.status(200).json(users);
});

server.get('/users/:id', (request, response) => {
    const userId = request.params.id;
    const user = users.find(user => user.id.toString() === userId);
    // const user = users.find(user => user.id === +userId); -> Outra solução, mudar o tipo para number


    if(user) {
        response.status(200).send(user);
    } else {
        response.status(404).send('Usuário não encontrado.');
    }    
});

server.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html; charset=UTF-8');
    response.sendFile('page.html', { root: __dirname });
});

server.get('*', (request, response) => {
    response.status(404).sendFile('page-not-found.html', { root: __dirname });
});