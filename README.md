# BootcampTarea1
Tarea del Bootcamp

Se entiende que para ejecutar este codigo deberas tener u MongoDB corriendo en localhost con el puerto 27017. Se adjunta dockerfile para crear
un Mongo en Docker como se indico en la actividad.
Se adjunta fichero Users.json que viene con datos prepopulados para cargar en Mongo.

La estructura del codigo esta divida en 3 carpetas y un fichero index.
Fichero index: Contiene la configuraicon del cliente Mongoose y la inicializacion de las rutas del API.
Routers: Contiene todas las rutas en las que va a escuchar la API.
Models: Contiene la estructura de los datos que se van a almacenar en las colecciones del MongoDB (tipado).
Controllers: Estas son las funciones que se ejecutan en cada ruta cuando haces peticiones a la API.

Explicacion de Endpoints GET:

http://localhost:3000/api/Users
No pide ningun parametro o Body.
Devuelve todos los documentos de la BD.

http://localhost:3000/api/Users/paramsCorreoEdad
Pide 2 Parametros en la URL, Correo y Edad.
Devuelve todos los documentos que cumplan con cualquiera de los 2 parametros enviados.
Ejemplo: http://localhost:3000/api/Users/paramsCorreoEdad?correo=marcus@hotmail.com&edad=18

Explicacion de Endpoints POST (no es parte de la actividad pero se creo para poder generar los documentos):

http://localhost:3000/api/Users
Pide un Body con los campos "nombre", "correo", "edad".
Crea un nuevo documento con los datos enviados en el Body y te responde con confirmacion y datos del documento creado.

Explicacion de Endpoints PUT:

http://localhost:3000/api/Users
Pide de Parametros un ID de documento y un Body con los campos "nombre", "correo", "edad".
Actualiza el docuemento con la informacion enviada en el Body. En caso de que no encuentre un documento con el ID enviado en Parametros, se genera uno nuevo.
Ambos escenarios devuelven una confirmacion y datos del documento modificado o creado.
Ejemplo de documento existente: http://localhost:3000/api/Users/645709ba5c2ae459619ac646
Ejemplo de documento no existente: http://localhost:3000/api/Users/645709805c2ae459619ac642

Explicacion de Endpoints DELETE:

http://localhost:3000/api/Users
Pide de Parametros un ID de documento.
Elimina el docuemnto con el ID enviado en Parametros y te responde con confirmacion. En caso de que no encuentre un documento con el ID enviado en Parametros, no se hace nada y regresa 204 No content.
Ejemplo de documento existente: http://localhost:3000/api/Users/645709ba5c2ae459619ac646
Ejemplo de documento no existente: http://localhost:3000/api/Users/645709805c2ae459619ac642
