const xhr = new XMLHttpRequest();

xhr.open('GET', 'http://localhost:3000/users/0');

xhr.onload = () => {
    console.log('Response OnLoad', JSON.parse(xhr.response), xhr.status, xhr.statusText);
};

xhr.onreadystatechange = () => {
    console.log(xhr.readyState);
    if(xhr.readyState === 4 & xhr.status === 200){
        console.log(JSON.parse(xhr.response));
        console.log(xhr.getAllResponseHeaders());
        console.log(xhr.getResponseHeader('content-type'));
    }
};

xhr.send();