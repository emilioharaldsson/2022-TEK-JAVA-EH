

function calculateReverbAndDelay(){
    const table = document.querySelector('.reverbAndDelay');
    table.innerHTML = "";
    const bpm = document.querySelector('.bpm').value;
    const time = 60000;
    const quarter = time/bpm;
    const whole = (time/bpm)*4;
    const half = (time/bpm)*2;
    const eigth = (time/bpm)/2;
    const sixteenth = (time/bpm)/4;
    const thritySecond = (time/bpm)/8;
    const sixtyFourth = (time/bpm)/16;

    const entryTimes = {
        whole,
        half,
        quarter,
        eigth,
        sixteenth,
        thritySecond,
        sixtyFourth
    }

    const tableHead = document.createElement('thead');
    const headingRow = document.createElement('tr');
    const noteHeading = document.createElement('th');
    const durationHeading = document.createElement('th');
    noteHeading.setAttribute("scope", "col");
    noteHeading.innerText = "Note";
    durationHeading.setAttribute("scope", "col");
    durationHeading.innerText = "Duration(ms)";
    headingRow.append(noteHeading);
    headingRow.append(durationHeading);
    tableHead.append(headingRow)
    table.append(tableHead);

    const tableBody = document.createElement('tbody');

    const bodyRow1 = document.createElement('tr');
    const bodyNote1 = document.createElement('th');
    bodyNote1.setAttribute('scope', 'row');
    bodyNote1.innerText = "1";
    const bodyDuration1 = document.createElement('td');
    bodyDuration1.innerText = whole;
    bodyRow1.append(bodyNote1, bodyDuration1)
    tableBody.append(bodyRow1);

    const bodyRow2 = document.createElement('tr');
    const bodyNote2 = document.createElement('th');
    bodyNote2.setAttribute('scope', 'row');
    bodyNote2.innerText = "1/2";
    const bodyDuration2 = document.createElement('td');
    bodyDuration2.innerText = half;
    bodyRow2.append(bodyNote2, bodyDuration2)
    tableBody.append(bodyRow2);

    const bodyRow3 = document.createElement('tr');
    const bodyNote3 = document.createElement('th');
    bodyNote3.setAttribute('scope', 'row');
    bodyNote3.innerText = "1/4";
    const bodyDuration3 = document.createElement('td');
    bodyDuration3.innerText = quarter;
    bodyRow3.append(bodyNote3, bodyDuration3)
    tableBody.append(bodyRow3);

    const bodyRow4 = document.createElement('tr');
    const bodyNote4 = document.createElement('th');
    bodyNote4.setAttribute('scope', 'row');
    bodyNote4.innerText = "1/8";
    const bodyDuration4 = document.createElement('td');
    bodyDuration4.innerText = eigth;
    bodyRow4.append(bodyNote4, bodyDuration4)
    tableBody.append(bodyRow4);

    const bodyRow5 = document.createElement('tr');
    const bodyNote5 = document.createElement('th');
    bodyNote5.setAttribute('scope', 'row');
    bodyNote5.innerText = "1/16";
    const bodyDuration5 = document.createElement('td');
    bodyDuration5.innerText = sixteenth;
    bodyRow5.append(bodyNote5, bodyDuration5)
    tableBody.append(bodyRow5);

    const bodyRow6 = document.createElement('tr');
    const bodyNote6 = document.createElement('th');
    bodyNote6.setAttribute('scope', 'row');
    bodyNote6.innerText = "1/32";
    const bodyDuration6 = document.createElement('td');
    bodyDuration6.innerText = thritySecond;
    bodyRow6.append(bodyNote6, bodyDuration6)
    tableBody.append(bodyRow6);

    const bodyRow7 = document.createElement('tr');
    const bodyNote7 = document.createElement('th');
    bodyNote7.setAttribute('scope', 'row');
    bodyNote7.innerText = "1/64";
    const bodyDuration7 = document.createElement('td');
    bodyDuration7.innerText = sixtyFourth;
    bodyRow7.append(bodyNote7, bodyDuration7)
    tableBody.append(bodyRow7);

    table.append(tableBody);

}




