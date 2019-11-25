const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/videogames', {useUnifiedTopology:true, useNewUrlParser:true})
.then(()=> console.log("Connected to mongodb..."))
.catch((err => console.error("Could not connect to mongodb...", err)));

const videogameSchema = new mongoose.Schema({
    name:String,
    publisher:String,
    gameconsole:String,
    genre:String,
    description:String,
    characters: [String]
});

const Videogame = mongoose.model('Videogame', videogameSchema);

async function createVideogame(videogame){
    const result = await videogame.save();
    console.log(result);
}

function validateVideogame(videogame){
    const schema = {
        name:Joi.string().min(1).required(),
        publisher:Joi.string().min(1).required(),
        gameconsole:Joi.string().min(1).required(),
        genre:Joi.string().min(1).required(),
        description:Joi.string().min(1).required(),
        characters: Joi.allow()
    };

    return Joi.validate(videogame, schema);
}

/* USE THIS TO TEST FUNCTIONS
const halo = new Videogame({
    name:"Halo",
    publisher:"Bungie",
    gameconsole:"Xbox",
    genre:"FPS",
    description:"War Time",
    characters:["Master Chief", "Cortana"]
});
createVideogame(halo);
*/

app.post('/api/videogames', (req,res)=>{
    const result = validateVideogame(req.body);

    if(result.error){
        res.status(400).send(result.err.details[0].message);
        return;
    }

    const videogame = new Videogame({
        name:req.body.name,
        publisher:req.body.publisher,
        gameconsole:req.body.gameconsole,
        genre:req.body.genre,
        description:req.body.description,
        characters:req.body.characters
    });

    createVideogame(videogame);
    res.send(videogame);

});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

async function getVideogames(res){
    const videogames = await Videogame.find();
    res.send(videogames);
}

app.get('/api/videogames',(req,res)=>{
    const videogames = getVideogames(res);
});


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});