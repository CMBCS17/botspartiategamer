const Discord = require('discord.js'); //Ce que le bot à besoin /

const client = new Discord.Client(); //Que votre Bot est un nouvel utilisateur

var prefix = "*"; //Prefix de votre Bot ( *play www.youtube.com/ )

const config = require ("./config.json")



client.login(config.token); //Token (Série de chiffre) propre a chaque Bot

client.on("ready", () => { //Signifie que le bot à bien démarré
    console.log("Connecté !"); //Lorsque que le bot est lancé observer la console Visual Studio
    client.user.setStatus('online')
    client.user.setActivity("LucpasleBoucher", {type: 'WATCHING'}); //Voir le Jeu sur le Discord
})

client.on("message", message => {
    if(message.content ===  "luc") {
        message.channel.send("UN BOUBOU SAUVAGE !!!")
    }
    if(message.content ===  "CMBCS17") {
        message.channel.send("Ayez Du respect envers mon créateur !")
    }
    if(message.content ===  "Cmbcs17") {
        message.channel.send("Ayez Du respect envers mon créateur !")
    }
    if(message.content ===  "Hunter9000") {
        message.channel.send("Chef suprème de cette team !")
    }
    if(message.content ===  "BOT") {
        message.channel.send("Un jour les robots domineront le monde")
    }
    if(message.content ===  "bot") {
        message.channel.send("Un jour les robots domineront le monde")
    }
    if(message.content ===  "CM17") {
        message.channel.send("AYEZ BEAUCOUP DE RESPECT ENVERS MON CRÉATEUR !!!")
    }
    if(message.content ===  "lowen_ghost") {
        message.channel.send("Un valeureux guerrier qui a fait ses prouesses au combat")
    }
    if(message.content ===  "Tyder") {
        message.channel.send("Le PVP et lui, ça fait 1")
    }
    if(message.content ===  "Phyr0") {
        message.channel.send("Un sans pitier qui Tues tout le monde, il se croit l' INVINSIBLE")
    }
    if(message.content ===  "LucleBoucher") {
        message.channel.send("Roi de la stratégie guerrière, il manie son armée sans égal")
    }
    if(message.content ===  "sparte") {
        message.channel.send("Notre capitale")
    }
    if(message.content ===  "Sparte") {
        message.channel.send("Notre capitale")
    }
    if(message.content ===  "Whitewolf") {
        message.channel.send("Arrêtez de parler des cons")
    }
    if(message.content ===  "clé6") {
        message.channel.send("Il ne comprend pas à quoi sert un téléphone")
    }
    if(message.content ===  "mer") {
        message.channel.send("https://www.youtube.com/watch?v=0SdcfsD_WVE")
    }
    if(message.content === 'pronote'){
    message.channel.send("https://0381905p.index-education.net/pronote/eleve.html")
    }
    if(message.content === 'paysan'){
        message.channel.send("https://www.youtube.com/watch?v=il0kJSfAu3c&list=PL6Qe5x4x-er0zQd6te8MI1jV4LhzRukDE&index=1")
    }
    if(message.content === 'péon'){
        message.channel.send("https://www.youtube.com/watch?v=mceLzGKN0oU&list=PL6Qe5x4x-er0zQd6te8MI1jV4LhzRukDE&index=2")
    }
    if(message.content === 'acolyte'){
        message.channel.send("https://www.youtube.com/watch?v=coNcsv9V138&list=PL6Qe5x4x-er0zQd6te8MI1jV4LhzRukDE&index=3")
    }
    if(message.content === 'ah'){
        message.channel.send('olo @"userID" lol')
    }
    if(message.content === 'merde'){
        message.channel.send('https://i2.cdscdn.com/pdt2/1/5/7/1/700x700/hom2009821522157/rw/jouet-prank-faux-merde-faux-poo-jouet-merde-merde.jpg')
    }
    if(message.content === 'Borodkine'){
        message.channel.send('http://sid.rstack.org/sid.png')
    }
    if(message.content === 'BORODKINE'){
        message.channel.send('https://i.skyrock.net/4862/23874862/pics/691825014.jpg')
    }
})
