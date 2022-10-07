
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import MainBG from './MainBG.png';
import Sub_BG from './Sub_BG.png';
import Home_page1 from './Home_page1.jpg';
import AKAM from './AKAM.png'
import './App.css';
import NavBarScreen from './NavBarScreen';
import AboutUs from './AboutUs';
import AwardsScreen from './pages/AwardsScreen';
import useDimensions from "react-cool-dimensions";
import { ResizeObserver } from "@juggle/resize-observer";
import "./shared/css/header.css";
import { useGrace } from 'react-gracefully';
// import images from './images/MainBG.png'
// var offset = 0;
function HeaderScreen() {





  const [offset, setOffset] = useState(0);
  const [widthRR, setWidth] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setOffset(position);
  };

  useEffect(() => {
    const clientWidth = document.getElementById("root").clientWidth;
    console.log("width ---------- ", clientWidth)
    setWidth(clientWidth)
  }, [document.getElementById("root").clientWidth])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const ref = useRef();
  const { width, height, entry, unobserve, observe } = useDimensions(ref, {
    onResize: ({ width, height, entry, unobserve, observe }) => {
      // Triggered whenever the size of the target is changed
      console.log("width ---- ", width);
      console.log("height ---- ", height);


    },
  });



  console.log("off ****** ######### --------------", offset);
  return (

    <div ref={ref}>
      {/* Hi! My width is {width}px and height is {height}px */}
      <div class="bg-img">
        <div class={offset >= 360 ? "header" : "container"}>

          {
            offset >= 360
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
              <div class="topnav" >
                <a href="#about" style={{ fontWeight: 'bold', fontSize: 20, }}>About</a>
                <a href="#rules" style={{ fontWeight: 'bold', fontSize: 20 }}>Rules</a>
                <a href="#stages" style={{ fontWeight: 'bold', fontSize: 20 }}>Stages</a>
                <a href="#challenges" style={{ fontWeight: 'bold', fontSize: 20 }}>Challenges</a>
                <a href="#awards" style={{ fontWeight: 'bold', fontSize: 20 }}>Awards</a>
                <a href="#faq" style={{ fontWeight: 'bold', fontSize: 20 }}>FAQ</a>
                <a href="Login" style={{ marginLeft: 80, fontSize: 20 }}>Login</a>
                <a href="Register" class="bordercss" style={{ fontSize: 20 }}>Sign Up</a>
              </div>
          }

        </div>

      </div>




    </div>
  );
}

export default HeaderScreen;
