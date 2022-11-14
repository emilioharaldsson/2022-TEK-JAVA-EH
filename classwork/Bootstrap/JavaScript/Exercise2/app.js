
function addingIntergers(...args){
    let total = 0;
    for (let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}

let answer = addingIntergers(1,2,3,4,5,6,7,8,9);


// A Calculator 

let input = "100   +   50    -    25     +    0 + 123  - 1";

function calculate (calc){
    let calcNoSpaces = calc.replace(/\s/g, "");
    let num = calcNoSpaces.match(/\d+/g);
    
}

calculate(input);
