import "./Conversation.css";
import { useState, useEffect } from "react";
import LeftLine from "../../components/LeftLine/LeftLine";

const Conversation = () => {

    const [line, setLine] = useState([]);
    
   
    const showQuestion = () => {

        let question = ["¿que estas trabajando actualmente"];

        setLine(question);
    };
    
  
    useEffect(() => {showQuestion()}, []);

    return(

        <div className="conversation">
            {line.map((showQuestion)=>{
                return <LeftLine line={showQuestion}/>
            })}
        </div>
          
    )
};

export default Conversation;




{/* <div className="conversation">
<div className="admin">
    <div className="avatar"></div>
    <div className="triangle"></div>
    <div className="bubble1">¿Estás trabajando actualmente?</div>
</div>
<div className="user">
    <div className="bubble2">Actualmente no</div>
    <div className="triangle2"></div>        
    <div className="avatarUser"></div>
</div>
<div className="admin">
    <div className="avatar"></div>
    <div className="triangle"></div>
    <div className="bubble1">¿Qué tecnologías dominas?</div>
</div>

</div> */}