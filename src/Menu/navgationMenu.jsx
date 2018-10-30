import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom';
import Blouse from  './blouses';
import Sarees from './sarees';
import Shopall from './shopAll';
import Jewellery from './jewellery';
import Designooutfit from './designoutfit';
import Kurtas from './kurtas';
import Sale from './sale'; 

class Navgation extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Router>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li>
                        <Link to="/home">Blouse</Link>
                        </li> &nbsp;&nbsp;&nbsp;&nbsp;
                        <li>
                        <Link to="/banking-page">Sarees</Link>
                        </li> &nbsp;&nbsp;&nbsp;&nbsp;       
                        <li>
                        <Link to="/credit-card">Shop All</Link>
                        </li> &nbsp;&nbsp;&nbsp;&nbsp; 
                        <li>
                        <Link to="/investment">Jewellery</Link>
                        </li> &nbsp;&nbsp;&nbsp;&nbsp;
                        <li>
                        <Link to="/personal-loan">Designo Out Fit</Link>
                        </li> &nbsp;&nbsp;&nbsp;&nbsp;  
                        <li>
                        <Link to="/home-loan">Kurtas</Link>
                        </li> &nbsp;&nbsp;&nbsp;&nbsp; 
                        <li>
                        <Link to="/insurance">Sale</Link>
                        </li> &nbsp;&nbsp;&nbsp;&nbsp;                 
                    </ul>

                    <hr />

                    <Route exact path="/home" component={Blouse} />
                    <Route exact path="/banking-page" component={Sarees} />
                    <Route exact path="/credit-card" component={Shopall} />
                    <Route exact path="/investment" component={Jewellery} />
                    <Route exact path="/personal-loan" component={Designooutfit} />
                    <Route exact path="/home-loan" component={Kurtas} />
                    <Route exact path="/insurance" component={Sale} />
                

                    {/* <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" value={this.state.value} onChange={this.handleChange}  aria-label="Search" />
                        <button className="btn btn-outline-gray my-2 my-sm-0" type="submit" value="submit" >Search</button>
                    </form> */}
                    </div>
                </Router>
            </div>
         );
    }
}
 
export default Navgation;