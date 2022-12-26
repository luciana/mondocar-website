import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import $ from 'jquery';
function Header() {
    const [ShowMenu, setShowMenu] = useState(-1);   
    const ga_onClick = (event, category, label) => {
        window.gtag("event", event, {
          event_category: category,
          event_label: label
        });
    } 
    const handleShowToggle = (div) => {
        if (ShowMenu === -1) {
            $('.Hamb').css('background-color', "rgb(182, 179, 179)");
        } else {
            $('.Hamb').css('background-color', "");
        }
        setShowMenu(-ShowMenu);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid ">                                       
                    <img className="logo" src={Logo} alt="Mondo Car Repair Logo" />                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" onClick ={ga_onClick("home", "header", "home_link")}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#location" onClick ={ga_onClick("location", "header", "location_link")} >Location</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#contact" onClick ={ga_onClick("schedule", "header", "schedule_link")}>Schedule Service</a>
                            </li>
                            <li className="nav-item">                           
                                <Link className="nav-link" to='/AboutUs' onClick ={ga_onClick("about", "header", "about_link")}>
                                    <span>About Us</span>
                                </Link> 
                            </li>
                        </ul>
                    </div>
                    <div className="collapseAll">
                    <div className="Hamb" onTouchStart={handleShowToggle} onClick={handleShowToggle} style={{ cursor: 'pointer' }}>
                        <i className="fas fa-bars fa-2x" />
                    </div>

                </div>
                </div>
            </nav>

           
            <div className="collapseAll">
                {ShowMenu === 1 && (
                    <div className="collapseMenu">
                          <a className="nav-link active" aria-current="page" href="/" onClick ={ga_onClick("home", "header_mobile", "home_link")}>Home</a>                                 
                          <a className="nav-link" href="/#location" onClick ={ga_onClick("location", "header_mobile", "location_link")} >Location</a>
                          <a className="nav-link" href="/#contact" onClick ={ga_onClick("schedule", "header_mobile", "schedule_link")}>Schedule Service</a>
                          <Link className="nav-link" to='/AboutUs' onClick ={ga_onClick("about", "header_mobile", "about_link")}>
                                    <span>About Us</span>
                           </Link> 
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;