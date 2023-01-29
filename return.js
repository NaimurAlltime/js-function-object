function bringPen(money){
    var penPrice = 10;
    var quantity = money / penPrice;
    return quantity;
}

var myTaka = 80;
var pens = bringPen(myTaka);
console.log('my pen quantity is: ', pens);