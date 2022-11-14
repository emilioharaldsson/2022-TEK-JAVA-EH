function selectAll() {
    const switchBoxes = document.querySelectorAll('.form-check-input');
    for (let i = 0; i < switchBoxes.length; i ++){
        switchBoxes[i].checked = true;
    }
}

function deSelectAll() {
    const switchBoxes = document.querySelectorAll('.form-check-input');
    for (let i = 0; i < switchBoxes.length; i ++){
        switchBoxes[i].checked = false;
    }
}