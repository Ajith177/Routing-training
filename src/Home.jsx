import React from 'react'
import {Link,Outlet} from 'react-router-dom';
// import Google_product from './Google_product';
// import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

export const Home = () => {
  return (  
  <div>
         {/* <Router> */}
      <p className='para-1'>From smart lights to smart locks, 
        Google Home unites devices and services from Google and your 
        favorite brands to build a personalized smart home 
        to help with your tasks.</p>
        <Link to='Google_product'><h4 className='Home-bar'> GOOGLE-PRODUCTS</h4></Link>
    <Outlet/>
    </div>
      
  )
}

export default Home;
