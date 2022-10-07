// import logo from './logo.svg';

import AboutUs from './AboutUs';
import NavbarHeader from './Components__/NavbarHeader';
import HeaderScreen from './HeaderScreen';
// import NavBarScreen from './NavBarScreen';
import AwardsScreen from './pages/AwardsScreen';
import FAQScreen from './pages/FAQScreen';
import ProbStatement from './pages/ProbStatement';
import ScopeAndStages from './pages/ScopeAndStages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home_page from './Components/Home_page';
import Login from './Components__/Login';
import UserDashboard from './Components__/UserDashboard';
import Logout from './Components__/Logout';
import UserProfile from './Components__/UserProfile';
import RegisterUser from './Components__/RegisterUser';

// import images from './images/MainBG.png'

function App() {

  // const [fix, setFix] = useState(true);

  // //   useEffect(() => {
  // //       setFixed()
  // //   })
  // //   function setFixed() {
  // //       if (window.scrollY >= 392) {
  // //           setFix(true)
  // //       } else {
  // //           setFix(false)
  // //       }
  // //   }


  // const [scroll, setScroll] = useState(0)

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY < 100
  //     console.log("scrollCheck --- ", scrollCheck)
  //     if (scrollCheck !== scroll) {

  //       setScroll(scrollCheck)
  //       console.log('scroll in if condition --- ', scroll)
  //     }
  //   })
  // })


  // const [offset, setOffset] = useState(0);

  // useEffect(() => {
  //   window.onscroll = () => {
  //     setOffset(window.pageYOffset);
  //   };
  // }, []);

  // console.log("offfffffffffffffffffffffff--------------", offset);


  return (
    <div>
      {/* {
       fix == true && offset == 0
       ?
       <>
       <HeaderScreen/>
       <AboutUs />
      <AwardsScreen />
      </>
       :
       fix == true && offset >=350
       ?
       <AboutUs/>
       :
       fix == true && offset >= 1400
       ?
       <AwardsScreen/>
       :
       null
     } */}

      {/* <HeaderScreen />
      <AboutUs />
      <ScopeAndStages />
      <ProbStatement />
      <AwardsScreen />
      <FAQScreen /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home_page />}/>
            <Route path="Register" element={<RegisterUser />} />
            <Route path="Login" element={<Login/>} />
            <Route path="UserProfile" element={<UserDashboard/>} />
            <Route path="Logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
