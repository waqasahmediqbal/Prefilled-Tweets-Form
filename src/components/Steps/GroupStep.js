import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RadioGroup, ReversedRadioButton } from 'react-radio-buttons';
import './GroupStep.css';

function GroupStep({ formData, setFormData }) {
  const navigate = useNavigate();

  // Load group from localStorage if it exists, else from formData, else default to 'Student21'
  const [group, setGroup] = useState(localStorage.getItem('group') || formData.group || 'Student21');

  useEffect(() => {
    // Whenever group changes, update formData and save group in localStorage
    setFormData({ ...formData, group });
    localStorage.setItem('group', group);
  }, [group]);

  const handleNext = () => {
    navigate('/final-step');
  }
  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  }

  return (
    <div className="username-container">
      <h2 className='text-shine'>"Time to pick your crew! What group are you part of? Your choice might tip the cosmic scales in your favor!"
</h2>
      <RadioGroup 
        horizontal={false} 
        value={group}
        onChange={setGroup}
        className="radio-group">
        <ReversedRadioButton value="Student21" ><p style={{color:"#379AC1",marginTop:'-0.7px'}}>Student21 - Age 21 & Younger</p></ReversedRadioButton>
        <ReversedRadioButton value="Student22"><p style={{color:"#379AC1",marginTop:'-0.7px'}}>Student22 - Age 22 & Older</p></ReversedRadioButton>
        <ReversedRadioButton value="REDU"><p style={{color:"#379AC1",marginTop:'-0.7px'}}>REDU - Team/Family/Friends</p></ReversedRadioButton>
        <ReversedRadioButton value="Community"><p style={{color:"#379AC1",marginTop:'-0.7px'}}>Community - Everyone!</p></ReversedRadioButton>
      </RadioGroup>
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <button  className="button-92" onClick={handleBack}>Back</button>
        <button className="button-92" onClick={handleNext} >Next</button>
      </div>
    </div>
  );
}

export default GroupStep;
