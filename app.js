// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// we declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * (oneEuroIs['USD']/oneEuroIs['JPY']);
    //return the dollar value
    return parseFloat(valueInYen.toFixed(2));
}



// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs['USD'];
    //return the dollar value
    return valueInDollar;
}


// we declare the function with the exact name "fromEuroToDollar"
const fromYenToPound = function(valueInYen){
    // convert the given valueInEuro to dollars
    let valueInPound = valueInYen * (oneEuroIs['JPY'] / oneEuroIs['GBP']);
    //return the dollar value
    return valueInPound;
}



module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };


