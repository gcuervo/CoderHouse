function vocalesAMayuscula(file){

	var vocals = "aeiou";
	var fs = require('fs');
	var index1=0,index2;
	file = fs.readFile(file,function(err,resultado){
		if(err != undefined){
			throw err;
		}
		index2 = resultado;
		console.log(resultado);
	})
	return index2;
}

vocalesAMayuscula();