require('dotenv').config()


const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready' ,()=>{
    console.log('Assalamo alaikom bro')
})
client.on("message",msg =>{
    if(msg.content === "!mod-me")
    {
        msg.member.roles.add("812386113636925490")
       // msg.channel.send("Assalamo alaikom")
      //  msg.reply("Hello!")
    }
})


client.login(process.env.BOT_TOKEN)