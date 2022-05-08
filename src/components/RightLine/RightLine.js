import './RightLine.css';
import userPhoto from '../../images/Logo user.png'

const LeftLine = (showQuestion) =>{
    console.log(showQuestion);
    
    return (

        <div className="user">
            <div className="bubble2">{showQuestion.line.text}</div>
            <div className="triangle2"></div>        
            <div className="avatarUser">
                <img src={userPhoto}/>
            </div>
        </div>
    )
}

export default LeftLine;