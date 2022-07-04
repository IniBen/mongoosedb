/**
 * Express server
 * connect to monodb
 * initialise express
 * initialise express missleware
 * create a simple get request
 */

const express = require('express');
const models = require("./models/Todotasks");
const connectDB = require('./database');
const routes = require("./routes/TodoRoute");
const todo = require("./todo.json");
const fs = require("fs");



require('dotenv').config();

const{PORT} = process.env

// connect to the database
connectDB();

// initialise express
const app = express();

app.use("/", routes);

// Initialise Express middleware
app.use(express.json({extended: false}));

app.get('/', (req, res) => res.json({message:"e work oo"}));

// add to todo list
app.post('/todo', (req, res) =>{
    // create a new todo from the server, by adding a new object to the existing array and save.
    todo.push(req.body.newtodo);
    
    let stringedData = JSON.stringify(todo, 2);
    fs.writeFile('todo.json', stringedData, function(err) {
      if (err) {
        return res.status(500).json({message: err})
      }
    })
    return res.status(200).json({ message: "new todo created"})
  })
  
  // delete a todo
  app.delete('/todo/:id', (req, res) =>{
    todo.pop(req.body.newtodo);
  
    let stringedData = JSON.stringify(todo, 2);
    fs.writeFile('todo.json', stringedData, function(err) {
      if (err) {
        return res.status(500).json({message: err})
      }
    })
  })
  
  // Edit a todo
  app.put('/todo/:id', (req, res) =>{
    todo.pop(req.body.newtodo);
  
    let stringedData = JSON.stringify(todo, 2);
    fs.writeFile('todo.json', stringedData, function(err) {
      if (err) {
        return res.status(500).json({message: err})
      }
    })
  })

// port
const port = process.env.PORT || PORT;

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
})