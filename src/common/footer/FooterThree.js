import React from 'react';
import {Link} from "react-router-dom";
import CalltoActionSeven from "../../elements/calltoaction/CalltoActionSeven";
import footerOne from "../../data/footer/footerOne.json";
import ScrollTop from "./ScrollTop";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const footerIntem =  footerOne[0];
const footerIntemOne =  footerOne[1];
const footerIntemTwo =  footerOne[2];
const footerIntemThree =  footerOne[3];
const footerIntemFour =  footerOne[4];
const footerIntemFive =  footerOne[5];


const indexOneLink = (footerIntemOne.quicklink);
const indexTwoLink = (footerIntemTwo.quicklink);
const indexThreeLink = (footerIntemThree.quicklink);

const FooterThree = () => {
    return (
        <>
            <footer className="rn-footer footer-style-default variation-two">
                {/* <CalltoActionSeven /> */}
                <div className="footer-top">
                    <div className="container">
                        <div className="row-footer">
                            {/* Start Single Widget  */}
                            <div className="col-lg-7 col-md-6 col-sm-6 col-12" style={{ display:'flex',alignItems:'center', textAlign:'center'}}>
                                
                                <p>At ChainMonks, we pride ourselves on our commitment to excellence, innovation, and client satisfaction. Our dedicated team of blockchain experts is here to guide you every step of the way on your journey to blockchain success.<br/>Our goal is to simplify the intricacies of blockchain development, allowing you to smoothly transition from the proof of concept stage to full-scale production, regardless of the specific use case.<br/>Join us today and unlock the true potential of blockchain technology for your busines</p>
                            </div>
                            {/* End Single Widget  */}

                            {/* Start Single Widget  */}
                            <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                                <div className="rn-footer-widget">
                                    <div className='logo foot-logo'>
                                        <a href='/'>                                    
                                            <img className='logo-dark' src="../../images/logo/main-logo.png" alt="ChainMonks"/>
                                        </a>
                                    </div>  
                                    <div className="form-group foot-mail" style={{position:'relative'}}>
                                        <input 
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            required
                                            style={{borderRadius:'35px'}}
                                        />
                                    <button className="btn-default btn-small foot-but" style={{position:'absolute',borderRadius:'35px'}}>Get Early Access</button>
                                           
                                    </div>
                                    <h4 className="title"style={{textAlign:'center'}}>{footerIntemFive.title}</h4>
                                    <div className="inner"style={{display:'flex',justifyContent:'center'}}>
                                        {/* <h6 className="subtitle">{footerIntemFive.subtitle}</h6> */}
                                        <ul className="social-icon social-default justify-content-start">
                                            <li><Link to="facebook.com"><FiFacebook /></Link></li>
                                            <li><Link to="twitter.com"><FiTwitter /></Link></li>
                                            <li><Link to="instagram.com"><FiInstagram /></Link></li>
                                            <li><Link to="linkdin.com"><FiLinkedin /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Widget  */}
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTop />
        </>
    )
}

export default FooterThree;
