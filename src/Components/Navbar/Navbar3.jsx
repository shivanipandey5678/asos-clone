import React from 'react';
import './Navbar3.css';


const Navbar3 = () => {
    return (
        <div>
           <ul className='navbar3'>
            <div className='Newin'>
                <li>New in</li>
                <div >
                    <div className='inner_Newin'>
                        
                        <ul>
                            <li><b>NEWS PRODUCTS</b></li>
                            <li>View all</li>
                            <li>Clothing</li>
                            <li><b>New in:Today</b></li>
                            <li><b>New in:Selling Fast</b></li>
                            <li>Dresses</li>
                            <li>Shoes</li>
                            <li>Skirts</li>
                            <li>Swimwear</li>
                            <li>Jumpers & Cardigans</li>
                            <li>Jeans & Trrousers</li>
                            <li>Shorts</li>
                            <li>Face+Body</li>
                            <li>Accessories</li>
                            <li>Sportswear</li>
                           
                        </ul>
                    </div>
                   
                </div>
            </div>





            <div className='Clothing'> <li>Clothing</li></div>
            <div className='Dresses'> <li>Dresses</li></div>
            <div className='Shoes'> <li>Shoes</li></div>
            <div className='Accessories'> <li>Accessories</li></div>
            <div className='Sportswear'><li>Sportswear</li></div>
            <div className='Face'> <li>Face+Body</li></div>
            <div className='Topshop'> <li>Topshop</li></div>
            <div className='Brands'><li>Brands</li></div>
            <div className='Marketplace'><li>Marketplace</li></div>
            <div className='Sales'><li>Sales</li></div>
           </ul>
        </div>
    );
};

export default Navbar3;
