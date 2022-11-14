const container = document.querySelector('.box');


function makeUpperTriangle(){
    const dimension = document.querySelector('.dim').value;
    for (let i = dimension ; i >= 1; i--){
        let row = document.createElement('div');
        row.classList.add('row')
        let h1 = document.createElement('h1')
        h1.textContent = "*".repeat(i);
        let column = document.createElement('div')
        column.classList.add('col')
        column.appendChild(h1)
        row.appendChild(column)
        container.appendChild(row)
    }
}


/*
----------*------*
-----------*----*-
------------*--*
-------------**
**
**
**
**
*/