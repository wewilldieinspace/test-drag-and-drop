const container = document.querySelector('.container');
const item = container.querySelector('.draggable-block');
const itemArrow = item.querySelector('.draggable-block--arrow');


itemArrow.addEventListener('mousedown', () => {
    item.draggable = true
});

item.addEventListener('drag', e => {
    e.target.classList.add('draggable-block__active');
})

container.addEventListener('dragover', e => {
    e.preventDefault();

    if (e.target.classList.contains('target-block')) {
        const elements = container.querySelectorAll('section');

        [...elements].reverse().map(el => container.append(el));
    }
})

item.addEventListener('dragend', () => {
    item.classList.remove('draggable-block__active');
    item.draggable = false;
})