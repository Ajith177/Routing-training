import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    
    <div className='navbars'>
      <Link className='home' to='/Home'>HOME</Link><br/>
      <Link  className='About' to='/About'>About</Link><br/>
      <Link  className='Contact' to='/Contact'>Contact</Link><br/>
    </div>
  )
}
export default Navbar;
