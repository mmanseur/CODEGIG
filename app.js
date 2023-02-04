const express = require("express");
const exphbs= require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database")

 db.authenticate().then(()=>{
        console.log('Connection has been established successfully.');
     }). catch (error=>{  
    console.error('Unable to connect to the database:', error)});
 
const app = express();
app.get("/", function(req, res) {
    res.send("Accueil");
})

//Gig routes
app.use('/gigs',require('./routes/gigs')); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server listen to port ${PORT}`));