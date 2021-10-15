import React from 'react';

const Footer = () =>{
    return(
        <>
        <footer class="site-footer">
            <div class="footer-main">
                <div class="container">
                    <div class="footer-top">
                        <div class="footer-top-row row">
                            <div class="col-xl-4 col-md-6 footer-col-single">
                                <div class="col-single-wrap">
                                    <h6>Newsletter</h6>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 footer-col-single">
                                <div class="col-single-wrap">
                                    <h6>Other pages</h6>
                                    <div class="footer-menu-list">
                                        <ul>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Privacy Policy</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 footer-col-single">
                                <div class="col-single-wrap">
                                    <h6>QAYBAHA KALE</h6>
                                    <div class="footer-menu-list">
                                        <ul>
                                            <li><a href="#">Nagu saabsan</a></li>
                                            <li><a href="#">Nala soo xiriir</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="#">Privacy Policy</a></li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 footer-col-single">
                                <div class="col-single-wrap">
                                    <h6>Sales Hours</h6>
                                    <div class="hour-text">
                                        <p><b>Sun - Thursday:</b> 09:00AM - 09:00PM</p>
                                        <p><b>Saturday:</b> 09:00AM - 05:00PM</p>
                                        <p><b>Friday:</b> Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright">
                            <div class="copyright-text"><p>© 2021 <a href="https://gawaarida.com/">Gawaarida.com</a><span class="divider"></span> Trademarks and brands are the property of their respective owners.</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;