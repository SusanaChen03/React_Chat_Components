import "./Conversation.css";

const Conversation = () => {

    return(
          
        <div className="conversation">
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
        
        </div>
    )
};

export default Conversation;