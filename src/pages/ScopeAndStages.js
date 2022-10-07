import React from 'react';
import { useEffect, useState } from 'react';
import {
    Nav, NavItem, NavLink, Row, Col, Container, Button, Alert, Video, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Form
} from 'reactstrap';
import AKAM from '../AKAM.png'
import Mobile from '../Mobile.png'
import Pencil from '../Pencil.png'
import Mode_of_Application from '../Mode_of_Application.png'
import Target_Audience from '../Target_Audience.png'
import Stages_Lines from '../Stages_Lines.png'
// import Smart_Object from '../Smart_Object.png'
import Register_Here_Caption_shape from '../Register_Here_Caption_shape.png'
import Registration_of_Teams from '../Registration_of_Teams.png'
import Stages_Lines_mirror from '../Stages_Lines_mirror.png'
import Prototype_Submission from '../Prototype_Submission.png'
import Final_App_Submission from '../Final_App_Submission.png'
import Smart_Object from "../Smart_Object.png"
// import './App.css';
// import images from './images/MainBG.png'
import firstplace from '../firstplace.png'
import images from '../Images/MainBG.png'
import '../App.css'




const ScopeAndStages = (props) => {
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


    console.log("offfffffffffffffffffffffff scope and stages --------------", offsetAward);

    return (

        <div class="bg-img-scope" >
            <div class={offsetAward >= 2650 ? "header" : "container"}>
                {/* <div class="container"> */}
                {
                    offsetAward >= 2650
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

                <div style={{ position: 'absolute', paddingLeft: '15%' }}>
                    <p style={{ color: '#3DCAB5', textAlign: 'center', fontSize: 50, fontWeight: 'bold' }}>SCOPE</p>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: 20, textAlign: 'center' }}>Developes Mobile app that address problem statements identified by Ministry of IT, Communication and Innovation, Government of Mauritius.</p>

                    <p style={{ color: '#3DCAB5', textAlign: 'center', fontSize: 50, paddingTop: '16%', fontWeight: 'bold' }}>TARGET AUDIENCE</p>

                    <div class="" style={{}}>
                        <table>
                            <thread>
                                <tr>
                                    <th style={{ position: 'absolute', paddingLeft: '24%' }}>
                                        <div>
                                            <div style={{ color: 'white', fontSize: 30, textAlign: 'left', }}>MODE OF</div>
                                            <div style={{ color: 'white', fontSize: 22, textAlign: 'left', }}>Participation</div>
                                        </div>
                                    </th>
                                    <th style={{}}>
                                        <img class='img-arrow' src={Mobile} alt='mobile_logo' style={{ width: 100, height: 80, }} />

                                    </th>
                                    <th style={{}}>
                                        <img class='img-icon' src={Mode_of_Application} alt='mobile_logo' style={{ width: 100, height: 80, }} />


                                    </th>
                                </tr>
                            </thread>
                        </table>

                        <table style={{}}>
                            <thread>
                                <tr>
                                    <th style={{ position: 'absolute', paddingLeft: '20%' }}>
                                        <img class='img-icon' src={Target_Audience} alt='mobile_logo' style={{ width: 100, height: 80, }} />
                                    </th>

                                </tr>
                                <th style={{}}>

                                    <div class='img-arrow' style={{ color: 'white', paddingTop: 20 }}>Age Group : </div>
                                </th>
                                <th style={{}}>

                                    <div class='img-icon2' style={{ color: 'white', paddingTop: 20 }}>20-30 years in Teams 4 persons each</div>
                                </th>
                            </thread>
                        </table>

                        <div style={{ color: 'white', paddingTop: '30px', textAlign: 'center', paddingLeft: '8%', paddingTop: '5%' }}>(Eligibility criteria : (Education/work status etc.) For participation to be evolved)</div>

                        {/* <div style={{ color: 'white', paddingTop: '30px', textAlign: 'center', paddingLeft: '8%', paddingTop: '5%' }}></div> */}
                        <div style={{ paddingTop: '18%' }}>
                            <hr />
                        </div>


                        <div style={{ paddingLeft: '35%', paddingTop: '2%' }}>
                            <Card class="grad-scope" style={{ width: '25rem', height: 80, }}>

                                <CardBody>
                                    <CardTitle style={{ color: '#3DCAB5', paddingTop: 20, fontSize: 31 }}>STAGES OF APPATHON</CardTitle>
                                </CardBody>
                                
                            </Card>
                        </div>
                        <div class="stages">
                            <div style={{ paddingTop: '3%' }}>

                                <th style={{ paddingLeft: '280px' }}>
                                    <div style={{ color: 'orange' }}>31st JULY - 07TH AUGUST</div>
                                    <table>
                                        <thread>
                                            <tr>

                                                <th style={{ position: 'absolute', }}>
                                                    <div>
                                                        <div style={{ color: 'white', }}>SCREENING &</div>
                                                        <div style={{ color: 'white', }}>SHORTLISTED</div>
                                                    </div>
                                                </th>
                                                <th style={{}}>
                                                    <img src={Registration_of_Teams} alt='mobile_logo' style={{ width: 50, height: 40, paddingLeft: '130px' }} />

                                                </th>
                                            </tr>
                                        </thread>
                                    </table>
                                    {/* <div style={{ color: 'white' }}>(eligibility criteria)</div> */}

                                </th>
                                <th style={{ paddingLeft: '380px' }}>
                                    <div style={{ color: 'orange' }}>15th AUGUST - 17th AUGUST</div>
                                    <table>
                                        <thread>
                                            <tr>

                                                <th style={{ position: 'absolute', }}>
                                                    <div>
                                                        <div style={{ color: 'white', }}>SHORTLISTING OF</div>
                                                        <div style={{ color: 'white', }}>APP PROTOTYPES</div>
                                                    </div>
                                                </th>
                                                <th style={{}}>
                                                    <img src={Registration_of_Teams} alt='mobile_logo' style={{ width: 50, height: 40, paddingLeft: '150px' }} />

                                                </th>
                                            </tr>
                                        </thread>
                                    </table>


                                </th>


                            </div>


                            <table>
                                <thread>
                                    <tr>
                                        <th>
                                            <div style={{ color: 'orange' }}>15Th JULY - 30TH JULY</div>
                                            <table>
                                                <thread>
                                                    <tr>

                                                        <th style={{ position: 'absolute', }}>
                                                            <div>
                                                                <div style={{ color: 'white', }}>REGISTRATION</div>
                                                                <div style={{ color: 'white', }}>OF TEAMS</div>
                                                            </div>
                                                        </th>
                                                        <th style={{}}>
                                                            <img src={Registration_of_Teams} alt='mobile_logo' style={{ width: 50, height: 40, paddingLeft: '130px' }} />

                                                        </th>
                                                    </tr>
                                                </thread>
                                            </table>
                                            <div style={{ color: 'white' }}>(eligibility criteria)</div>

                                        </th>
                                        <th>
                                            <img src={Stages_Lines} alt='mobile_logo' style={{ width: 80, height: 180, }} />
                                        </th>
                                        <th>
                                            <img src={Stages_Lines_mirror} alt='mobile_logo2' style={{ width: 80, height: 180, paddingLeft: '200px' }} />
                                        </th>
                                        <th>
                                            <div style={{ color: 'orange' }}>08Th AUGUST - 15TH AUGUST</div>
                                            <table>
                                                <thread>
                                                    <tr>

                                                        <th style={{ position: 'absolute', }}>
                                                            <div>
                                                                <div style={{ color: 'white', }}>PROTOTYPE</div>
                                                                <div style={{ color: 'white', }}>SUBMISSION</div>
                                                            </div>
                                                        </th>
                                                        <th style={{}}>
                                                            <img src={Prototype_Submission} alt='mobile_logo' style={{ width: 50, height: 40, paddingLeft: '130px' }} />

                                                        </th>
                                                    </tr>
                                                </thread>
                                            </table>


                                        </th>
                                        <th>
                                            <img src={Stages_Lines} alt='mobile_logo' style={{ width: 80, height: 180, }} />
                                        </th>
                                        <th>
                                            <img src={Stages_Lines_mirror} alt='mobile_logo2' style={{ width: 80, height: 180, paddingLeft: '200px' }} />
                                        </th>
                                        <th>
                                            <div style={{ color: 'orange' }}>18Th AUGUST - 20TH AUGUST</div>
                                            <table>
                                                <thread>
                                                    <tr>

                                                        <th style={{ position: 'absolute', }}>
                                                            <div>
                                                                <div style={{ color: 'white', }}>FINAL APP</div>
                                                                <div style={{ color: 'white', }}>SUBMISSION</div>
                                                            </div>
                                                        </th>
                                                        <th style={{}}>
                                                            <img src={Final_App_Submission} alt='mobile_logo' style={{ width: 50, height: 40, paddingLeft: '130px' }} />

                                                        </th>
                                                    </tr>
                                                </thread>
                                            </table>


                                        </th>


                                    </tr>


                                </thread>

                            </table>

                        </div>

                        <div style={{ paddingRight: "15%", left: "200px", top: '-30px', position: 'relative', display: 'initial', }}>
                            <img src={Smart_Object} alt='mobile_logo' style={{ width: 300, height: 80, paddingTop: '15%' }} ></img>
                            <span style={{ color: "#3DCAB5", paddingRight: "5%", left: "-230px", top: '-30px', position: 'relative', display: 'initial', fontSize: '25px' }}>REGISTER HERE</span>
                        </div>
                    </div>

                </div>
                <div style={{paddingRight: "15%", left: "200px", top: '-30px', display: 'initial',position: 'absolute', paddingTop: '18%', }}>
                    <img class='img-scope' src={Mobile} alt='mobile_logo' style={{ width: "500px", height: "500px" }} />
                </div>

            </div>








        </div>
    );
}

export default ScopeAndStages;
