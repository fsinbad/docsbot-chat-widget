import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import ReactShadowRoot from "react-shadow-root";
import { MessageParser } from "../messageParser/MessageParser";
import { ActionProvider } from "../actionProvider/ActionProvider";
import { FloatingButton } from "../floatingButton/FloatingButton";
import { config } from "../../config";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import fontAwesomeStyles from "!raw-loader!@fortawesome/fontawesome-svg-core/styles.css";
import reactChatbotStyles from "!raw-loader!react-chatbot-kit/build/main.css";
import appStyles from "!raw-loader!./App.css";
import floatingButtonStyles from "!raw-loader!../floatingButton/FloatingButton.css";
import initialOptionsStyles from "!raw-loader!../initialOptions/InitialOptions.css";
import linkListStyles from "!raw-loader!../linkList/LinkList.css";

fontAwesomeConfig.autoAddCss = false;

function App({ apiKey = null } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ReactShadowRoot>
      <style type="text/css">{fontAwesomeStyles}</style>
      <style type="text/css">{reactChatbotStyles}</style>
      <style type="text/css">{appStyles}</style>
      <style type="text/css">{floatingButtonStyles}</style>
      <style type="text/css">{initialOptionsStyles}</style>
      <style type="text/css">{linkListStyles}</style>
      <FloatingButton onClick={() => setIsOpen(!isOpen)} />
      {isOpen ? (
        <div className="react-chatbot-kit-wrapper">
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageParser={MessageParser}
          />
        </div>
      ) : null}
    </ReactShadowRoot>
  );
}

export default App;