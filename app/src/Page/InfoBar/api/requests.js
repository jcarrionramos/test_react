const url = 'http://localhost:8080/info';
fetch(url)
.then(response => response.json())
.then(data => {
    const information = data;
    export default information;
})
.catch(error => console.error(error));
