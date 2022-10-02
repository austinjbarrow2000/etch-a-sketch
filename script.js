const container = document.querySelector('#container');
size = 16;
createGrid(16);

function createGrid(size) {
    container.innerHTML = '';
    container.style["grid-template-columns"] = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size**2; i++) {
        const div = document.createElement('div');
        div.classList.toggle('gridBox');
        container.appendChild(div);
    }

    const grids = document.querySelectorAll('.gridBox');

    grids.forEach( (grid) => grid.addEventListener('mouseover', function(e) {
        hover(e)
    } ));

    function hover(e) {
        e.target.classList.add('hover');
}
}

const sizeButton = document.querySelector('#sizeButton');

sizeButton.addEventListener('click', changeSize);

function changeSize() {
    newSize = prompt("What size should the grid be?");
    if(newSize > 100) {
        alert('Did not change size. Keep 100 or below.');
    } else {
        createGrid(newSize);
    }
}