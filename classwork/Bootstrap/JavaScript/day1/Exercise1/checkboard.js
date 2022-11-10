const container = document.querySelector('.box')

function makeCheckBoard(){
    const height = parseInt(document.querySelector('.height').value);
    const width = parseInt(document.querySelector('.width').value);
    console.log(height + width)
    let width1;
    let width2;
    if (width % 2 != 0){
        
        width1 = Math.ceil(width/2);
        width2 = Math.floor(width/2);
    } else {
        width1 = width/2;
        width2 = width/2;
    }
    console.log("width1 is : " + width1 + " and width2 is : " + width2)
    for (let i = 0; i < height; i++){
        let row = document.createElement('div');
        row.classList.add('row')
        if (i % 2 == 0){
            for (let j = 0; j < width1; j++){
                let h1 = document.createElement('h1')
                h1.textContent = "*";
                let column = document.createElement('div')
                column.classList.add('col')
                column.appendChild(h1)
                row.appendChild(column)
            }
        } else {
            for (let j = 0; j < width2; j++){
                let h1 = document.createElement('h1')
                h1.textContent = "*";
                let column = document.createElement('div')
                column.classList.add('col')
                column.appendChild(h1)
                row.appendChild(column)
            }
        }
    container.appendChild(row)
    }
}