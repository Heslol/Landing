const colors = ['red', 'green', 'purple', 'blue', 'aqua', 'orange', 'aliceblue'];
const SQUARES_NUMBER = 1122;
const CIRLE_NUMBER = 4;
const board = document.querySelector('#desk');
const modal = document.querySelector('.Modal');
const btnGroop = document.querySelectorAll('.Modal-body-btn');
const btns = Array.from(btnGroop);

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        console.log(event.currentTarget)
        modal.style.display = 'none';
    });
    const playBtn = btns[1];
    const watchBtn = btns[0];

    playBtn.addEventListener('click', playAlone);
    watchBtn.addEventListener('click', restart);
});


function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
};

function removeColor(element) {
    element.style.backgroundColor = '#1f1f1f';
    element.style.boxShadow = `0 0 2px #000, 0 0 10px #1f1f1f`
   
};

function getRandomColor() {
   const index =  Math.floor(Math.random() * colors.length)
   return colors[index];
};

function restart() {
    for(let i = 0; i < CIRLE_NUMBER + 3; i++){
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.margin = 10 + 'px';
        board.append(circle);
    };
};


function playAlone() {
    for(let i = 0; i < SQUARES_NUMBER; i++) {
        const square = document.createElement('div');
        square.classList.add(CLASSES.square);
        board.append(square);
        square.addEventListener('mouseover', () => {
            setColor(square);
        });
    
        square.addEventListener('mouseleave', () => {
            removeColor(square)
        });
    };
};

window.onload = () => {
    modal.style.display = 'block'
};