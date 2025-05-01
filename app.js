const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3));

const fromDollarToYen = function(valueInEuro) {
    
    let valueInYen = valueInEuro * (1/1.07) * 156.5;
    
    return valueInYen;
}

const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromYenToPound = function(valueInEuro) {
    
    let valueInPound = valueInEuro * (1/156.5) * 0.87;
    
    return valueInPound;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};
