// MessageParser starter code
import client from "./contentful";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES } from "@contentful/rich-text-types";

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
        if (response.items.length === 1) this.actionProvider.greet(doc);
      })
      .catch(console.error);
  }
}

export default MessageParser;
