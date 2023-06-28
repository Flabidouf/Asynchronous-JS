/*
For this exercise we're going to use VSCode's live-server extension, which allows us to have a running backend in a few seconds.

Create a new directory (= folder), containing 3 files:

index.html
script.js
becode.json
Create a <button>, when clicked becode rules are loaded with a fetch('becode.json'), then dynamically generate a <ul> list containing each rule in a <li>.
*/

const fetchbtn = document.getElementById('btn')
const ul = document.createElement('ul')
document.body.appendChild(ul)
// We create two const. One is affected to the btn id and defined as "fetchbtn". It could be named anything.
// The second const is the ul which the exercise asks us to create. We then append it to the body as a child.

fetchbtn.addEventListener('click', ()=> {
    fetch("becode.json")

    .then ((response)=> response.json())
    // response is an object which has properties and methods that allows you to access and work with the response data.
    // This is used to extract the data in a JSON format. We could use 'response.text' to extract the response body as plain text. 
    .then (data  => {
        data.forEach(element => {
            const li = document.createElement('li')
            li.textContent = element // This is where the json is transformed in text. Something human-readable.
            ul.appendChild(li)
        })
        
    })
    .catch (error => console.log(error));
})



