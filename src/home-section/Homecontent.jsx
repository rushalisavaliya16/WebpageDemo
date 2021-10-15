import React from 'react';
import homeBanner from '../images/home-banner.jpg';
import lookingCarImage from '../images/off-road-scaled.jpg';
import lineCars from '../images/line-cars.jpg'
import InventoryBox from './InventoryBox';
import InventoryBoxData from './InventoryBoxData';
import LookingForBox from './LookingForBox';
import LookingForBoxData from './LookingForBoxData';
import ChooseUsCol from './ChooseUsCol';
import ChooseUsColData from './ChooseUsColData';

const Homecontent = () => {
  return(
    <>
    <section className="section home-banner-section" style={{backgroundImage: `url(${homeBanner})`}}>
                <div className="banner-wrap">
                    <div className="container">
                        <div className="banner-content desktop d-none d-xl-block">
                            <h1 className="h2">Cars, Motorcycle, Bajaj, & Trucks for 
                                sale in City</h1>
                                <div className="search-box">
                                <div className="search-box-wrap">
                                    <form>
                                        <div className="search-box-row">
                                            <div className="dropdown cities-dropdown">
                                                <a className="dropdown-toggle" href="#" id="CitiesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                  All cities
                                                </a>
                                                <div className="dropdown-menu" aria-labelledby="CitiesDropdown">
                                                    <a className="dropdown-item active" href="#">All cities</a>
                                                    <a className="dropdown-item" href="#">Afgoye</a>   
                                                  </div>
                                            </div>
                                            <div className="search-input">
                                                <input type="search" placeholder="Search for cars, motorcycle, bajaj and trucks..." />
                                            </div>
                                            <div className="search-btn">
                                                <input className="btn" type="submit" value="SEARCH" id="searchBtn" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    <section className="section inventory-type-box-section">
                <div className="inventory-boxes-wraper">
                    <div className="container">
                        <div className="inventory-boxes-wrap">
                            <div className="row boxes-row">
                            {InventoryBoxData.map((val) => 
                                <InventoryBox 
                                key = {val.id}
                                imageSrc={val.imageSrc}
                                name={val.name}
                                inventoryNumber={val.inventoryNumber}
                                />
                            )}
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    <section className="section looking-for-section" style={{backgroundImage: `url(${lookingCarImage})`}}>
                <div className="looking-for-sec-wrap">
                    <div className="container">
                        <div className="looking-for-box-wrap">
                            <div className="row looking-for-box-row">
                                {LookingForBoxData.map((val) => 
                                    <LookingForBox 
                                    key = {val.id}
                                    customClass={val.customClass}
                                    title={val.title}
                                    content={val.content}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                </div>
    </section>
    <section class="section why-choose-us-section">
                <div class="section-wrap">
                    <div class="container">
                        <div class="why-choose-wrapper">
                            <h2 class="section-title">WHY CHOOSE US <span class="title-bottom-border"></span></h2>
                            <div class="why-choose-content">
                                <div class="row">
                                {ChooseUsColData.map((val) => 
                                    <ChooseUsCol 
                                    key = {val.id}
                                    boxTitle={val.boxTitle}
                                    boxContent={val.boxContent}
                                    iconName={val.iconName}
                                    />
                                )}
                                </div>
                                <div class="learn-more-btn text-center">
                                    <a href="#" class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    <section class="section car-partner-section" style={{backgroundImage: `url(${lineCars})`}}>
                <div class="section-wrapper">
                    <div class="container">
                        <div class="car-partner-row">
                            <div class="row">
                                <div class="col-xl-6 col-lg-8 col-12 car-partner-col">
                                    <div class="car-partner-single hover-effect yellow-bg">
                                        <div class="car-partner-text">
                                            <h2>GAWAARIDA.COM <span>YOUR CAR PARTNER</span></h2>
                                            <p>At Gawaarida.com, we are obsessed with cars. We provide in depth information, crisp photos, dealer reviews, and more! It is important that we provide Somalis with choice and peace of mind. Thank you for your visit :).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
    </>
  );
}

export default Homecontent;
