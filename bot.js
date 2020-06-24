//whatever you do, don't mess with anything from here

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  used=0
});

//to here. also, probably don't mess with anything else unless i included instructions on how to do so, or you can somehow understand my code.

client.on('message', msg => {
    //this determines how the bot parses your message, looking for keywords. if you want to change the command (i.e. "dice d6" instead of "roll d6" or things like that) let me know and i'll walk you through it, but this is the section you want.
    if (msg.content.substring(0,5) === 'roll ') {
    roller=msg.content
    roller=roller.substring(5)
    dicelist=roller.split("+")
    output=''
    totalroll=0
    unsuppress=true
    for (i = 0; i < dicelist.length; i++) {
        if (dicelist[i].includes("d") && !(dicelist[i].includes('adv')) && !(dicelist[i].includes('dis'))){
            if ((dicelist[i][0]=='d')&&(dicelist[i]!='dis')&&(dicelist[i]!='disadvantage')){
                roll = Math.floor(Math.random()*parseInt(dicelist[i].substring(1))+1)
                if (roll>0){
                    if (output!=''){
                        output+=', '
                    }
                    output+=roll.toString()
                    totalroll+=roll
                }
            } else {
                args=dicelist[i].split("d")
                for (j = 0; j<args[0]; j++) {
                    roll = Math.floor(Math.random()*parseInt(args[1])+1)
                    if (roll>0){
                        if (output!=''){
                            output+=', '
                        }
                        output+=roll.toString()
                        totalroll+=roll
                    }
                }
            }
        } else if (dicelist[i].includes('adv')) {
            mod=parseInt(dicelist[i+1])
            x1=Math.floor(Math.random()*20)+1
            x2=Math.floor(Math.random()*20)+1
            unsuppress=false

            msg.channel.send(msg.member.displayName+': '+x1.toString()+' and '+x2.toString()+', for a result of '+(Math.max(x1,x2)+mod).toString());
        } else if (dicelist[i].includes('dis')) {
            mod=parseInt(dicelist[i+1])
            x1=Math.floor(Math.random()*20)+1
            x2=Math.floor(Math.random()*20)+1
            unsuppress=false

            msg.channel.send(msg.member.displayName+': '+x1.toString()+' and '+x2.toString()+', for a result of '+(Math.min(x1,x2)+mod).toString());
        } else {
            totalroll+=parseInt(dicelist[i])
        }
    }
    //i think this part of the code is cursed, please don't touch it    
    if (output!='' && unsuppress){
        output+=", for a total of "+totalroll.toString()+"!"
        msg.channel.send(msg.member.displayName+': '+output);
    }
    }
    if (msg.content.substring(0,5) === 'check') {
        advantage=false
        disadvantage=false
        if ((msg.content.split(' ').includes('adv')) || (msg.content.split(' ').includes('advantage'))) {
            advantage=true
        }
        if ((msg.content.split(' ').includes('dis')) || (msg.content.split(' ').includes('disadvantage'))) {
            disadvantage=true
        }
        skills=['strength','dexterity','constitution','intelligence','wisdom','charisma','acrobatics', 'animal', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion','religion', 'sleight', 'stealth', 'survival']
        i=skills.indexOf(msg.content.split(' ')[1])
        //see the thing i wrote down there about adding new players with skills, except make it a little different because i did this wrong. the new template (look down there for info about how to use it) is this:
        
        //    else if ((msg.member.user.tag=='[USERTAG]')&&(msg.guild.id=="[SERVERID]")){
        //       stats =[[strength], [dexterity], [constitution], [intelligence], [wisdom] , [charisma], [acrobatics], [animal], [arcana], [athletics], [deception], [history], [insight], [intimidation], [investigation], [medicine], [nature], [perception], [performance], [persuasion], [religion], [sleight], [stealth], [survival]]
        //       mod=stats[i]
        //    }
        if (i>-1){
            
            if ((msg.member.user.tag=='kyr#3118')&&(msg.guild.id=="703365777897554010")){
                vasa=[-1,3,2,2,0,3,3,0,4,-1,3,4,2,3,4,0,2,2,3,5,2,3,3,0]
                mod=vasa[i]
            } else if ((msg.member.user.tag=='chandler#1221')&&(msg.guild.id=="703365777897554010")){
                clove=[3,1,2,-1,2,0,1,4,-1,5,0,-1,2,0,-1,2,-1,4,0,0,-1,1,1,4]
                mod=clove[i]
            } else if ((msg.member.user.tag=='joy, beese boose#0105')&&(msg.guild.id=="703365777897554010")){
                bryn=[0,4,1,3,-1,1,6,-1,5,0,3,5,-1,1,3,-1,3,3,1,3,5,6,8,-1]
                mod=bryn[i]
            } else if ((msg.member.user.tag=='Lemon#8665')&&(msg.guild.id=="703365777897554010")){
                ovin=[1,-1,3,0,4,1,-1,4,0,1,1,2,4,1,0,6,0,4,1,3,2,-1,-1,4]
                mod=ovin[i]
            } else if ((msg.member.user.tag=='electro#8281')&&(msg.guild.id=="703365777897554010")){
                eliana=[2,5,1,1,3,1,7,5,1,2,1,1,3,1,1,3,1,5,1,1,1,5,7,5]
                mod=eliana[i]
            } else {mod=0}
            if (advantage){
                roll1=(Math.floor(Math.random()*20)+1)
                roll2=(Math.floor(Math.random()*20)+1)
                msg.channel.send(msg.member.displayName+': '+roll1.toString()+', '+roll2.toString()+': '+(Math.max(roll1,roll2).toString())+'+'+mod.toString()+' = ***'+(Math.max(roll1,roll2)+mod).toString()+'***')
            } else if (disadvantage){
                roll1=(Math.floor(Math.random()*20)+1)
                roll2=(Math.floor(Math.random()*20)+1)
                msg.channel.send(msg.member.displayName+': '+roll1.toString()+', '+roll2.toString()+': '+(Math.min(roll1,roll2).toString())+'+'+mod.toString()+' = ***'+(Math.min(roll1,roll2)+mod).toString()+'***')
            } else {
                roll=(Math.floor(Math.random()*20)+1)
                msg.channel.send(msg.member.displayName+': '+roll.toString()+' + '+mod.toString()+' = ***'+(mod+roll).toString()+'***')
            }
        } else {
            msg.channel.send('sorry, i didn\'t understand that')
        }
    }
    // this is where you can add stats for players. here is a template to add your own. replace [USERTAG] with the user's tag (there should be no square brackets) and [SERVERID] with the server's id (again, no brackets). also, replace [score] with the corresponding ability score for the player.
    
    //    else if ((msg.member.user.tag=='[USERTAG]')&&(msg.guild.id=="[SERVERID]")){
    //       stats =[[strength], [dexterity], [constitution], [intelligence], [wisdom] , [charisma], [acrobatics], [animal], [arcana], [athletics], [deception], [history], [insight], [intimidation], [investigation], [medicine], [nature], [perception], [performance], [persuasion], [religion], [sleight], [stealth], [survival]]
    //    }
    
    if (msg.content.substring(0,5) === 'stats') {
        proceed=true
        if ((msg.member.user.tag=='kyr#3118')&&(msg.guild.id=="703365777897554010")){
            stats=[-1,3,2,2,0,3,3,0,4,-1,3,4,2,3,4,0,2,2,3,5,2,3,3,0]

        } else if ((msg.member.user.tag=='chandler#1221')&&(msg.guild.id=="703365777897554010")){
            stats=[3,1,2,-1,2,0,1,4,-1,5,0,-1,2,0,-1,2,-1,4,0,0,-1,1,1,4]

        } else if ((msg.member.user.tag=='joy, beese boose#0105')&&(msg.guild.id=="703365777897554010")){
            stats=[0,4,1,3,-1,1,6,-1,5,0,3,5,-1,1,3,-1,3,3,1,3,5,6,8,-1]

        } else if ((msg.member.user.tag=='Lemon#8665')&&(msg.guild.id=="703365777897554010")){
            stats=[1,-1,3,0,4,1,-1,4,0,1,1,2,4,1,0,6,0,4,1,3,2,-1,-1,4]

        } else if ((msg.member.user.tag=='electro#8281')&&(msg.guild.id=="703365777897554010")){
            stats=[2,5,1,1,3,1,7,5,1,2,1,1,3,1,1,3,1,5,1,1,1,5,7,5]

        } else {
            proceed=false
        }
        if (proceed){
            output=''
            skills=['strength','dexterity','constitution','intelligence','wisdom','charisma','acrobatics', 'animal handling', 'arcana', 'athletics', 'deception', 'history', 'insight', 'intimidation', 'investigation', 'medicine', 'nature', 'perception', 'performance', 'persuasion','religion', 'sleight of hand', 'stealth', 'survival']
            for (i = 0; i < skills.length; i++){
                if (stats[i]>=0){
                    output+=skills[i]+': +'+stats[i]+'\n'
                } else {
                    output+=skills[i]+': '+stats[i]+'\n'
                }
            }
            msg.channel.send(msg.member.displayName+'\'s stats:\n'+output)
        } else {
            msg.channel.send(msg.member.displayName+': i don\'t even know who you are')
        }
    }
    //this does initiative. if you want your own initiative tracker just send me info about your party and i'll write the code for you. it will be way too hard for me to explain what the hell is going on here, considering how lazy i am.
    if ((msg.content === 'initiative')&&(msg.member.user.tag=='jon, bees bee#5306')&&(msg.guild.id=="703365777897554010")) {
        x=20
        together=[[(Math.floor(Math.random()*x)+1)+5, 'eliana'],[(Math.floor(Math.random()*x)+1)+3, 'bryn'],[(Math.floor(Math.random()*x)+1)+3, 'vasa'],[(Math.floor(Math.random()*x)+1)+1, 'clove'],[(Math.floor(Math.random()*x)+1)-1, 'ovin']]

        together.sort(sortFunction);
        output='initiative:'
        for (i = 0; i < together.length; i++){
            output+='\n'+together[i][1]+': '+together[i][0]
        }
        msg.channel.send(output)
    }
    


});

//don't mess with this. everything you change should be above this line please. 

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

client.login(auth.token);

//why did you read all the way down here