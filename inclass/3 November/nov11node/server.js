const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

const songs = [
    {id:1, name:"Jingle Bells", singer:"Michael Buble", genre:"jazz"},
    {id:2, name:"All I Want for Christmas is you", singer:"Miriah Carrie", genre : "pop" },
    {id:3, name:"Rudolph the Red Nose Reindeer", singer: "DMX", genre:"rap"},
    {id:4, name:"White Christmas", singer:"Elvis Presley", genre:"rock"}
]

// response to our songs
app.get('/api/songs', (req,res)=>{
    res.send(songs);
});

//render our html page
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});


//get specific song
app.get('/api/songs/:id', (req,res)=>{
    const requestedID = parseInt(req.params.id);
    const song = songs.find(s =>s.id === requestedID);

    if(!song) {
        res.status(404).send(`The song with id ${requestedID} was not found`);
        return;
    }
    
    res.send(song);
});

//post request
app.post('/api/songs',(req,res)=>{
    const song = {
        id: songs.length + 1,
        name: req.body.name,
        singer: req.body.singer,
        genre : req.body.genre
    }

    songs.push(song);
    res.send(song);
});

//listen 
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});




