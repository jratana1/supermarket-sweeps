function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function makeShoppingList(){
    let num = getRandomInt(150)
    
}

function submitUser(){
    console.log("im here")
    let username = document.getElementById("username").value

    user = {
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
            session.username = res.data.attributes.username
            document.getElementById('login').innerHTML = `Logged in: ${res.data.attributes.username}`
        })
}

function postScore(){
    let score = Game.score()
    let username = session.username
    scoreObj = {
        score, username
    }

    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(scoreObj)
    }

    fetch(`http://localhost:3000/scores`, config)
        .then(res => res.json())
        .then(res => {
           console.log("posting score")
        })
}