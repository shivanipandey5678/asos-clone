import React from 'react';
import './Modal_Flex_Men.css';
import male_flex_img1 from '../Assets/male_flex_img1.webp';
import male_flex_img2 from '../Assets/male_flex_img2.webp';
const Model_Flex_Men=()=>{
    return (
        <>
        <div className='Model_flex'>
            <div className='Model_flex_box1'>
               <img src={male_flex_img1} alt="model_img" className='Model_flex1'/>
               <h2 class="" >TOPSHOP DENIM</h2>
               <p class="moment__paragraph" >Spring-ready wins</p>
               <button><b>SHOP NOW</b></button>
            </div>
            <div className='Model_flex_box1'>
                <img src={male_flex_img2 } alt="model_img" className='Model_flex2'/>
                <h2 class="" >RECLAIMED VINTAGE</h2>
                <p class="moment__paragraph" >Old-school styling</p>
                <button><b>SHOP NOW</b></button>
            </div>
           
            
        </div>
        <h2 className='TRENDING_BRANDS'>TRENDING BRANDS</h2>
        </>
    )
};
export default Model_Flex_Men;