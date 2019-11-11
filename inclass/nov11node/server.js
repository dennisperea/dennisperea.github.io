const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

//listen 
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});




