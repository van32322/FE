import React, { memo } from "react";
import '../styles/Footer.scss'
import icons from '../utils/icons'
const {MdEmail}=icons
const Footer = () => {
    return (

        <div className="footer_container">
            <div className="footer_container_group_1">
                <div className="footer_email">
                    <div className="footer_email_group">
                        <span className="footer_email_signup">SIGN UP TO NEWSELETTER</span>
                        <small className="footer_email_subcribe">Subcribe</small>
                    </div>
                    <div style={{flex:1,display:"flex",alignItems:"center"}}>
                    <input className="footer_email_button" type="text" placeholder="Email address"></input>
                    </div>
                    <div className="footer_email_icon"><MdEmail size={16}/></div>
                </div>
            </div>
            <div className="footer_container_group_2">
                <div className="footer_copyright">
                    <div style={{flex:2}}>
                        <h3 style={{padding:'15px',borderLeft:'2px solid red',marginBottom:'20px',fontSize:'15px',color:'white'}}>
                            ABOUT US
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(Footer);