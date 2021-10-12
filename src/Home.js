import React from 'react';
import Navbar from './component/Navbar';
import './component/Navbar.css';
import './component/Responsive.css'
import Homecontent from './home-section/Homecontent';

const Home = () => {
  return(
    <>
    <Navbar />
    <Homecontent />
      </>
  )
}

export default Home;
