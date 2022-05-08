import "./Suggestion.css";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../store/actionTypes.js";
import { ADD_CHATS } from "../../store/typesVar.js";

const Suggestion = () => {

  const dispatch = useDispatch();

  function handleClickYes(e) {
    e.preventDefault();
    dispatch(actionCreator(ADD_CHATS, { text: "Sí, estoy trabajando" }));
  };
  function handleClickNo(e) {
    e.preventDefault();
    dispatch(actionCreator(ADD_CHATS, { text: "Actualmente no" }));
  };
  return (
    <div className="buttons">
      <div className="yes" onClick={handleClickYes}>Sí, estoy trabajando{" "} </div>
        
      <div className="no" onClick={handleClickNo}> Actualmente no  </div>
    </div>
  );
};

export default Suggestion;
