#!/usr/bin/env node

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
    else if (command === '!wah') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/ZTwzGUb.png"
	});
    }
    else if (command === '!kys') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/3vqiDoD.jpg"
	});
    }
    else if (command === '!pout') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/QomCkgB.png"
	});
    }
    else if (command === '!rip') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/ZBogXyO.png"
	});
    }
    else if (command === '!friends') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/tEU2Cvc.png"
	});
    }
    else if (command === '!petpet') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/xzhbyUp.png"
	});
    }
    else if (command === '!fml')  {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/1lhYUS0.jpg"
	});
    }
    else if (command === '!tbc') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/G7rztN2.png"
	});
    }
    else if (command === '!hmm') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/08Wy4Mi.jpg"
	});
    }
    else if (command === '!woofus') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/mg8J5ZU.png"
	});
    }
    else if (command === '!ezmodo') {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/SdKSZq9.png"
	});
    }
    else if (command === '!drool") {
	message.channel.sendMessage('', {
		file: "https://i.imgur.com/JwHLgZ0.png"
	});
    }
    else if (command === '!echo') {
        if ( args ) message.channel.sendMessage(args);
        else message.channel.sendMessage('Nothing to echo');
    }
    else if (command === '!help') {
        message.channel.sendMessage('List of available commands:');
	message.channel.sendMessage('\n- !help - displays this list' +
	                            '\n- !hello - greets Izumi' + 
	                            '\n- !echo text - repeats back text' +
	                            '\n- !sparse text - (s)implified text parse' +
	                            '\n- !fparse text - (f)ully parses the text' +
				    '\n- !kys, !wah, !pout, !rip, !friends, !petpet, !fml, !tbc, !hmm, !woofus, !ezmodo');
    }
    else if (command === '!sparse') {
        if ( args ) {
            mecab.wakachi( args , function (err, res) {
                if (err) throw err;
                console.log( res );
		message.channel.sendMessage('Please remember that even bots make mistakes!');
                message.channel.sendMessage( res );
		message.channel.sendMessage('If you see any glaring mistakes, please message my dev @狐の雨');
		message.channel.sendMessage('Also note that I only support classical Japanese at this time!');
            });
        }
        else message.channel.sendMessage('Nothing to parse!');
    }
    else if (command === '!fparse') {
        if ( args ) {
            mecab.parse( args , function (err, res) {
                if (err) throw err;
                console.log( res );
		message.channel.sendMessage('Please remember that even bots make mistakes!');
             	for (result of res) {
		    var section = '';
		    for (obj of result) {
    		        section = section + obj + ", ";
		    }
		    message.channel.sendMessage("`" + section + "`");
		}
		message.channel.sendMessage('If you see any glaring mistakes, please message my dev @狐の雨');
		message.channel.sendMessage('Also note that I only support classical Japanese at this time!');
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

