function convertirCelcius() {
    var fTempVal = parseInt(document.getElementById('fTemp').value);
    var cTempVal = (fTempVal - 32) * (5 / 9);
    document.getElementById('cTemp').value = cTempVal;
    return false;
}

function convertirFarenheit() {
    var cTempVal = parseInt(document.getElementById('cTemp').value);
    var fTempVal = (cTempVal * (9 / 5)) + 32;
    console.log(fTempVal);
    document.getElementById('fTemp').value = fTempVal;
    return false;
}