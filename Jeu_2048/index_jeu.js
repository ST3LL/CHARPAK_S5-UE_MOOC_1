//génération d'un tableau js
var tab = [[ 0, 0, 0, 0],
		[ 0, 0, 0, 0],
		[ 0, 0, 0, 0],
		[ 0, 0, 0, 0]
        ];


function setValue(i,j,val){
    var t = document.getElementById("tableau");
    t.rows[i].cells[j].innerHTML = val;
}


function init(){
    for (var i = 0; i <= 3; i++){
        for (var j = 0; j <= 3; j++){
            setValue(i, j, tab[i][j]);
        }
    }
}


function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)) + min;
}


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


function deplacer_gauche(t){
    //var t = [t[i][0], t[i][1], t[i][2], t[i][3]];
    for (var i = 0; i <= 3; i++)
    {
        if ((t[i][0] == t[i][1])) and ((t[i][2] == t[i][3]))
        {
            t = [2*t[i][0], 2*t[i][2], 0, 0];
        }
        if ((t[i][0] == t[i][1])) and ((t[i][2] != t[i][3]))
        {
            t = [2*t[i][0], t[i][2], t[i][3], 0];
        }
        if ((t[i][0] != t[i][1])) and ((t[i][2] == t[i][3]))
        {
            t = [t[i][0], t[i][1], 2*t[i][2], 0];
        } 
        if ((t[i][0] != t[i][1])) and ((t[i][2] != t[i][3])) and ((t[i][1] == t[i][2]))
        {
            t = [t[i][0], 2*t[i][1], t[i][3], 0];
        } 
        if ((t[i][0] != t[i][1]) and (t[i][2] != t[i][3]))
        {
            t = [t[i][0], t[i][1], t[i][2], t[i][3]];
        }    
    }
    return t;
}


function test3(){
    var count = document.getElementById("score").innerHTML;
    Number(count);
    document.getElementById("score").innerHTML = ++count; 
}

/*
function fusionner(){

}

*/

document.addEventListener('keydown', function(event) { 
    console.log(event.key);
    if (event.key == "ArrowLeft"){
        deplacer(tab);
    }
    else if (event.key == "a"){
        init();
        getRandom2or4();
        getRandom2or4();
    }

});