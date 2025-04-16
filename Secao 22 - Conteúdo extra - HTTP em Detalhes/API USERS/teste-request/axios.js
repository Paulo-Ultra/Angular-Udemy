axios({
    method: 'GET',
    url: 'http//localhost:3000/users/',
    params: {
        name: 'Laura',
        age: 30
    },
    data: {
        id: 1,
        name: 'Lucas',
        age: 20
    }
}).then(
    response => console.log(response),
    error => console.log('Error =>', error)
);