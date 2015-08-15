##HTTP

###Redes
* 127.0.0.1 -> localhost

###Verbos
* GET
* POST
* PUT
* UPDATE

###Status codes

####Solicitudes -> respuesta  

	## 2xx (todo bien)
	200 -> ok
	201 -> contenido creador

	## 3xx (redireccion)
	302 moved temporaly

	## 4xx (todo mal)
	400 -> bad request
	404 -> not found

	## 5xx (todo muy mal)
	500 internal server error
	501
	...

### Puertos

* menores a 1024 -> necesita permisos de admin
* mayores a 1024 -> nac & pop (cualquiera)
* limite 64k -> 1024 * 64
* http -> entra al puerto 80 (default)
* https -> puerto 443 (default)


###Server nodejs

	var http = require('http');
	http.createServer(function (req, res) {
  		res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('Hello World\n');
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');


###Respuesta (body)

* Favicon.ico -> icono de web en pestaña


me lega una slicitud a un path en particular

si la url es /texto.txt
entonces leo texto.txt y lo esctibo a la respuesta seteo el content type y escribo 200 de status code
termino la respuesta.  
Si no existe -> 404

si la url es / entonces me fijo que onda index.html o .php  .aspx o tec

JSON.stringify(obj)  -> pasa un objeto a texto
JSON.parse(string) -> si es un formato de json valido lo pasa a un objeto tipo json

* polling
* long-polling

###crossdomain
a menos que una pagina deje en el header responder uno no puede pedir información a otra pagina

esto antes se hacia con flash

utilizar setTimeOut para recargar no setInterval


	$.ajax(obj).then(fn1).catch(fn2)

fn2(error,response,body)

###NPM
* npm init genera el package json  
* npm install (necesita el package json)

----------

curl  
Si vamos a la consola de chrome y miramos en la pestaña network veremos todos los recursos que se estan solicitando.