import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UsernameStep.css'
import logo from './../../images/logo.jpg';
import Title from '../Title/Title';

const StartStep = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/step-one');
  };

  return (
    <div className='username-container'>
      <img style={{width:"60px",objectFit:'contain',mixBlendMode:'color-burn'}} src={logo} alt='image'/>
      <Title/>
      <h3 style={{color:"#379AC1"}}>"Hey superstar! Buckle up for an adventure into the Twitterverse. Click 'Start' and let's rocket launch into this escapade!"</h3>
      <button className='button-92' role="button" onClick={handleStart}>Start</button>
    </div>
  );
};

export default StartStep;
