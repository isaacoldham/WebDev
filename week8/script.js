let people;
let ships;


fetch('https://swapi.dev/api/people/')
    .then(response => response.json())
    .then(data => console.log(data));



async function loadNames() {
    let response = await fetch('https://swapi.dev/api/people/');
    let myObjects = await response.json();
    console.log(myObjects);
}