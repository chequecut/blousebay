import React, { Component } from 'react';
import '../Header/header.css';
import Footer from '../Footer/footer';
// import Carousel from '../Carousel/carousel';
import shipimg from '../images/FreeShippingIcon.jpg';
// import logo from '../images/logo.jpg';

class Headerpage extends Component {
    state = {  }
    render() { 
        return (  
            <div>
            <div>
                {/* <div className ="topheader">
                    <div className="col-md-7 text-right freeship" style={{fontSize: 10, fontFamily: 'Gotham-Book', textAlign:'center' ,color: '#000000', fontWeight: 600}}>
                        <img src={shipimg} /> <span style={{position: 'relative', top: '-10px', fontFamily: 'Gotham-Light', fontSize: 9, color: 'black'}}> FREE INTERNATIONAL SHIPPING! On orders above 100 USD </span><br />
                        <span style={{position: 'relative', top: '-7px', fontFamily: 'Gotham-Light', fontSize: 9, color: 'grey'}}>*valid for shipments outside India ONLY.</span>
                    </div>
                </div> */}
                <div className="nav">
                    <div style={{fontSize: 10, fontFamily: 'Gotham-Book', textAlign:'center' ,color: '#000000', fontWeight: 600}}>
                        <img src={shipimg} /> <span style={{position: 'relative', top: '-10px', fontFamily: 'Gotham-Light', fontSize: 9, color: 'black'}}> FREE INTERNATIONAL SHIPPING! On orders above 100 USD </span><br />
                        <span style={{position: 'relative', top: '-7px', fontFamily: 'Gotham-Light', fontSize: 9, color: 'grey'}}>*valid for shipments outside India ONLY.</span>
                    </div>
                    <div className="nav-header">
                        <div className="nav-title">
                        {/* <img src={logo} style={{height :"20px",width :"30px"}} /> */}
                        abacdefghijklmnopqrstuvwxyz
                        </div>
                    </div>
                     
                    <div className="nav-btn">
                        <label for="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                        </label>
                    </div>
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-links">
                        <a href="#">Shop All  </a>                        
                        <a href="#">Blouse </a> 
                        <a href="#">Blouse </a> 
                        <a href="#">Blouse </a> 
                        <a href="#">Sarees  </a> 
                        <a href="#">Kurtas  </a>                           
                        <a href="#">jewellery  </a>                        
                        <a href="#">Design outfit </a>
                        <a style={{color:'red'}} href="#">Sale </a>     
                    </div>
                </div><br /><br /><br /><br />
            </div> 
            <div className="main-content">
                <div className="main1">
                    <h2>
                        main Heading One
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="main1">
                    <h2>
                        main Heading Two
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="main1">
                    <h2>
                        main Heading Three
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>  <div className="main-content">
                <div className="main1">
                    <h2>
                        main Heading One
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="main1">
                    <h2>
                        main Heading Two
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="main1">
                    <h2>
                        main Heading Three
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>  <div className="main-content">
                <div className="main1">
                    <h2>
                        main Heading One
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="main1">
                    <h2>
                        main Heading Two
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="main1">
                    <h2>
                        main Heading Three
                    </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>  
         </div>            
        );
    }
}
 
export default Headerpage;