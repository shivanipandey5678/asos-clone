import React from 'react';
import './Navbar1.css';
import india from '../Assets/in.png';


const Navbar1 = () => {
    return (
        <div className='navbar1'>
         
            <p id='nav2_flex1'>Marketplace</p>
            <p id='nav2_flex2'>Help & FAQs</p>
          <div className="nav_logo">
             <img src={india} alt="indialogo" />
           </div>
        </div>
    );
};

export default Navbar1;
