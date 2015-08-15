function suma2(){
	
	var arr2 = process.argv.slice(2);  // obtengo a partir el segundo argumento
	var arr3 = arr2.map(Number);

	var total = arr3.reduce(function(curant,curEl){
		return curant + curEl;
	});
	return total;
}

console.log(suma2());