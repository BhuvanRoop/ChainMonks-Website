import React , {useEffect, useRef, useState} from 'react';
import emailjs from 'emailjs-com';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}

function ContactForm({props , formStyle}) {
    

    const [ result,showresult ] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_p4x3hv8', 
            'template_jgfr42f', 
            e.target, 
            'user_jrfTH2e0Ely35ZCVFdT9S'
        )
        .then((result) => {
            console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);


    const [active1,setActive1]=useState(false);

    const selected1=document.querySelector('.selectedd1');

    function handleSelect1(e){
        selected1.innerHTML=e.target.innerHTML;
        setActive1(false);
    }


    const [active2,setActive2]=useState(false);

    const selected2=document.querySelector('.selectedd2');

    function handleSelect2(e){
        selected2.innerHTML=e.target.innerHTML;
        setActive2(false);
    }
    const [active3,setActive3]=useState(false);

    const selected3=document.querySelector('.selectedd3');

    function handleSelect3(e){
        selected3.innerHTML=e.target.innerHTML;
        setActive3(false);
    }
    
    
    
    


    return (
        <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
            <div className="form-group">
                <input 
                type="text"
                name="fullname"
                placeholder="Your Name"
                required
                style={{height:'50px'}}
                />
            </div>

            <div className="form-group">
                <input 
                type="email"
                name="email"
                placeholder="Email Address"
                required
                style={{height:'50px'}}
                
                />
            </div>

            <div className="form-group">
                <input 
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                style={{height:'50px'}}

                />
            </div>
            <div className="select-box" >
                                  
                    <div className={`options-container ${active2 && 'active2'}`}>
                        
                        <div className="option" onClick={handleSelect2}>
                            Product Feedback
                        </div>

                        <div className="option" onClick={handleSelect2}>
                            Become a Partner
                        </div>
                        <div className="option" onClick={handleSelect2}>
                            Sales Inquiry
                        </div>
                        <div className="option" onClick={handleSelect2}>
                            Use Case Exploration
                        </div>
                        <div className="option" onClick={handleSelect2}>
                            Product Support
                        </div>
                        <div className="option" onClick={handleSelect2}>
                            
                            Career Opportunities
                        </div>
                        <div className="option" onClick={handleSelect2}>
                            Press & Media Inquiry
                        </div>
                        <div className="option" onClick={handleSelect2}>
                            Event Invitation/Speaking Engagement
                        </div>

                        <div className="option" onClick={handleSelect2}> 
                            Others
                        </div>
                        
                    </div>
                    <div className="selected2" onClick={() =>{ setActive2(!active2);setActive3(false);setActive1(false)}}  >
                        <p className='selectedd2'>Looking for Help in </p>
                        <img className={`arrow ${active2 && 'arrow-active'}`} src="../../images/icons/arrow.png" alt="Arrow"/>
                    </div>
            </div>


            <div className="form-group">
                
                <div className="select-box">
                  
                    <div className={`options-container ${active1 && 'active1'}`}  >
                        
                        <div className="option" onClick={handleSelect1}>
                            Initial research
                        </div>

                        <div className="option" onClick={handleSelect1}>
                            Have a use case
                        </div>

                        <div className="option" onClick={handleSelect1}> 
                            Help needed to go to production
                        </div>
                        <div className="option" onClick={handleSelect1}>
                            Researching protocols
                        </div>
                    </div>
                    <div className="selected1" onClick={() =>{ setActive1(!active1);setActive3(false);setActive2(false)}} >
                        <p className='selectedd1' >Stage of your Blockchain Journey</p>
                        <img className={`arrow ${active1 && 'arrow-active'}`} src="../../images/icons/arrow.png" alt="Arrow"/>
                    </div>
                </div>

                <div className="select-box">
                  
                    <div className={`options-container ${active3 && 'active3'}`} >
                        
                        <div className="option" onClick={handleSelect3}>
                             Have a team
                        </div>

                        <div className="option" onClick={handleSelect3}>
                            I need help with building
                        </div>

                        <div className="option" onClick={handleSelect3}> 
                            I don’t know yet
                        </div>
                        
                    </div>
                    <div className="selected3" onClick={() => {setActive3(!active3);setActive1(false);setActive2(false)}}>
                        <p className='selectedd3'>Blockchain development resources</p>
                        <img className={`arrow ${active3 && 'arrow-active'}`} src="../../images/icons/arrow.png" alt="Arrow"/>
                    </div>
                </div>
                
            </div>

            <div className="form-group">
                <textarea 
                name="message"
                placeholder="Your Message"
                required
                >
                </textarea>
            </div>

            <div className="form-group">
                <button className="btn-default btn-large">Submit</button>
            </div> 

            <div className="form-group">
                {result ? <Result /> : null}
            </div> 
        </form>
    )
}
export default ContactForm;
