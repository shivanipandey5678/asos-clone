import React from 'react';
import './Navbar2.css';
import logo from '../Assets/logo.svg';
import person from '../Assets/person.png';
import heart from '../Assets/heart.png';
import bag from '../Assets/bag.png';
import { Link } from 'react-router-dom';




const Navbar2 = () => {
   
    return (
        <>
        <div className='navbar2'>
            <div id='navbar_flex1'>
                <img src={logo} alt="" id='logo'/>
               <Link to={'/women'}><p ><b>WOMEN</b></p></Link>
               <Link to={'/men'}><p ><b>MEN</b></p></Link>
            </div>
            <div className='search-container' >
               <input type="text" placeholder="Search for items and brands" id='search'/>
              
                {/* <input type="text" placeholder='Search for items and brands ' />
                <img src={search} alt="" /> */}
            </div>
            <div  id='navbar_flex3'>
                <div>
                <img src={person} alt="" className='account'/>
                
                  
                </div>
               <div>
               <img src={heart} alt="" />
               </div>
               <div>
               <img src={bag} alt="" />
               </div>
               
            </div>
            
          
           
        </div>
        
        </>
        
    );
};

export default Navbar2;