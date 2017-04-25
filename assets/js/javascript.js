function convertirCelcius() { //para pasar de c° a F°
    var fTempVal = parseInt(document.getElementById('fTemp').value);
    var cTempVal = (fTempVal - 32) * (5 / 9);
    document.getElementById('cTemp').value = cTempVal; //con el metodo getElementById le estoy diciendo que retorne el elemento que tiene el atributo ID con el valor especificado.
    return false;
}

function convertirFarenheit() { //para pasar de F° a C°
    var cTempVal = parseInt(document.getElementById('cTemp').value);
    var fTempVal = (cTempVal * (9 / 5)) + 32;
    console.log(fTempVal);
    document.getElementById('fTemp').value = fTempVal;
    return false;
}