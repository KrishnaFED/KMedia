//This File is created by Krishna
import React from "react";
import Logo from "../../Assets/Image/logo.svg";
const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="container">
                    <div className="header_wrap">
                        <div className="logo">
                            <a href="">
                                <img src={Logo} alt="logo" />
                                <p>Media</p>
                            </a>
                        </div>
                        <div className="header_item">
                            <ul>
                                <li><a href="" className="active">Home</a></li>
                                <li><a href="">News</a></li>
                                <li><a href="">Space</a></li>
                                <li><a href="">Travel</a></li>
                                <li><a href="">Sports</a></li>
                                <li><a href="">Politics</a></li>
                                <li><a href="">Weather</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;