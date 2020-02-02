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

const startButton = document.querySelector('#start');
startButton.onclick = function (event) {
    const cards = document.querySelector('#cards');
    const row = document.createElement('div');
    row.className = 'row row-cols-4';
    cards.appendChild(row);
    const col = document.createElement('div');
    col.className = 'col';
    row.appendChild(col)

mergeArray.forEach(key => {
    const card = document.createElement('div');
    card.className = 'img-fluid';
    card.dataset.name = key.name;
    card.style.backgroundImage = `url(${key.img})`
    col.appendChild(card);
});

  event.preventDefault()
};





