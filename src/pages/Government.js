import React from 'react'
import { useState } from 'react';
import ContactForm from '../elements/contact/ContactForm';
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';
import { Link } from 'react-scroll';
import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import ServiceFive from '../elements/service/ServiceFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import PortfolioOne from "../elements/portfolio/PortfolioOne";
import CircleProgress from "../elements/progressbar/CircleProgress";
import TestimonialOne from "../elements/testimonial/TestimonialOne";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';






const Government = () => {
    const [show,setShow]=useState(false);
    function showMore(){
        setShow(true);
    }
    function showLess(){
        setShow(false);
    }
    return (
        <>
            <SEO title="Digital Agency" />
            <main className="page-wrapper">
                
                <HeaderOne HeaderSTyle="header-transparent" />


                <div className="slider-area slider-style-1 height-650 bg_image" data-black-overlay="6" style={{backgroundImage: `url(../../images/bg/ts-secretariat.png)`,marginBottom:'25px'}}>
                    <div className="container govt-banner">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt-0 text-center">
                                    <h2 className="title display-one">Blockchain for<br /> Government</h2>
                                    <h4 style={{color:'limegreen'}}>Revolutionizing Public Services and Administration</h4>
                                    <h6 style={{color:'white'}}>Unlock a multitude of advantages for the public sector through the implementation of blockchain technology. Seamlessly begin your journey with ChainMonks' blockchain and digital asset platform, ensuring an efficient and effective integration into your operations</h6>
                                </div>
                            </div>
                        </div>
                                               
                    </div>
                </div>
                
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    title = "Government Use Cases"
                                    description = "Blockchain has many applications that the central, state, and local governments can implement</br> to bolster operational efficiency and information transparency."
                                    />
                            </div>
                        </div>
                        <div className="empty">

                        </div>
                        <ServiceFive 
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                            textAlign = "text-center"
                            extend={show}
                        />
                        
                        <div className="read-more" style={!show?{width:'100%',display:'flex',justifyContent:'center',marginTop:'35px'}:{display:'none'}}>
                            <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showMore}>Read More</button>
                        </div>
                        <div className="read-less" style={show?{width:'100%',display:'flex',justifyContent:'center',marginTop:'35px'}:{display:'none'}}>
                            <Link to='empty' >
                            <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showLess}>Read Less</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />

                <div className="rwt-portfolio-area rn-section-gap" style={{marginBottom:'50px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    subtitle = "Want to Explore Government Use Cases Further with us??"
                                />
                            </div>
                        </div>
                            <div className="rwt-load-more text-center">
                                <Link to='form' offset={-200}  duration={500} >
                                    <button className="btn btn-default btn-small btn-icon">
                                        <span>
                                            Reach Out
                                        </span>
                                    </button>
                                </Link>
                            </div>
                    </div>
                </div>

                <div className="slider-area slider-style-1 height-650 bg_image" data-black-overlay="2" style={{backgroundImage: `url(../../images/bg/govtbg1.jpg)`,marginBottom:'25px',justifyContent:'center'}}>
                    <div className="blur">
                        <div className="container govt-banner" style={{display:'flex',justifyContent:'center',textAlign:'center',width:'70%',padding:'10px'}}>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner pt-0 text-center"style={{backdropFilter:'blur(20px)',padding:'20px',borderRadius:'15px'}}>
                                        <img src="../../images/icons/govt-build.png" style={{marginBottom:'20px'}} />
                                        <h6 style={{color:'limegreen'}}>As blockchain technology continues to evolve, its potential to reshape government operations and public services becomes increasingly evident. Embracing this transformative technology can lead to increased efficiency, accountability, and citizen trust, ultimately creating a more inclusive and digitally empowered society.</h6>
                                        <h6 style={{color:'white'}}>With a proven track record spanning across various government departments and agencies, ChainMonks is your trusted partner in developing and implementing cutting-edge solutions to address intricate challenges within the public sector. Our expertise extends to diverse areas, such as Supply Chain Management, Finance, Land Records, and Smart Contracts for Automated Processes. Let us assist you in building innovative solutions that revolutionize the way the public sector operates.</h6>
                                    </div>
                                </div>
                            </div>
                        </div>                          
                    </div>
                </div>   
                <div className="row">
                    <div className="col-lg-12" >
                        <SectionTitle
                            textAlign = "text-center"
                            radiusRounded = ""
                            title = "Want to Learn More?"
                        />
                       
                    </div>
                    <div className='form' >
                        <ContactForm  />
                    </div>
                </div>
              
                <FooterFour />
            </main>
        </>
    )
}
export default Government;