"use strict";
var container = document.getElementById('container');
function JollyJumperDetector(numList) {
    var absList = new Array();
    var jollyJumper = false;
    for (var i = 0; i < numList.length - 1; i++) {
        var aux = Math.abs(numList[i] - numList[i + 1]);
        absList.push(aux);
    }
    var jollyJumperCounter = 0;
    for (var i = 0; i < absList.length; i++) {
        for (var j = 1; j < numList.length; j++) {
            if (absList[i] == j) {
                jollyJumperCounter++;
                break;
            }
        }
    }
    if (jollyJumperCounter == numList.length - 1) {
        container.insertAdjacentText('beforebegin', "True");
        container.insertAdjacentHTML('beforebegin', '<br/>');
        return true;
    }
    else {
        container.insertAdjacentText('beforebegin', "false");
        container.insertAdjacentHTML('beforebegin', '<br/>');
        return false;
    }
}
console.log(JollyJumperDetector([1, 4, 2, 3]));
console.log(JollyJumperDetector([1, 4, 2, -1, , 6]));
console.log(JollyJumperDetector([11, 7, 4, 2, 1, 6]));
console.log(JollyJumperDetector([1, 1, 1, 1]));
//# sourceMappingURL=app.js.map