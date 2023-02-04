const { response } = require("express");
const express= require("express");
const  router = express.Router();
const db  = require("../config/database");
const Gig = require("../models/Gig");


//get gig list
router.get('/',(req, res )=> 
Gig.findAll().
then(gigs=>{
   // console.log("gigs",gigs);
    res.status(200);
    res.contentType('json');
    res.send('les gigs sont :'+JSON.stringify(gigs));
}).catch(error=>console.log("Error: ",error)));


//add a gig
router.get('/add', function() {
})
module.exports = router;
 