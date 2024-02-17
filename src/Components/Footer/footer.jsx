//This File is created by Krishna
import React from "react";
import Logo from "../../Assets/Image/logo.svg";
const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="footer_wrap">
                        <div className="logo">
                            <a href="">
                                <img src={Logo} alt="logo" />
                                <p>Media</p>
                            </a>
                        </div>
                        <p>Created By Krishna</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;