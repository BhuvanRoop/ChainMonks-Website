import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <>
        <div className="col-lg-3 col-md-6 col-4">
             
        </div>
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/about-us">About</Link>
            </li>
            
            <li><Link to="/consulting-&-services">Consulting & Services</Link></li>

            <li className="has-droupdown"><Link to="/government">Government</Link>
                
            </li>

            <li className="has-droupdown"><Link to="/products">Products & Solutions</Link>
                
            </li>

            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
        </>
    )
}
export default Nav;
