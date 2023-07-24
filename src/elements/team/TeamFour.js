import React, { useState } from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'pavan-adipuram',
        name: 'Pavan Adipuram',
        designation: 'Founder & CEO',
        link:'https://www.linkedin.com/in/pavanadipuram/',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
       
    },
    {
        image: 'malla-reddy',
        name: 'Malla Reddy',
        designation: 'Founder & CTO',
        link:'https://www.linkedin.com/in/malla-reddy-ch/',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
        
    },
    {
        image: 'sidhu',
        name: 'Sridhar Reddy',
        designation: 'Founder & CIO',
        link:'https://www.linkedin.com/in/sridhar-reddy-u/',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
        
    },
]
const customStyle={
    display:"flex",
    justifyContent: 'center',
    marginTop:'20px'
}






const TeamFour = ({column , teamStyle}) => {
    const [set,setState]=useState('false');
    function handleOver(){
        setState('true');
       
    }
    function handleOut(){
        setState('false');
       
    }

    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    
                        <div className={`rn-team ${teamStyle} `}>
                            <div className="inner">
                                <a  href={`${data.link}`} target='_blank' style={{height:'100%',position:'relative'}}>
                                        <figure className="thumbnail" onMouseOver={handleOver} onMouseOut={handleOut} >
                                            <img src={`./images/team/${data.image}.png`} alt="Corporate React Template" />
                                        </figure>  
                                        <div className='overlays'>
                                            <div >
                                                <img className='ldimg' src='./images/team/linkedin2.png'/>
                                            </div>
                                        </div>
                                </a>
                            </div>
                        </div>
                        <div className='team-info' style={customStyle}>
                            <div>
                                <h6 className='title '>{data.name}</h6>
                                <p className='subtitle theme-gradient'>{data.designation}</p>
                            </div>
                        </div>
                </div>
            ))}
        </div>
    )
}
export default TeamFour;
