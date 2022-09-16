fetch('http://sdfsdf').then(response => {
    if (response.ok){
        return response.json();
    }
    throw new Error('Request failed');
}, networkError => console.log(netwrokError.message)
).then(jsonResponse => { 
    //code to execute
});