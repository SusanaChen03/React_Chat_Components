import "./Footer.css"

const Footer = () => {

    return(
        <div className="footer">
            <span className="plus">
                <span className="iconify" style={{fontSize:"25px"}} data-icon="akar-icons:plus"></span>
            </span>
            <div>
                <input type="text" className="text" />
            </div>
            <span className="micro">  
                <span className="iconify" style={{fontSize:"25px"}} data-icon="clarity:microphone-line"></span>
            </span>  
        </div>
    )
};

export default Footer;