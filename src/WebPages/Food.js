import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import './style.css';

export default function Food() {
    const navigate = useNavigate();

    const navigateToHousing = () => {
        navigate('/Housing')
      }
    
    const [meatCals, setMeatCals] = useState(0)

    const getMeatChange = (event) => {
        setMeatCals(event.target.value)
    }
  
    const [grainCals, setgrainCals] = useState(0)
  
    const getGrainChange = (event) => {
        setgrainCals(event.target.value)
    }
  
    const [vegCals, setvegCals] = useState(0)
  
    const getVegChange = (event) => {
        setvegCals(event.target.value)
    }
  
    const [dairyCals, setdairyCals] = useState(0)
  
    const getDairyChange = (event) => {
        setdairyCals(event.target.value)
    }
      
    localStorage.setItem("meat_cals", meatCals)
    localStorage.setItem("grain_cals", grainCals)
    localStorage.setItem("veg_cals", vegCals)
    localStorage.setItem("dairy_cals", dairyCals)
  

    return (
      <> 
      <div className='Title'>
        Food
        <button className='Btn' onClick={navigateToHousing}>Enter Housing Information</button>
      </div>
        <div className='food_inputs'>
          <div className='meat'>Please enter the amount of meat you eat (in grams) on a typical day.
            <input className='input' onChange={getMeatChange} type='number'placeholder='0'></input>
          </div>
          <div className='veggies'>Please enter the amount of veggies you eat (in grams) on a typical day.
            <input className='input' onChange={getVegChange} type='number'placeholder='0'></input>
          </div>
          <div className='grains'>Please enter the amount of grains you eat (in grams) on a typical day.
            <input className='input' onChange={getGrainChange} type='number'placeholder='0'></input>
          </div>
          <div className='dairy'>Please enter the amount of dairy you eat (in grams) on a typical day.
            <input className='input' onChange={getDairyChange} type='number'placeholder='0'></input>
          </div>
      </div>
      </> 
    )
};