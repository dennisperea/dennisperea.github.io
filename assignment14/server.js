const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const monsters = [
    {id:1, name: "Werewolf", abilities: "Strength, Speed, Senses", weakness: "Silver Bullet", description: "The howler of the night, the Werewolf tranforms between Human and Wolf."},
    {id:2, name: "Vampire", abilities: "Invisibility, Transformation", weakness: "Light, Garlic", description: "The Vampire is notorious for its ability to transform.  It sucks the blood out of its victims."},
    {id:3, name: "Zombie", abilities: "Revival, Persistence", weakness: "Decapitation", description: "The Zombie is the revival of the walking dead. It desires to eat its target's brain."},
    {id:4, name: "Cyclops", abilities: "Size, Strength", weakness: "Eye sight", description: "The Cyclops is the gatekeeper of the other world.  It uses is super strength to destroy any person in its way."}
]

app.get('/api/monsters', (req,res)=>{
    res.send(monsters);
});

app.get('/api/monsters/:id', (req,res)=>{
    const requestedId = parseInt(req.params.id);
    const monster = monsters.find(s =>s.id === requestedId);

    if(!monster) {
        res.status(404).send(`The monster with id ${requestedId} was not found`);
        return;
    }

    res.send(monster);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/api/monsters', (req,res)=>{
    const schema = {
        name:Joi.string().required(),
        abilities:Joi.string().required(),
        weakness:Joi.string().required(),
        description:Joi.string().required()
    }

    const result = Joi.validate(req.body, schema);

    if(result.error){
        res.status(400).send(result.error.details[0].message);
    }

    const monster = {
        id:monsters.length + 1,
        name : req.body.name,
        abilities : req.body.abilities,
        weakness : req.body.weakness,
        description : req.body.description
    }
    console.log(monster.name);
    monsters.push(monster);
    res.send(monster);
});

//listen
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});