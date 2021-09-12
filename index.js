const Discord = require("discord.js")
const fetch = require("node-fetch")
const client = new Discord.Client()

function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
      })
    .then(data => {
      return data[0]["q"] + " -" + data[0]["a"]
    })
}

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.author.bot) return
    
  if (msg.content === "$help") {
    msg.channel.send('What do you need help with!')
    msg.channel.send('$help-  Open this help menu!')
    msg.channel.send('$Youtube- URL too the youtube channel!')
  }

      if (msg.content === "$Youtube") {
    msg.channel.send('https://www.youtube.com/channel/UC03QTOlDlfYt_VoHPbvFTjw')
  }
  
})

client.login('ODg2NjQ0OTk1NzQ1MDEzODIw.YT4mgA.HDvNpeh4MrjiZB5fRz4xcU6XLXE');