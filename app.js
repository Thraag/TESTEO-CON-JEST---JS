
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))






// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    
    let valueInDollar = valueInEuro * 1.07;
   
    return valueInDollar;
}




const fromDollarToYen = function(valueInDollar) {
    
    let valueInYen = valueInDollar * 156.5 /1.07;
   
    return valueInYen;
}




const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * 0.87/156.5;
   
    return valueInPound;
}

console.log(fromEuroToDollar(2), fromDollarToYen(fromEuroToDollar(2)), fromYenToPound(fromDollarToYen(fromEuroToDollar(2))) )

module.exports = { sum, fromEuroToDollar, fromDollarToYen,fromYenToPound }

