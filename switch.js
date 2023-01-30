// if/else vs switch 
var color = 'red';
if(color === 'white'){
    console.log("It is white");
}
else if(color === 'green'){
    console.log("It is green");
}
else if(color === 'red'){
    console.log("It is red");
}
else{
    console.log("It is black");
}


// switch 
switch(color){
    case 'white':
        console.log("It is white");
        break;
    case 'green':
        console.log("It is green");
        break;
    case 'red':
        console.log("It is red");
        break;
        default:
            console.log("It is black");
            break;

}