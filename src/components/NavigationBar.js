import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navigationbar'>
        <div className='navigationbar-container'>
          <img src="/favicon.jpg" className='navigationbar-logo'/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
      </nav>
    </>
  )
}

export default NavigationBar