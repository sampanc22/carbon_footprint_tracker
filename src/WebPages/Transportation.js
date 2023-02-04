import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

import './style.css';

export default function Transportation() {
    const navigate = useNavigate();

    const navigateToFood = () => {
        navigate('/Food')
    }
  
    const [suvMiles, setSUVMiles] = useState(0)
  
    const getSUVChange = (event) => {
        setSUVMiles(event.target.value)
    }
  
    const [busMiles, setBusMiles] = useState(0)
  
    const getBusChange = (event) => {
        setBusMiles(event.target.value)
    }
  
    const [planeMiles, setPlaneMiles] = useState(0)
  
    const getPlaneChange = (event) => {
          setPlaneMiles(event.target.value)
    }
  
    localStorage.setItem("suv_miles", suvMiles)
    localStorage.setItem("bus_miles", busMiles)
    localStorage.setItem("plane_miles", planeMiles)

    return (
      <>
      <div className='Title'>
        Transportation
        <button className='Btn' onClick={navigateToFood}>Enter Food Information</button>
      </div>
      <div className='transportation_inputs'>
        <div className='car'>Please enter the number of miles you have driven a car (SUV or sedan) on a typical day.
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input onChange={getSUVChange} type='number'placeholder='0'></input>
        </div>
        <div className='public_transport'>Please enter the number of miles you have used public transport for on a typical day.
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <input onChange={getBusChange} type='number'placeholder='0'></input>
        </div>
        <div className='plane'>Please enter the number of miles you have rode a plane in a typical month.
           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <div className='plane_box'>
            <input onChange={getPlaneChange} type='number'placeholder='0'></input>

          </div>
        </div>
        
      </div>
      </>  
    )
};

