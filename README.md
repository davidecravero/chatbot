# Chatbot

WBS coding school final project created by Davide Cravero.



# Description

This App simulates a conversation between a Customer support agent and a User.

Its goal is to help and guide customers to solve their request.

  <img src="/pics/Chatbot.png" width="300">

The Chatbot is a Web application, part of a cosmetics and personal Care Products e-commerce,
The chatbot uses funnel questions in order to get the customers’ query. The User will have to choose one of the 4 different topics:
Orders, 
Shipping, 
Returns,
Refund.

 <img src="/pics/Chatbot2.png" width="300">
 
Once the User type or click on the selected topic, the Chatbot will display the related subtopics.
At this point the User can select the subtopic needed so the chatbot will display the correct information.

<img src="/pics/Chatbot3.png" width="400">

All the text dialogs displayed in this app are fetched from Contentful API.

On my Contentful account I created a 'Content Model' with 3 fields:

a 'text' field, a 'keyword' field and a 'rich text' field.

The rich text is linked to the keyword, where the keyword is the topic and the rich text is the chatbot reply displayed in the app.

<img src="/pics/ChatbotContentful.png" width="400">

Thanks to this connection with Contentful API, we can control all the text content displayed in the App, we can easily customize the conversation, and even change the behaviour of the chatbot.

# See it live: 
## https://chatbotwbs.herokuapp.com/

# Stack

- [Node.js](https://nodejs.org/);
- [REACT.JS](https://reactjs.org/) (User Interface) using functional components;
- Npm dependancies: react-chatbot-kit (https://github.com/FredrikOseberg/react-chatbot-kit);
- JS/JSX: App logic;
- CSS: external styling;
- Contentfull: API for the Chatbot dialogs (https://www.contentful.com);
- GIT/GITHUB: version control;
- Heroku: App deployment;

# How to run locally

- System requirements: [Node.js](https://nodejs.org/);
- [Yarn](https://classic.yarnpkg.com/en/) for macOS users you can install Yarn via [Homebrew](https://docs.brew.sh/Installation)
- Clone it to your local repo;
- Run "yarn install" to install Yarn dependencies;
- Run "yarn start" to run local server;

Have fun :)
