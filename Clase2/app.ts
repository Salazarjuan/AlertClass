"use strict"
//For y definicion de variables

/*
var x = 5;
for (var x = 0; x < 10; x++) {
    console.log(x + "X in for")
}
console.log(x + "x out of for")

var y:string = "hello";*/


//Definicion de funciones
/*function sayHello(value:string):string{
    document.write(value);
    return value;
}

var x = "hello";
var y = 4;
var z = x + y;

sayHello(z);
console.log(z, "text");*/




//ejercicio en clase: determinar el error
/*
var container = document.getElementById('container');

function Counter(el) {
    el.count = 0;
    el.innerHTML = el.count;
    el.addEventListener('click',
        function () {
            el.count += 1;
            el.innerHTML = el.count;
        });
}
new Counter(container);
*/





//arrow function
/*
var container = document.getElementById('container');

function Counter(el) {
    this.count = 0;
    el.innerHTML = this.count;
    el.addEventListener('click',
        () => {
            this.count += 1;
            el.innerHTML = this.count;
        });
}
new Counter(container);
*/





//Problemas
/*
var container = document.getElementById('container');
function FirstReverse(str: string) :string{
    let list: string[] = str.split("");
    let auxStr: string = "";
    list.reverse();
    for (let i = 0; i < list.length; i++) {
        auxStr += list[i];
    }
    container.insertAdjacentText('beforebegin',auxStr);
    container.insertAdjacentHTML('beforebegin',  '<br/>');
    return auxStr;
}
console.log(FirstReverse("Hello world and coders"));
console.log(FirstReverse("I love angular"));
console.log(FirstReverse("1 2 3 4 5"));*/



//Problema 2
var container = document.getElementById('container');
function JollyJumperDetector(numList: number[]): boolean {
    let absList: number[] = new Array();
    let jollyJumper:boolean = false;
    for (let i = 0; i < numList.length - 1; i++) {
        let aux:number = Math.abs(numList[i] - numList[i+1]);
        absList.push(aux);
    }
    let jollyJumperCounter:number = 0;
    for (let i = 0; i < absList.length; i++) {
        for (let j = 1; j < numList.length; j++) {
            if (absList[i] == j) {
                jollyJumperCounter++;
                break;
            }
        }
    }
    if (jollyJumperCounter == numList.length - 1){
        container.insertAdjacentText('beforebegin',"True");
        container.insertAdjacentHTML('beforebegin',  '<br/>');
        return true;
    } else{
        container.insertAdjacentText('beforebegin',"false");
        container.insertAdjacentHTML('beforebegin',  '<br/>');
        return false;
    }
}

console.log(JollyJumperDetector([1,4,2,3]));
console.log(JollyJumperDetector([1,4,2,-1,,6]));
console.log(JollyJumperDetector([11,7,4,2,1,6]));
console.log(JollyJumperDetector([1,1,1,1]));