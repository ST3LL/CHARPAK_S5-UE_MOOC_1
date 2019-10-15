// javascript
console.log("coucou");

function test1(){
    console.log("test1");
}

function test2() {
    var test = "Le titre a été modifié";
    document.getElementById("titre_principal").innerHTML =  test;
}

function test3(){
    var count = document.getElementById("score").innerHTML;
    Number(count);
    document.getElementById("score").innerHTML = ++count; 
}

function test4(){
    case0 = document.getElementById("case0-0").innerHTML
    console.log(case0)
}

function test5(){
    var name_case = "30";
    document.getElementById("case0-0").innerHTML = name_case;
}

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


document.addEventListener('keydown', function(event) { //pour tout le document
    console.log(event.key);
    if (event.key == "t"){
        test1();
    }
    else if (event.key == "y") {
        test2(); // change title
    }
    else if (event.key == "e") {
        test3();
    }
    else if (event.key == "c"){
        test4();
    }
    else if (event.key == "a") {
        test5();
    }
    else if (event.key == "p"){
        test6();
    }
});
//addEventListener est un gestionnaire d'événement