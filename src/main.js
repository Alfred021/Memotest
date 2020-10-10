let clickedCard = null
let preventClick = false;
let combosFound = 0;
const combosToWin = 8;
const $board = document.querySelector('#cards')
const $card = document.getElementsByClassName('card');
const container = document.querySelectorAll('.alert-info')
$board.className = 'hidden';
const $starButton = document.querySelector('#start');
const $gameStatus = document.querySelector('#status');
let moves = 0;
let timer;

$starButton.onclick = function (event){
     $board.className = 'container'
    $gameStatus.innerHTML = "Let's Play!";

    timer = setInterval(countTimer, 1000);
    let seconds = 0;
        function countTimer() {
            seconds++
            let minute = Math.floor(seconds/60);
            let totalSeconds = seconds - (minute*60);

        function showTwoDigits(number) {
            if (number < 10) {
                number = '0' + number;
                return number;
                } else {
                    return number;
                };
            };

    document.querySelector('#timer').innerHTML = 'Playtime ' + showTwoDigits(minute) + ':' + showTwoDigits(totalSeconds);
}

    event.preventDefault();
}

const colors = [
    'red',
    'blue',
    'cyan',
    'violet',
    'green',
    'rose',
    'black',
    'brown',
];

const cards = [...document.querySelectorAll('.card')];

for (const color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color', color);
}

for (i=0, len = $card.length; i < len; i++) {
    $card[i].addEventListener("click", function(e){
       onCardClicked(e); 
    });
}


function onCardClicked(e) {
    const target = e.currentTarget;
    if (preventClick || target === clickedCard || target.className.includes('done')) {
        return;
    }
    target.className = target.className.replace('color-hidden', '').trim();
    target.className += ' done';

if (!clickedCard) {
    clickedCard = target;
} else if (clickedCard) {
        moves+=1
        document.querySelector('#player-moves').innerHTML = 'Moves: ' + moves;
    if (clickedCard.getAttribute('data-color') !== target.getAttribute('data-color')) {
        preventClick = true;
        setTimeout(() => {
            clickedCard.className = clickedCard.className.replace('done', '').trim() + ' color-hidden';
            target.className = target.className.replace('done', '').trim() + ' color-hidden';
            clickedCard = null;
            preventClick = false;
        }, 1000);
    } else {
        combosFound++
        clickedCard = null;
        if (combosFound === combosToWin) {
            clearInterval(timer)
            $gameStatus.innerHTML = 'You Win!'
            container.forEach(function(key) {
                key.classList.remove('alert-info')
                key.classList.add('alert-primary')
            });
                if (moves < 15) {
                    $gameStatus.innerHTML = 'You Win! Your Rank: S. ' + 'Reload the page to restart the game.';
                }
                else if (moves < 20) {
                    $gameStatus.innerHTML = 'You Win! Your Rank: A. ' + 'Reload the page to restart the game.';
                }
                else if (moves <= 25) {  
                    $gameStatus.innerHTML = 'You Win! Your Rank: B. ' + 'Reload the page to restart the game.';
                }
                else {
                    $gameStatus.innerHTML = 'You Win! Your Rank: C. ' + 'Reload the page to restart the game.';
                }

        }
    }
        
}
    e.preventDefault();
}
