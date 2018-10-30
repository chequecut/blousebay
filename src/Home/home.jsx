import React, { Component } from 'react';
import '../Home/homeStyle.css';
import shipimg from '../images/FreeShippingIcon.jpg';

class Homeview extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
           <div className = "nav" style={{fontSize: 10, fontFamily: 'Gotham-Book', textAlign:'center',color: '#000000', fontWeight: 600}}>
                <img src={shipimg} /> <span style={{position: 'relative', top: '-10px', fontFamily: 'Gotham-Light', fontSize: 9, color: 'black'}}> FREE INTERNATIONAL SHIPPING! On orders above 100 USD </span><br />
                <span style={{position: 'relative', top: '-7px', fontFamily: 'Gotham-Light', fontSize: 9, color: 'grey'}}>*valid for shipments outside India ONLY.</span>
            </div>
            <div className="top-bar">                
                <div className="logo">Logo</div>
                <div className="menu">    
                    <ul>
                         <li><a href="#">Blouse </a>  </li>
                         <li><a href="#">Sarees  </a>  </li>
                         <li><a href="#">Kurtas  </a>  </li>
                         <li><a href="#">Shop All  </a>  </li>   
                         <li><a href="#">jewellery  </a>  </li>   
                         <li><a href="#">Sale </a>  </li>   
                         <li><a href="#">Design outfit </a>  </li>   
                    </ul>
                </div>    
            </div>
            <div className ="banner">
                <div className="banner-text">
                    <div className="banner-text-items">
                        <h2> Text Headings</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                             sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
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
            </div>
            <div className="contact">
                <div className="contact-text">
                    <div className="contact-items">
                        <h2>Contact Us</h2>
                        <input type="text" placeholder="Your Name ...." />
                        <input type="text" placeholder="Your Email ...." />
                        <textarea cols="20" rows="20" placeholder="Enter Your Message">
                        </textarea>
                        <a href="a">Submit</a>
                    </div>
                </div>
            </div>
            <div>
                <div className = "navFooterBackToTop">
                    <div className="navLeftFooter nav-sprite-v1" id="navFooter"><a href="#nav-top" id="navBackToTop" />
                        <div className="navFooterBackToTop"><span className="navFooterBackToTopText">Back to top</span>
                    </div>
              
                <div style = {{"textAlign":"center"}} >
                    Copyright@2018vamCC
                </div>

                 <div className="navFooterLinkCol navAccessibility">
                 <div className="navFooterColHead">Connect with Us</div><ul>
                     <li className="nav_first"><a href="http://www.amazon.in/gp/redirect.html/ref=footer_fb?location=http://www.facebook.com/AmazonIN&amp;token=2075D5EAC7BB214089728E2183FD391706D41E94&amp;6" className="nav_a">Facebook</a></li>
                     <li><a href="http://www.amazon.in/gp/redirect.html/ref=footer_twitter?location=http://twitter.com/AmazonIN&amp;token=A309DFBFCB1E37A808FF531934855DC817F130B6&amp;6" className="nav_a">Twitter</a></li>
                     <li className="nav_last"><a href="http://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&amp;token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&amp;source=standards" className="nav_a">Instagram</a></li></ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}
 
export default Homeview;