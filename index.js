const score = {
    home: document.getElementById("score-home"),
    guest: document.getElementById("score-guest"),
}

function addHome1(){
    let result = 1 + parseInt(score.home.textContent)
    score.home.textContent = result
}
function addHome2(){
    let result = 2 + parseInt(score.home.textContent)
    score.home.textContent = result
}
function addHome3(){
    let result = 3 + parseInt(score.home.textContent)
    score.home.textContent = result
}
function addGuest1(){
    let result = 1 + parseInt(score.guest.textContent)
    score.guest.textContent = result
}
function addGuest2(){
    let result = 2 + parseInt(score.guest.textContent)
    score.guest.textContent = result
}
function addGuest3(){
    let result = 3 + parseInt(score.guest.textContent)
    score.guest.textContent = result
}

function restart() {
    score.home.textContent = 0
    score.guest.textContent = 0
}