import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";


const ServiceList = [
    {
        title: 'Transparent Governance',
        description: "Blockchain's immutable ledger ensures complete transparency in government operations. All transactions and interactions are recorded in a tamper-resistant manner, providing citizens with unprecedented visibility into the decision-making processes and allocation of resources."
    },
    {
        title: 'Enhanced Security and Data Integrity',
        description: 'The decentralized architecture of blockchain makes it highly resistant to cyberattacks and data breaches. Critical government data, such as citizen records, land titles, and financial information, can be stored securely on the blockchain, reducing the risk of unauthorized access and data manipulation.'
    },
    {
        title: 'Efficient Supply Chain Management',
        description: 'Blockchain enables governments to track the movement of goods and services throughout the supply chain with real-time visibility. This feature is particularly valuable for managing logistics, verifying the origin of goods, and preventing counterfeit products from entering the market.'
    },
    {
        title: 'Identity Management and e-Voting',
        description: 'Blockchain-based identity management systems offer a reliable and tamper-proof solution for citizen identification. Additionally, blockchain can revolutionize the voting process by providing a secure and verifiable platform for e-voting, enhancing electoral integrity and participation.'
    },
    {
        title: 'Smart Contracts for Automated Processes',
        description: 'Smart contracts are self-executing agreements with predefined conditions. Governments can leverage smart contracts to automate various processes, such as procurement, licensing, and tax collection, reducing administrative overhead and ensuring compliance.'
    }
]
const ExtendedServiceList = [
    {
        src:'../../images/icons/distrib.png',
        title: 'Efficient Public Benefits Distribution',
        description: 'Blockchain can facilitate seamless and secure distribution of public benefits, welfare, and subsidies. By eliminating intermediaries and reducing fraud, governments can optimize the allocation of resources and ensure that assistance reaches those who need it most.'
    },
    {
        src:'../../images/icons/owner.png',
        title: 'Land Title and Property Rights',
        description: 'Blockchain-based land registries provide an immutable record of property ownership, simplifying the process of land transfer and reducing disputes. This technology can empower citizens, especially in developing nations, by securing their property rights.'
    },
    {
        src:'../../images/icons/data-share.png',
        title: 'Inter-Government Data Sharing',
        description: 'Blockchain facilitates secure inter-governmental data sharing, enabling different agencies to access and verify data without compromising individual privacy. This collaborative approach improves the efficiency of public services and facilitates better decision-making.'
    },
    {
        src:'../../images/icons/aid.png',
        title: 'Disaster Management and Humanitarian Aid',
        description: 'During emergencies and natural disasters, blockchain can help ensure efficient distribution of humanitarian aid and resources. Transparent donation tracking can foster public trust and encourage greater support for relief efforts.'
    },
    {
        src:'../../images/icons/conserv.png',
        title: 'Environmental Conservation',
        description: 'Blockchain technology can play a vital role in monitoring and verifying environmental conservation efforts. It can enable governments to track carbon credits, manage emissions trading, and encourage sustainable practices among industries. '
    }
   
]
const ServiceFive = ({textAlign, serviceStyle,extend}) => {

    return (
        <>
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-6 col-md-6 col-sm-12 col-12" key={i}>
                        <div className={`service ${serviceStyle} ${textAlign} features`}>
                            <div className="content">
                                    <h4 className="title w-600 theme-gradient">{val.title}</h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                </div>
            ))}
        </div>
        <div className="load-box" style={!extend? {display:'none'}:{display:'block'}} >
                            <div className={`service `}>
                                <div className="content">
                                    <h4 className="title w-600 theme-gradient" style={{textAlign:'center'}}>Extended Government Use Cases</h4>
                                    <p className="description b1 color-gray mb--0">Benefit from a wide range of platform features, including a customizable dashboard, advanced analytics, and more, giving you valuable insights into your blockchain operations.</p>
                                    {ExtendedServiceList.map( (val) => (
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
        </>
    )
}
export default ServiceFive;