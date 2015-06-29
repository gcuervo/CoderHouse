alert("este alert se corre en etiqueta script");

{
	var myvar = 1;
	var myOtherVar = 2;
}
es un bloque

if(expr) stml1; [else stml2;]  es un estilo de formato de documentación 

if(typeof variable == true){

}

// se utiliza typeof por que
// si la variable no esta declarada tira error

var num = Number(prompt("Ingrese un numero par"));
/* como prompt devuelve un string, lo transformo
a numero*/

if(num % 2 === 0){
	alert("el numero es par");
}else{
	alert("el numero es impar");
}

/* alert se encuentra en windows.alert() */

var i=0;

while(i<1000){

	if(i%2===0){
		console.log( i+ " " +"es par");
	}else{
		console.log(i +" "+ "es impar");
	}
	i++;
}

for(var l=0;i<1000;i++){

}