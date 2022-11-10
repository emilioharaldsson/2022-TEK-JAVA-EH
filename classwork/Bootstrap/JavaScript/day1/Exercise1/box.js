const container = document.querySelector('.box');





const btn = document.querySelector('.btn')

function makeShape(){
    const height = document.querySelector('.height').value;
    const width = document.querySelector('.width').value;
    for (let i = 0 ; i < height; i ++){
        let row = document.createElement('div');
        row.classList.add('row')
        for (let j = 0; j < 3; j++){
            let h1 = document.createElement('h1')
            h1.textContent = "*";
            let column = document.createElement('div')
            column.classList.add('col')
            column.appendChild(h1)
            row.appendChild(column)
        }
        container.appendChild(row)
    }
}
