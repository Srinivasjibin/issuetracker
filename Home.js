import React, { Component } from 'react';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Col, Container, ListGroup, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import LoginForm from './LoginForm';
import Carousel from 'react-bootstrap/Carousel'
class Home extends Component {
  render() {
    return (
      <><div className="row" >
      <div className="col-sm-12">
      <div>
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
        <div className="text-dark text-center mt-5" >
         <h2> Welcome to Issue tracker application</h2>
        </div>
        </div>
        <div>
        <Carousel align="center" >
  <Carousel.Item>
    <img
      className="d-block w-50"data-interval="1000"
      src="https://www.cloudplusit.com/wp-content/uploads/2017/07/13.png"
      alt="First slide"
     style={{"height":700, "PaddingLeft":50,}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50 "data-interval="1000"
      src="https://previews.123rf.com/images/jaaakworks/jaaakworks1508/jaaakworks150800020/44222401-cartoon-business-boss-giving-new-idea-to-his-employee.jpg"
      alt="Second slide"
      style={{"height":700, "padding":20}}/>
  </Carousel.Item>
  <Carousel.Item>
  <img
      className="d-block w-50 " data-interval="1000"
      src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/132855224/original/0479793d74c54cd46e45e7198e2883db03d4c97f/help-you-your-computer-problems.jpeg"
      alt="Second slide"
      style={{"height":700, "padding":20}}/>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-50" data-interval="1000"
      src="https://www.nicepng.com/png/detail/282-2826563_computer-clipart-thumbs-up-person-on-computer-png.png"
      alt="Third slide"
      style={{"height":700, "padding":20}}/>
  </Carousel.Item>
</Carousel>
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