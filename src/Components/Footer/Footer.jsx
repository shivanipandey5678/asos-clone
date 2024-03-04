import React from "react";
import './Footer.css';
import au from '../Assets/au.png';
import de from '../Assets/de.png';
import dk from '../Assets/dk.png';
import es from '../Assets/es.png';
import fr from '../Assets/fr.png';
import it from '../Assets/it.png';
import india from '../Assets/in.png';
import nl from '../Assets/nl.png';
import pl from '../Assets/pl.png';
import se from '../Assets/se.png';
import us from '../Assets/us.png';


const Footer=()=>{
   return (
    <>
 
    <div className="footer_flex">
        <div  className="footer_flex1">
           <p><b>HELP & INFORMATION</b></p>
           <p>Help</p>
           <p>Track order</p>
           <p>Delivery & returns</p>
           <p>Sitemap</p>
             
        </div>
        <div  className="footer_flex1">
           <p><b>ABOUT ASOS</b></p>
           <p>About us</p>
           <p>Careers at ASOS</p>
           <p>Corporate responsibility</p>
           <p>Investors' site</p>
        </div>
        <div  className="footer_flex1">
           <p><b>MORE FROM ASOS</b></p>
           <p>Mobile and ASOS apps</p>
           <p>ASOS Marketplace</p>
           <p>Gift vouchers</p>
           <p>Black Friday</p>
           <p>ASOS x Thrift+</p>
           <p>Discover the ASOS Credit Card</p>
           <p>Help Improve the ASOS Website</p>
        </div>
        <div  className="footer_flex4">
            <p><b>SHOPPINF FROM:</b></p>
            <div className="footer_flex4_inner">
                <p>You're in </p>
                <img src={india} alt="" />
                <p><b>CHANGE</b></p>

            </div>
            <p>Some of our international sites.</p>
            <div>
                <img src={au} alt="" />
                <img src={de} alt="" />
                <img src={dk} alt="" />
                <img src={es} alt="" />
                <img src={fr} alt="" />
                <img src={it} alt="" />
                <img src={nl} alt="" />
                <img src={pl} alt="" />
                <img src={se} alt="" />
                <img src={us} alt="" />
            </div>
        </div>

    </div>
    <div className="copyright">
       <div>&#169; 2024 ASOS</div>
       <div>Privacy & cookie | Ts&Cs | Accessibilitity</div>
    </div>
    </>
   )
};
export default Footer;
 