
function multiplicar(a,b){
	return a*b;
}


function getResults(){

	if()

	var myFunction = arguments[0];
	var i=1;		// comienzo de uno por que mi primer argumento es la función
	var myArray=[];
	var ans = [];

	while(i < arguments.length){
		myArray.push(arguments[i]);
		i++;
	}
	var index=0;
	i=0;
	while(index<myArray.length/2){
		ans.push(myFunction(myArray[i],myArray[i+1]));
		i+=2;
		index++;
	}

	return ans;
}

var res = getResults(multiplicar,2,5,3,3,2,4);
console.log(res);