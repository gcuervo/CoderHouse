function vocalesAMayuscula(){

	var vocals = "aeiou";
	var fs = require('fs');
	var index1=0,index2,aux;
	var file,text = "";
	console.log(process.argv[2]);
	file = fs.readFile(process.argv[2],'utf8',function(err,resultado){
		if(err != undefined){

			throw err;
		}
		while(index1 < resultado.length){
			index2=0;
			while(index2 < vocals.length){
				if(resultado[index1] === vocals[index2]){
					aux = resultado[index1].toUpperCase();
				}else{
					aux = resultado[index1];
				}
				index2++;
			}
			text += aux;
			index1++;
		}
		
		fs.writeFile(process.argv[3],text,function(err){
			if(err){
				throw err;
			}
			console.log("the file was saved");
		});

		return text;
	});
	return file;
}

console.log(vocalesAMayuscula());