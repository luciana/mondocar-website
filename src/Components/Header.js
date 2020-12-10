import React, {useState} from 'react';
import Logo from '../assets/mondologo.jpg';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// import { Container } from './styles';

function Header() {
    const[ShowMenu, setShowMenu] = useState(-1);

    const handleShowToggle = (div) => {
        if(ShowMenu === -1){
            div.nativeEvent.path[1].style.backgroundColor = "rgb(182, 179, 179)";
        }else{
            div.nativeEvent.path[1].style.backgroundColor = "";

        }
        setShowMenu(-ShowMenu);
    }
  return(
      <>
      <div className="headerComp">
          <div className="logo">
            <img src={Logo} alt="logo"/>
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
          <div className="Hamb" style={{cursor: 'pointer'}} onClick={handleShowToggle}>
                <i className="fas fa-bars fa-2x"/>
            </div>

          </div>
      </div>
      <div className="collapseAll">
          {ShowMenu === 1 && (
                <Card>
                    <Card.Body>
                        <div className="collapseMenu">
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                            <Link to='/AboutUs'>
                                <span>About Us</span>
                            </Link>
                        </div> 
                    </Card.Body>  
                </Card>   
                )}
      </div>
      </>
  );
}

export default Header;