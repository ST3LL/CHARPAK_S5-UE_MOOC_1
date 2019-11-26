// javascript

//DEFI 3
console.log("coucou");


//DEFI 8
function test1(){
    console.log("test1");
}


//DEFI 9
function test2() {
    var test = "Le titre a été modifié";
    document.getElementById("titre_principal").innerHTML =  test;
}



//DEFI 11
function test3(){
    var count = document.getElementById("score").innerHTML;
    Number(count);
    document.getElementById("score").innerHTML = ++count; 
}


//DEFI 12
function test4(){
    case0 = document.getElementById("case0-0").innerHTML;
    console.log(case0);
}


//DEFI 13
function test5(){
    var name_case = "30";
    document.getElementById("case0-0").innerHTML = name_case;
}


//DEFI 14
function getValue(i,j){
    var t = document.getElementById("tableau");
    return t.rows[i].cells[j].innerHTML;
}

function test6(){
    console.log(getValue(0,0));
    console.log(getValue(1,1));
    console.log(getValue(2,2));
    console.log(getValue(3,3));
}


//DEFI 15
function setValue(i,j,val){
    var t = document.getElementById("tableau");
    t.rows[i].cells[j].innerHTML = val;
}


function test7(){
    setValue(0,0,"p"); 
    setValue(1,1,"q");
    setValue(2,2,"r");
    setValue(3,3,"s");
}


//DEFI 16
function showRow(i){
    var t = document.getElementById("tableau");
    for (var j = 0; j < 4; j++)  {
        console.log(getValue(i,j));
    }
}

function test8(){
    showRow(0);
    showRow(1);
    showRow(2);
    showRow(3);
}


//DEFI 17
function showCol(j){
    var t = document.getElementById("tableau");
    for (var i = 0; i < 4; i++)  {
        console.log(getValue(i,j));
    }
}

function test9(){
    showCol(0); 
    showCol(1);
    showCol(2);
    showCol(3);
}


//DEFI 18
function setRow(i,a,b,c,d){
    var t = document.getElementById("tableau");
        t.rows[i].cells[0].innerHTML = a;
        t.rows[i].cells[1].innerHTML = b;
        t.rows[i].cells[2].innerHTML = c;
        t.rows[i].cells[3].innerHTML = d;
}

function test10(){
    setRow(0,1,2,3,4);
    setRow(1,5,6,7,8);
    setRow(2,9,10,11,12);
    setRow(3,13,14,15,16);
}


//DEFI 19
var tab = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
    ];


function init(){
    for (var i = 0; i <= 3; i++){
        for (var j = 0; j <= 3; j++){
            setValue(i, j, tab[i][j]);
        }
    }
}


function test11(){
    init(i, j, tab[i][j]);
}


//DEFI 20
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)) + min;
}


function test12(min, max){
    var a = getRandomInt(min, max);
    var b = getRandomInt(min, max);
    setValue(a, b, "@")
}


//DEFI 21
function getRandom2or4(){
    var a = getRandomInt(0, 3);
    var b = getRandomInt(0, 3);
    var c = getRandomInt(0, 100);
    if (c <= 80) {
        setValue(a, b, 2);
    }
    else {
        setValue(a, b, 4);
    }
}


//DEFI 22
function test13(){
    getRandom2or4();
    getRandom2or4();
}



document.addEventListener('keydown', function(event) { //pour tout le document
    //DEFI 6, 7
    console.log(event.key);
    if (event.key == "a"){
        test1();
    }
    else if (event.key == "z") {
        test2(); // change title
    }
    else if (event.key == "e") {
        test3();
    }
    else if (event.key == "r"){
        test4();
    }
    else if (event.key == "t") {
        test5();
    }
    else if (event.key == "y"){
        test6();
    }
    else if (event.key == "u"){
        test7();
    }
    else if (event.key == "i"){
        test8();
    }
    else if (event.key == "o"){
        test9();
    }
    else if (event.key == "p"){
        test10();
    }
    else if (event.key == "q"){
        test11();
    }
    else if (event.key == "s"){
        test12(0, 3);
    }
    else if (event.key == "d"){
        test13();
    }
});
//addEventListener est un gestionnaire d'événement