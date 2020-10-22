import Discord, { Channel, Client, Emoji } from 'discord.js';
import ytdl from 'ytdl-core-discord';

import * as dotenv from 'dotenv';
dotenv.config();

import { isEmpty } from 'lodash';

import express from 'express';
import bodyParser from 'body-parser';

import scrapeYt, { Video } from 'scrape-yt';

import fetch from 'node-fetch';

const __main__ = () =>
{
    const app: Client = new Client();

    let song_choose = false;
    let song_pause = false;
    let playlist: any[] = [];
    let connection: Discord.VoiceConnection;
    let channel: Discord.VoiceChannel;
    let vids: Video[];

    app.login(process.env.DISCORD_TOKEN);
    
    app.on('ready', () =>
    {
        console.log(`${app.user.username} is ready`);
    });

    app.on('message', async (message) =>
    {
        if (message.author.bot) return;
        if (! message.content.startsWith(process.env.PREFIX || "!")) return;

        const data = message.content.trim().substring(1).toLowerCase();

        if (data.startsWith(process.env.COMMAND_PLAY || "play"))
        {
            channel = message.member.voice.channel;

            await message.react(process.env.OK_SYMBOL || "👌");

            // Check if user in voice channel or bot have enough permission to play music
            if (!channel)
            {
                await message.channel.send("You need to be in voice channel to play music.");
                return;
            }
            if (!channel.permissionsFor(message.client.user).has("CONNECT"))
            {
                await message.channel.send("I don\'t have permission to join the voice channel");
                return;
            }
            if (!channel.permissionsFor(message.client.user).has("SPEAK"))
            {
                await message.channel.send("I don\'t have permission to speak in the voice channel");
                return;
            }

            connection = await channel.join();

            const query = data.substring(((process.env.PREFIX || "!") + (process.env.COMMAND_PLAY || "play")).length + 1);

            if (!isEmpty(query))
            {
                vids = await scrapeYt.search(query, {type: "video", limit: parseInt(process.env.NUMBER_OF_YOUTUBE_VIDS || "4")});

                if (isEmpty(vids))
                {
                    await message.channel.send("No video found, please try again");
                }
                else
                {
                    let title_list = "Which one ?\n";
                    vids.forEach((vid, id) =>
                    {
                        title_list += (id + 1) + '. ' + vid.title + '\n';
                    });
                    song_choose = true;
                    await message.channel.send(title_list);

                }
            }
            else
            {
                await message.channel.send(`Use ${(process.env.PREFIX || "!") + (process.env.COMMAND_PLAY || "play")} + <song name> to play a song`);
            }
        }
        else if (song_choose)
        {
            try
            {
                song_choose = false;
                if ("1" <= data && data <= process.env.NUMBER_OF_YOUTUBE_VIDS || "4")
                {
                    await message.react(process.env.OK_SYMBOL || "👌");

                    playlist.push(await scrapeYt.getVideo(vids[parseInt(data) - 1].id));

                    const url = `https://youtube.com/watch?v=${playlist[0].id}`;
                    connection.play(
                    await ytdl(url),
                    {
                        type: 'opus'
                    })
                    .on("finish", async () =>
                    {
                        await message.channel.send("Nothing else to play, imma head out");
                        playlist.shift();
                        channel.leave();
                    })
                    .on("error", async (err : Error) =>
                    {
                        await message.channel.send("Something bad happened, please try again.");
                        console.log(err);
                    });

                    await message.channel.send(`Now playing ${vids[parseInt(data) - 1].title}...`);
                }
                else
                {
                    await message.react(process.env.THINK_SYMBOL || "🤔");
                    await message.channel.send(`Bro ???`);
                }
            }
            catch
            {
                await message.channel.send("This song is not available");
                channel.leave();
            }
        }
        else
        {
            if (data.startsWith(process.env.COMMAND_STOP || "stop"))
            {
                await message.react(process.env.SAD_SYMBOL || "😢");
                connection.dispatcher.end();
                channel.leave();
            }
            else if (data.startsWith(process.env.COMMAND_PAUSE || "pause"))
            {
                await message.react(process.env.OK_SYMBOL || "👌");
                connection.dispatcher.pause(true);
                song_pause = true;
            }
            else if (data.startsWith(process.env.COMMAND_RESUME || "resume"))
            {
                if (song_pause)
                {
                    await message.react(process.env.OK_SYMBOL = "👌");
                    connection.dispatcher.resume();
                }
                else
                {
                    await message.react(process.env.THINK_SYMBOL || "🤔");
                    await message.channel.send(`Bro ???`);
                }
            }
        }
    });

    app.on('error', () =>
    {
        console.log("Error!\nError!\nError!");
    });
}

const keepAlive = (data: string) =>
{
    setInterval(async () =>
    {
        const url = `https://${process.env.APP_NAME}.herokuapp.com`
        await fetch(url);
        console.log(data);
    }, 5 * 60 * 1000);
}

const __hosting__ = () =>
{
    const app = express();
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: false}));

    app.get('/', (req, res) =>
    {
        res.send("Hello");
    });

    // Start the server
    app.listen(port, () => console.log(`Server is started`));

}

const port = process.env.PORT || undefined;

if (port) __hosting__();
if (process.env.DISCORD_TOKEN)
{
    __main__();
    keepAlive("Fetching...");
}
else
{
    keepAlive("No Discord Token found");
}


