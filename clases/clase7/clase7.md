##NodeJs

apache utiliza varios threads  
lighthhp utiliza un solo thread

## Instalacion de paquetes

npm install slint -g   // herramienta de consola
npm install express



##node

**filesystem**  
es lo que nos da la capacidadd e guardar archivos, saber el tamaño del archivo y modificacione que sufrio

	var fs = require('fs');

>**_require_** es un modulo que no viene con node, se instala con el paquete express

	fs.readFile('textFile1.txt',funtion(err,resultado){
		console.log('Termino');
		console.log('error:',err);
		console.log('resultado:',resultado);
	});

> Lo que esta dentro de la funcion ses ejecuta cuando termino el readFile.

Si queremos decir explicitamente que no existe debemos usar **_null_**

>**Encoding:** forma de representar caracteres

	fs.readFile('textFile1.txt','utf8',function(err,resultado){
		console.log('Termino');
		console.log('error:',err);
		console.log('resultado:',resultado);
	});

> **UTF-8:** para poder utilizar acentos.


Al hacer solamente node sin pasar un arhivo, node ejecuta la consola.  
Node es un interprete, no esta en codigo maquina.

Read file es asincronico, por naturaleza no es bloqueante.

	var mirchio= fs.readFileSync('textFile3.txt').toString();

Los argumentos se obtienen de esta manera

	console.log(process.argv);

bajar mint o debian para linux


**Propros: programa para anidar**

readFileSync no sigue on el segundo hasta terminar con el primero

Node web kit para hacer aplicacion de escritorio web