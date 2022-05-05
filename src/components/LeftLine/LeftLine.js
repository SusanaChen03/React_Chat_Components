import './LeftLine.css';

const LeftLine = () =>{

    let adminPhoto = "../../images/Logo center.png"

    
    return (
        <div>
            <div className="admin">
                <div className="avatar">
                    <img src={adminPhoto}/>
                </div>
                {/* <div className="triangle"></div>
                <div className="bubble1">
                    <p>{showQuestion}</p>
                </div> */}
            </div>
        </div>
    )
}

export default LeftLine;