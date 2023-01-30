// object vs array 
var friendAge = [20, 22, 21, 24, 25, 27];

// Object 
var shoppingCart = {
    book: 21,
    pen: 12,
    keyboard: 2,
    mouse: 5
}

var properties = Object.keys(shoppingCart);
var values = Object.values(shoppingCart);
// console.log(properties, values);

for(var i=0; i<properties.length; i++){
    // var propertyName = properties[i];
    // var propertyValue = shoppingCart[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop 
for(propertyName in shoppingCart){
    const propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}