import React from 'react';
import './Cloth_Catagory_Flex.css';
import img1 from '../Assets/flex_woman_hero.webp';
import img2 from '../Assets/flex_woman_hero2.webp';
import img3 from '../Assets/flex_woman_hero3.webp';
import img4 from '../Assets/flex_woman_hero4.webp';
const Flex_Banner=()=>{
    return(
        <div  className='flexbox'>
            <div className='flexbox1'>
                   <img src={img1} alt=""  className='feature__img'/>
                   <div class="feature__title">
                        <p><b>NEW DENIM</b></p>
                    </div>
                                <div class="feature__paragraph">
                        <p >Your staples for every season</p>
                    </div>
             </div>
            <div className='flexbox1'>
            <img src={img2} alt=""  className='feature__img'/>
                  
            <div class="feature__title">
                        <p ><b>FRESH FOOTWEAR</b></p>
                    </div>
                                <div class="feature__paragraph">
                        <p >Ft. boots, sneaks + more!</p>
                    </div>
            </div>
            <div className='flexbox1'>
            <img src={img3} alt=""  className='feature__img'/>
            <div class="feature__title">
                        <p ><b>HOT RN: CARDIES</b></p>
                    </div>
                                <div class="feature__paragraph">
                        <p>The trending layer</p>
                    </div>
            </div>
            <div className='flexbox1'>
            <img src={img4} alt=""  className='feature__img' />
                 
            <div class="feature__title">
                        <p><b>MARIO BADESCU</b></p>
                    </div>
                                <div class="feature__paragraph">
                        <p >Supercharge your skincare</p>
                    </div>
            </div>
        </div>
    )
};


export default Flex_Banner;