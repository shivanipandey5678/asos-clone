import React from "react";
import Allroutes from "../../Components/Allroutes";
import Navbar1 from "../../Components/Navbar/Navbar1";
import Navbar2 from "../../Components/Navbar/Navbar2";
import Navbar3 from "../../Components/Navbar/Navbar3";
import Navbar4 from "../../Components/Navbar/Navbar4";
import Offer_Header from "../../Components/Offer_Header/Offer_Header";
import Offer2_Banner from "../../Components/Offer2_Banner/Offer2_Banner";
import Cloth_Catagory_Flex from "../../Components/Cloth_Catagory_Flex/Cloth_Catagory_Flex";
import Model_Flex from "../../Components/Modal_Flex/Modal_Flex";
import Company from "../../Components/Company_Logo/Company_Logo";
import Connect from "../../Components/Connect_Pay/Connect_Pay";
import Footer from "../../Components/Footer/Footer";
import App_Promo from '../../Components/App_Promo/App_Promo'



const Women=()=>{
  return(<>
  <Allroutes/>
    < Navbar1/>
    <Navbar2/>
    <Navbar3/>
    <Navbar4/>
    <Offer_Header/>
   
    <Cloth_Catagory_Flex/>
    < Offer2_Banner/>
    <App_Promo/>
    <Model_Flex/>
    <Company/>
     <Connect/>
     <Footer/>
  
  
  
  </>)
};
export default Women;
