## ItCrowd Challenge
## Desafio para ItCrowd

Hola! Me llamo German Soto, soy desarrollador fullstack y he decidido encarar este proyecto por ITCrowd. 
Hi! My name is German Soto, i am a fullstack developer, and i have chosen to make this project by ITCrowd.

La aplicacion web es de frente un e-commerce, reducido en funcionalidades, con un diseño que te permite manejarte de manera horizontal por el contenido de la pagina. 

Para el backend:
Usa Nestjs como base, y se apoya con librerias como: 

    - Prisma: ORM para manejo de base de datos, en este caso con postgresql, mediante la plataforma ElephantSQL.
    - Bcrypt: Para encriptado y autenticacion de usuarios y contraseñas.
    - Fakerjs: Para informacion de mentira para creacion de objetos.

The web application is up front an e-commerce, reduced in functionalities, with a design that allows you to traverse it horizontally. 
It uses Nestjs at its base, and it uses libraries like:



    - Prisma: Object-relational mapper (ORM) for managing databases, in this case PostgreSQL, using the ElephantSQL platform.
    - Bcrypt: For encrypting and authenticating user names and passwords.
    - Faker.js: For generating fake data for creating objects.




Para hacer correr la aplicacion puedes descargar el repositorio, instalar y correr el proyecto con comandos como npm run start:dev
Necesitaras un archivo .env para pasarle la informacion de conexion a la base de datos de ElephantSQL



To run the application, you can download the repository, install and run the project with commands like npm run start:dev.
You will need an .env file to pass the connection information to the ElephantSQL database.


# Endpoints 

'/products': 

GET: Get all products / Obten todos los productos
GET: (/search/query) Get product by name or description / Obten productos por nombre o por descripcion 
POST (data) Create new product / Crea un nuevo producto (Requires authorization header)
PATCH (:id, data): Modify existin product / Modifica producto existente (Requires authorization header)
DELETE (:id): Delete product / Elimina producto (Requires authorization header)


'/brands': 

GET: Get all brands / Obten todas las marcas

'/auth/login': 

POST (data): Login process / Proceso de login


## Deploy 

https://itcrowdgzbackend.onrender.com


   
