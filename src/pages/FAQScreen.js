import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardText, CardImg, Row, Col } from 'reactstrap';
import AKAM from '../AKAM.png'
import Pencil from '../Pencil.png'

import '../App.css';


const FAQScreen = ({ direction, ...args }) => {

    const [fix, setFix] = useState(false);
    const [faqFirst, setFaqFirst] = useState(false);
    const toggle = () => setFaqFirst(prevState => !prevState);

    const [faqSec, setFaqSec] = useState(false);
    const toggleSec = () => setFaqSec(prevState => !prevState);

    const [faqThird, setFaqThird] = useState(false);
    const toggleThird = () => setFaqThird(prevState => !prevState);

    const [faqFourth, setFaqFourth] = useState(false);
    const toggleFourth = () => setFaqFourth(prevState => !prevState);

    const [faqFifth, setFaqFifth] = useState(false);
    const toggleFifth = () => setFaqFifth(prevState => !prevState);

    const [faqSixth, setFaqSixth] = useState(false);
    const toggleSixth = () => setFaqSixth(prevState => !prevState);

    const [faqSeventh, setFaqSeventh] = useState(false);
    const toggleSeventh = () => setFaqSeventh(prevState => !prevState);

    const [faqEighth, setFaqEighth] = useState(false);
    const toggleEighth = () => setFaqEighth(prevState => !prevState);


  
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


    console.log("offfffffffffffffffffffffff qqqqqqqqqqq --------------", offsetAward);




    return (
        <div class='bg-img-faq' >
            <div style={{}}>
            <div style={{ paddingTop: 30 }}>
                <p style={{ color: 'white', textAlign: 'center', fontSize: 50, }}>FAQ</p>
            </div>

            <Container style={{ width: "80%" }} className="faqContainer">
                <Row>
                    <Col md={6}>
                    <CardBody>
                        <a class='faqDiv'>
                            <img class='img-float' src={Pencil} alt='Pencil-logo' style={{ width: 30, height: 30, paddingTop: 20 }} />
                            <CardTitle onClick={toggle} style={{ color: 'white', paddingTop: 20, fontSize: 20,  }}>How does registration works?</CardTitle>
                        </a>
                        {
                        faqFirst
                            ?
                            <p class='faqContent'>
                                <CardText style={{ color: 'white', width: '15rem', }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            </p>
                            :
                            null
                        }
                    </CardBody>
                    </Col>
                    <Col md={6}>
                    <CardBody>
                        <a class="faqDiv">
                            <img class='img-float' src={Pencil} alt='Pencil-logo' style={{ width: 30, height: 30, paddingTop: 20 }} />

                            <CardTitle onClick={toggleSec} style={{ color: 'white', paddingTop: 20, fontSize: 20, }}>Is participation free of charge?</CardTitle>
                        </a>
                        {
                            faqSec
                                ?
                                <p class='faqContent'>
                                    <CardText style={{ color: 'white', width: '15rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </p>
                                :
                                null
                        }
                    </CardBody>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <CardBody>
                        <a class="faqDiv">
                            <img class='img-float' src={Pencil} alt='Pencil-logo' style={{ width: 30, height: 30, paddingTop: 20 }} />

                            <CardTitle onClick={toggleThird} style={{ color: 'white', paddingTop: 20, fontSize: 20, }}>What if I don't know coding?</CardTitle>
                        </a>
                        {
                            faqThird
                                ?
                                <p class='faqContent'>
                                    <CardText style={{ color: 'white', width: '15rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </p>
                                :
                                null
                        }

                    </CardBody>
                    </Col>
                    <Col md={6}>
                    <CardBody>
                        <a class="faqDiv">
                            <img class='img-float' src={Pencil} alt='Pencil-logo' style={{ width: 30, height: 30, paddingTop: 20 }} />

                            <CardTitle onClick={toggleFourth} style={{ color: 'white', paddingTop: 20, fontSize: 20, }}>What do I do if I do not have a Team?</CardTitle>
                        </a>
                        {
                            faqFourth
                                ?
                                <p class='faqContent'>
                                    <CardText style={{ color: 'white', width: '15rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </p>
                                :
                                null
                        }
                    </CardBody>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <CardBody>
                        <a class="faqDiv">
                            <img class='img-float' src={Pencil} alt='Pencil-logo' style={{ width: 30, height: 30, paddingTop: 20 }} />

                            <CardTitle onClick={toggleFifth} style={{ color: 'white', paddingTop: 20, fontSize: 20, }}>Will there be any events during Hackathon?</CardTitle>
                        </a>
                        {
                            faqFifth
                                ?
                                <p class='faqContent'>
                                    <CardText style={{ color: 'white', width: '15rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </p>
                                :
                                null
                        }

                    </CardBody>
                    </Col>
                    <Col md={6}>
                    <CardBody>
                        <a class="faqDiv">
                            <img class='img-float' src={Pencil} alt='Pencil-logo' style={{ width: 30, height: 30, paddingTop: 20 }} />

                            <CardTitle onClick={toggleSixth} style={{ color: 'white', paddingTop: 20, fontSize: 20, }}>Can I work with other peoples?</CardTitle>
                        </a>
                        {
                            faqSixth
                                ?
                                <p class='faqContent'>
                                    <CardText style={{ color: 'white', width: '15rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </p>
                                :
                                null
                        }

                    </CardBody>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <CardBody>
                        <a class="faqDiv">
                            <img class='img-float' src={Pencil} alt='Pencil-logo' style={{ width: 30, height: 30, paddingTop: 20 }} />

                            <CardTitle onClick={toggleSeventh} style={{ color: 'white', paddingTop: 20, fontSize: 20, }}>How will my code be judged?</CardTitle>
                        </a>
                        {
                            faqSeventh
                                ?
                                <p class='faqContent'>
                                    <CardText style={{ color: 'white', width: '15rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </p>
                                :
                                null
                        }

                    </CardBody>
                    </Col>
                    <Col md={6}>
                    <CardBody>
                        <a class="faqDiv" >
                            <img class='img-float' src={Pencil} alt='Pencil-logo' style={{ width: 30, height: 30, paddingTop: 20 }} />

                            <CardTitle onClick={toggleEighth} style={{ color: 'white', paddingTop: 20, fontSize: 20, }}>Do I need to be resident to participate?</CardTitle>
                        </a>
                        {
                            faqEighth
                                ?
                                <p class='faqContent'>
                                    <CardText style={{ color: 'white', width: '15rem' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                </p>
                                :
                                null
                        }

                    </CardBody>
                    </Col>
                </Row>
            </Container>
            <div>
            </div>
            </div>
        </div>
    );
}

export default FAQScreen;
