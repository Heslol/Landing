const item = document.querySelector('.item');

const holders = document.querySelectorAll('.placeholder')

holders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

function dragstart(event) {
    event.target.classList.add('hold');
    event.target.firstChild.data = 'Relocating...';
    setTimeout(() => event.target.classList.add('hide'), 100)
}

function dragend(event) {
    event.target.firstChild.data = 'Have been relocated!';
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('added')
}

function dragleave(event) {
    event.target.classList.remove('added')
}

function dragdrop(event) {
    event.target.append(item);
    item.style.backgroundColor = 'rgb(235, 149, 51)';
}

