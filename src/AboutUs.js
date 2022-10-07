import React,{ useRef }  from 'react';
import { useEffect, useState } from 'react';
import { Nav, NavItem, NavLink, Row, Col, Container, Button, Alert, Video } from 'reactstrap';
import { Link } from 'react-router-dom';
import BG_Shape from './BG_Shape.png'
import About_us_slide1 from './About_us_slide1.png'
import AKAM from './AKAM.png'
import Reg_final_video from './Reg_final_video.mp4'
import './App.css';
import useDimensions from "react-cool-dimensions";
import './shared/css/responsive.css';
function AboutUs() {

    const [fix, setFix] = useState(false);

    useEffect(() => {
        setFixed()
    })
    function setFixed() {
        if (window.scrollY >= 392) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    const [offsetVal, setOffsetVal] = useState(0);

    // useEffect(() => {
    //   window.onscroll = () => {
    //     setOffsetVal(window.pageYOffset);
    //   };
    // }, []);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setOffsetVal(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    console.log("offfffffffffffffffffffffff about us --------------", offsetVal);



    const ref = useRef();
const { width, height, entry, unobserve, observe } = useDimensions(ref, {
  onResize: ({ width, height, entry, unobserve, observe }) => {
    // Triggered whenever the size of the target is changed
    console.log("width ---- ",width);
    console.log("height ---- ",height);

  },
});
    return (
        <div class=''>

            <div class={offsetVal >= 1350 ? "header" : "container"}>
                {/* <div class="container"> */}

                {
                    offsetVal >= 1350
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
            {/* {
                width >= 1000
                ?
                <div class="bg-img-about">
                <div class="container-about">
                    <div className='main'>
                        <div class="leftCol" >
                            <div>
                                <video src={Reg_final_video} width="800" height="500" controls="controls" autoplay="true" />
                            </div>
                        </div>
                        <div className="rightCol">
                            <form>
                                <div style={{ fontSize: 50,color:'red' }}>ABOUT US</div>
                                <br /><br /><br />
                                <div >Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
                :
                <div class="bg-img-about">
                <div class="container-about">
                    <div className='main'>
                        <div class="leftCol" >
                            <div>
                                <video src={Reg_final_video} width="800" height="500" controls="controls" autoplay="true" />
                            </div>
                        </div>
                        <div className="rightCol">
                            <form>
                                <div style={{ fontSize: 50 }}>ABOUT US</div>
                                <br /><br /><br />
                                <div>Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            } */}
            <div class="bg-img-about">
                <div class="container-about">
                    <div className='main'>
                        <div class="leftCol" >

                            {/* {
                                width >= 1000
                                ?
                                <div class="aboutContent">
                                <video src={Reg_final_video} width="300" height="200" controls="controls" autoplay="true" />
                            </div>
                                :
                                <div class="aboutContent"> 
                                <video src={Reg_final_video} width="800" height="500" controls="controls" autoplay="true" />
                            </div>

                            } */}
                            
                            <div className="videopart">
                                <video src={Reg_final_video} controls="controls" autoplay="true" style={{}} />
                            </div>


                        </div>
                        <div className="rightCol">
                            <form>
                                {/* {
                                    width <= 1000
                                    ?
                                    <div class="aboutContent">
                                    <div style={{ fontSize: 50, color:"green" }}>ABOUT US</div>
                                    <br /><br /><br />
                                    <div>Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
                                    </div>
                                    :
                                    <div>
                                    <div style={{ fontSize: 50,  color:"red"  }}>ABOUT US</div>
                                    <br /><br /><br />
                                    <div>Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
                                    </div>
                                } */}
                                <div class="aboutContent" style={{ fontSize: 50,  }}>ABOUT US</div>
                                <br /><br /><br />
                                <div>Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
