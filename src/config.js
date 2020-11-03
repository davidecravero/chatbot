// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import LearningOptions from "./LearningOptions";
// import LinkList from "LinkList";

const config = {
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm the chatbot, your personal helper, if you need to get help just type one of this topic: Orders, Shipping, Returns, Refund.",
      {
        widget: "learningOptions",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
  ],

  botName: "Chatbot",
  // Defines an object of custom styles if to override styles
  customStyles: {
    // Overrides the chatbot message styles
    botMessageBox: {
      backgroundColor: "#ff00e1",
    },
    // Overrides the chat button styles
    chatButton: {
      backgroundColor: "#ff00e1",
    },
  },
};

export default config;
