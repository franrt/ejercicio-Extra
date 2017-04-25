var fahrenheit = [32, 47, 89, -25, 13];
var celcius = [];

fahrenheit.map(function convertirTemp(valor) {
    return celcius.push((valor - 32) * (5 / 9).toFixed(2));
});

document.write(celcius);