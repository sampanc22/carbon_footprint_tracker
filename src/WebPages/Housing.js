import React from 'react';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import './style.css';

export default function Housing() {
    const navigate = useNavigate();

    const navigateToSummary = () => {
        navigate('/Summary')
      }
    
    const [waterCost, setWaterCost] = useState(0)

    const getWaterCost = (event) => {
        setWaterCost(event.target.value)
    }
  
    const [gasCost, setGasCost] = useState(0)
  
    const getGasCost = (event) => {
        setGasCost(event.target.value)
    }
  
    const [electricCost, setElectricCost] = useState(0)
  
    const getElectricCost = (event) => {
        setElectricCost(event.target.value)
    }
  
    localStorage.setItem("water_cost", waterCost)
    localStorage.setItem("gas_cost", gasCost)
    localStorage.setItem("electric_cost", electricCost)

    return (
      <>
      <div className='Title'>
        Housing
        <button className='Btn' onClick={navigateToSummary}>See Summary</button>
      </div>
        <div className='housing_inputs'>
          <div className='water'>Please refer to your water bill and enter the amount of water (in gallons) used in a month. 
            <input className='water-input-field' onChange={getWaterCost} type='number'placeholder='0'></input>
          </div>
          <div className='electric'>Please refer to your electric bill and enter the amount of electricity (in kilowatt-hours) used in a month.
            <input className='electric-input-field' onChange={getElectricCost} type='number'placeholder='0'></input>
          </div>
          {/* <div className='gas'>
              <input className='gas-input-field' onChange={getGasCost} type='number'placeholder='0'></input>
          </div> */}
        </div>
        </>
      
    )
};