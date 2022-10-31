import React from 'react';
import { useEffect, useState } from 'react';
import {
    Nav, NavItem, NavLink, Row, Col, Container, Button, Alert, Video, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Form
} from 'reactstrap';
import AKAM from '../AKAM.png'
// import './App.css';
// import images from './images/MainBG.png'
import firstplace from '../firstplace.png'
import images from '../Images/MainBG.png'
import '../App.css'




function AwardsScreen(props) {
    const [offsetAward, setOffsetAward] = useState(0);
 


    const handleScroll = () => {
        const position = window.pageYOffset;
        setOffsetAward(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    console.log("offfffffffffffffffffffffff awards --------------", offsetAward);

    return (
       
        <div class="bg-img-awards" style={{paddingBottom: 60}}>
            {/* <div class={offsetAward >= 6000 ? "header" : "container"}>
                
                {
                    offsetAward >= 6000
                        ?
                        <div class="topnav" >
                            <img class='img-float' src={AKAM} alt='akam_logo' style={{ width: 100, height: 100 }} />
                            <div class='float-text'>
                                <a href="#about" style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>About</a>
                                <a href="#rules" style={{ fontWeight: 'bold', fontSize: 20 }}>Rules</a>
                                <a href="#stages" style={{ fontWeight: 'bold', fontSize: 20 }}>Stages</a>
                                <a href="#challenges" style={{ fontWeight: 'bold', fontSize: 20 }}>Challenges</a>
                                <a href="#awards" style={{ fontWeight: 'bold', fontSize: 20 }}>Awards</a>
                                <a href="#faq" style={{ fontWeight: 'bold', fontSize: 20 }}>FAQ</a></div>
                            
                        </div>
                        :
                        null
                  
                }

            
            </div> */}
            <div style={{ paddingTop: 20,paddingBottom: 40 }}>
                <p style={{ color: 'white', textAlign: 'center', fontSize: 80, }}>Awards</p>
            </div>
              
            <Container className='awardPart'>
                <div className='card-group' style={{width: '70%',margin: 'auto'}}>
                    <Card className='leftSlide'>
                        <img src={firstplace} class="card-img-top" alt='mobile_logo' />
                        <div class="card-body" style={{height: 350}}>
                            
                        </div>
                    </Card>
                    <Card className='leftSlide'>
                        <img src={firstplace} class="card-img-top" alt='mobile_logo' />
                        <div class="card-body" style={{height: 350}}>
                            
                        </div>
                    </Card>
                    <Card className='leftSlide'>
                        <img src={firstplace} class="card-img-top" alt='mobile_logo' />
                        <div class="card-body" style={{height: 350}}>
                            
                        </div>
                    </Card>
                </div>
            </Container>
        </div>
    );
}

export default AwardsScreen;
