const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  used=0
});

client.on('message', msg => {

    if (msg.content.substring(0,5) === 'roll ') {
    roller=msg.content
    roller=roller.substring(5)
    dicelist=roller.split("+")
    // msg.reply(dicelist[0])
    output=''
    totalroll=0
    unsuppress=true
    for (i = 0; i < dicelist.length; i++) {
        // msg.reply("nerd")

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

        // roll = Math.floor(parseInt(Math.random()*dicelist[i])+1)
        // if (roll>0){
        //     if (output!=''){
        //         output+=', '
        //     }
        //     output+=roll.toString()
        //     totalroll+=roll
        // }
    }
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
        if (i>-1){
            if (msg.member.displayName=='vasa'){
                vasa=[-1,3,2,1,0,2,3,0,3,-1,2,3,2,2,3,0,1,2,2,4,1,3,3,0]
                mod=vasa[i]
            } else if (msg.member.displayName=='clove'){
                clove=[3,1,2,-1,2,0,1,4,-1,5,0,-1,2,0,-1,2,-1,4,0,0,-1,1,1,4]
                mod=clove[i]
            } else if (msg.member.displayName=='bryn'){
                bryn=[0,3,1,3,-1,1,5,-1,5,0,3,5,-1,1,3,-1,3,3,1,3,5,5,7,-1]
                mod=bryn[i]
            } else if (msg.member.displayName=='ovin'){
                ovin=[1,-1,3,0,3,1,-1,3,0,1,1,2,3,1,0,5,0,3,1,3,2,-1,-1,3]
                mod=ovin[i]
            } else if (msg.member.displayName=='eliana'){
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
    if (msg.content.substring(0,5) === 'stats') {
        proceed=true
        if (msg.member.displayName=='vasa'){
            stats=[-1,3,2,1,0,2,3,0,3,-1,2,3,2,2,3,0,1,2,2,4,1,3,3,0]

        } else if (msg.member.displayName=='clove'){
            stats=[3,1,2,-1,2,0,1,4,-1,5,0,-1,2,0,-1,2,-1,2,0,0,-1,1,1,4]

        } else if (msg.member.displayName=='bryn'){
            stats=[0,3,1,3,-1,1,5,-1,5,0,3,5,-1,1,3,-1,3,3,1,3,5,5,7,-1]

        } else if (msg.member.displayName=='ovin'){
            stats=[1,-1,3,0,3,1,-1,3,0,1,1,2,3,1,0,5,0,3,1,3,2,-1,-1,3]

        } else if (msg.member.displayName=='eliana'){
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
    if ((msg.content === 'initiative')&&(msg.member.displayName=='mean dice man')) {
        // party=['vasa','ovin','clove','bryn','eliana']
        // mods=[3,-1,1,3,5]
        // rolls=[(Math.floor(Math.random()*20)+1)+3,(Math.floor(Math.random()*20)+1)-1,(Math.floor(Math.random()*20)+1)+1,(Math.floor(Math.random()*20)+1)+3,(Math.floor(Math.random()*20)+1)+5]
        // together=[[rolls[0],party[0]],[rolls[1],party[1]],[rolls[2],party[2]],[rolls[3],party[3]],[rolls[4],party[4]]]
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

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}

client.login(auth.token);
