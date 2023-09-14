# ITCrowdChallengeGZ

Hola! Me llamo German Soto, soy desarrollador fullstack y he decidido encarar este proyecto. 
Hi! My name is German Soto, i am a fullstack developer, and i have chosen to make this project.


# Frontend 

La aplicacion web es de frente un e-commerce, reducido en funcionalidades, con un diseño que te permite manejarte de manera horizontal por el contenido de la pagina. 
Usa Nextjs como base, y se apoya con librerias como: 

    - DaisyUI: Para mantener consistencia en cuanto a estilos
    - Zustand: Para manejo de estado globales, en particular para tener los detalles de los productos 
    - TailwindCSS: Framework de CSS como base de proyecto. 

The web application is up front an e-commerce, reduced in functionalities, with a design that allows you to traverse it horizontally. 
It uses Nextjs at its base, and it uses libraries like: 


    - DaisyUI: To maintain consistency in the style.
    - Zustand: To manage global states, in particular, used to see details of products.
    - TailwindCSS: CSS framework used as base for the proyect.



No hay mucho que decir en cuanto a correr la aplicacion, basta con descargar el repositorio, instalar las dependencias y correr con el script ```npm run dev```
There is not much to say about running the app, just download the repository, install its dependencies and run the project with the ```npm run dev ``` command. 


# Deploy 

https://it-crowd-challenge-gz-front.vercel.app/

![Recording 2023-09-14 at 03 26 41](https://github.com/Gerzulet/ITCrowdChallengeGZFront/assets/92329156/e205dfca-65a9-4890-b7a1-47e8def1e403)
![Recording 2023-09-14 at 03 29 26](https://github.com/Gerzulet/ITCrowdChallengeGZFront/assets/92329156/e367efe8-d58b-41ec-9104-9cec5129bf0c)

# Backend


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

To access as admin, login with this account, it will give you access to the admin panel located at the frontend: 
Para acceder como administrador ingresa con esta cuenta, te dara los permisos necesariso para acceder al panel de administrador de productos desde el frontend.
user: admintest
password: admin1234 


'/brands': 

GET: Get all brands / Obten todas las marcas

'/auth/login': 

POST (data): Login process / Proceso de login


## Deploy 

https://itcrowdgzbackend.onrender.com



   
