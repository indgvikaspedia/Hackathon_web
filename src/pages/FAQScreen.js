import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
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
             <div class={offsetAward >= 7400 ? "header" : "container"}>
                {/* <div class="container"> */}
                {
                    offsetAward >= 7400
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

            <div style={{}}>
            <div style={{ paddingTop: 30 }}>
                <p style={{ color: 'white', textAlign: 'center', fontSize: 50, }}>FAQ</p>
            </div>
            <div>
                <Container style={{ marginLeft: "20%" }}>
                {/* <Container style={{  }}> */}

                    <table >
                        <thread>
                            <tr>
                                <tr>
                          
                                    <th  className='cardView'>
                                        <Card  style={{}}>

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

                                        </Card>
                                    </th>

                                    <th>
                                        <Card style={{}}>


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
                                        </Card>
                                    </th>
                                </tr>

                                <tr>

                                    <th>
                                        <Card style={{}}>

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
                                        </Card>
                                    </th>
                                    <th>
                                        <Card style={{}}>

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
                                        </Card>
                                    </th>
                                </tr>

                                <tr>
                                    <th>
                                        <Card style={{}}>

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
                                        </Card>
                                    </th>
                                    <th>
                                        <Card style={{}}>

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
                                        </Card>
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        <Card style={{}}>

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
                                        </Card>
                                    </th>
                                    <th>
                                        <Card style={{}}>

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
                                        </Card>
                                    </th>
                                </tr>
                            </tr>
                        </thread>
                    </table>
                </Container>
            </div>
            </div>
        </div>
    );
}

export default FAQScreen;
