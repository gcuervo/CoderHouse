##TP8

Fetch Interfaz, jQuery para hacer ajax reqest, es en el node server


###Express

* Middlewares -> de su solicitud de http crea una cadena de comportamientos inicio -> a -> b -> c -> d -> end
* rutas
* template enine <- --hbs

Leer el body es interpretar lo que el cliente manda
	
	app.use(bodyParser.json());
	
Para instalar
	
	npm install express-generator -g
	express myApp

Los middlewares son:

	app.use();

###Rutas

Dado un path de la solicitud, ejecuto una función y finalizo la solicitud

req.params.userId -> /users/asdasd  (obtengo lo ultimo)


	npm install supervisor -g		// el servidor se actualiza solo sin necesidad de cerrar y volver a cargarlo


abrir mondgod

despues mongo

###Mongo

	 databases
	  	 collections 
	   		documents
				-CRUD (create,read,update,delete)
				documents -> JSON

	db.mycoleccion.insert({a:1,b:2})
	db.mycoleccion.find()
	show collections
	db.otracoleccion.update({a:1},{ a que lo cambio},{multi:true}) // busca lo que machea el primer objeto, solo un unico elemento, con multi true hace varios elementos
	db.otracoleccion.remove({"_id": ObjectId("123554323242")})

base de datos no relacional

npm install mongodb en la carpeta expresexample


hacer un Mongo.connect(''),function(err,db){



});


{username: 'user1',name: 'pepe',email: 'pepe@gmail.com'}

* ejecutar mongod para levantar la base de datos
* ejecutamos mongo para crear las bases de datos


npm start para iniciar servidor express


nm init