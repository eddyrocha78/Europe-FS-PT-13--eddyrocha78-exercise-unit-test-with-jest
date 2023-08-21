test("One dollar should be 106.583 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromDollarToYen(1000)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 1000 * (1.2/127.9); 
    
    // this is the comparison for the unit test
    let dollarYen = fromDollarToYen(1000);
    console.log(dollarYen);
     expect(dollarYen).toBe(9.38); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One euro should be 1.20 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One yen should be 159.875 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromYenToPound(10)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 127.9/0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(10)).toBe(1598.75); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})