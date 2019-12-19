//génération d'un tableau js

function setValue(i,j,val){
    var t = document.getElementById("tableau");
    t.rows[i].cells[j].innerHTML = val;
}

function getValue(i,j){
    var t = document.getElementById("tableau");
    return t.rows[i].cells[j].innerHTML;
}


function init(){
    var tab = [[ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0]
        ];
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




function start(){
    init();
    getRandom2or4();
    getRandom2or4();
}



function load(tableau){
    for (var i = 0; i <= 3; i++){
        for (var j = 0; j <= 3; j++){
            setValue(i, j, tableau[i][j]);
        }
    }
}

function getTableau(){
    var tab = [[ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0],
        [ 0, 0, 0, 0]
        ];
    for (var i = 0; i <= 3; i++){
        for (var j = 0; j <= 3; j++){
            tab[i][j] = getValue(i, j);
        }
    }
    return tab;
}



function deplacer_gauche(t){
    //var t = [t[i][0], t[i][1], t[i][2], t[i][3]];
    //t = setValue(i, j, tab[i][j])
    /* conds :
    abcd
    aabc
    aaab
    aaaa
    abbc
    abbb
    abcc
    */
    
    for (var i = 0; i <= 3; i++)
    {
        if((t[i][0]!=t[i][1]) && (t[i][0]!=t[i][2]) && (t[i][0]!=t[i][3]) && (t[i][1]!=t[i][2]) && (t[i][2]!=t[i][3]))
        {
            // abcd
            t[i] = [t[i][0], t[i][1], t[i][2], t[i][3]];
        }
        if((t[i][0]==t[i][1]) && (t[i][0]!=t[i][2]) && (t[i][0]!=t[i][3]) && (t[i][1]!=t[i][2]) && (t[i][2]!=t[i][3]))
        {
            // aabc
            t[i] = [2*t[i][0], t[i][1], t[i][2], 0];
        }
        if((t[i][0]==t[i][1]) && (t[i][0]==t[i][2] )&& (t[i][0]!=t[i][3]) && (t[i][1]==t[i][2]) && (t[i][2]!=t[i][3]))
        {
            // aaab
            t[i] = [2*t[i][0], t[i][2], t[i][3], 0];
        }
        if((t[i][0]==t[i][1]) && (t[i][0]==t[i][2]) && (t[i][0]==t[i][3]) && (t[i][1]==t[i][2]) && (t[i][2]==t[i][3]))
        {
            // aaaa
            t[i] = [2*t[i][0], 2*t[i][2], 0, 0];
        }
        if((t[i][0]!=t[i][1]) && (t[i][0]!=t[i][2]) && (t[i][0]!=t[i][3]) && (t[i][1]==t[i][2]) && (t[i][2]!=t[i][3]))
        {
            // abbc
            t[i] = [t[i][0], 2*t[i][1], t[i][3], 0];
        }
        if((t[i][0]!=t[i][1]) && (t[i][0]!=t[i][2]) && (t[i][0]!=t[i][3]) && (t[i][1]==t[i][2]) && (t[i][2]==t[i][3]))
        {
            // abbb
            t[i] = [t[i][0], 2*t[i][1], t[i][3], 0];
        }
        if((t[i][0]!=t[i][1]) && (t[i][0]!=t[i][2]) && (t[i][0]!=t[i][3]) && (t[i][1]!=t[i][2]) && (t[i][2]==t[i][3]))
        {
            // abcc
            t[i] = [t[i][0], t[i][1], 2*t[i][2], 0];
        }
        if((t[i][0]== t[i][1]) && (t[i][0]!=t[i][2]) && (t[i][0]!=t[i][3]) && (t[i][1]!=t[i][2]) && (t[i][2]==t[i][3]))
        {
            // aabb
            t[i] = [t[i][0], t[i][1], t[i][2], t[i][3]];
        }   
    }
    return t;
}




function test3(){
    var count = document.getElementById("score").innerHTML;
    Number(count);
    document.getElementById("score").innerHTML = ++count; 
}



document.addEventListener('keydown', function(event) { 
    console.log(event.key);
    if (event.key == "ArrowLeft"){
        var tab = getTableau();
        tab = deplacer_gauche(tab);
        load(tab);
    }
    else if (event.key == "a"){
        start();
        console.log(tab)
    }
});




        /* previus shit
        if (t[i][0] == t[i][1])
        {
            if (t[i][2] == t[i][3])
            {
                t[i] = [2*t[i][0], 2*t[i][2], 0, 0];
            }
        }
        if (t[i][0] == t [i][1]) 
        {
            if (t[i][2] != t[i][3])
            {
                t[i] = [2*t[i][0], t[i][2], t[i][3], 0];
            }
        }
        if (t[i][0] != t[i][1])
        {
            if (t[i][2] == t[i][3])
            {
                t[i] = [t[i][0], t[i][1], 2*t[i][2], 0];
            } 
        }
        if (t[i][0] != t[i][1])
        {
            if (t[i][2] != t[i][3])
            {
                t[i] = [t[i][0], 2*t[i][1], t[i][3], 0];
            }
        }    
        if (t[i][0] != t[i][1])
        {
            if (t[i][2] != t[i][3])
            {
                t[i] = [t[i][0], t[i][1], t[i][2], t[i][3]];
            }
        }*/ 