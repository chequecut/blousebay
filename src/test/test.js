import React, { Component } from 'react';
import '../test/testStyle.css';
import img1  from '../images/img_mtnpeople.jpg';
import img2 from '../images/bg_smartphones.jpg';
import img3 from '../images/bg_iphone.jpg';
class Testpage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* code */}
               
                    <nav className="navbar navbar-trans navbar-fixed-top" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapsible">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Brand</a>
                            </div>
                            <div className="navbar-collapse collapse" id="navbar-collapsible">
                            <ul className="nav navbar-nav navbar-left">
                                <li><a href="#section1">What</a></li>
                                <li><a href="#section2">When</a></li>
                                <li><a href="#section3">How</a></li>
                                <li><a href="#section4">Four</a></li>
                                <li><a href="#section5">Five</a></li>
                                <li><a href="#section6">Why</a></li>
                                <li><a href="#section7">Who</a></li>
                                <li>&nbsp;</li>
                            </ul>
                            <form className="navbar-form">
                                <div className="form-group" style={{"display":"inline"}}>
                                <div className="input-group"> 
                                    <div className="input-group-btn">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-chevron-down"></span></button>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Category 1</a></li>
                                        <li><a href="#">Category 2</a></li>
                                        <li><a href="#">Category 3</a></li>
                                        <li><a href="#">Category 4</a></li>
                                        <li><a href="#">Category 5</a></li> 
                                    </ul>
                                    </div>
                                    <input type="text" className="form-control" placeholder="What are searching for?" />
                                    <span className="input-group-addon"><span className="glyphicon glyphicon-search"></span> </span>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </nav>

                    <section className="container-fluid" id="section1">
                        <h1 className="text-center v-center">Sectionalize.</h1>
                            
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="row">
                                    <div className="col-sm-10 col-sm-offset-2 text-center"><h3>Robust</h3><p>There is other content and snippets of details or features that can be placed here..</p><i className="fa fa-cog fa-5x"></i></div>
                                    </div>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <div className="row">
                                    <div className="col-sm-10 col-sm-offset-1 text-center"><h3>Simple</h3><p>You may also want to create content that compells users to scroll down more..</p><i className="fa fa-user fa-5x"></i></div>
                                    </div>
                                </div>
                                <div className="col-sm-4 text-center">
                                    <div className="row">
                                    <div className="col-sm-10 text-center"><h3>Clean</h3><p>In the first 30 seconds of a user's visit to your site they decide if they're going to stay..</p><i className="fa fa-mobile fa-5x"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row"><br /></div>
                        </div>
                    </section>

                    <section className="container-fluid" id="section2">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 text-center">
                                <h1>What is Bootstrap?</h1>
                                <br />
                                <p className="lead">Bootstrap is a free collection of tools for creating websites and web applications. It contains HTML and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. It is the No.1 project on GitHub with 65,000+ stars and 23,800 forks (as of March 2014) [1] and has been used by NASA and MSNBC, among many others..</p>
                                <br /> 
                                {/* <i style={{"font-size":"120px"}} className="fa fa-camera fa-5x" /> */}
                                <p>Big 'ol Camera Icon</p>
                            </div>
                        </div>
                    </section>

                    <section className="container-fluid" id="section3">
                        <h1 className="text-center">Bootstrap is Responsive</h1>
                        <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                                <h3 className="text-center">Vertical scrolling has become a popular and lasting trend in Web design.</h3>
                                <div className="row">
                                <div className="col-xs-4 col-xs-offset-1">Some brand-tacular designs even have home page content that is taller that 12,000 pixels. That's a lotta content.</div>
                                <div className="col-xs-2"></div>
                                <div className="col-xs-4 text-right">Anyhoo, this is just some random blurb of text, and Bootply.com is a playground and code editor for Bootstrap.</div>
                                </div>
                                <p className="text-center">
                                <img src={img1} className="img-responsive center-block "/>
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="container-fluid" id="section4">
                        <h2 className="text-center">Change this Content. Change the world.</h2>
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <img src={img2} className="img-responsive center-block "/>
                                <p className="text-center">Images will scale down proportionately as browser width narrows.</p>
                            </div>
                        </div>
                    </section>

                    <section className="container-fluid" id="section5">
                        <div className="col-sm-10 col-sm-offset-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-4 col-xs-12">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item active">
                                                <h2 className="list-group-item-heading">Basic</h2>
                                                <h6>Free to get started</h6>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <p className="list-group-item-text">Option 100 - more about this</p>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <p className="list-group-item-text">Option 2 - this is more about this</p>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <p className="list-group-item-text">Option 3 GB</p>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <p className="list-group-item-text">Option 4</p>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <p className="list-group-item-text">Feature</p>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <p className="list-group-item-text">Feature</p>
                                            </a>
                                            <a href="#" className="list-group-item">
                                                <button className="btn btn-primary btn-lg btn-block">Get Started</button>
                                            </a>
                                        </div>
                                    </div>
                                
                                <div className="col-sm-4 col-xs-12">
                                        <div className="list-group text-center">
                                        <a href="#" className="list-group-item active">
                                            <h2 className="list-group-item-heading">Better</h2>
                                            <h6>Most popular plan</h6>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Option 200 - more about this</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Option 2 - this is more about this</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Option 5 GB</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Option 6</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Feature</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Feature</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <button className="btn btn-default btn-lg btn-block">$10 per month</button>
                                        </a>
                                        </div>
                                </div>
                                
                                <div className="col-sm-4 col-xs-12">
                                        <div className="list-group text-right">
                                        <a href="#" className="list-group-item active">
                                            <h2 className="list-group-item-heading">Best</h2>
                                            <h6>For enterprise grade</h6>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Option 100 - more about this</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Option 2 - this is more about this</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Option 8 GB</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Option 10</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Unlimited</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <p className="list-group-item-text">Unlimited</p>
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <button className="btn btn-default btn-lg btn-block">$20 per month</button>
                                        </a>
                                        </div>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="container-fluid" id="section6">
                        <h2 className="text-center">Do you see what I mean?</h2>
                        <p className="text-center lead">Add some compelling information here</p>
                        <img src={img3} className="img-responsive center-block "/>                        
                    </section>

                    <section className="container" id="section7">
                        <h1 className="text-center">Social Media Fascination</h1>
                        <div className="row">
                            <div className="col-sm-1 col-sm-offset-2 col-xs-4 text-center">
                            <i className="fa fa-github fa-4x"></i>
                            </div>
                            <div className="col-sm-1 col-xs-4 text-center">
                            <i className="fa fa-foursquare fa-4x"></i>
                            </div>
                            <div className="col-sm-1 col-xs-4 text-center">
                                <i className="fa fa-facebook fa-4x"></i>
                            </div>
                            <div className="col-sm-1 col-xs-4 text-center">
                            <i className="fa fa-pinterest fa-4x"></i>
                            </div>
                            <div className="col-sm-1 col-xs-4 text-center">
                            <i className="fa fa-google-plus fa-4x"></i>
                            </div>
                            <div className="col-sm-1 col-xs-4 text-center">
                            <i className="fa fa-twitter fa-4x"></i>
                            </div>
                            <div className="col-sm-1 col-xs-4 text-center">
                            <i className="fa fa-dribbble fa-4x"></i>
                            </div>
                            <div className="col-sm-1 col-xs-4 text-center">
                            <i className="fa fa-instagram fa-4x"></i>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <br /><br />
                            <p>
                                <a href="http://www.bootstrapzero.com/bootstrap-template/sectionalize">Get the code for this template.</a>
                            </p>
                            </div>
                        </div>
                    </section>

                    <footer id="footer">
                        <div className="container">
                            <div className="row">    
                            <div className="col-xs-6 col-sm-6 col-md-3 column">          
                                <h4>Information</h4>
                                <ul className="nav">
                                    <li><a href="about-us.html">Products</a></li>
                                    <li><a href="about-us.html">Services</a></li>
                                    <li><a href="about-us.html">Benefits</a></li>
                                    <li><a href="elements.html">Developers</a></li>
                                </ul> 
                                </div>
                            <div className="col-xs-6 col-md-3 column">          
                                <h4>Follow Us</h4>
                                <ul className="nav">
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Google+</a></li>
                                    <li><a href="#">Pinterest</a></li>
                                </ul> 
                            </div>
                            <div className="col-xs-6 col-md-3 column">          
                                <h4>Contact Us</h4>
                                <ul className="nav">
                                    <li><a href="#">Email</a></li>
                                    <li><a href="#">Headquarters</a></li>
                                    <li><a href="#">Management</a></li>
                                    <li><a href="#">Support</a></li>
                                </ul> 
                            </div>
                            <div className="col-xs-6 col-md-3 column">          
                                <h4>Customer Service</h4>
                                <ul className="nav">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Delivery Information</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms &amp; Conditions</a></li>
                                </ul> 
                            </div>
                            </div>
                        </div>
                    </footer>
      
                            

                {/* code */}
            </div>
         );
    }
}
 
export default Testpage;