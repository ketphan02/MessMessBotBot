# MESSmessbotBOT

<img src="https://raw.githubusercontent.com/ketphan02/MessMessBotBot/master/src/utils/images/logo.png" alt="logo" align="right" width=25%/>

MESSmessbotBOT is a chatbot which helps people create other kinds of chat bot easier.

[![BuildStatus](https://img.shields.io/travis/motdotla/dotenv/master.svg?style=flat-square)](https://dashboard.heroku.com/apps/mess-messbot-bot)
<img src="https://img.shields.io/badge/license-MIT-yellowgreen"/>
<img src="https://img.shields.io/badge/author-PhanKiet-orange"/>
<img src="https://img.shields.io/badge/language-TypeScript-informational"/>

## Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ketphan02/MessMessBotBot)

## Environment variables
- **VERIFY_TOKEN**: your random variable to connect to Messenger webhook.
- **PAGE_ACCESS_TOKEN**: a token generated by Facebook to identify your Facebook Page.
- **FB_GRAPH_API_VERSION**: the version of the Facebook Graph API, I'm using version 8.0 (which is the latest).
```
Caution: All the variables must be filled in to run the bot
```

## Depedency

<a href="https://github.com/ketphan02/customizable-discord-bot" >
    <img src='https://github-readme-stats.vercel.app/api/pin/?username=ketphan02&repo=customizable-discord-bot&theme=graywhite' />
</a>

## Setup the bot:
1. Press the Deploy to Heroku Button above and name your backend.
2. Create your application at [Facebook Developer Site](https://developers.facebook.com) and fill in the App Display Name.
3. In the Dashboard, scroll down to see a list of products you can make and press Set Up in the **Messenger** box. You will be redirected to the Messenger Bot Settings.
4. Scroll down to **Access Tokens**, add your Facebook Page. Then, click on **Generate Token** and copy the token.
5. Go back to the Heroku Tab, go to **Settings** ⟶ **Config Vars** ⟶ **Reveal Config Vars**.
6. You will see 2 box in a row, in the KEY box, type "**PAGE_ACCESS_TOKEN**" and paste your previously copied token into the VALUE box.
7. Type "**FB_GRAPH_API_VERSION**" into the KEY box and "**8.0**" in the VALUE box
8. Type "**VERIFY_TOKEN**" into the KEY box and type whatever you want, then copy it.
9. After that, go back to the Facebook Developer site, under the Access Token tab, there's **Webhooks** tab. Press **Add Callback URL**, paste your copied data into **Verify Token**.
10. Don't close the window yet, go back to the Heroku tab and right click the **Open app** button on the top right corner, then choose **Copy link address**.
11. Go back to the Facebook Developer site and paste the link to **Callback URL** box. Then, type "**/webhook**" right after the pasted URL.
12. Press **Verify and Save** and you're ready to go.

## Contact
### PhanKiet
<a href="https://github.com/ketphan02">
    <img width="15" align="left"
        alt="My GitHub profile"
        src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg">
</a>
<a href="https://www.linkedin.com/in/ketphan02/">
    <img width="15" align="left"
        alt="My LinkedIn profile"
        src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg">
</a>
<a href="mailto:tuankiet.phannguyen@gmail.com">
    <img width="15" align="left"
        alt="My Gmail"
        src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg">
</a>
<a href="mailto:tuankietvn@outlook.com">
    <img width="15" align="left"
        alt="My Outlook"
        src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/microsoftoutlook.svg">
</a>
<br/>

### TheAnh Vu
<a href="https://github.com/theanh28">
    <img width="15" align="left"
        alt="My GitHub profile"
        src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg">
</a>
<a href="https://www.linkedin.com/in/anh-alex-vu-5024111ab/">
    <img width="15" align="left"
        alt="My LinkedIn profile"
        src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg">
</a>
<a href="mailto:theanhvu02.101@gmail.com">
    <img width="15" align="left"
        alt="My Gmail"
        src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/gmail.svg">
</a>
<br/>

## Reference
- ketphan02. "Discord Music Bot Template". <br/>
https://github.com/ketphan02/customizable-discord-bot

- ketphan02. "UBC Chat". <br/>
https://github.com/ketphan02/chatbot-ubc

- Major-Thrust. "Discordjs-MusicBot". <br/>
https://github.com/Major-Thrust/Discordjs-MusicBot

- Jordan Irabor. "How to Set Up a Node Project With Typescript". *Digital Ocean*. <br/>
https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript

- FACEBOOK for Developers. "Messenger Platform". <br/>
https://developers.facebook.com/docs/messenger-platform

- Discord. "Discord.JS". <br/>
https://discord.js.org

- Seeklogo. Two vector logo files of Messenger and Discord.<br/>
    - https://seeklogo.com/vector-logo/275121/discord
    - https://seeklogo.com/vector-logo/271544/facebook-messenger
