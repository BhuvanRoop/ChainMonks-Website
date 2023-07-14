import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";


const Contact = () => {
    return (
        <>
            <SEO title="Contact || Doob - React Business  Template" />
            <Layout>
                <BreadcrumbOne 
                    title="Contact Info"                
                                       
                />
                <div className="row row--15">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact Phone Number</h4>
                                        <p> +91 916 916 9535</p>
                                        {/* <p><a href="tel:+222 222 222 333">+222 222 222 333</a></p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Email Address</h4>
                                        <p><a href="mailto:info@chainmonks.com">info@chainmonks.com</a></p>
                                        {/* <p><a href="mailto:example@gmail.com">example@gmail.com</a></p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address special">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Our Location</h4>
                                        <p>T-Hub building,Knowledge City Road<br />Hyderabad, Telangana 500081 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                <div className="main-content">
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        // subtitle = "Contact Form"
                                        title = "Get in touch and let us know how we can help you"
                                        description = ""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
            </Layout>
        </>
    )
}
export default Contact;