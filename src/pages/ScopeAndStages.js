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
import Bottom_Shape from "../Bottom_Shape.png"
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

            <div>

                <div>
                    <div style={{width:'75%',margin:'auto',paddingTop: 60}}>
                        <p style={{ color: '#3DCAB5', textAlign: 'center', fontSize: 44, fontWeight: 'normal' }}>SCOPE AND TARGET AUDIENCE</p>
                        <p style={{ color: 'white', textAlign: 'center', fontSize: 18, textAlign: 'center' }}>Developes Mobile app that address problem statements identified by Ministry of IT, Communication and Innovation, Government of Mauritius.</p>
                    </div>

                    <div class="d-flex justify-content-center align-items-center" style={{marginTop: 120}}>
                        <div class="scope1">
                            <img class='scope-img' src={Mobile} alt='mobile_logo' />
                        </div>
                        <div class="scope2">
                            <p style={{ color: '#3DCAB5', fontSize: 40, fontWeight: 'normal',margin: 0 ,lineHeight: .7}}>Mode of</p>
                            <small style={{ color: '#3DCAB5', fontSize: 26, fontWeight: 'normal' }}>Registration</small>
                        </div>
                        <div class="scope3">
                        <img class='scope-moa' src={Mode_of_Application} alt='mobile_logo' />
                        </div>
                    </div>
                    <p style={{ color: '#3DCAB5', textAlign: 'center', fontSize: 42, paddingTop: '0%', fontWeight: 'normal' }}>Target audience</p>

                    <div class="d-flex justify-content-center align-items-center">
                        <div className='targetAudience'>
                            <img src={Target_Audience} alt='mobile_logo' style={{ height: 120 }} />
                        </div>
                        <div>
                            <p style={{margin: 0,color: '#fff',fontSize: 24}}>Age Group : 20-30 years</p>
                            <p style={{marginBottom: 0,color: '#fff',marginLeft: 130,fontSize: 24}}>in Teams 4 persons each</p>
                        </div>
                    </div>
                    <div style={{ color: 'white', textAlign: 'center',fontSize: 16}}>(Eligibility criteria : (Education/work status etc.) For participation to be evolved)</div>
                    <div class="" style={{}}>

                        {/* <div style={{ color: 'white', paddingTop: '30px', textAlign: 'center', paddingLeft: '8%', paddingTop: '5%' }}></div> */}
                        <div style={{ paddingTop: '10%' }}>
                            <hr />
                        </div>

                        <div className='text-center' style={{padding: 40}}>
                            <span className='AppathonBtn'>STAGES OF APPATHON</span>
                        </div>

                        <div className='stage1 container' style={{paddingTop: 200,paddingBottom:50}}>
                            <Row>
                                <Col md={6}>
                                    <div className='stage-content' style={{paddingRight:24}}>
                                        <div style={{ color: 'orange',fontSize: 20,marginBottom: 20,textAlign:'right' }}>31st JULY - 07TH AUGUST</div>
                                        <div className='d-flex justify-content-end'>
                                            <div style={{textAlign:'right',paddingRight:12}}>
                                                <p>Title number 1</p>
                                                <p>Title 2</p>
                                            </div>
                                            <div>
                                                <img src={Registration_of_Teams} alt='mobile_logo' style={{ height: 70 }} />
                                            </div>
                                        </div>
                                        <div className='text-right' style={{color:'#fff'}}>
                                            <span>description line 1</span>
                                            <span>description line 2</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='stage2 container' style={{paddingBottom:50}}>
                            <Row>
                                <Col md={6} className="offset-md-6">
                                    <div className='stage-content' style={{paddingLeft:24}}>
                                        <div style={{ color: 'orange',fontSize: 20,marginBottom: 20,textAlign:'left' }}>31st JULY - 07TH AUGUST</div>
                                        <div className='d-flex justify-content-start'>
                                            
                                            <div>
                                                <img src={Prototype_Submission} alt='mobile_logo' style={{ height: 70 }} />
                                            </div>
                                            <div style={{textAlign:'left',paddingLeft:12}}>
                                                <p>Title number 1</p>
                                                <p>Title 2</p>
                                            </div>
                                        </div>
                                        <div className='text-left' style={{color:'#fff'}}>
                                            <span>description line 1</span>
                                            <span>description line 2</span>
                                            <span>description line 3</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='stage3 container'>
                            <Row>
                                <Col md={6} className="offset-md-3">
                                    <div className='stage-content'>
                                        <div style={{ color: 'orange',fontSize: 20,marginBottom: 20,textAlign:'center' }}>31st JULY - 07TH AUGUST</div>
                                        <div className='d-flex justify-content-center'>
                                            
                                            <div>
                                                <img src={Final_App_Submission} alt='mobile_logo' style={{ height: 70 }} />
                                            </div>
                                            <div style={{textAlign:'left',paddingLeft:12}}>
                                                <p>Title number 1</p>
                                                <p>Title 2</p>
                                            </div>
                                        </div>
                                        <div className='text-center' style={{color:'#fff'}}>
                                            <span>description line 1</span>
                                            <span>description line 2</span>
                                            <span>description line 3</span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='text-center'>
                            <img src={Bottom_Shape} alt='mobile_logo' style={{ height: 200 }} />
                        </div>
                        <div className='d-flex justify-content-center' style={{color: 'white'}}>
                            <div className='timer'>
                                <h1>00 :</h1>
                            </div>
                            <div className='timer'>
                                <h1>00 :</h1>
                            </div>
                            <div className='timer'>
                                <h1>00 :</h1>
                            </div>
                            <div className='timer'>
                                <h1>00</h1>
                            </div>
                        </div>

                        {/* <div style={{ paddingLeft: '35%', paddingTop: '2%' }}>
                            <Card class="grad-scope" style={{ width: '25rem', height: 80, }}>

                                <CardBody>
                                    <CardTitle style={{ color: '#3DCAB5', paddingTop: 20, fontSize: 31 }}>STAGES OF APPATHON</CardTitle>
                                </CardBody>
                                
                            </Card>
                        </div> */}
                        {/* <div class="stages">
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

                        </div> */}

                        <div className='text-center' style={{marginTop:40}}>
                            <span className='registerBtn'>
                                REGISTER HERE
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScopeAndStages;
