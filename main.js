document.querySelector('#cards').className = 'hidden'
const startButton = document.querySelector('#start');
let movements = 0;





startButton.onclick = function (event) {
    document.querySelector('#cards').className = 'container'

    event.preventDefault()
}


