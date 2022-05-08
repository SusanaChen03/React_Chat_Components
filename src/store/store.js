import { createStore } from "redux";
import { ADD_CHATS } from "./typesVar.js";

const initialState = {
  listConversation: [
    {
      text: "¿Estás trabajando actualmente?",
      position: "left",
    },
    {
      text: "Actualmente no",
      position: "right",
    },
    {
      text: "¿Qué tecnologías dominas?",
      position: "left",
    },
    {
      text: "Java Script, php, ...",
      position: "right",
    },
    {
      text: "¿Cuando puedes empezar a trabajar?",
      position: "left",
    },
  ],
};

const reductor = (state = initialState, action) => {
  if (action.type === ADD_CHATS) {
    let chats = state.listConversation;
    chats.push({
      text: action.payload.text,
      position: "right",
    });
    return {
      ...state,
      listConversation: chats,
    };
  }

  return state;
};

export default createStore(reductor);
