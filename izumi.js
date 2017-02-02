const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const path = require('path');
const MeCab = require('mecab-async');
var mecab = new MeCab();

MeCab.command='mecab -d dic';

client.on('ready', () => {
    console.log('Izumi starting up!');
});

fs.readFile(path.join(__dirname, 'token.txt'), function(err, token) {
    if (err) {
        console.log("Unable to retrieve token");
        console.log(err);
    }
    client.login(token.toString().trim());
});



client.on('message', message => {
    var msg = message.content.split(' ');
    var command = msg[0];
    var args = msg[1];

    if ( command === '!hello') {
        message.channel.sendMessage('Hi! I am Izumi!');
    }
    else if (command === '!echo') {
        if ( args ) message.channel.sendMessage(args);
        else message.channel.sendMessage('Nothing to echo');
    }
    else if (command === '!help') {
        message.channel.sendMessage('Not yet implemented. Hang tight!');
    }
    else if (command === '!parse') {
        if ( args ) {
            mecab.wakachi( args , function (err, res) {
                if (err) throw err;
                console.log( res );
                message.channel.sendMessage( '\n' + res );
            });
        }
        else message.channel.sendMessage('Nothing to parse!');
    }
    else if (command[0] === '!') {
        message.channel.sendMessage('Unable to recognize command');
        message.channel.sendMessage('Type !help for a list of available commands');
    }
});

function parse( text ) {
    mecab.parse( text.trim(), function(err, res) {
        if (err) throw err;
        console.log( res );
        return res;
    })
    }

