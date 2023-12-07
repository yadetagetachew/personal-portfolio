import React from 'react';
import Hero from './media/hero.png';
import Icon from './svg'

const Header = () => {
return(
    <div className='hero'>
        <img src={Hero} alt="Yadi Inc. Hero" />  
        <Icon />
    </div>
  
);
}


export default Header;