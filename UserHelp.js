import { Component } from 'react'
import { Button, Container, Form, Row,Col} from 'react-bootstrap';

import axios from 'axios'
import UserNavbar from './UserNavbar';

export default class UserIssue extends Component {
    constructor(props) {
        var today = new Date(),
            date = today.getDate() + "-" + (today.getMonth() + 1) + '-' + today.getFullYear();
        super(props);
        if (!sessionStorage.getItem("userLogged"))
            this.props.history.push("/")
        this.state = {
            issueDate: date,
            issueName: '',
            issueDescription: '',
            issueResolution: '',
            issueStatus:'',
            issueCategory: '',
            flag: 1,
            validated: false
        };
        this.submitHandler = this.submitHandler.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitHandler = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            this.setState({ validated: true });
            event.preventDefault();
        }
        const { issueDate, issueDescription, issueName, issueStatus } = this.state;
        console.log("Current state", this.state)
        if (this.state.issueName == '')
            alert("Issue name cannot be empty")
        else if (this.state.issueDescription == '')
            alert("Issue Description cannot be empty")
        else {
            this.state.flag = 2;
            console.log("category", this.state.issueCategory)
        }
        if (this.state.flag === 2) {
            console.log(issueStatus);
            axios.post('http://localhost:8080/api/user/saveIssuehelp', {
                "issueName": issueName,
                "issueDescription": issueDescription,
                "issueDate": issueDate,
                "issueStatus": issueStatus,
                "username":sessionStorage.getItem("userId")
            })
                .then(function (response) {

                    console.log("@success", response);
                    alert("Issue raised Successfully")
                    window.location.href = ("/UserIssue")

                })
                .catch(function (error) {
                    console.log("@fail", error);
                });
        }
    };
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <>
                <div className="row" style={{backgroundImage:'url("https://cutewallpaper.org/21/solid-grey-wallpaper/light-grey-wallpapers-clicolombia.co.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div className="col-sm-12">
            <UserNavbar />
            <marquee style={{color:'red'}}><h6>Please Contact us for any queries- +91 9515773146</h6></marquee><br/>
                <div  align="center"> 
    
                <form  className="bg-light" style={{border:'2px solid black',"padding":3,"width":500,"padding":30,fontFamily:'sans-serif',color:'black'}} noValidate validated>
                <div  class="row">
                    <div class="col-sm">
                        <label>Issue Name&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                        <input type="text"  className="form-control"required placeholder="Enter Issue name" name='issueName' value={this.state.issueName} onChange={this.handleChange} />
                      
                        </div></div><br/>
                        <div class="row">
                    <div class="col-sm">
                  
                        <label>Issue Description&nbsp;
                            <i class="zmdi zmdi-edit"></i></label><br/>
                        <textarea rows={5} cols={50} required="true" placeholder="Enter Issue Description" name='issueDescription' value={this.state.issueDescription} onChange={this.handleChange} />
                    
                   </div>
                   </div><br/>
                        <div class="row">
                        <div class="col-sm">
                        <Button className="btn btn-success" onClick={this.submitHandler}>Submit <i class="zmdi zmdi-check"></i></Button>
              </div>  </div>
                </form>
                </div>
                </div></div>
          
            </>
        )
    }
}