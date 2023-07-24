import React from 'react'
import SEO from "../common/SEO";
import HeaderTopNews from '../common/header/HeaderTopNews';
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';
import BrandThree from '../elements/brand/BrandThree';
import AboutFour from '../elements/about/AboutFour';
import ServiceOne from "../elements/service/ServiceOne";
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import TimelineTwo from "../elements/timeline/TimelineTwo";
import Separator from "../elements/separator/Separator";
import ContactForm from '../elements/contact/ContactForm';
import { useState } from 'react';
import { Link } from 'react-scroll';

const ServiceList = [
    {
        src:'../../images/icons/pay-gate.png',
        title: 'Fiat Integration',
        description: 'Seamlessly bridge the gap between traditional finance and blockchain technology by integrating fiat payment gateways, ensuring a smooth user experience. '
    },
    {
        src:'../../images/icons/mult-sig.png',
        title: 'Multisig Support',
        description: 'Enhance security and trust by leveraging our support for multi-signature transactions on the blockchain.'
    },
    {
        src:'../../images/icons/data-mang.png',
        title: 'Onchain and Offchain Data Management',
        description: 'Tailor your data management approach to your business requirements, combining both on-chain and off-chain solutions as needed.'
    },
    {
        src:'../../images/icons/customize.png',
        title: 'Minimal Customization',
        description: 'Customize the user interface and smart contracts accordin+g to your specific business needs, ensuring a seamless integration with your existing systems.'
    },
    {
        src:'../../images/icons/api.png',
        title: 'API First',
        description: 'Embrace our API-first approach, allowing for easy integration and seamless interactions with our blockchain platform.'
    }
   
]



const AboutUs = () => {
    const [show,setShow]=useState(false);
    function showMore(){
        setShow(true);
    }
    function showLess(){
        setShow(false);
    }
    return (
        <>
            <SEO title="About Us" />
            <main className="page-wrapper">
                 
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}
                <div className="slider-area slider-style-1 height-650 bg_image" data-black-overlay="4" style={{backgroundImage: `url(../../images/bg/blockchain-bg.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt--80 text-center">
                                    <h1 className="title ">Welcome to ChainMonks <br /><br/>Your Gateway to <br/>Blockchain Solutions</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 about-cont">
                                <div className='logo about-logo'>          
                                    <img className='logo-dark' src="../../images/logo/main-logo.png" alt="ChainMonks"/>
                                </div>
                            </div>
                            <div className="col-lg-8" >
                                <p style={{fontSize:'2rem',margin:'0em 1em'}} className="mb--10">At ChainMonks, we are committed to revolutionizing the world of blockchain technology, offering a comprehensive and user-friendly platform that caters to a wide array of businesses and industries. Our off-the-shelf product is designed to streamline the complexities of blockchain development, allowing you to seamlessly transition from the proof of concept to full-scale production, no matter the use case.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Service Area  */}


                <Separator />

                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    // subtitle = "What we can do for you"
                                    title = "Our Key Features"
                                    />
                            </div>
                        </div>
                        <ServiceOne 
                            serviceStyle = "service__style--1 bg-color-blackest radius mt--25"
                            textAlign = "text-center"
                            />
                            <div className="empty">

                            </div>
                        <div className="read-more" style={!show?{width:'100%',display:'flex',justifyContent:'center',marginTop:'35px'}:{display:'none'}}>
                            <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showMore}>Read More</button>
                        </div>
                        <div className="load-box" style={!show? {display:'none'}:{display:'block'}} >
                            <div className={`service `}>
                                <div className="content">
                                    <h4 className="title w-600 theme-gradient" style={{textAlign:'center'}}>Platform Features</h4>
                                    <p className="description b1 color-gray mb--0">Benefit from a wide range of platform features, including a customizable dashboard, advanced analytics, and more, giving you valuable insights into your blockchain operations.</p>
                                    {ServiceList.map( (val) => (
                                        <div className='platform-feat' style={{marginTop:'15px'}}>
                                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 feat-img" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                                <img src={val.src} alt={val.title}></img>
                                            </div>
                                            <div className="col-lg-9 col-md-6 col-sm-6 col-12" > 
                                                <h4>{val.title}</h4>
                                                <p>{val.description}</p>
                                            </div>
                                        </div>
                                        
                                    ))}
                                </div>
                            </div>

                        </div>
                        <div className="read-less" style={show?{width:'100%',display:'flex',justifyContent:'center',marginTop:'35px'}:{display:'none'}}>
                            <Link to='empty'>
                            <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showLess}>Read Less</button>
                            </Link>
                        </div>
                    </div>
                    
                    
                </div>
                {/* End Service Area  */}
                <Separator />
                <div className="container" style={{marginTop:'20px'}}>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" style={{borderRight:'1px solid black',display:'flex',alignItems:'center'}}>
                            <p>At ChainMonks, we pride ourselves on our commitment to excellence, innovation, and client satisfaction. Our dedicated team of blockchain experts is here to guide you every step of the way on your journey to blockchain success.<br/><br/>
                            Our goal is to simplify the intricacies of blockchain development, allowing you to smoothly transition from the proof of concept stage to full-scale production, regardless of the specific use case.<br/><br/>
                            Join us today and unlock the true potential of blockchain technology for your business!</p>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12" s >
                           <h4 style={{textAlign:'center'}}> ChainMonks Benefits</h4> <p>Our platform comprises several user-friendly features that streamline the development of blockchain applications.</p>
                            <ul >
                                <li>Dynamic APIs</li>
                                <li>High Availability</li>
                                <li>Full Chain Freedom</li>
                                <li>Developer Focused Tooling</li>
                                <li>Structured Data</li>
                                <li>Enterprise Ready</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--2">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    // subtitle = "Our Corporate Team."
                                    title = "Core Team"
                                    description = ""
                                />
                            </div>
                        </div>
                        <TeamFour column="col-lg-6 col-xl-3 col-md-6 col-12 mt--30" teamStyle="team-style-three" />
                    </div>
                </div>
                {/* End Elements Area  */}
                <Separator />
                <div className="row">
                    <div className="col-lg-12" >
                        <SectionTitle
                            textAlign = "text-center"
                            radiusRounded = ""
                            title = "Schedule a call with us"
                        />
                       
                    </div>
                    <div className='form' >
                        <ContactForm  />
                    </div>
                </div>
                <Separator />

                <div className="testimonials" style={{margin:'20px'}}>
                    <div className="test-heading" style={{display:'flex',justifyContent:'center',width:'100%'}}>
                        <h2>Testimonials</h2>
                    </div>
                    <div className="test">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                                <div className="test-box" style={{display:'flex',flexDirection:'column',padding:'15px'}}>
                                    <div className="test-img" style={{display:'flex',justifyContent:'center'}}>
                                        <img src="../../images/team/test-1.jpg" style={{borderRadius:'50%',display:'inline'}}/>
                                    </div>     
                                    <div className="box" style={{textAlign:'center'}}>
                                        <p>
                                        "The implementation of T-Chits indicates the digital transformational journey that Telangana is embarking upon and it also shows the State’s commitment to encouraging start-ups by the government being the first customer. The solution is greatly appreciated by the department and is a right product-market fit. Congratulations to team ChitMonks for the good work. Wish you reach more milestones in your journey."
                                        </p>
                                        <span className='test-name' style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                                            <h5>Sri Jayesh Ranjan, IAS</h5>
                                            <h6>Principle Secretary - ITE&C, Govt of Telangana</h6>
                                        </span>

                                    </div>                           
                                </div>
                        </div> 
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12" >
                                <div className="test-box" style={{display:'flex',flexDirection:'column',padding:'15px'}}>
                                    <div className="test-img" style={{display:'flex',justifyContent:'center'}} >
                                        <img src="../../images/team/test-2.jpg" style={{borderRadius:'50%'}}/>   
                                    </div>     
                                    <div className="box" style={{textAlign:'center'}}>
                                        <p>"Many initiatives in the blockchain space do not move beyond PoCs, but T-Chits demonstrates Telangana’s strength and leadership in embracing emerging technologies. The startup (Team ChitMonks) was agile and quick to respond to the departments’ inputs and have delivered the best. Wishing your team good luck in your future endeavors."</p>
                                        <span className='test-name' style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                                            <h5>Smt L Ramadevi</h5>
                                            <h6>OSD, ITE&C Department - Govt of Telangana</h6>
                                        </span>
                                    </div>

                                </div>
                        </div> 
                    </div>
                </div>






                <FooterFour />
            </main>
        </>
    )
}

export default AboutUs;
