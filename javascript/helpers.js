function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function makeShoppingList(){
    let num = getRandomInt(150)
    
}

function submitUser(){
    console.log("im here")
    let username = document.getElementById("username").value

    let user = {
        username
    }
    
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(user)
    }

    fetch(`http://localhost:3000/users`, config)
        .then(res => res.json())
        .then(res => {
            console.log(res)

            document.getElementById('login').innerHTML = `Logged in: ${res.data.attributes.username}`
        })
}