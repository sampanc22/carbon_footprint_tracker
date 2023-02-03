import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

export default function Transportation() {
    const navigate = useNavigate();

    const navigateToFood = () => {
        navigate('/Food')
      }

    return (
      <div className='Title'>
        Transportation
        <button className='Btn' onClick={navigateToFood}>Enter Food Information</button>
        <div>
        </div>
      </div>
    )
};

