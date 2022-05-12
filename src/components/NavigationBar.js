import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
      <nav className='navigationbar'>
        <div className='navigationbar-container'>
          <Link to="/" className='navigationbar-logo'>
            FlyDreamAir 
          </Link>
          <div className='menu-icon'>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>    
        </div>
      </nav>
    </>
  )
}

export default NavigationBar