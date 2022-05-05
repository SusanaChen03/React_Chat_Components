import "./Header.css"
import adminLogo from '../../images/Logo center.png'

const Header = () => {



    return(
        <div className="containerheader">
        <div className="header">
          
        <span className="backIcon">
            <span className="iconify" style={{fontSize:'30px'}} data-icon="eva:arrow-ios-back-fill"></span>
        </span> 

        <span className="imageIcon">
            <span className="iconify" style={{fontSize:'30px'}}  data-icon="bx:image-add"></span>
        </span>
   
        </div>
         <div className="bigAvatar">
             <img src={adminLogo}/>
         </div>
         <div className="line"></div>
         <div className="hour">Today 9:41 AM</div>
         </div>
    )
};

export default Header;