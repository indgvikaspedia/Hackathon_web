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
        <div className='bg-img-about'>
            <div className='about-part container'>
                <Row>
                    <Col md={6} lg={6}>
                        <div className="videopart">
                            <video src={Reg_final_video} controls="controls" autoplay="true" style={{}} />
                        </div>
                    </Col>
                    <Col md={6} lg={6}>
                        <div class="aboutContent" style={{ fontSize: 50}}>ABOUT US</div>
                        <div>Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
                    </Col>
                </Row>
            </div>
        </div>
        // <div class=''>
        //     <div class="bg-img-about">
        //         <div class="container-about">
        //             <div className='main'>
        //                 <div class="leftCol" >

        //                     {/* {
        //                         width >= 1000
        //                         ?
        //                         <div class="aboutContent">
        //                         <video src={Reg_final_video} width="300" height="200" controls="controls" autoplay="true" />
        //                     </div>
        //                         :
        //                         <div class="aboutContent"> 
        //                         <video src={Reg_final_video} width="800" height="500" controls="controls" autoplay="true" />
        //                     </div>

        //                     } */}
                            
        //                     <div className="videopart">
        //                         <video src={Reg_final_video} controls="controls" autoplay="true" style={{}} />
        //                     </div>


        //                 </div>
        //                 <div className="rightCol">
        //                     <form>
        //                         {/* {
        //                             width <= 1000
        //                             ?
        //                             <div class="aboutContent">
        //                             <div style={{ fontSize: 50, color:"green" }}>ABOUT US</div>
        //                             <br /><br /><br />
        //                             <div>Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
        //                             </div>
        //                             :
        //                             <div>
        //                             <div style={{ fontSize: 50,  color:"red"  }}>ABOUT US</div>
        //                             <br /><br /><br />
        //                             <div>Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
        //                             </div>
        //                         } */}
        //                         <div class="aboutContent" style={{ fontSize: 50,  }}>ABOUT US</div>
        //                         <br /><br /><br />
        //                         <div>Develops Mobile apps that address problem statements identified by ministry of IT, communication and Innovation Government of Mauritius</div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default AboutUs;
