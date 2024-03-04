import React from "react";
import Allroutes from "../Allroutes";
import Navbar1 from "../Navbar/Navbar1";
import Navbar2 from "../Navbar/Navbar2";
import Navbar3 from "../Navbar/Navbar3";
import Navbar4 from "../Navbar/Navbar4";
import Offer_Header from "../Offer_Header/Offer_Header";
import Offer2_Banner from "../Offer2_Banner/Offer2_Banner";
import Cloth_Catagory_Flex2_Men from '../Cloth_Catagory_Flex2_Men/Cloth_Catagory_Flex2_Men'
import Model_Flex_Men from "../Modal_Flex_Men/Modal_Flex_Men";
import Company_Men from "../Company_Logo_Men/Company_Logo_Men";
import Connect from "../Connect_Pay/Connect_Pay";
import Footer from "../Footer/Footer";
import App_Promo from '../App_Promo/App_Promo'
const Men=()=>{
    return(<>
    <Allroutes/>
      < Navbar1/>
      <Navbar2/>
      <Navbar3/>
      <Navbar4/>
      <Offer_Header/>
      <Cloth_Catagory_Flex2_Men/>
      < Offer2_Banner/>
      <App_Promo/>
   
      <Model_Flex_Men/>
      <Company_Men/>
       <Connect/>
       <Footer/>
    
    
    
    </>)
  };
  export default Men;
  