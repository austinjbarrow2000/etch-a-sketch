const container = document.querySelector('#container');

for(let i = 0; i < 16**2; i++) {
    const div = document.createElement('div');
    div.classList.toggle('gridBox');
    div.innerText = i;
    container.appendChild(div);
    console.log(`Inserted square ${i}`);
}