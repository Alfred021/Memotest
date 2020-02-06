const cardArray = [
    {
        name: 'Aerith',
        img: 'img/Aerith.jpg',
    },
    {
        name: 'Barrett',
        img: 'img/Barrett.jpg',
    },
    {
        name: 'Cloud',
        img: 'img/Cloud.jpg',
    },
    {
        name: 'RedXIII',
        img: 'img/Red_XIII.jpg',
    },
    {
        name: 'Sephiroth',
        img: 'img/Sephiroth.jpg',
    },
    {
        name: 'Tifa',
        img: 'img/Tifa.jpg',
    },
    {
        name: 'Vincent',
        img: 'img/Vincent.jpg',
    },
    {
        name: 'Yuffie',
        img: 'img/Yuffie.jpg',
    },
];

let mergeArray = cardArray.concat(cardArray);
mergeArray.sort(() => 0.5 - Math.random())
let counter = 0;

let cards = document.querySelector('#cards');
const startButton = document.querySelector('#start');

startButton.onclick = function (event) {

    let row = document.createElement('div');
    row.className = 'row'
    cards.appendChild(row);

mergeArray.forEach(key => {
    let col = document.createElement('div');
    col.className = 'col';
    row.appendChild(col)
    let card = document.createElement('img');
    card.className = 'img-fluid background-image';
    card.dataset.name = key.name;
    card.style.backgroundImage = `url(${key.img})`
    col.appendChild(card);
});

  event.preventDefault()
};






