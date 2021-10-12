import React from 'react';
import homeBanner from '../images/home-banner.jpg';
import lookingCarImage from '../images/off-road-scaled.jpg';
import InventoryBox from './InventoryBox';
import InventoryBoxData from './InventoryBoxData';
import LookingForBox from './LookingForBox';
import LookingForBoxData from './LookingForBoxData';

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
                                    class={val.class}
                                    title={val.title}
                                    content={val.content}
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                </div>
    </section>
    </>
  );
}

export default Homecontent;
