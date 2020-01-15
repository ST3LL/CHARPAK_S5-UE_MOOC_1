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


function add_score(nb)
{
    var score = Number(document.getElementById("score").innerHTML);
    document.getElementById("score").innerHTML = score + nb; 
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
    setValue(i,0,a); 
    setValue(i,1,b);
    setValue(i,2,c);
    setValue(i,3,d);        
}

function test10(){
    setRow(0,1,2,3,4);
    setRow(1,5,6,7,8);
    setRow(2,9,10,11,12);
    setRow(3,13,14,15,16);
}


//DEFI 19
function init(){
    var tab = [
    ['*','*','*','*'],
    ['*','*','*','*'],
    ['*','*','*','*'],
    ['*','*','*','*']
    ];
    for (var i = 0; i <= 3; i++){
        for (var j = 0; j <= 3; j++){
            setValue(i, j, tab[i][j]);
        }
    }
}


function test11(){
    init();
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

function random2or4()
{
    var c = getRandomInt(0, 100);
    if (c <= 80)
    {
        return 2;
    }
    else
    {
        return 4;
    }
}

//DEFI 21
function getRandom2or4(){
    var a = getRandomInt(0, 3);
    var b = getRandomInt(0, 3);
    setValue(a, b, random2or4());
}


//DEFI 22
function startGame(){
    init();
    getRandom2or4();
    getRandom2or4();
}


//DEFI 23
function isEmpty(i, j){
    var tab = getValue(i,j);
    if (tab == '*'){
        return 1;
    }
    else {
        return 0;
    }

}


function test13(){
    init();
    startGame();
    for (var i = 0; i <= 3; i++){
        for (var j = 0; j <= 3; j++){
            if (isEmpty(i,j) == 1){
                console.log("la case ["+i+"]["+j+"] est vide");
            }
            else {
                console.log("la case ["+i+"]["+j+"] est remplie");
            }
        }
    }
}



//DEFI 24
function moveRight(i)
{
    var hasChanged = 0;
    var tab = [getValue(i,0), getValue(i,1), getValue(i,2), getValue(i,3)]
    for (var k = 0; k < 4; k++){
        for (var j = 0; j <= 2; j++){
            if ((tab[j+1] == '*') && (tab[j] != '*')){
                tab[j+1] = tab[j];
                tab[j] = '*';
                hasChanged++;
            }
        }
    }
    setRow(i, tab[0], tab[1], tab[2], tab[3]);
    return hasChanged;
}



function test14(){
    init();
    //setRow(0,'*','*','2','*');
    //setRow(0,'4','*','2','*');
    //setRow(0,'2','*','2','2');
    setRow(0,'4','2','*','4');
    moveRight(0);
}





//DEFI 26
function moveLeft(i){
    var hasChanged = 0;
    var tab = [getValue(i,0), getValue(i,1), getValue(i,2), getValue(i,3)]
    for (var k = 0; k < 4; k++){
        for (var j = 0; j <= 3; j++){
            if ((tab[j-1] == '*') && (tab[j] != '*')){
                tab[j-1] = tab[j];
                tab[j] = '*';
                hasChanged++;
            }
        }
    }
    setRow(i, tab[0], tab[1], tab[2], tab[3])
    return hasChanged;
}


function test15(){
    init();
    //setRow(0,'*','*','2','*');
    //setRow(0,'4','*','2','*');
    //setRow(0,'2','*','2','2');
    setRow(0,'4','2','*','4');
    moveLeft(0);
}



//DEFI 27
function setCol(j,a,b,c,d){
    var t = document.getElementById("tableau");
        t.rows[0].cells[j].innerHTML = a;
        t.rows[1].cells[j].innerHTML = b;
        t.rows[2].cells[j].innerHTML = c;
        t.rows[3].cells[j].innerHTML = d;
}


function moveUp(j){
    var hasChanged = 0;
    var tab = [getValue(0,j), getValue(1,j), getValue(2,j), getValue(3,j)]
    for (var k = 0; k < 4; k++){
        for (var i = 0; i <= 3; i++){
            if ((tab[i-1] == '*') && (tab[i] != '*')){
                tab[i-1] = tab[i];
                tab[i] = '*';
                hasChanged++;
            }
        }
    }
    setCol(j, tab[0], tab[1], tab[2], tab[3])
    return hasChanged;
}



function test16(){
    init();
    //setCol(0,'*','*','2','*');
    //setCol(0,'4','*','2','*');
    //setCol(0,'2','*','2','2');
    setCol(0,'4','2','*','4');
    moveUp(0);
}



function moveDown(j){
    var hasChanged = 0;
    var tab = [getValue(0,j), getValue(1,j), getValue(2,j), getValue(3,j)]
    for (var k = 0; k < 4; k++){
        for (var i = 0; i <= 3; i++){
            if ((tab[i+1] == '*') && (tab[i] != '*')){
                tab[i+1] = tab[i];
                tab[i] = '*';
                hasChanged++;
            }
        }
    }
    setCol(j, tab[0], tab[1], tab[2], tab[3])
    return hasChanged;
}



function test17(){
    init();
    //setCol(0,'*','*','2','*');
    //setCol(0,'4','*','2','*');
    //setCol(0,'2','*','2','2');
    setCol(0,'4','2','*','4');
    moveDown(0);
}



//DEFI 28
function fusionRight(i){
    var hasChanged = 0;
    var tab = [getValue(i,0), getValue(i,1), getValue(i,2), getValue(i,3)];
    var l = tab.length;
    if (l != 0) {
        for (var j = 3; j > 0; j--) {
            if (Number(tab[j-1]) == Number(tab[j])){
                tab[j] = Number(tab[j]) + Number(tab[j-1]);
                add_score(tab[j]);
                tab[j-1] = '*';
                setRow(i, tab[0], tab[1], tab[2], tab[3]);
                moveRight(i);
                tab = [getValue(i,0), getValue(i,1), getValue(i,2), getValue(i,3)];
                hasChanged++;
            }
        }
    } 
    if (tab.length < l){
        for (var k = 0; k > (l - tab.length); k++){
            tab.unshift('*');
        }
    }
    setRow(i, tab[0], tab[1], tab[2], tab[3]);
    return hasChanged;
}


function test18(){
    init();
    //setRow(0,'*','*','2','2');
    //setRow(0,'4','4','2','2');
    //setRow(0,'*','2','2','2');
    //setRow(0,'2','*','2','4');
    setRow(0,'4','2','*','2');
    moveRight(0);
    fusionRight(0);
}


//DEFI 29
function fusionLeft(i){
    var hasChanged = 0;
    var tab = [getValue(i,3), getValue(i,2), getValue(i,1), getValue(i,0)];
    var l = tab.length;
    if (l != 0) {
        for (var j = 3; j > 0; j--) {
            if (Number(tab[j-1]) == Number(tab[j])){
                tab[j] = Number(tab[j]) + Number(tab[j-1]);
                add_score(tab[j]);
                tab[j-1] = '*';
                setRow(i, tab[3], tab[2], tab[1], tab[0]);
                moveLeft(i);
                tab = [getValue(i,3), getValue(i,2), getValue(i,1), getValue(i,0)];
                hasChanged++;
            }
        }
    } 
    if (tab.length < l){
        for (var k = 0; k > (l - tab.length); k++){
            tab.unshift('*');
        }
    }
    setRow(i, tab[3], tab[2], tab[1], tab[0]);
    return hasChanged;
}



function test19(){
    init();
    //setRow(0,'*','*','2','2');
    //setRow(0,'4','4','2','2');
    //setRow(0,'*','2','2','2');
    setRow(0,'2','*','2','4');
    moveLeft(0);
    fusionLeft(0);
}

//DEFI 30
function fusionUp(j){
    var hasChanged = 0;
    var tab = [getValue(0,j), getValue(1,j), getValue(2,j), getValue(3,j)];
    var l = tab.length;
    if (l != 0) {
        for (var i = 0; i < 3; i++) {
            if (Number(tab[i+1]) == Number(tab[i])){
                tab[i] = Number(tab[i]) + Number(tab[i+1]);
                add_score(tab[i]);
                tab[i+1] = '*';
                setCol(j, tab[0], tab[1], tab[2], tab[3]);
                moveUp(j);
                tab = [getValue(0,j), getValue(1,j), getValue(2,j), getValue(3,j)];
                hasChanged++;
            }
        }
    } 
    if (tab.length < l){
        for (var k = 0; k > (l - tab.length); k++){
            tab.push('*');
        }
    }
    setCol(j, tab[0], tab[1], tab[2], tab[3]);
    return hasChanged;
}



function test20(){
    init();
    //setRow(0,'*','*','2','2');
    //setRow(0,'4','4','2','2');
    //setRow(0,'*','2','2','2');
    setCol(0,'2','*','2','4');
    moveUp(0);
    fusionUp(0);
}


function fusionDown(j){
    var hasChanged = 0;
    var tab = [getValue(0,j), getValue(1,j), getValue(2,j), getValue(3,j)]
    var l = tab.length;
    if (l != 0) {
        for (var i = 3; i > 0; i--) {
            if (Number(tab[i-1]) == Number(tab[i])){
                tab[i] = Number(tab[i]) + Number(tab[i-1]);
                add_score(tab[i]);
                tab[i-1] = '*';
                setCol(j, tab[0], tab[1], tab[2], tab[3])
                moveDown(j);
                tab = [getValue(0,j), getValue(1,j), getValue(2,j), getValue(3,j)]
                hasChanged++;
            }
        }
    } 
    if (tab.length < l){
        for (var k = 0; k > (l - tab.length); k++){
            tab.unshift('*');
        }
    }
    setCol(j, tab[0], tab[1], tab[2], tab[3]);
    return hasChanged;
}


function test21(){
    init();
    //setRow(0,'*','*','2','2');
    //setRow(0,'4','4','2','2');
    //setRow(0,'*','2','2','2');
    setCol(0,'2','*','2','4');
    moveDown(0);
    fusionDown(0);
}

//DEFI 31
function righti(i){
  var hasChanged = 0;
  hasChanged += moveRight(i);
  hasChanged += fusionRight(i);
  hasChanged += moveRight(i);
  return hasChanged;
}

function right()
{
  var hasChanged = 0;
    for(var i=0; i<=3; i++)
    {
       hasChanged += righti(i);
    }
  return hasChanged;
}


function lefti(i){
  var hasChanged = 0;
  hasChanged += moveLeft(i);
  hasChanged += fusionLeft(i);
  hasChanged += moveLeft(i);
  return hasChanged;
}

function left()
{
  var hasChanged = 0;
    for(var i=0; i<=3; i++)
    {
       hasChanged += lefti(i);
    }
  return hasChanged;
}



function upi(i){
  var hasChanged = 0;
  hasChanged += moveUp(i);
  hasChanged += fusionUp(i);
  hasChanged += moveUp(i);
  return hasChanged;
}

function up()
{
  var hasChanged = 0;
    for(var i=0; i<=3; i++)
    {
       hasChanged += upi(i);
    }
  return hasChanged;
}


function downi(i){
  var hasChanged = 0;
  hasChanged += moveDown(i);
  hasChanged += fusionDown(i);
  hasChanged += moveDown(i);
  return hasChanged;
}

function down()
{
  var hasChanged = 0;
    for(var i=0; i<=3; i++)
    {
       hasChanged += downi(i);
    }
  return hasChanged;
}



function hasEmpty()
{
    var tmp = 0;
    for (var i = 0; i < 4; i++)
    {
        for (var j = 0; j < 4; j++)
        {
            tmp += isEmpty(i,j)
        }
    }
    if(tmp != 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function getEmpty()
{
    if(hasEmpty() == 1)
    {
        var i = getRandomInt(0, 3);
        var j = getRandomInt(0, 3);
        while(isEmpty(i,j) == 0)
        {
            i = getRandomInt(0, 3);
            j = getRandomInt(0, 3);
        }
        return [i, j];
    }
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
        startGame();
    }
    else if (event.key == "f"){
        test13();
    }
    else if (event.key == "g"){
        test14();
    }
    else if (event.key == "h"){
        test15();
    }
    else if (event.key == "j"){
        test16();
    }
    else if (event.key == "k"){
        test17();
    }
    else if (event.key == "l"){
        test18();
    }
    else if (event.key == "m"){
        test19();
    }
    else if (event.key == "w"){
        test20();
    }
    else if (event.key == "x"){
        test21();
    }
    //DEFI 34
    else if (event.key == "ArrowRight"){
        if(right() == 0)
        {
            console.log("Pas de mouvement et pas de fusion !");
        }
        else
        {
            var coord = getEmpty();
            var i = coord[0];
            var j = coord[1];
            setValue(i, j, random2or4())
        }
    }
    else if (event.key == "ArrowLeft"){
        if(left() == 0)
        {
            console.log("Pas de mouvement et pas de fusion !");
        }
        else
        {
            var coord = getEmpty();
            var i = coord[0];
            var j = coord[1];
            setValue(i, j, random2or4())
        }
    }
    else if (event.key == "ArrowUp"){
        if(up() == 0)
        {
            console.log("Pas de mouvement et pas de fusion !");
        }
        else
        {
            var coord = getEmpty();
            var i = coord[0];
            var j = coord[1];
            setValue(i, j, random2or4())
        }
    }
    else if (event.key == "ArrowDown"){
        if(down() == 0)
        {
            console.log("Pas de mouvement et pas de fusion !");
        }
        else
        {
            var coord = getEmpty();
            var i = coord[0];
            var j = coord[1];
            setValue(i, j, random2or4())
        }
    }
    

});
//addEventListener est un gestionnaire d'événement