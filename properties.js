var shoppingCart = {
    book: 21,
    pen: 12,
    keyboard: 2,
    mouse: 5
}

// console.log(shoppingCart.book);
var bookItem = shoppingCart['book'];
// console.log(bookItem);

var propertyName = 'book';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

// when you know the specipic property name, use dot notation to get the property value 

var properties = Object.keys(shoppingCart);
// console.log(properties);

// use dot notation to get the property value
var propertyValue = Object.values(shoppingCart);
// console.log(propertyValue);

// set property value 
shoppingCart.book = 20;
console.log(shoppingCart);
shoppingCart['book'] = 32;
console.log(shoppingCart);

shoppingCart[propertyName] = 55;
console.log(shoppingCart);