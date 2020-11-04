// MessageParser starter code
import client from "./contentful";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, MARKS } from "@contentful/rich-text-types";

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    let lowerCaseMessage = message.toLowerCase();
    //The replace() method applied to change the format of the text
    lowerCaseMessage = lowerCaseMessage.replace(" ", "_");
    // contenful request
    client
      .getEntries({
        content_type: "dialogs",
        "fields.keywords[match]": lowerCaseMessage,
      })
      // full rich text transformation to react component
      .then((response) => {
        const options = {
          // open the hyper text links in a new browser tab
          renderMark: {
            [MARKS.BOLD]: (text) => (
              <button
                class="bottone"
                style={{ marginTop: 5 }}
                onClick={() => {
                  this.actionProvider.clientMessage(text);
                  this.parse(text);
                }}
              >
                {text}
              </button>
            ),
          },
          renderNode: {
            [INLINES.HYPERLINK]: (node, children) => {
              return (
                <a href={node.data.uri} target="_blank">
                  {children}
                </a>
              );
            },
          },
        };
        const doc = documentToReactComponents(
          response.items[0].fields.chatbotDialogsRich,
          options
        );
        console.log(doc);
        if (response.items.length === 1) this.actionProvider.greet(doc);
      })
      .catch(console.error);
  }
}

export default MessageParser;
