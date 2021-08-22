import React, { Component } from "react";
import { Button, Container, Form, Row,Nav, Card, Table } from 'react-bootstrap';

import axios from 'axios';
import CatRepNavBar from "./CatRepNavBar";
import AdminNavbar from "./AdminNavbar";

export default class CategoryIssueUpdate extends Component {
    constructor(props) {
        super(props);
        if(!sessionStorage.getItem("categoryRepLogged"))
        this.props.history.push("/")
        this.state = {
            id: this.props.match.params.id,
            issueName : "",
            issueDescription:"",
            issueStatus:"",
            issueResolution:"",
            issueCategory: ""

        }
       this.handleChange=this.handleChange.bind(this);
        this.updateissue = this.updateissue.bind(this);
        
    }
    componentDidMount(){
    axios.get("http://localhost:8080/api/category/getIssueById/" + this.state.id)
      .then( (res) =>{
            let issue = res.data;
            console.log(res)
            this.setState({issueName: issue.issueName,
                issueDescription: issue.issueDescription,
                issueStatus: issue.issueStatus,
                issueResolution:issue.issueResolution,
                issueCategory: issue.issueCategory
            });
        });
       
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    updateissue = (e) => { 
        let updatedIssue= this.state;     
        axios.put( "http://localhost:8080/api/category/updateIssue",{
        "id":updatedIssue.id,
        "issueStatus":updatedIssue.issueStatus,
        "issueResolution": updatedIssue.issueResolution,
        "issueCategory":updatedIssue.issueCategory
        })
       .then( res => {
           console.log("updated")
            this.props.history.push('/categoryHome');
        });
    }

   
    
   
    render(){
        return(
            <div className="row" align="center" style={{backgroundImage:'url("https://swall.teahub.io/photos/small/250-2508110_how-do-i-organize-my-demand-portfolio-management.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div className="col-sm-12">
                <CatRepNavBar/>
                <Container>                    
                <br/><br/>                 
                            <div align="center" className="bg-light" style={{border:'2px solid black',"width":500,"padding":20}}>
                                <form  className={"text-dark"}> 

                                    <div className="">
                                        <div className="col-sm-12">
                                        <label>Issue Name:</label>
                                        <input  name="issueName" className="form-control" disabled  value={this.state.issueName}
                                        onChange={this.handleChange}></input>
                                         </div>
                                    </div>
                                    <div className="">
                                    <div className="col-sm-12">
                                        <label>Issue Description:</label>
                                        <input  name="issueDescription" className="form-control" disabled value={this.state.issueDescription}
                                        onChange={this.handleChange}></input>
                                     </div>
                                    </div>
                                    <div className="">
                                    <div className="col-sm-12">
                                        <label>Status:&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                                        <span></span>
                                        <select name="issueStatus" className="form-control"  value={this.state.issueStatus}
                                        onChange={this.handleChange}>
                                              <option value="">select</option>
                                            <option value="active">active</option>
                                            <option value="completed">completed</option>
                                           
                                            </select>                                      
                                       </div>

                                    </div>
                                    <div className="">
                                    <div className="col-sm-12">
                                        <label>Issue Resolution:&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                                        <span></span>
                                        <textarea col="30" name="issueResolution"  className="form-control"  value={this.state.issueResolution}
                                        onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>

                                    <div className="">
                                    <div className="col-sm-12">
                                        <label>Issue Category:</label>
                                        <span />
                                        <input name="issueCategory" className="form-control" disabled value={this.state.issueCategory}
                                        onChange={this.handleChange}></input>  
                                        </div>     
                                    </div>
                                    <br/>
                                    <div className="row">
                                    <Button variant="success" className="align-center" onClick={this.updateissue}>Update <i class="zmdi zmdi-check"></i></Button>
                               </div> </form>
                           
                               </div>
                   
                   
                </Container>
                </div>
            </div>

        );
    }
}