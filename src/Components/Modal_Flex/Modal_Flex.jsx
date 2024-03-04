import React from 'react';
import './Modal_Flex.css';
import Model1 from '../Assets/flex2_women1.webp';
import Model2 from '../Assets/flex2_women2.jpg';

const Model_Flex=()=>{
    return (
        <>
        <div className='Model_flex'>
            <div className='Model_flex_box1'>
               <img src={Model1} alt="model_img" className='Model_flex1'/>
               <h2 class="" >TOPSHOP DENIM</h2>
               <p class="moment__paragraph" >Spring-ready wins</p>
               <button><b>SHOP NOW</b></button>
            </div>
            <div className='Model_flex_box1'>
                <img src={Model2} alt="model_img" className='Model_flex2'/>
                <h2 class="" >RECLAIMED VINTAGE</h2>
                <p class="moment__paragraph" >Old-school styling</p>
                <button><b>SHOP NOW</b></button>
            </div>
           
            
        </div>
        <h2 className='TRENDING_BRANDS'>TRENDING BRANDS</h2>
        </>
    )
};
export default Model_Flex;