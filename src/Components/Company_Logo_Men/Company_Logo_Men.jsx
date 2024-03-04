import React from 'react';
import './Company_Logo_Men.css';
import company_logo1 from '../Assets/company_logo1.webp';
import companhy_logo2 from '../Assets/company_logo2.png';
import companhy_logo3 from '../Assets/company_logo3.png';
import companhy_logo4 from '../Assets/company_logo4.png';
import companhy_logo5 from '../Assets/company_logo5.png';
import companhy_logo6 from '../Assets/company_logo6.png';










const Company_Men=()=>{
    return (
        <div className='Company'>
            <img src= {company_logo1 } alt="" />
            <img src={companhy_logo2} alt="" className='new_fullt'/>
            <img src={companhy_logo3 } alt="" />
            <img src={companhy_logo4} alt="" />
            <img src={companhy_logo5}alt="" />
            <img src={companhy_logo6} alt="" />
        
        
        </div>
    )
};
export default Company_Men;