var str1 = "foo";
var consonantes = ["b","c","d","f","g","h","j","k","l","m","n","r","s","t","p","q","v","w","x","y","z"];

var i=0;

while(i<consonantes.length){

	if(str1[0]===consonantes[i]){
		console.log("La palabra empieza con una consonante");
	}
	i++;
}
_// ver si una palabra tiene vocales
	var found=false;
	var vocales = "aeiou";
	var string = prompt("Ingrese una palabra");
	var j=0;
	i=0;

	while(i<string.length && !found){
		j=0;
		while(j<vocales.length && !found){
			if(string[i]===vocales[j]){
				console.log(i);
				found = true;
			}
			j++;
		}
		i++;
	}

// cantidad de vocales
	var cantidad=0;
	var vocales = "aeiou";
	var string = prompt("Ingrese una palabra");
	var j=0;

	for(i=0;i<string.length ;i++){
		for(j=0;j<vocales.length ;j++){
			if(string[i]===vocales[j]){
				cantidad++;
			}
		}
	}
	console.log(cantidad);

// cantidad de numeros mayores a max
var cantidad=0;
var cantidadN=0;
var string = prompt("Ingrese una palabra");
var max = prompt("ingrese el valor del numero valido:")

for(i=0;i<string.length ;i++){
	if(Number(string[i])){
		cantidadN++;
		if(Number(string[i])>=max){
			cantidad++;
		}
	}
}	
console.log("cantidad total" + string.length);
console.log(cantidad);
console.log(cantidadN + " cantidad todal de numeros");




var string = prompt("Ingrese una palabra");
var stringCont = prompt("ingrese la palabra contenida:")
var string3 = prompt("Direcion de lectura");

string3 = string3.toLowerCase();

if(string3==="primera"){
	var index = string.indexOf(stringCont);
	if(index!=-1){
		console.log(index)
	}else{
		console.log("No se encontro ocurrencia");
	}
}else if(string3==="ultima"){
	var index = string.lastIndexOf(stringCont);
	if(index!=-1){
		console.log(index)
	}else{
		console.log("No se encontro ocurrencia");
	}
}else{
	console.log("ingrese primera o ultima");
}


var arr= Array();
do{
	var aux = prompt("ingresar elementos(basta detiene el proceso):");
	arr.push(aux);

}while(aux!="basta")
arr.pop();
console.log(arr);