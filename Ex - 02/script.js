

const fetchbtn = document.getElementById('btn')


fetchbtn.addEventListener('click', ()=> {
    fetch("https://api.chucknorris.io/jokes/random")

    .then ((response)=> response.json())
    .then (data  => { displayFact(data.value)})
    .catch(error => console.log(error));
    })
   


function displayFact(fact) {
    let divContainer = document.getElementById("container")
    let newDiv = document.createElement("div")
    newDiv.textContent = fact
    divContainer.appendChild(newDiv)
}

// Thanks Pietro, I owe you.

