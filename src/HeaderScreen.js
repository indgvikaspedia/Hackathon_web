
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

    <div ref={ref} class={offset >= 110 ? "fixed-header topHeader" : "fixed-header normalHeader"}>
      {/* Hi! My width is {width}px and height is {height}px */}
        <div class={offset >= 110 ? "container" : "container normalNavBar"}>
          {
            offset >= 110
              ?
              <div class="topnav">
                <img class='img-float' src={AKAM} alt='akam_logo' style={{ width: 100, height: 100 }} />
                <div class='float-text'>
                  <a href="#about">About</a>
                  <a href="#rules">Rules</a>
                  <a href="#stages">Stages</a>
                  <a href="#challenges">Challenges</a>
                  <a href="#awards">Awards</a>
                  <a href="#faq">FAQ</a></div>

              </div>
              :
              <div class="topnav">
                <a href="#about">About</a>
                <a href="#rules">Rules</a>
                <a href="#stages">Stages</a>
                <a href="#challenges">Challenges</a>
                <a href="#awards">Awards</a>
                <a href="#faq">FAQ</a>
                <a href="Login" style={{ marginLeft: 40 }}>Login</a>
                <a href="Register" class="bordercss">Sign Up</a>
              </div>
          }
        </div>
    </div>
  );
}

export default HeaderScreen;
