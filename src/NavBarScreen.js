import React from 'react';
import { Nav, NavItem, NavLink, Row, Col, Container, Button, Alert, Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';
// import images from './images/MainBG.png'
// import styles from './../../css/header.css'
import styles from './shared/css/header.css'

function NavBarScreen() {
    return (
        <div>
           

<ul className='ulll'>
  <li className='liii'><a href="#home" style={{color:'white'}}>Home</a></li>
  <li className='liii'><a href="#news" style={{color:'white'}}>News</a></li>
  <li className='liii'><a href="#contact" style={{color:'white'}}>Contact</a></li>
  <li className='liii'><a href="#about" style={{color:'white'}}>About</a></li>
</ul>

        </div>
    );
}

export default NavBarScreen;
