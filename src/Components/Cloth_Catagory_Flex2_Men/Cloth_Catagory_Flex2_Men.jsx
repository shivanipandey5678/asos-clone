import React from 'react';
import './Cloth_Catagory_Flex2_Men.css';
import denim_men from '../Assets/denim_men.webp';
import spring_men from '../Assets/spring_men.webp';
import couple_cloth from '../Assets/couple_cloth.webp';
import classical_cloth from '../Assets/classical_cloth.webp';














const Flex_Banner_Men=()=>{
    return(
        <div  className='flexbox'>
            <div className='flexbox1'>
                   <img src={denim_men} alt=""  className='feature__img'/>
                   <div class="feature__title">
                        <p><b>NEW DENIM</b></p>
                    </div>
                                <div class="feature__paragraph">
                        <p >Your staples for every season</p>
                    </div>
             </div>
            <div className='flexbox1'>
            <img src={spring_men} alt=""  className='feature__img'/>
                  
            <div class="feature__title">
                        <p ><b>SPRING NEWNESS</b></p>
                    </div>
                                <div class="feature__paragraph">
                        <p >Longer days = lighter layers</p>
                    </div>
            </div>
            <div className='flexbox1'>
            <img src={couple_cloth} alt=""  className='feature__img'/>
            <div class="feature__title">
                        <p ><b>TOMMY JEANS</b></p>
                    </div>
                                <div class="feature__paragraph">
                        <p>Sports Hertiage Collection</p>
                    </div>
            </div>
            <div className='flexbox1'>
            <img src={classical_cloth} alt=""  className='feature__img' />
                 
            <div class="feature__title">
                        <p><b>CLASSIC</b></p>
                    </div>
                                <div class="feature__paragraph">
                        <p >Your timless essentials</p>
                    </div>
            </div>
        </div>
    )
};


export default Flex_Banner_Men;