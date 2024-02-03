import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Abhishek Jagadish</span> 👋
      <br />
      A Software Engineer from Melbourne, Australia.
    </h1>
  ),
  2: (
    <InfoBox
      text="With 2 years of experience in the software industry and picked up a few skills along the way"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Worked on multiple projects along the way. Interested ?"
      link="/projects"
      btnText="Have A Look"
    />
  ),
  4: (
    <InfoBox
      text="Would you like to get in touch ?"
      link="/contact"
      btnText="Let's Chat"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
