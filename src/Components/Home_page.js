import React from "react";
import AboutUs from "../AboutUs";
import HeaderScreen from "../HeaderScreen";
import AwardsScreen from "../pages/AwardsScreen";
import FAQScreen from "../pages/FAQScreen";
import ProbStatement from "../pages/ProbStatement";
import ScopeAndStages from "../pages/ScopeAndStages";

const Home_page=()=>{
    return(
        <div>
            <HeaderScreen/>
            <AboutUs/>
            <ScopeAndStages/>
            <ProbStatement/>
            <AwardsScreen/>
            <FAQScreen/>
        </div>
    )
}

export default Home_page