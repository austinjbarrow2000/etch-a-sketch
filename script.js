const container = document.querySelector('#container');

for(let i = 0; i < 16**2; i++) {
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