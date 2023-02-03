import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

export default function Food() {
    const navigate = useNavigate();

    const navigateToHousing = () => {
        navigate('/Housing')
      }

    return (
      <div className='Title'>
        Food
        <button className='Btn' onClick={navigateToHousing}>Enter Housing Information</button>
        <div>
        </div>
      </div>
    )
};