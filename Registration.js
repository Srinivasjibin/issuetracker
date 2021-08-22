import axios from 'axios';
import react, { Component, useState } from 'react'
import { Container, Row, Form, Col, InputGroup, Button, FormLabel, Fade } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            dob: new Date().toLocaleString(),
            gender: '',
            email: '',
            contact: '',
            username: '',
            password: '',
            category: '',
            secQn1: '',
            secQn2: '',
            secQn3: '',
            validated: false,
            flag: 1,
            check: "1",
            showCategory: true,
            open: false

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.checkFormInput = this.checkFormInput.bind(this);
       // this.showCategoryToggle = this.showCategoryToggle.bind(this);

    }

    componentWillMount() {
        axios.get("http://localhost:8080/api/admin/getCategoryList").then(list => {
            var select = document.getElementById("sel");
            for (let type of list.data) {
                let newOp = document.createElement("option");
                newOp.value = type;
                newOp.innerHTML = type;
                select.options.add(newOp);
            }
        }).catch(error =>
            console.log(error)
        )
    }

    handleSubmit = (event) => {
        console.log("current State", this.state)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.setState({ validated: true });
            event.preventDefault();
        }
        const { firstname, lastname, dob, gender, email, contact, username, password, category} = this.state;

        this.checkFormInput();
        if (this.state.flag == 2) {
            if (this.state.check == "1") {
                axios.post('http://localhost:8080/api/category/saveCategoryRep', {
                    "fName": firstname,
                    "lName": lastname,
                    "gender": gender,
                    "eMail": email,
                    "contact": contact,
                    "username": username,
                    "password": password,
                    "dateOfBirth": dob,
                    "category": category
                })
                    .then(function (response) {
                        console.log("@success", response);
                        alert("New Category representative created Successfully")
                        window.location.href = ("/catagoryLogin")
                    })
                    .catch(function (error) {
                        console.log("@fail", error);
                        window.location.href = ("/Register")

                    });}
                    else
                    console.log("post error") }  
    };
    checkFormInput = () => {
        if (this.state.firstname == '')
            alert("Please update the highlighted mandatory field(s)")
        else if (this.state.lastname == '')
            alert("Please update the highlighted mandatory field(s)")
        else if (this.state.dob == '')
            alert("Please update the highlighted mandatory field(s)")
        else if (this.state.gender == '')
            alert("Please update the highlighted mandatory field(s)")
        else if (this.state.email == '')
            alert("Please update the highlighted mandatory field(s)")
        else if (this.state.contact == '')
            alert("Please update the highlighted mandatory field(s)")
        else if (this.state.username == '')
            alert("Please update the highlighted mandatory field(s)")
        else if (this.state.password == '')
            alert("Please update the highlighted mandatory field(s)")
        else (this.setState({ flag: 2 }))
    }
    handleChange(event) {
        console.log("changed")
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        
        console.log(this.state)
        return (
            <div className="row" style={{backgroundImage:'url("https://www.yalgaar.io/Content/themes/Admin/img/login_full_bg.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
            <div className="col-sm-12">
            <Container className="text-danger my-5 bg-light " style={{border:'px solid white',"paddingLeft":100,"paddingBottom":20,"width":700,fontFamily:'sans-serif',color:'black'}}><br/>
            
                <div style={{"paddingLeft":150}} >
                    <h2 className=" text-dark "><b>
                        <i class="zmdi zmdi-file-text"></i>&nbsp;
                            Register</b></h2>
                    </div>
                <Form className="text-dark my-4" noValidate validated onSubmit={this.handleSubmit} >
                <div className="row">
                    <div className="col-md-5" >
                            <label>First Name</label>&nbsp;
                            <i class="zmdi zmdi-edit"></i>
                            <input type="text"  className="form-control" required="true" placeholder="First name" name='firstname' value={this.state.firstname} onChange={this.handleChange} />
                       
                        </div>
                        <div className="col-md-5" >
                            <label>Last Name</label>&nbsp;
                            <i class="zmdi zmdi-edit"></i>
                            <input type="text" className="form-control" required="true" placeholder="Last name" name='lastname' value={this.state.lastname} onChange={this.handleChange} />
                          
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-10" >
                            <label>Date Of Birth</label>
                            <input type="date"  className="form-control" required="true" placeholder="Date of Birth" name='dob' value={this.state.dob} onChange={this.handleChange} />
                        
                       </div></div><br/>
                       <div className="row">
                        <div className="col-md-5" >
                                <label>Gender : &nbsp;
                                <i class="zmdi zmdi-account"></i>
                                </label>
                                <select name="gender" value={this.state.gender} onChange={this.handleChange} >
                                    <option>Choose Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female" >Female</option>
                                    <option value="NA">Prefer Not to Say</option>
                                </select>
                            </div>
                            <div className="col-md-5" >
                            <label>Category : &nbsp;<i class="zmdi zmdi-view-list-alt"></i>
                            </label>
                            <select id="sel" name="category" value={this.state.category} onChange={this.handleChange} required="true">
                                <option>Choose Category</option>
                            </select>
                        </div>
                        </div> <br/>
                   <div className="row">
                        <div className="col-md-10" >
                            <label>Email address</label>&nbsp;
                            <i class="zmdi zmdi-email"></i>
                            <input type="email" className="form-control" required="true" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleChange} />
                            
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-10" >
                            <label>Contact Number</label>&nbsp;
                            <i class="zmdi zmdi-phone"></i>
                            <input type="text" className="form-control" required="true" placeholder="Enter Contact No" name='contact' value={this.state.contact} onChange={this.handleChange} />
                          
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-10" >
                            <label>Userid</label>&nbsp;
                            <i class="zmdi zmdi-edit"></i>
                            <input type="number"  className="form-control" required="true" placeholder="Userid" name='username' value={this.state.username} onChange={this.handleChange} />
                          
                      </div>
                      </div>
                      <div className="row">
                      <div className="col-md-10" >        
                            <label>Password</label>&nbsp;
                            <i class="zmdi zmdi-edit"></i>
                            <input type="password" className="form-control" required="true" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
                         
                      </div>
                  </div>
                  <br/>
                  <div className="row">
                          <div className="col-md-5" >
                          <Button className="btn btn-success" type="submit" >Submit <i class="zmdi zmdi-check"></i>
</Button>

                    </div>
                   </div>
                               </Form> 
            </Container>
            </div></div>
        );
       
    }
}