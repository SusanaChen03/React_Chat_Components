import './LeftLine.css';
import adminPhoto from '../../images/Logo recruiter.png'

const LeftLine = (showQuestion) =>{
    console.log(showQuestion);
    
    return (
        <div>
            <div className="admin">
                <div className="avatar">
                    <img src={adminPhoto}/>
                </div>
                <div className="triangle"></div>
                <div className="bubble1">{showQuestion.line.text}</div>
            </div>
        </div>
    )
}

export default LeftLine;