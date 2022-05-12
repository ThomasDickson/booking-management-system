import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function NavigationBar() {
  const [click, setClick] = useState(false);
  
  return (
    <>
      <nav className='navigationbar'>
        <div className='navigationbar-container'>
          <img src="/favicon.jpg" className='navigationbar-logo'/>
          
        </div>      
      </nav>
    </>
  )
}

export default NavigationBar