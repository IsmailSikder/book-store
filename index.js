//importing express
const express = require('express')

//importing routes
let apiRoutes = require('./routes')

//importing mongoose
let mongoose = require('mongoose'),
    bodyParser = require('body-parser')

//initilizating app
const app = express()

//configuring body parser to handle request
app.use(bodyParser.urlencoded({extended:true}))

//configuring for json parsing 
app.use(bodyParser.json())

//setting port number 
const PORT = process.env.port || 3000

//listening to port 
app.listen(PORT, ()=>console.log('server started on port '+ PORT))

//sending message for default route
app.get('/', (req,res)=>{
    res.send('Express is running successfully')
})

//using api routes
app.use('/api',apiRoutes)

const connectionString = 'mongodb+srv://msikder:<password>@cluster0.n8b3k.mongodb.net/<db-name>?retryWrites=true&w=majority';

//connecting to mongodb
mongoose.connect(connectionString, ()=>console.log('connected to db'))




