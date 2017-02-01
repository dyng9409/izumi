const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path = require('path');

client.on('ready', () => {
    console.log('Izumi starting up!');
});

client.on('message', message => {
    if(message.content === '!hello') {
        message.channel.sendMessage('Hi! I am Izumi!');
    }
});

fs.readFile(path.join(__dirname, 'token.txt'), function(err, token) {
    if (err) {
        console.log("Unable to retrieve token");
        console.log(err);
    }
    client.login(token.toString().trim());
});

