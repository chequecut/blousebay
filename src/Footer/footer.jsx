import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import '../Footer/footer.css';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className = "footer2">
                <Container>
                    <Row>
                        <Col sm={4}>
                        {/* One of three columns */}
                        <div class="w3-address1" style={{lineHeight :"1.5em"}} ><br />
                            <h3>Address</h3>
                            <p>No.998, 2nd Floor,
                                BTM Stage -4, </p>
                                <p>Vijaya Bank Layout, 
                                1st Block,</p>
                                <p>Layout BTM 4th Stage</p>
                                <p>Karnataka -560076</p> <br />
						</div>
                        </Col>
                        <Col sm={4}>
                        
                        </Col>
                        <Col sm={4}>
                            <div className="footer-social-icons"><br />
                                <h4 className="_14">Follow us on</h4>
                                <ul className="social-icons">
                                    <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                                    <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                                    <li><a href="" className="social-icon"> <i className="fa fa-rss"></i></a></li>
                                    <li><a href="" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
                                    <li><a href="" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="" className="social-icon"> <i className="fa fa-google-plus"></i></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
                    {/* <div style = {{border : "2px solid black",position:"relative"}}></div> */}
                </div>
                <div className="footer1">
                    <div style = {{textAlign : "center"}} > Copy right@2018vc </div>                
                </div>
            </div>
         );
    }
}
 
export default Footer;