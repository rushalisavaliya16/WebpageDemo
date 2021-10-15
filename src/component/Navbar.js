import React from 'react';
import gawaaridaLogo from '../images/gawaarida-logo.svg';
import enFlag from '../images/en-flag.png';

const Navbar = () =>{
    return(
        <>
        <header className="site-header">
            <div className="header-main">
                <div className="container">
                    <nav className="navbar navbar-expand main-navigation">
                        <a className="navbar-brand d-none d-xl-block" href="index.html">
                            <figure className="logo-default active"><img src={gawaaridaLogo} alt="Gawaarida Logo" /></figure>
                        </a>
                        <div className="collapse navbar-collapse">
                                <ul className="navbar-nav ml-auto nav-main">
                                    <li className="nav-item sell-vehicle-btn d-none d-xl-block">
                                        <a className="btn btn-primary" href="#" title="Sell My vehicle">Sell my vehicle<i className="fa fa-car"></i></a>
                                    </li>
                                    <li className="nav-item custom-dropdown language">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={enFlag} alt="English Flag" className="flag-image" /> <span>EN</span>
                                      </a>
                                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item active" href="#"><img src={enFlag} alt="English Flag" />EN</a>
                                        <a className="dropdown-item" href="#"><img src="images/so-flag.png" alt="Somalia Flag" />So</a>
                                      </div>
                                    </li>
                                    <li className="nav-item user-dropdown d-none d-xl-block">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-user"></i>
                                        </a>
                                    </li>
                                </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        </>
    );
}

export default Navbar;