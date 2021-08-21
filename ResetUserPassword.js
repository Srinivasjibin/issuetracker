import axios from 'axios';
import react, { Component } from 'react'
import { Container, Form, Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ResetUserPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            question1: '',
            question2: '',
            question3: '',
            username: '',
            newPassword: '',
            showReset: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resetPw = this.resetPw.bind(this);
        this.toggleShowReset = this.toggleShowReset.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    toggleShowReset() {
        this.setState({ showReset: !this.state.showReset })
    }
    resetPw(){
        axios.put('http://localhost:8080/api/user/updatePassword',{
        'username':this.state.username,    
        'password':this.state.newPassword
        }).then((response)=>{
            console.log(response)
            window.alert("password updated")
            window.location.href=("/userLogin")
        })
    }
    handleSubmit(event) {
        const UserInput = this.state
        event.preventDefault();
        console.log("state of reset component", this.state)
        axios.post('http://localhost:8080/api/user/forgotPassword', {
            "username": this.state.username
        }).then( (response)=> {      
            console.log("Response", response.data)
            if ((response.data.secQn1 == UserInput.question1) &&
                (response.data.secQn2 == UserInput.question2) &&
                (response.data.secQn3 == UserInput.question3)) {
                        alert("Security Checks Passed")
                            this.toggleShowReset();
                    }
                    else {
                        alert("Incorrect answers")
                        window.location.href = ("/ResetUserPassword")
                    }
        })
       
       
    }

    render() {
        return (
            <div className="row" align="center" style={{backgroundImage:'url("https://cutewallpaper.org/21/solid-grey-wallpaper/light-grey-wallpapers-clicolombia.co.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
            <div className="col-sm-12">
            <Container>
                <Form className="text-dark my-4 bg-light" onSubmit={this.handleSubmit} style={{border:'2px solid black',"width":500,"padding":20}}>
                <div >
                <div className="row">
                        <div className="col-sm-12" >
                                <label>Userid:&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                                <input type="text" className="form-control"   required placeholder="Enter your number here" name='username' value={this.state.contact} onChange={this.handleChange}  />
                           </div></div><br/>
                    <label className="text-primary"><b>Security Questions :</b></label><hr></hr>
                        <div className="row">
                        <div className="col-sm-12" >
                                <label>What is your Pet's name :&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                                <input type="text" className="form-control"  required placeholder="Enter your answer here" name='question1' value={this.state.question1} onChange={this.handleChange}  />
                           </div></div>
                           <div className="row">
                        <div className="col-sm-12" >
                           
                                <label>What is your Favorite Player's name :&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                                <input type="text" className="form-control" required placeholder="Enter your answer here" name='question2' value={this.state.question2} onChange={this.handleChange}  />
                               </div></div>
                               <div className="row">
                        <div className="col-sm-12" >
                                <label>What is your childhood school's name :&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                                <input type="text" className="form-control"required placeholder="Enter your answer here" name='question3' value={this.state.question3} onChange={this.handleChange} />
                                
                           </div></div>
                           <br/>
                        <Button className="btn btn-success" type="submit" >Submit <i class="zmdi zmdi-check"></i></Button>
              </div> 
                </Form>
                {this.state.showReset ? 
                <div className="row">
                <div className="col-sm-12" >
                    <label >Enter New Password</label>
                    <input className="form-control" type="password" required placeholder="Enter new password" name='newPassword' value={this.state.newPassword} onChange={this.handleChange}/>
                    <Button onClick={this.resetPw}>Reset Password</Button>
               </div></div>: null}
            </Container></div></div>
        )
    }
}