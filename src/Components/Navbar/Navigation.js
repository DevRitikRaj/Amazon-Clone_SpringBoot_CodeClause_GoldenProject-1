import React, { Component } from 'react'
import "./Navbar.css"
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    static contextType=CartContext;

    constructor(props){
        super(props);
        this.state = { }
    }

    render() {

        let {image,size,increment}=this.context;


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
                    <div className='cart_item'>{size}</div>
                    <div className='navbar_text_cart'>Cart</div>
                   

                </div>





            </div>

            <div className='navbar_footer'>
            <div className='navbar_footer_text'>Best Seller</div>
            {/* <link to '/'> */}
            {/* <Link */}
            <Link to="/display">
            <div className='navbar_footer_text'>Mobile</div>
            </Link>


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