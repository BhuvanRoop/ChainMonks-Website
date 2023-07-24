import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import PortfolioOne from "./PortfolioOne";
import ServiceTwo from '../service/ServiceTwo';
import ContactForm from '../contact/ContactForm';



const Products = () => {

    return (
        <>
            <SEO title="Portfolio || Doob - React Business  Template" />
            <Layout>
            <div className="slider-area slider-style-1 height-350 bg_image" data-black-overlay="4" style={{backgroundImage: `url(../../images/bg/productsbg.jpg)`}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt--80 text-center">
                                    <h1 className="title theme-gradient">Our Products</h1>
                                    <h6 style={{color:'white'}}>With a team of top technology and finance professionals, ChainMonks envision to bring access to different financial services to all subscribers participating in the network through our partners and ecosystem enablers.</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <BreadcrumbOne 
                    title="Our Products"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="products"
                /> */}
                
                <div className="main-content">
                    <div className="rwt-portfolio-area rn-section-gap">
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-lg-12">
                                        <SectionTitle
                                            textAlign = "text-center"
                                            radiusRounded = ""
                                            subtitle = "Portfolio Default"
                                            title = "You can customize everything!"
                                            description = ""
                                        />
                                </div>
                            </div> */}
                            <ServiceTwo 
                            cardStyle = "card-style-1"
                            textAlign = "text-start"
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12" >
                        <SectionTitle
                            textAlign = "text-center"
                            radiusRounded = ""
                            title = "Reach Out to Us"
                        />
                       
                    </div>
                    <div className='form' >
                        <ContactForm  />
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default Products;
