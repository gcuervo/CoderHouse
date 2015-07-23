Funciones

function nombre(exp1)
	statement;

function prueba(mensaje){

	return mensaje.indexOf("hola");
}

var string = prompt("ingrese string:");
var ans = prueba(string);
console.log(ans);

function buscarPares(arr){

	if(!Array.isArray(arr)){
		return;
	}
	var ans =[];
	var i;

	for(i=0;i < arr.length;i++){
		if(arr[i]%2==0){
			ans.push(arr[i]);
		}
	}
	return ans;
}

var array = [1,2,3,4,5,6,7,8,9];
var ans = buscarPares(array);
console.log(ans);


crear elementos de manera literal ej: var string = ""
									  var array = [];	

las variables en javascipt se pasan por valor y no por referencia, 
es decir que no se moifican dentro de una función.



try{
	funcion para atrapar el error
}catch(e){

}


function agregarLength(arr){

	if(!Array.isArray(arr)){
		throw new Error("Expected ar to be an aray");
	}
	arr.push(arr.length);
}

try{
	agregarLength("dadssaad");
}catch(e){
	console.log("segui adelante");
}

function devolverLength(arr){

	try{
		agregarLength(Arr);
	}catch(e){
		arr=[];
		agregarLength(arr);
	}

	return arr[arr.length-1];
}

la manera de expresar argumentos variables es con la variable arguments

ej:

function test(param1, param2){
	console.log(arguments);
}

metodo borrowing  // tomar prestado

con la funcion call() permite cambiar lo que esta a la izqierda del "." 
ej:

Object.prototype.toString.call("str");

lo que hgo es decir a toString que lo anterior es un string.

para saber el tipo de datos se puede utilizar esto

Object.prototype.toString.call(null)
Object.prototype.toString.call(Number)
Object.prototype.toString.call(true)

todos estos me devuelven el tipo de datos como segundo elemento
 de un array

 es mejor utilizar esto que typeof

 [].pop devuelve una function

 hacer typeof [].pop da function

 si quiero guardar una funcion a una variable 
 var pop = [].pop me estoy guardando la funcion

 entonces aca puedo utilizar el metodo call()

 haciendo pop.call(["ingeso elementos"])   // ca ingreso elementos 
 										   // en el array del pop que cree

 arrpush === array.prototype.push		 da true

 Array.prototype.push.call(arr,"un nuvo dato");

 Array.prototype.slice.call("mi palabra", 3,5);	

 apply es una nueva funcion que en vez de recibir parametros separados por coma
 recibe un seguno parametro como un array

 ej:
var params = [];
	
	params.push(3);
	params.push(5);

 Array.prototype.slice.apply("mi palabra", params);
que  es lo mismo
 Array.prototype.slice.apply("mi palabra", [3,5]);

 scope de las variables


 function sumar(){

 	var res=0;
 	for(i=0;o<arguments.length;i++){
 		res += arguments[i];
 	}
 	return res;
 }


 es una funcion con argumentos variables


sumar(1,2,3,4);

sumar(1);
var sumandos = [1,2,3,4,5,6];
 sumar.apply(null,sumandos)

 // hoisting

  no importa en que lugar se definen las variables, 
  busca los statements y los mueve arriba.

  lo que mueve son las declaraciones, no las inicializaciones.

  function f1(){
  	console.log("antes",v1);
  	var v1=2;
  	console.log("despues",v1);
  }

  var v2;
  f1();
  console.log(v1);

  las funciones son las que define los ambitos


  function f1(){
  	console.log("antes",v1);
  	var v1=2;
  	console.log("despues",v1);

  	function f2(){
  		var v2 = 10;		// como estoy declarando de nuevo la variable
  							// esta vive solamente en esta función
  		console.log("v",v);
  		console.log("v1",v1);
  		console.log("v2",v2);
  	}
  	f2();
  }

var v = true;
  aca v2 solo se ve dentro de f2, pero v1 se ve dentro de f1() y f2()

  busca donde se declaro la variable hacia arriba.

  si yo no vuelvo a declarar la misma variable, 
  invoco a la de arriba y se modifica

realizar una funcion que reciba un array y una funcion de filtrado y que
mediante el us explicito de forEach  contabilice los elementos del arrau pasado
que al aplicarle la funcion recibida por parametro al ellemento actual del forEach
esta devuelva true





ej 

[3,4,7].forEach(function(curEl,curIndex,arr){
	console.log(curEl,curIndex,arr);
});

currEl te trae el elemento del index
currIndex te trae el index
arr te trae el array

function esPar(numero){
	return numero % 2===0;
}

function filtrado(array, functionp ){
	var count=0;
	array.forEach(function(curEl){
		if(functionp(curEl)){
			count++;
		}
	});
	return count;
}

var ans = filtrado([2,3,4,5,6,7,8],esPar);

console.log(ans);
