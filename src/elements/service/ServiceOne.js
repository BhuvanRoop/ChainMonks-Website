import React from 'react';
import { FiActivity, FiCast, FiMap } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        // icon: <FiActivity />,
        title: 'Tokenization',
        description: 'Our platform empowers you to tokenize assets and create unique digital representations of real-world assets, enabling frictionless transfer and enhanced liquidity. '
    },
    {
        // icon: <FiCast />,
        title: 'Multi-Blockchain Support',
        description: 'Harness the power of multiple blockchains, including Ethereum (EVM based), Polygon, Algorand, and Hyperledger, to meet your specific business needs and preferences.'
    },
    {
        // icon: <FiMap />,
        title: 'Marketplace for Tokens/NFTs',
        description: 'Unlock the potential of digital assets with our marketplace platform, supporting popular token standards like ERC-721, ERC-20, and ERC-1155.'
    },
    {
        // icon: <FiActivity />,
        title: 'Enterprise Ready',
        description: 'Our platform is built with robust security and scalability, making it an ideal choice for enterprise-level implementations.        '
    },
    {
        // icon: <FiCast />,
        title: 'Gasless Transactions',
        description: 'Say goodbye to gas fees with our innovative approach to gasless transactions, improving efficiency and reducing costs.        '
    },
    {
        // icon: <FiMap />,
        title: 'Wallet Support',
        description: 'Choose between custodial and non-custodial wallets, providing flexibility and security to both you and your users.'
    },
   
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                            <div className={`service ${serviceStyle} ${textAlign} features`}>
                                <div className="content">
                                    <h4 className="title w-600 theme-gradient">{ val.title}</h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                    </div> 
                                       
                </>
                               
            ))}

        </div>
        
    )
}
export default ServiceOne;