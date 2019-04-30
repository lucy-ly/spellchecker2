const express = require("express");
const users = require("./data.js");
const getemail = require("./getemail.js");
const app = express(); // callback function that creates an app object

console.log(users);

console.log("Email:", getemail(users, "Jason"));

app.get("/getemail", (req, res) => { // this is a route 
    const name = req.query.name; // this is how you query a server for their data
    const email = getemail(users, name);
    res.send(email);
});

app.get("/getuser", (req, res) => { // this is a route 
    const index = req.query.index; // this is how you query a server for their data
    const oneUser = users[index]; // you get the user object, user[index] is taking one of the objects (name:'Jason')
    res.send(oneUser);
});

app.get("/greet", (req, res) => { // req = input to the server, res = output to the server
    const userName = req.query.user // how you get a Query from the browser
    res.send("Hello " + userName + "!"); // concatenate 
});

app.get("/goodbye", (req, res) => { // this is a route 
    const userName = req.query.user
    res.send("Goodbye " + userName + "!");
});

app.get("/weather", (req, res) => { // this is a route 
    const userName = req.query.user
    res.send("How is the weather " + userName + "?");
});

const port = process.env.PORT || 8000; // PORT: go away to the outside world, running on a web service like c9, 5000 is for local (8000)
app.listen(port, () => console.log(`Server listening on port ${port}`)); // this is how you insert a variable inside a string
