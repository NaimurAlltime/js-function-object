function getAverage(sub1, sub2, sub3){
    var totalMarks = sub1 + sub2 + sub3;
    var average = totalMarks / 3;
    return average;
}

var myAvgMarks = getAverage(57, 60, 58);
var myAvgMarksToDecimal = myAvgMarks.toFixed(2);
console.log('Average is: ', myAvgMarksToDecimal);