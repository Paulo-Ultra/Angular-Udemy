const handleErrors = async (response) => {
    console.log(response);
    if(response.ok) {
        return response.json();
    } else {
        throw {
            status: response.status,
            message: response.statusText,
            url: response.url,
            body: await response.json()
        }
    }
};

const queryParams = new URLSearchParams({
    name: 'Laura',
    age: 30
});

fetch('http://localhost:3000/users/10?' + queryParams, {
    method: 'GET',
    headers: {
        Teste: 'Teste'
    }
})
.then(response => response.json())
.then(res => console.log('Sucesso =>', res))
.catch(error => console.log('Error =>',error));