import React, { Component } from 'react'
import "./Navbar.css"

class Navbar extends Component {
    state = {}
    render() {
        return (

            <div>

            <div className='navbar_component'>

                <div className="navbar_logo"></div>

                <div className='navbar_locater'>
                    <div className='navbar_locating'></div>

                    <div className="navbar_location">Banglore</div>


                </div>

                <div className='searchcomponent'>
                    <div>

                        <select className='nav_dropdown'>
                            <option value="">All</option>
                            <option value="">Alexa</option>
                            <option value="">Shoping</option>
                            <option value="">AWS</option>

                        </select>


                    </div>

                    <div>
                        <input type='text' className='navbar_searchbox' />
                    </div>

                    <div className='navbar_searchboxdiv'>
                        <div className='navbar_searchicon'></div>

                    </div>

                </div>


                <div className='navbar_sign'>
                    <div style={{ fontSize: '13px' }}>Hello, Sign In</div>
                    <div style={{ fontWeight: 'bold' }}>Account & Lists</div>
                
                </div>
                <div className='navbar_return'>
                    <div style={{ fontSize: '13px' }}> Return </div>
                    <div style={{ fontWeight: 'bold' }}>& Order </div>
               
                </div>
                <div className='navbar_cart navbar_text'>
                    <div className='cart_image'></div>
                    <div className='cart_item'>0</div>
                    <div className='navbar_text_cart'>Cart</div>
                   

                </div>





            </div>

            <div className='navbar_footer'>
            <div className='navbar_footer_text'>Best Seller</div>
            <div className='navbar_footer_text'>Mobile</div>
            <div className='navbar_footer_text'>Amazon Pay</div>
            <div className='navbar_footer_text'>Fashion</div>
            <div className='navbar_footer_text'>Electronics</div>
            <div className='navbar_footer_text'>New Realse</div>
            <div className='navbar_footer_text'>Customers</div>
            <div className='navbar_footer_text'>Home & Kitchens</div>
            <div className='navbar_footer_text_side'>New Launches from Mobile,Electronics and More</div>
           
            </div>
            


            </div>


        );
    }
}

export default Navbar;