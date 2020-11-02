// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm the chatbot, your personal helper, if you need to get help just type one of this topic: Orders, Delivery, Return, Refunds."
    ),
  ],
  botName: "Chatbot",
};

export default config;
