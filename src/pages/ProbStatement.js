import React from 'react';
import { useEffect, useState } from 'react';
import {
    Nav, NavItem, NavLink, Row, Col, Container, Button, Alert, Video, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Form
} from 'reactstrap';
import AKAM from '../AKAM.png'
import AKAM1 from '../AKAM1.gif'
import arrow from '../arrow.png'
// import './App.css';
// import images from './images/MainBG.png'
import firstplace from '../firstplace.png'
import About_us_slide1 from '../About_us_slide1.png'
import images from '../Images/MainBG.png'
import '../App.css'




function ProbStatement(props) {
    const [offsetAward, setOffsetAward] = useState(0);
    // useEffect(() => {
    //     window.onscroll = () => {
    //       setOffsetAward(window.pageYOffset);
    //     };
    //   }, []);


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


    console.log("offfffffffffffffffffffffff probstatement --------------", offsetAward);

    return (

        <div class="bg-img-prob">

            {/* <div class={offsetAward >= 4750 ? "header" : "container"}>
               
                {
                    offsetAward >= 4750
                        ?
                        <div class="topnav" >
                            <img class='img-float' src={AKAM1} alt='akam_logo' style={{ width: 100, height: 100 }} />
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

            <div style={{ paddingTop: 50 }}>
                <p style={{ color: 'black', textAlign: 'center', fontSize: 80, }}>Problem Statements</p>
            </div>
            <div className='challenge_part' style={{position: 'relative'}}>
                <div className='challenge_tag' style={{width: '80%',margin: '40px auto'}}>
                    <span>tag1</span><span>tag2</span><span>tag3</span>
                </div>
                <div className='card-group' style={{width: '80%',margin: 'auto'}}>
                    <Card className='leftSlide'>
                        <img src={About_us_slide1} class="card-img-top" alt='mobile_logo' />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div className='text-center'>
                                <Button>START NOW</Button>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <img src={About_us_slide1} class="card-img-top" alt='mobile_logo' />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div className='text-center'>
                                <Button>START NOW</Button>
                            </div>
                        </div>
                    </Card>
                    <Card className='rightSlide'>
                        <img src={About_us_slide1} class="card-img-top" alt='mobile_logo' />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            <div className='text-center'>
                                <Button>START NOW</Button>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='challenge_arrow'>
                    <span className='arrow leftArrow'></span>
                    <span className='arrow rightArrow'></span>
                </div>
            </div>
            <div style={{ paddingTop: 50 ,display: 'none'}}>
                <Container style={{ marginLeft: "16%",position:'relative' }}>

                    
                    <table class='' style={{ borderSpacing: 50, }}>
                        <thread>
                            <tr style={{}}>
                                <th>
                                    <img class='img-float-prob' src={arrow} alt='akam_logo' style={{ width: 100, height: 100 }} />
                                </th>
                                <th class='gradProb transProbState1' >
                                    <Card style={{ width: '18rem', height: 500, }}>

                                        <CardBody>
                                            <CardTitle style={{ color: 'white', paddingTop: 20, fontSize: 31 }}>Awards for Shortlisted</CardTitle>
                                            {/* <CardSubtitle style={{ color: 'white' }}>Card subtitle</CardSubtitle> */}
                                            {/* <CardText style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                                            <div style={{ paddingTop: 300 }}>
                                                <Button style={{ backgroundColor: '#61b33b', fontWeight: 'bold', fontSize: 25, color: 'white' }}> START NOW </Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </th>
                                <th class='gradProb' style={{ marginLeft: 30, }} >
                                    <Card style={{ width: '18rem', height: 500, }}>

                                        <CardBody>
                                            <CardTitle style={{ color: 'white', paddingTop: 20, fontSize: 31, }}>Awards for Winner's</CardTitle>
                                            {/* <CardSubtitle style={{ color: 'white' }}>Card subtitle</CardSubtitle> */}
                                            {/* <CardText style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                                            <div style={{ paddingTop: 300, }}>
                                                <Button style={{ backgroundColor: '#61b33b', fontWeight: 'bold', fontSize: 25, color: 'white' }}> START NOW </Button>
                                            </div>

                                        </CardBody>
                                    </Card>
                                </th>
                                <th class='gradProb transProbState2' style={{ marginLeft: 30 }} >
                                    <Card style={{ width: '18rem', height: 500, }}>

                                        <CardBody>
                                            <CardTitle style={{ color: 'white', paddingTop: 20, fontSize: 31, }}>Awards for Winner's</CardTitle>
                                            {/* <CardSubtitle style={{ color: 'white' }}>Card subtitle</CardSubtitle> */}
                                            {/* <CardText style={{ color: 'white' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                                            <div style={{ paddingTop: 300 }}>
                                                <Button style={{ backgroundColor: '#61b33b', fontWeight: 'bold', fontSize: 25, color: 'white' }}> START NOW </Button>
                                            </div>

                                        </CardBody>
                                    </Card>
                                </th>
                                <th>
                                    <img class='img-float-prob2' src={arrow} alt='akam_logo' style={{ width: 100, height: 100 }} />
                                </th>

                            </tr>
                        </thread>
                    </table>
                    {/* </div> */}
                </Container>

            </div>
        </div>
    );
}

export default ProbStatement;
