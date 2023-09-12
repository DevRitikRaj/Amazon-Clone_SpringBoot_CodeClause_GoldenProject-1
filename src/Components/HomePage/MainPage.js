import React, { Component } from 'react'
import "./mainpage.css";
import AdvertisementOne from './AdvertisementOne/AdvertisementOne';
import AdvertisementFour from './AdvertisementFour/AdvertisementFour';

class MainPage extends Component {
    state = {  } 
    render() { 
        return (

            <div className='mainpage'>
                <div style={{paddingTop: "260px",display: "flex", flexWrap: "wrap"}}>
                    <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementOne />
                    <AdvertisementFour />
                    <AdvertisementFour />
                    <AdvertisementOne />
                    <AdvertisementOne />
                   
                </div>
                
            </div>
        );
    }
}
 
export default MainPage;