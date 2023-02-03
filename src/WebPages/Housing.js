import React from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

export default function Housing() {
    const navigate = useNavigate();

    const navigateToSummary = () => {
        navigate('/Summary')
      }

    return (
      <div className='Title'>
        Housing
        <button className='Btn' onClick={navigateToSummary}>See Summary</button>
        <div>
        </div>
      </div>
    )
};