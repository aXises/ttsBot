"use strict";
var Discord = require("discord.js");
const authToken = "NDM4MzEyNTIzNjI5MDY4Mjg5.DcC04w.JN-3eOZTcHMDlvZTjgX797RyNDw";
var bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content.startsWith("!tts")) {
        var args = message.content.substring(4, message.content.length);
        if (args && args != "") {
            var string = args;
            var index = 0;
            var cutpoint = 180;
            var stringArray = [];
            while (index < string.length) {
                if (index % cutpoint == cutpoint - 1) {
                    message.channel.send(string.substring(index - cutpoint, index), {
                        tts: true
                    });
                } else if (index == string.length - 1) {
                    message.channel.send(string.substring(index - (index % cutpoint), index), {
                        tts: true
                    });
                }
                index++;
            }
        }
    }
});

bot.login(authToken);