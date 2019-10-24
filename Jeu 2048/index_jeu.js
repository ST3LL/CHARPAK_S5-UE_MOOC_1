//génération d'un tableau js
var array = [[ 1, 2, 3, 4],
			 [ 5, 6, 7, 8],
			 [ 9, 10, 11, 12],
			 [ 13, 14, 15, 16]];



function test(){
	for (var i = 0, c = array.length; i < c; i++) {
	    console.log(array[i]);
	}
}




function test1(){
    var num1 = element.innerHTML("case15").innerHTML;
    Number(num1)
    var num2 = document.getElementById("case16").innerHTML;
    Number(num2)
    document.getElementById("case15").innerHTML = num1 + num2;
    num2 = "oh";
}



document.addEventListener('keydown', function(event) { 
    //DEFI 6, 7
    console.log(event.key);
    if (event.key == "q"){
        console.log(wow);
        console.log(wow2);
    }
    else if (event.key == "a"){
    	test();
    }
    else if (event.key == "o"){
    	var wow = array[3,3];
		var wow2 = array[3,2];
		wow2 = wow + wow2;
		console.log(wow2);
    }
});