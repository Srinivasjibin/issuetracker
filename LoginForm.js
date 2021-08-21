import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Form, FormControl, Nav, Navbar } from 'react-bootstrap';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        console.log(this.state.value)
        event.preventDefault();
    }

    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="login">login</Nav.Link>
                <Nav.Link href="register">Register</Nav.Link>
              </Nav>
              
            </Navbar>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </>
        );
    }
}


export default LoginForm;