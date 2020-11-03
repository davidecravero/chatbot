// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import React from "react";
import LearningOptions from "./LearningOptions";

let config = {
  state: {
    keywords: [
      { text: "oiu", handler: () => {}, id: 1 },
      { text: "oiuioh", handler: () => {}, id: 2 },
      { text: "oijioj", handler: () => {}, id: 3 },
      { text: "uygyugy", handler: () => {}, id: 4 },
    ],
  },
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm the chatbot, your personal helper, if you need to get help just type one of this topic: Orders, Shipping, Returns, Refund."
    ),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
      mapStateToProps: ["keywords"],
    },
  ],

  botName: "Chatbot",
  // Defines an object of custom styles if to override styles
  // customStyles: {
  //   // Overrides the chatbot message styles
  //   botMessageBox: {
  //     backgroundColor: "#ff00e1",
  //   },
  //   // Overrides the chat button styles
  //   chatButton: {
  //     backgroundColor: "#ff00e1",
  //   },
  // },
};

export default config;
