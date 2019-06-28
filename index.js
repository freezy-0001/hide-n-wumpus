const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

tipp = 1;

client.once('ready', () => {
  console.log('Wumpus is ready to hide!');
  client.user.setActivity("Wumpus is ready to hide!")
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  
  const command = args.shift().toLowerCase();

  const millplayembed =
  {
    "embed": {
      "description": "**Mill**",
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Hey, if you want to find me, use !tip <hide place number>!"
      },
      "image": {
        "url": "https://cdn.discordapp.com/attachments/584659841113391134/593390121210871808/millhideplaces.png"
      },
      "fields": [
        {
          "name": "Hide Places",
          "value": "8",
          "inline": true
        },
        {
          "name": "Difficult",
          "value": "Expert",
          "inline": true
        }
      ]
    }
  }

  const castleplayembed =
  {
    "embed": {
      "description": "**Castle**",
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Hey, if you want to find me, use !tip <hide place number>!"
      },
      "image": {
        "url": "https://cdn.discordapp.com/attachments/584659841113391134/593390102038839334/castlehideplaces.png"
      },
      "fields": [
        {
          "name": "Hide Places",
          "value": "7",
          "inline": true
        },
        {
          "name": "Difficult",
          "value": "Hard",
          "inline": true
        }
      ]
    }
  }

  const desertplayembed =
  {
    "embed": {
      "description": "**Desert**",
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Hey, if you want to find me, use !tip <hide place number>"
      },
      "image": {
        "url": "https://cdn.discordapp.com/attachments/584659841113391134/593390115498491914/deserthideplaces.png"
      },
      "fields": [
        {
          "name": "Difficult",
          "value": "Normal",
          "inline": true
        },
        {
          "name": "Map",
          "value": "Lookout Tower",
          "inline": true
        }
      ]
    }
  }

  const lookouttowerplayembed =
  {
    "embed": {
      "description": "**In Game**",
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Hey, if you want to find me, use !tip <hide place number>!"
      },
      "image": {
        "url": "https://cdn.discordapp.com/attachments/584659841113391134/593390121341026305/towerhideplaces.png"
      },
      "fields": [
        {
          "name": "Difficult",
          "value": "Easy",
          "inline": true
        },
        {
          "name": "Map",
          "value": "Lookout Tower",
          "inline": true
        }
      ]
    }
  }

  const playmapembed =
  {
        "embed": {
          
            "description": "**Which map you would like to play?**",
            "url": "https://discordapp.com",
            "color": 8229858,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
              "text": "Psst, Lookout Tower is my favorite!"
            },
            "fields": [
              {
                "name": "Maps",
                "value": "React to select the map!\n🏞 - **Lookout Tower**\n🏜 - **Desert**\n🏰 - **Castle**\n🗼 - **Mill**"
              }
            ]
          }
        }

  const authorembed =
  {
    "embed": {
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Hmm, okay but please win this bot, I love it!"
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/attachments/577543687920418819/593246625770504202/wumpusicon.png"
      },
      "fields": [
        {
          "name": "Authors",
          "value": "freezy#0001 & Vicking#2571",
          "inline": true
        },
        {
          "name": "Version",
          "value": "1.0.0",
          "inline": true
        },
        {
          "name": "Arts by",
          "value": "Matt Anderson",
          "inline": true
        },
        {
          "name": "DiscordJS",
          "value": "11.5.1",
          "inline": true
        }
      ]
    }
  }

  const millembed =
  {
    "embed": {
      "description": "**Mill**",
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Oh, this will be impossible!"
      },
      "image": {
        "url": "https://cdn.discordapp.com/attachments/592827516297674770/593201220169236503/matt-anderson-project-thumb-discord-dioramas.png"
      },
      "fields": [
        {
          "name": "Hide Places",
          "value": "8",
          "inline": true
        },
        {
          "name": "Difficult",
          "value": "Expert",
          "inline": true
        }
      ]
    }
  }

  const castleembed =
  {
    "embed": {
      "description": "**Castle**",
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Not bad!"
      },
      "image": {
        "url": "https://cdn.discordapp.com/attachments/592827516297674770/593201213269344291/matt-anderson-canopy-discord-dioramas-team-fortress-mobile.png"
      },
      "fields": [
        {
          "name": "Hide Places",
          "value": "7",
          "inline": true
        },
        {
          "name": "Difficult",
          "value": "Hard",
          "inline": true
        }
      ]
    }
  }

  const desertembed =
  {
    "embed": {
      "description": "**Desert**",
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Cool map!"
      },
      "image": {
        "url": "https://cdn.discordapp.com/attachments/592827516297674770/593201024915865732/matt-anderson-canopy-discord-dioramas-breath-of-the-wild-mobile.png"
      },
      "fields": [
        {
          "name": "Hide Places",
          "value": "6",
          "inline": true
        },
        {
          "name": "Difficult",
          "value": "Normal",
          "inline": true
        }
      ]
    }
  }

  const lookouttowerembed =
  {
    "embed": {
      "description": "**Lookout Tower**",
      "url": "https://discordapp.com",
      "color": 8229858,
      "footer": {
        "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
        "text": "Oh, that's my favorite map!"
      },
      "image": {
        "url": "https://cdn.discordapp.com/attachments/592827516297674770/593201080947703809/matt-anderson-canopy-discord-dioramas-firewatch-main.png"
      },
      "fields": [
        {
          "name": "Hide Places",
          "value": "5",
          "inline": true
        },
        {
          "name": "Difficult",
          "value": "Easy",
          "inline": true
        }
      ]
    }
  }

  const mapsembed =
  {
        "embed": {
          
            "description": "**You can see all the places where Wumpus likes to hide.**",
            "url": "https://discordapp.com",
            "color": 8229858,
        
            "fields": [
              {
                "name": "Maps",
                "value": "React to see the maps!\n🏞 - **Lookout Tower**\n🏜 - **Desert**\n🏰 - **Castle**\n🗼 - **Mill**"
              }
            ]
          }
        }

    const helpembed =
  {
        "embed": {
          
            "description": "**Wumpus can't wait to play some Hide 'n' Seek with you, so don't hesitate too much!**",
            "url": "https://discordapp.com",
            "color": 8229858,
            "footer": {
              "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png",
              "text": "C'mon, I wanna hide!"
            },
        
            "fields": [
              {
                "name": "!play",
                "value": "Play Hide 'n' Seek."
              },
              {
                "name": "!maps",
                "value": "You can see the maps where Wumpus likes to hide."
              },
              {
                "name": "!credits",
                "value": "You can see who did this cool bot."
              }
            ]
          }
        }

	if (command === 'help') {
        message.channel.send(helpembed);

    } else if (command === 'maps' && tipp == 1) {

        message.channel.send(mapsembed)
        message.react('🏞').then(() => message.react('🏜')), message.react('🏰'), message.react('🗼');

        const filter = (reaction, user) => {
        return ['🏞', '🏜','🏰','🗼'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
      
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
            const reaction = collected.first();
        
            if (reaction.emoji.name === '🏞') {
              message.channel.send(lookouttowerembed);
            } else if (reaction.emoji.name === '🏜') {
              message.channel.send(desertembed);
            }
            else if (reaction.emoji.name === '🏰') {
            message.channel.send(castleembed);
            } else if (reaction.emoji.name === '🗼') {
              message.channel.send(millembed);
            }
          })
          .catch(collected => {
            message.reply('React timed out.');
          });
        } else if (command === 'credits' && tipp == 1) {
          message.channel.send(authorembed)

        }else if (command === 'tip' && tipp == 5)  {
          if (!args.length) {
            var tiperror = new Array ();
            tiperror[0] = "If you don't try, you'll never find me!";
            tiperror[1] = "C'mon I don't have all day, just find me!";
            tiperror[2] = "I hid, you can come!";
            var i = Math.floor(3*Math.random())
            return message.channel.send(tiperror[i]);
          } else if (args[0] === " ") {
          }
          if (tipp == 5) { 
            
          if (randommmm == args[0]) {
            var win = new Array ();
            win[0] = "You win!";
            win[1] = "You found me, congratulation!";
            win[2] = "You found me!";
            win[3] = "Rff, you found me!";
            win[4] = "You got me!";
            win[5] = "Unfortunately you didn't found me, just kidding you win!";
            win[6] = "You've got to be peeking while i was hiding, that's not fair.";
            var i = Math.floor(7*Math.random())
            if (randommmm == 1) {
              const f1 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594105128106196992/m1.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(f1)
            }
            
            if (randommmm == 2) {
              const f2 =
                {
    
                  "embed": {
                    "url": "https://discordapp.com",
                    "color": 8229858,
                    "image": {
                      "url": "https://cdn.discordapp.com/attachments/593839052839714817/594105129423339521/m2.gif"
                    },
                    "author": {
                      "name": `${win[i]}`,
                      "url": "https://discordapp.com",
                      "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                    },
                    "fields": [
                    ]
                  }
                }
                message.channel.send(f2)
              }
           
            if (randommmm == 3) {
              const f3 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594105131830607872/m3.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(f3)
            }
            
            if (randommmm == 4) {
              const f4 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594105132698828831/m4.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(f4)
            }
            if (randommmm == 5) {
              const f5 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594105132845891594/m5.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(f5)
            }
            if (randommmm == 6) {
              const f6 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594105136167518218/m6.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(f6)
            }
            if (randommmm == 7) {
              const f7 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594105136922624000/m7.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/593839052839714817/593893379952345098/ezgif.com-video-to-gif_3.gif"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(f7)
            }
            if (randommmm == 8) {
              const f8 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594105137858084865/m8.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/593839052839714817/593893379952345098/ezgif.com-video-to-gif_3.gif"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(f8)
            }
            
          }
          else {
          
            var lose = new Array ();
            lose[0] = "Not here!";
            lose[1] = "Look elsewhere!";
            lose[2] = "Not right here!";
            lose[3] = "I'm not here!";
            lose[4] = "You found me, not just kidding!";
            lose[5] = "Why would I be there?";
            var i = Math.floor(6*Math.random())
            message.channel.send(lose[i])
          

        }
      
          } else {

              message.channel.send("You can only use this command in the game!")
          }
        }else if (command === 'tip' && tipp == 4)  {
          if (!args.length) {
            var tiperror = new Array ();
            tiperror[0] = "If you don't try, you'll never find me!";
            tiperror[1] = "C'mon I don't have all day, just find me!";
            tiperror[2] = "I hid, you can come!";
            var i = Math.floor(3*Math.random())
            return message.channel.send(tiperror[i]);
          } else if (args[0] === " ") {
          }
          if (tipp == 4) { 
            
          if (randommm == args[0]) {
            var win = new Array ();
            win[0] = "You win!";
            win[1] = "You found me, congratulation!";
            win[2] = "You found me!";
            win[3] = "Rff, you found me!";
            win[4] = "You got me!";
            win[5] = "Unfortunately you didn't found me, just kidding you win!";
            win[6] = "You've got to be peeking while i was hiding, that's not fair.";
            var i = Math.floor(7*Math.random())
            if (randommm == 1) {
              const t1 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/593992740245864488/1.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(t1)
            }
            
            if (randommm == 2) {
              const t2 =
                {
    
                  "embed": {
                    "url": "https://discordapp.com",
                    "color": 8229858,
                    "image": {
                      "url": "https://cdn.discordapp.com/attachments/593839052839714817/593991090449678356/2.gif"
                    },
                    "author": {
                      "name": `${win[i]}`,
                      "url": "https://discordapp.com",
                      "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                    },
                    "fields": [
                    ]
                  }
                }
                message.channel.send(t2)
              }
           
            if (randommm == 3) {
              const t3 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/593992741428396042/3.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(t3)
            }
            
            if (randommm == 4) {
              const t4 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/593993935135834122/4.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(t4)
            }
            if (randommm == 5) {
              const t5 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/592827516297674770/594080858797768734/5.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(t5)
            }
            if (randommm == 6) {
              const t6 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/592827516297674770/594080859838087178/6.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/593839052839714817/593893379952345098/ezgif.com-video-to-gif_3.gif"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(t6)
            }
            if (randommm == 7) {
              const t7 =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/592827516297674770/594080860060385294/7.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/593839052839714817/593893379952345098/ezgif.com-video-to-gif_3.gif"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(t7)
            }
            
          } else {
          
            var lose = new Array ();
            lose[0] = "Not here!";
            lose[1] = "Look elsewhere!";
            lose[2] = "Not right here!";
            lose[3] = "I'm not here!";
            lose[4] = "You found me, not just kidding!";
            lose[5] = "Why would I be there?";
            var i = Math.floor(6*Math.random())
            message.channel.send(lose[i])

        }
      
          } else {

              message.channel.send("You can only use this command in the game!")
          }




          





        }else if (command === 'tip' && tipp == 3)  {
          if (!args.length) {
            var tiperror = new Array ();
            tiperror[0] = "If you don't try, you'll never find me!";
            tiperror[1] = "C'mon I don't have all day, just find me!";
            tiperror[2] = "I hid, you can come!";
            var i = Math.floor(3*Math.random())
            return message.channel.send(tiperror[i]);
          } else if (args[0] === " ") {
          }
          if (tipp == 3) { 
            
          if (randomm == args[0]) {
            var win = new Array ();
            win[0] = "You win!";
            win[1] = "You found me, congratulation!";
            win[2] = "You found me!";
            win[3] = "Rff, you found me!";
            win[4] = "You got me!";
            win[5] = "Unfortunately you didn't found me, just kidding you win!";
            win[6] = "You've got to be peeking while i was hiding, that's not fair.";
            var i = Math.floor(7*Math.random())
            if (randomm == 1) {
              const two =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594090889400418307/d1.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(two)
            }
            
            if (randomm == 2) {
              const twoo =
                {
    
                  "embed": {
                    "url": "https://discordapp.com",
                    "color": 8229858,
                    "image": {
                      "url": "https://cdn.discordapp.com/attachments/593839052839714817/594089838139932673/d2.gif"
                    },
                    "author": {
                      "name": `${win[i]}`,
                      "url": "https://discordapp.com",
                      "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                    },
                    "fields": [
                    ]
                  }
                }
                message.channel.send(twoo)
              }
           
            if (randomm == 3) {
              const twooo =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594089840296067072/d3.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(twooo)
            }
            
            if (randomm == 4) {
              const twoooo =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594089840266575882/d4.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(twoooo)
            }
            if (randomm == 5) {
              const twooooo =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594089843143737385/d5.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(twooooo)
            }
            if (randomm == 6) {
              const twoooooo =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/594089843143737385/d5.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/593839052839714817/593893379952345098/ezgif.com-video-to-gif_3.gif"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(twoooooo)
            }
            
          } else {
          
            var lose = new Array ();
            lose[0] = "Not here!";
            lose[1] = "Look elsewhere!";
            lose[2] = "Not right here!";
            lose[3] = "I'm not here!";
            lose[4] = "You found me, not just kidding!";
            lose[5] = "Why would I be there?";
            var i = Math.floor(6*Math.random())
            message.channel.send(lose[i])

        }
      
          } else {

              message.channel.send("You can only use this command in the game!")
          }
        } else if (command === 'play') {
          message.channel.send(playmapembed)

        message.react('🏞').then(() => message.react('🏜')), message.react('🏰'), message.react('🗼');

        const filter = (reaction, user) => {
        return ['🏞', '🏜','🏰','🗼'].includes(reaction.emoji.name) && user.id === message.author.id;
        };
        
        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '🏞') {

            message.channel.send(lookouttowerplayembed)
           tipp = 2;
           var min=1; 
           var max=5;  
           random =Math.floor(Math.random() * (+max - +min)) + +min; 

            } else if (reaction.emoji.name === '🏜') {
              tipp = 3;
              message.channel.send(desertplayembed);
              var min=1; 
           var max=6;  
           randomm =Math.floor(Math.random() * (+max - +min)) + +min; 
            }
            else if (reaction.emoji.name === '🏰') {
              tipp = 4;
              message.channel.send(castleplayembed);
              var min=1; 
           var max=7;  
           randommm =Math.floor(Math.random() * (+max - +min)) + +min; 
            } else if (reaction.emoji.name === '🗼') {
              tipp = 5;
              message.channel.send(millplayembed);
              var min=1; 
           var max=8;  
           randommmm =Math.floor(Math.random() * (+max - +min)) + +min;
            }
          })
          .catch(collected => {
            message.reply('React timed out.');
          });

        
        } else if (command === 'tip' && tipp == 2) {
          if (!args.length) {
            var tiperror = new Array ();
            tiperror[0] = "If you don't try, you'll never find me! Use **!tip <hideplace number>!**";
            tiperror[1] = "C'mon I don't have all day, just find me! Use **!tip <hideplace number>!**";
            tiperror[2] = "I hid, you can come! Use **!tip <hideplace number>!**";
            var i = Math.floor(3*Math.random())
            return message.channel.send(tiperror[i]);
          } else if (args[0] === " ") {
          }
          if (tipp == 2) { 
            
          if (random == args[0]) {
            var win = new Array ();
            win[0] = "You win!";
            win[1] = "You found me, congratulation!";
            win[2] = "You found me!";
            win[3] = "Rff, you found me!";
            win[4] = "You got me!";
            win[5] = "Unfortunately you didn't found me, just kidding you win!";
            win[6] = "You've got to be peeking while i was hiding, that's not fair.";
            var i = Math.floor(7*Math.random())
            if (random == 1) {
              const onee =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/attachments/593839052839714817/593890414105460759/ezgif.com-video-to-gif_2.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(onee)
            }
            
            if (random == 2) {
              const oneee =
                {
    
                  "embed": {
                    "url": "https://discordapp.com",
                    "color": 8229858,
                    "image": {
                      "url": "https://cdn.discordapp.com/attachments/593839052839714817/593888474881458177/ezgif.com-video-to-gif_1.gif"
                    },
                    "author": {
                      "name": `${win[i]}`,
                      "url": "https://discordapp.com",
                      "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                    },
                    "fields": [
                    ]
                  }
                }
                message.channel.send(oneee)
              }
           
            if (random == 3) {
              const oneeee =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://media.discordapp.net/attachments/467470489116344320/593885664643121162/ezgif.com-video-to-gif.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(oneeee)
            }
            
            if (random == 4) {
              const oneeeee =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://media.discordapp.net/attachments/467470489116344320/593885664643121162/ezgif.com-video-to-gif.gif"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/592827516297674770/592827866916454403/unknown.png"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(oneeeee)
            }
            
            if (random == 5) {
              const oneeeeee =
              {
  
                "embed": {
                  "url": "https://discordapp.com",
                  "color": 8229858,
                  "image": {
                    "url": "https://cdn.discordapp.com/embed/avatars/0.png"
                  },
                  "author": {
                    "name": `${win[i]}`,
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/attachments/593839052839714817/593893379952345098/ezgif.com-video-to-gif_3.gif"
                  },
                  "fields": [
                  ]
                }
              }
              message.channel.send(oneeeeee)
            }
            
          } else {
          
            var lose = new Array ();
            lose[0] = "Not here!";
            lose[1] = "Look elsewhere!";
            lose[2] = "Not right here!";
            lose[3] = "I'm not here!";
            lose[4] = "You found me, not just kidding!";
            lose[5] = "Why would I be there?";
            var i = Math.floor(6*Math.random())
            message.channel.send(lose[i])

        }
      
          } else {

              message.channel.send("You can only use this command in the game!")
          
	}}else if (command === 'tip') {
    message.channel.send("Hey, you are not in game! Use **!play**!")
  } else {
    var unknowncommand = new Array ();
    unknowncommand[0] = "I don't remember this command!";
    unknowncommand[1] = "Rff, bad command!";
    unknowncommand[2] = "Unfortunately, I don't know this command!";
            var i = Math.floor(3*Math.random())
		message.channel.send(unknowncommand[i]);
	}
});

client.login(token);
