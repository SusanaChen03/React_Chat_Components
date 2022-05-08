import "./Conversation.css";
import React from "react";
import { useState, useEffect } from "react";
import store from "../../store/store";
import LeftLine from "../../components/LeftLine/LeftLine";
import RightLine from "../../components/RightLine/RightLine";

const Conversation = () => {
  
  const [, updateState] = React.useState();
  const [lines, setLines] = useState([]);

  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    store.subscribe(() => {
      setLines(store.getState().listConversation);
      forceUpdate();
    });
      setLines(store.getState().listConversation);
  }, []);

  return (
    <div className="conversation">
      {lines.map((question) => {
  
        if (question.position === "left") {
          return <LeftLine line={question} />;
        } else {
          return <RightLine line={question} />;
        }
      })}
    </div>
  );
};

export default Conversation;
