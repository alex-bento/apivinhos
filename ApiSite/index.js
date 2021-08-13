const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
const about = require('./database/about')
const contatcs = require('./database/contatcs')
const socialLink = require('./database/social-links')
const database = require('./database/database')
const games = require('./database/game')


app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())


// Pega todos os os Game
app.get("/about", (req, res) => {
    res.statusCode = 200;
    res.json(about);
});

app.get("/contatcs", (req, res) => {
    res.sendStatus = 200;
    res.json(contatcs)
})

app.get("/socialLink", (req, res) => {
    res.sendStatus = 200;
    res.json(socialLink)
})

app.get("/database", (req, res) => {
    res.sendStatus = 200;
    res.json(database)
})

app.get("/games", (req, res) => {
    res.sendStatus = 200;
    res.json(games)
})



app.get("/game/:id", (req, res) => {

    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id);

        var game =  games.find(game => game.id ==id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game)
        }else{
            res.sendStatus(404)
        }
    }
});

app.listen(5000, () => {
    console.log("Api Rodando")
})