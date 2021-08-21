import React, { Component } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Col, Container, ListGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import LoginForm from './LoginForm';

class Home extends Component {
  render() {
    return (
      <><div className="row" style={{backgroundImage:'url("https://cutewallpaper.org/21/solid-grey-wallpaper/light-grey-wallpapers-clicolombia.co.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
      <div className="col-sm-12">
      <div style={{backgroundImage:'url("https://wallpapercave.com/wp/wp2700080.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:870}}>
        <Navbar className="bg-dark" variant="dark">
          <Navbar.Brand ><h3><b>Issue Tracker</b></h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"><h3><b><i class="zmdi zmdi-home"></i></b></h3></Nav.Link>
              <h4><NavDropdown title="Register as" id="basic-nav-dropdown">
                <NavDropdown.Item href="Userreg"><b>User&nbsp;&nbsp;<i class="zmdi zmdi-file-text"></i>
                    </b></NavDropdown.Item>
                <NavDropdown.Item href="/Register"><b>Catagory rep&nbsp;&nbsp;<i class="zmdi zmdi-file-text"></i></b></NavDropdown.Item>
              </NavDropdown></h4>
              <h4><NavDropdown title="Login as" id="basic-nav-dropdown">
                <NavDropdown.Item href="userLogin"><b>User&nbsp;&nbsp;<i class="zmdi zmdi-account"></i></b></NavDropdown.Item>
                <NavDropdown.Item href="catagoryLogin"><b>Catagory rep&nbsp;<i class="zmdi zmdi-account-circle"></i></b></NavDropdown.Item>
              </NavDropdown></h4>
            </Nav>
            <Nav>
              <Nav.Link href="/adminLogin"><h5>Admin login</h5></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="text-light text-center mt-5" >
         <h2> Welcome to Issue tracker application</h2>
        </div>
        
        </div>
        <div  >
          <footer  className="bg-dark text-light" style={{"height":50}}>
          <h6><i>Designed by</i></h6>
          <pre><i>Srinivas,  Srividya,  Mounika, Naveen, Lavanya.</i></pre>
          </footer>
        </div>
</div></div>
      </>
    );
  }
}

export default Home;