import React from 'react';
import Navbar from './component/Navbar';
import './component/Navbar.css';
import './component/Responsive.css';
import Homecontent from './home-section/Homecontent';
import Footer from './component/Footer';

const Home = () => {
  return(
    <>
    <Navbar />
    <Homecontent />
    <Footer />
      </>
  )
}

export default Home;
