ok so here's the deal. my code is bad, the things i did that aren't code are bad, and pretty much everything you're about to have to do is kinda going to suck. but i've done everything i can to make this as painless as possible, so it should be fast enough to get this all going. 

**prerequisites** 

you need node.js installed; at least v8.0.0 i think, but you might need something more recent. basically, have a recent version of it installed, you can type "node -v" into terminal if you aren't sure if node is installed, or if you want to check what version you have. you can look up tutorials online of how to do this if you don't know how, it should be pretty quick but if you run into a problem i'd be happy to help

you'll probably want a text editor and a basic understanding of javascript or just programming syntax in general, but if you aren't looking to tailor the bot to your specific needs, even this won't really be necessary.

**how to do it**

before you do anything, leave the folder you downloaded that contains this readme in a place where it can stay. doesn't have to be anywhere in particular as long as it's on your computer, but you shouldn't be moving it around to often (it won't break anything, it'll just make things more annoying for you down the line).

next, visit [this link](https://discord.com/oauth2/authorize?client_id=705211502759641200&scope=bot&permissions=8). it should prompt you to add burlapdice to a server of your choice (if that doesn't work let me know, that means i messed up not you). add burlap to the server you want burlap in (you have to be an admin in said server!), and then go to the server to check if burlap indeed is there (won't be online, but should at least be present in the offline section). 

[*] open up terminal and cd into this folder. if you aren't familiar with commandline interfaces, just look up how to do this or just ask me, it's not too bad. once you're there, type

 `node bot.js`

into terminal and press enter. you should get a message like "Logged in as burlapdice...."!! if you don't, let me know please and we'll workshop it. if you'd like to taylor the bot to your needs (whether by adding different stats for different players, or adding your own functions), let me know. i'll clean up my code a little bit but unless you're fluent in garbage, you'll probably want my help. hope you've been successful!! if you haven't been, don't worry, it took me like fifty tries and i made it.





**help! something bad has happened!**



you might need to install discord.js. i don't think you do? but i don't really get how this works. if i ask you to install discord.js, follow these instructions:

type

`npm install --save discord.js dotenv `

into your terminal and press enter, then wait a little bit. if you get error messages (things that say "warn" and the like are ok, you're worried about "error" and similar words) then let me know. once you have installed discord.js, return to the [*] in the instructions and try everything again from there. 