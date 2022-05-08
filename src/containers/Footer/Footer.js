import "./Footer.css";
import { useDispatch } from "react-redux";
import { actionCreator } from "../../store/actionTypes.js";
import { ADD_CHATS } from "../../store/typesVar.js";

const Footer = () => {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    console.log(document.getElementById("texts").value);
    let inputText = document.getElementById("texts").value;
    document.getElementById("texts").value = "";
    dispatch(actionCreator(ADD_CHATS, { text: inputText }));
  }

  return (
    <div className="footer">
      <span className="micro">
        <span
          className="iconify"
          style={{ fontSize: "25px" }}
          data-icon="clarity:microphone-line"
        ></span>
      </span>
      <div>
        <input type="text" id="texts" className="text" />
      </div>
      <span className="send" onClick={handleClick}>
        <span
          className="iconify"
          style={{ fontSize: "25px" }}
          data-icon="lucide:send"
        ></span>
      </span>
    </div>
  );
};

export default Footer;


