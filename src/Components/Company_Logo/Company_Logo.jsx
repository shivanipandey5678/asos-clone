import React from 'react';
import './Company_Logo.css';
import company_logo_woman1 from '../Assets/company_logo_woman1.webp';
import new_fullt_logo from '../Assets/new_fullt_logo2.png';
import topshop_logo from '../Assets/topshop_logo.png';
import render from '../Assets/render.png';
import collusion from '../Assets/company_logo_woman3.webp';
import Wednesday  from '../Assets/company_logo_woman5.webp';










const Company=()=>{
    return (
        <div className='Company'>
            <img src= {company_logo_woman1 } alt="" />
            <img src={new_fullt_logo} alt="" className='new_fullt'/>
            <img src={topshop_logo} alt="" />
            <img src={render} alt="" />
            <img src={collusion}alt="" />
            <img src={Wednesday} alt="" />
        
        
        </div>
    )
};
export default Company;