import "./Conversation.css";
import { useState, useEffect } from "react";
import LeftLine from "../../components/LeftLine/LeftLine";
import RightLine from "../../components/RightLine/RightLine";

const Conversation = () => {

    const [lines, setLines] = useState([]);
    
   
    const showQuestion = () => {

       
        let questions = [{
            text: "¿que estas trabajando actualmente",
            position: "left"
        },
        {
            text: "Actualmente no",
            position: "right"
        },
        {
            text: "¿Qué tecnologías dominas?",
            position: "left"
        },
        {
            text: "Java Script, php, ...",
            position: "right"
        },
        {
            text: "¿Cuando puedes empezar a trabajar?",
            position: "left"
        }
            
    ]

        setLines(questions);
    };
    
  
    useEffect(() => {showQuestion()}, []);

    return(

        <div className="conversation">
            {lines.map((question)=>{
                if(question.position === "left"){
                    return <LeftLine line={question}/>
                }else {
                    return <RightLine line={question}/>
                }
                
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