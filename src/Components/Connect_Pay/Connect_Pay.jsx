import React from "react";
import './Connect_Pay.css'
import visa from '../Assets/visa.png';
import  mastarcard from '../Assets/master2.png';
import paypal from '../Assets/paypal2.png';
import american_express from '../Assets/american exprss.png';
import visa_electronic from '../Assets/visa electronic.png'


import  facebook from '../Assets/facebook.svg';
import insta from '../Assets/square-instagram.svg';
import snapchat from '../Assets/square-snapchat.svg';



const Connect=()=>{
   return (
   <>
     <hr/>
     <div className="Connect_card">
     <div className="connect">
       <img src={facebook} alt="" />
       <img src={insta} alt="" />
       <img src={snapchat} alt="" />
     </div>
     <div className="pay">
        <img src={visa} alt="" />
        <img src={mastarcard} alt="" />
        <img src={paypal}alt="" />
        <img src={american_express} alt="" />
        <img src={visa_electronic} alt="" />
     </div>
     </div>
      
   </>)
};
export default Connect;