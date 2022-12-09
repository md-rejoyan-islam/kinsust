import React, { useEffect, useState } from 'react';
import useTitle from '../../Components/Title/Title';

import AboutUs from './AboutUs/AboutUs';
import Achieved from './AchievedIn2022/Achieved';

import Achievements from './Achievements/Achievements';
import NewsTicker from './NewsTicker/NewsTicker';

import Slider from './Slider/Slider';
import Sponsor from './Sponsor/Sponsor';
import TouchWithUs from './TouchWithUs/TouchWithUs';
import Volunteer from './Volunteer/Volunteer';
import Wings from './Wings/Wings';

const Home = () => {


  useTitle("Home")
    return (
      <div>
        <NewsTicker ></NewsTicker>
        <Slider ></Slider>
        <AboutUs ></AboutUs>
        <Sponsor ></Sponsor>
        <Wings ></Wings>
        <Achieved ></Achieved>
        {/* <div className="divider"></div> */}

        <Achievements ></Achievements>
        <Volunteer ></Volunteer>
        <TouchWithUs ></TouchWithUs>
      </div>
    );
};

export default Home;