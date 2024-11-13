on backend: npx nodemon server.js
on frontend: npm start



MERN app steps
created Mern app folder
createrd backend folder
created server.js file in backend folder which will act as entry file in backend
move to backend directory by using cd command and then initialize npm init command
*npm init command only create the package.json file for efficient collaborating and deployment purpose and nothing else. It does not install anything
then install express package
create express app in server.js
    first import express and then create express app. listen on some port
can run server.js file by using cmd --node server.js--
or can use nodemon. as I've globally installed it already I can directly use it without installing it. use cmd --npx nodemon server.js--. (just use nodemon instead of node in regular command and use npx before it.)
create dev script in package.json to directly run server.js using nodemon
install dotenv to store constant variables like port number or api. 
    after installing import it in the top using syntax --require("dotenv").config()--
    create a .env file in backend folder and create variable in uppercase letter like PORT=4000.(not necessary to have variable in uppercase)
    add .env file to .gitignore file so that it won't go on deployment
added middlewares to log the path and method used in api. used postman to do that


<!-- Now till here setup and furthier more things are done. Now we are going to create more routes -->

we are now going to create multiple routes, we can create them inside the main server.js file but it'll bloat the code so we will create a seperate file workout.js in routes folder to create multiple routes
    we can also seperate different types of routes like seperate rile for users.js, sepearate file for exerciseList.js
    to make this modular approcach work, just copying the routes in to respective folder won't make the code work. to make the code work we will have to import all the dependencies used in that copied code for example express.
    so we will first import express
    and after that in normal cases we do --const app = express()-- but here we well use a mini version of app named as router.so for that we will write --const router = express.Router()--.
    in the traditional code we give all the functionality of express to app and in the second case we only need routing feature so we only use Router method --express.Router()-- instead of totall using the whole methods.
    and after that we replace app to router. for e.g. app.get() to router.get()
    after that we have to export the module and give it a name. --module.exports = router--
    when we import it into main server.js, we will access this variable by storing it into some another variable
    now --const workoutRoutes = require('./routes/workout')-- here variable router is assigned to workoutRoutes


<!-- creating mongodb atlas  -->
created workoutapp project
set userid : Workoutapp and pw: Workoutapp8780
set network access to allow from anywhere
do npm i mongoose(we can skip it. it helps in building schema and models for data)
import mongoose
connect database --mongoose.connect(process.env.MONGO_URI)--
add mongo db authentication string in .env file along with pw
add listen port when the db is connected so add it in then part after connection

<!-- creating models and schemas -->
creating models folder in backend folder
creating workout.model.js file
importing mongoose --const mongoose = require('mongoose')--
here we only need to use schema method of mongoose so we will make variable to access it --const Schema = mongoose.Schema--
then gave name to Schema and then created new Schema using new keyword and then creating schema
    const workoutSchema = new Schema({
        title: {
            type: String,
            required: true
        }}),--

app.use(express.json()); to parse json data, essential if using json. put it below express app

<!-- controllers -->

now instead of writing all the logic of crud operations in the same file where we have created all our routes, we will create a new folder called 'controllers' and in this we will write all the logic and then import it into our routes. workoutcontroller.js

<!-- frontend: create react app -->
npx --create-react-app frontend--
npm i react-router-dom