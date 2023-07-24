import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
const ServiceList = [
    {
        image: '../../images/logo/t-chits.jpg',
        title: 'SnB Chain',
        description: 'We are dedicated to empowering governments with proactive management of chit fund activities, fostering efficiency and growth for the next generation of Registered Chit Fund companies. Our aim is to enable a proactive approach, ensuring seamless management and facilitating the growth of chit fund businesses.'
    },
    {
        image: '../../images/logo/chitfunds.png',
        title: 'ChitFunds 2.0',
        description: 'Passages there are many variatin Lorem Ipsum available majority suffered.'
    },
    {
        image: '../../images/logo/favicon-logo.png',
        title: 'Tokenization Platform',
        description: 'Variations There are many of pass ages of Lorem Ipsum available the majority.'
    }
]
const ServiceTwo = () => {
    const [show1,setShow1]=useState(false);
    const [show2,setShow2]=useState(false);
    const [show3,setShow3]=useState(false);
    function showMore1(){
        setShow1(true);
    }
    function showMore2(){
        setShow2(true);
    }
    function showMore3(){
        setShow3(true);
    }
    function showLess1(){
        setShow1(false);
    }
    function showLess2(){
        setShow2(false);
    }
    function showLess3(){
        setShow3(false);
    }
    return (
        <div className="row row--15 service-wrapper" style={{margin:'20px'}}>
            
                <div className="prod-card" id='prod-card1' >
                <a target='blank' href='https://t-chits.telangana.gov.in/'>
                    <h4 className='theme-gradient'>SnB Chain</h4>  
                </a>
                    <p>We are dedicated to empowering governments with proactive management of chit fund activities, fostering efficiency and growth for the next generation of Registered Chit Fund companies.<span style={!show1? {display:'none'}:{display:'block'}}>Our aim is to enable a proactive approach, ensuring seamless management and facilitating the growth of chit fund businesses.<br/>
                    TChits(deployed in Telangana) built on Hyperledger Fabric, has received numerous accolades, including:<br/>
                    <ul style={{textAlign:'left'}}>
                        <li>Gold at National level for implementing Emerging technologies in Chit Fund space (2019-2020).</li>
                        <li>Silver at SKOCH award for Governance (2020-2021).</li>
                        <li>Award in Project Category at 20th CSI SIG eGov (2022).</li>
                        <li>Most Innovative Blockchain startup by Telangana (2018).</li>
                    </ul>
                    </span>
                    </p>
                    <div className="read-more" style={!show1?{width:'100%',display:'flex',justifyContent:'center'}:{display:'none'}}>
                        <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showMore1}>Read More</button>
                    </div>
                    <div className="read-less" style={show1?{width:'100%',display:'flex',justifyContent:'center',marginTop:'35px'}:{display:'none'}}>
                            <Link to='prod-card1' >
                            <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showLess1}>Read Less</button>
                            </Link>
                        </div>
                    {/* </Link>         */}
                </div>
            


                <div className="prod-card" id='prod-card2' >
                    <a target='blank' href='https://www.chitmonks.com/'>
                        <h4 className='theme-gradient'>ChitFunds 2.0</h4>  
                    </a>
                    <p>Our Chit Fund ERP product is expertly crafted to cater to the unique requirements of digital chit fund companies, empowering them to thrive and succeed in their operations. <span style={!show2? {display:'none'}:{display:'block'}}>With its comprehensive features and functionalities, our ERP solution enables seamless management and efficient execution of chit fund activities, ensuring maximum empowerment for these companies in the digital landscape.</span></p>
                    <div className="read-more" style={!show2?{width:'100%',display:'flex',justifyContent:'center'}:{display:'none'}}>
                        <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showMore2}>Read More</button>
                    </div>
                    <div className="read-less" style={show2?{width:'100%',display:'flex',justifyContent:'center',marginTop:'35px'}:{display:'none'}}>
                            <Link to='prod-card2' >
                            <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showLess2}>Read Less</button>
                            </Link>
                        </div>
                                  
                </div>


                <div className="prod-card" id='prod-card3'>
                    
                        <h4 className='theme-gradient'>Tokenization Platform</h4>  
                    
                    <p>Our platform is meticulously designed to cater to the needs of enterprises, providing robust scalability for tokenization initiatives across various blockchains such as Polygon, Ethereum, Algorand, and Hyperledger Fabric.<span style={!show3? {display:'none'}:{display:'block'}}>It is fully prepared to handle the demands of enterprise-level operations, ensuring seamless and efficient tokenization processes. Want to learn more about the product?</span></p>
                    <div className="read-more" style={!show3?{width:'100%',display:'flex',justifyContent:'center'}:{display:'none'}}>
                        <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showMore3}>Read More</button>
                    </div>
                    <div className="read-less" style={show3?{width:'100%',display:'flex',justifyContent:'center',marginTop:'35px'}:{display:'none'}}>
                            <Link to='prod-card3' >
                            <button className="btn-default btn-small foot-but" style={{borderRadius:'5px'}} onClick={showLess3}>Read Less</button>
                            </Link>
                        </div>
                                  
                </div>
                
        </div>
    )
}
export default ServiceTwo;