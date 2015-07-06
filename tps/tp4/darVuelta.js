// funcion para dar vuelta un string

function turn(string){

var newString,i,j;		
var dim = string.length;	
	newString = new String();
	for(i=0,j=dim-1 ; i < dim ;j--, i++){			
		newString =  newString.concat(string[j]);
	}

	return newString;
}

var string = prompt("ingrese string:");
var ans = turn(string);
console.log(ans);


// funcion para dar vuelta un Array
function turn(arr){

	var newArray,i,j;
	var dim = arr.length;
	newArray= new Array();
	for(i=0,j=dim-1 ; i < dim ;j--, i++){
		newArray.push(arr[j]);
	}

	return newArray;
}

var array = [1,2,3,4,5,6,7,8,9];
var ans = turn(array);
console.log(ans);
