const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bobateas', {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=> console.log("Connected to mongodb..."))
.catch((err => console.error("Could not connect to mongodb...", err)));

const bobateaSchema = new mongoose.Schema({
    name:String,
    creator:String,
    teaFlavor:String,
    bobaPearlFlavor:String,
    color:String,
    toppings: [String]
});

const Bobatea = mongoose.model('Bobatea', bobateaSchema);

async function createBobatea(bobatea){
    const result = await bobatea.save();
    console.log(result);
}

function validateBobatea(bobatea){
    const schema = {
        name:Joi.string().min(1).required(),
        creator:Joi.string().min(1).required(),
        teaFlavor:Joi.string().min(1).required(),
        bobaPearlFlavor:Joi.string().min(1).required(),
        color:Joi.string().min(1).required(),
        toppings: Joi.allow()
    };

    return Joi.validate(bobatea, schema);
}

/*
const halo = new Bobatea({
    name:"Halo",
    creator:"Dennis",
    teaFlavor:"Thai",
    bobaPearlFlavor:"Lychee",
    color:"Orange",
    toppings: "Jellies"
});
createBobatea(halo);
*/



app.post('/api/bobateas', (req,res)=>{
    const result = validateBobatea(req.body);

    if(result.error){
        res.status(400).send(result.err.details[0].message);
        return;
    }

    const bobatea = new Bobatea({
        name:req.body.name,
        creator:req.body.creator,
        teaFlavor:req.body.teaFlavor,
        bobaPearlFlavor:req.body.bobaPearlFlavor,
        color:req.body.color,
        toppings:req.body.toppings
    });

    createBobatea(bobatea);
    res.send(bobatea);

});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

async function getBobateas(res){
    const bobateas = await Bobatea.find();
    res.send(bobateas);
}

app.get('/api/bobateas',(req,res)=>{
    const bobateas = getBobateas(res);
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});