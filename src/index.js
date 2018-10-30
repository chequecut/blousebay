import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Homeview from './Home/home';
import Testpage from './test/test';
import  Headerpage from '../src/Header/header';
import Navgation from './Menu/navgationMenu';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


ReactDOM.render(<Headerpage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
