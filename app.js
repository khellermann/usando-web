const express = require('express');
const path = require('path');

const app = express();

app.get("/", (req,res)=>{
    res.send("Olá mundo");
});

app.get("/boasvindas", (req,res)=>{
    res.sendFile(path.join(__dirname, "boasvindas.html"));
});


app.listen(3333, ()=>{
    console.log("Ligando motor");
})