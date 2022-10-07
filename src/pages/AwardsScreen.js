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
       
        <div class="bg-img-awards">
            <div class={offsetAward >= 6000 ? "header" : "container"}>
                {/* <div class="container"> */}
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
                            {/* <a href="#login" style={{ marginLeft: 80, fontSize: 20 }}>Login</a>
                                 <a href="#signup" class="bordercss" style={{ fontSize: 20 }}>Sign Up</a> */}
                        </div>
                        :
                        null
                  
                }

            
            </div>
            <div style={{ paddingTop: 80 }}>
                <p style={{ color: 'white', textAlign: 'center', fontSize: 80, }}>Awards</p>
            </div>
              
              
            <Container style={{marginLeft:"30%"}}>
            {/* <div  > */}
                <table style={{borderSpacing:50,}}>
                    <thread>
                        <tr style={{}}>
                            <th class='grad' >
                                <Card style={{ width: '18rem', height: 500, }}>
                                  
                                    <CardBody>
                                        <CardTitle style={{ color: 'white' ,paddingTop:20, fontSize:31}}>Awards for Shortlisted</CardTitle>
                                        {/* <CardSubtitle style={{ color: 'white' }}>Card subtitle</CardSubtitle> */}
                                        {/* <CardText style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}

                                    </CardBody>
                                </Card>
                            </th>
                            <th class='grad' style={{marginLeft:30}} >
                                <Card style={{ width: '18rem', height: 500, }}>
                                   
                                    <CardBody>
                                        <CardTitle style={{ color: 'white',paddingTop:20 ,fontSize:31,}}>Awards for Winner's</CardTitle>
                                        {/* <CardSubtitle style={{ color: 'white' }}>Card subtitle</CardSubtitle> */}
                                        {/* <CardText style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}

                                    </CardBody>
                                </Card>
                            </th>
                        </tr>
                    </thread>
                </table>
                {/* </div> */}
            </Container>
           
           
        </div>
    );
}

export default AwardsScreen;
