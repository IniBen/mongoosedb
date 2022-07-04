const todo = require("../todo.json");


exports.example = (req, res) => {
    console.log("todo list")
    res.send({ todo })
}