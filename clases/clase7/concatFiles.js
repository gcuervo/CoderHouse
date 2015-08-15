function concatFiles(){
	
	var fs = require('fs');	
	var i=2;
	var file,miString = "";
	var index=0,arr = [];

	while(i < process.argv.length){
		console.log(miString);
		file = fs.readFile(process.argv[i],function(err,resultado){
			if(err != undefined){
				return;
			}
			var obj= { : resultado.toString()};
			arr.push(obj);
			console.log(obj);

			for(var j=2;j < arr.length;j++){
				miString += arr[process.argv[j]].texto;
			}
		});
		index++;
		i++;
		
	}
	
	
	return miString;
}


function concatS(arr){

	var nString
	console.log(arr);
	
	return nString;
}

console.log(concatS(concatFiles()));
