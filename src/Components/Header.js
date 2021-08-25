import React, { useState } from 'react';
import Logo from '../assets/mondologo-world.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';

// import { Container } from './styles';

function Header() {
    const [ShowMenu, setShowMenu] = useState(-1);

    const handleShowToggle = (div) => {
        if (ShowMenu === -1) {
            $('.Hamb').css('background-color', "rgb(182, 179, 179)");
        } else {
            $('.Hamb').css('background-color', "");
        }
        setShowMenu(-ShowMenu);
    }
    return (
        <>
            <div className="headerComp">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="navbar">
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                    <Link to='/AboutUs'>
                        <span>About Us</span>
                    </Link>
                </div>
                <div className="collapseAll">
                    <div className="Hamb" onTouchStart={handleShowToggle} style={{ cursor: 'pointer' }}>
                        <i className="fas fa-bars fa-2x" />
                    </div>

                </div>
            </div>
            <div className="collapseAll">
                {ShowMenu === 1 && (
                    <div className="collapseMenu">
                        <Link to="/">
                            <span variant="secondary">Home</span>
                        </Link>
                        <Link to='/AboutUs'>
                            <span variant="secondary">About Us</span>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default Header;