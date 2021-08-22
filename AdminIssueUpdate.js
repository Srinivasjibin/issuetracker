import React, { Component } from "react";
import { Button, Container, Form, Row,Nav, Card, Table } from 'react-bootstrap';

import axios from 'axios';
import CatRepNavBar from "./CatRepNavBar";
import AdminNavbar from "./AdminNavbar";

export default class AdminIssueUpdate extends Component {
    constructor(props) {
        super(props);
        if(!sessionStorage.getItem("adminLogged"))
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
            window.alert("Issue updated")
            this.props.history.push('/AdminHome');
        });
    }

   
    
   
    render(){
        return(
            <div className="row" style={{backgroundImage:'url("https://eton-solutions.com/wp-content/uploads/2019/11/ETON-home2-banner-1200x656.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div className="col-sm-12">
                 <AdminNavbar/>
                <Container>   <br/><br/>                 
                            <div align="center">
                                <form  className={"text-light"}  style={{border:'1px solid white',"padding":3,"width":700,"padding":30,fontFamily:'sans-serif',color:'black'}}> 

                                    <div className="">
                                        <div className="col-sm-6">
                                        <label>Issue Name:</label>
                                        <input  name="issueName" className="form-control" disabled  value={this.state.issueName}
                                        onChange={this.handleChange}></input>
                                         </div>
                                    </div>
                                    <div className="">
                                    <div className="col-sm-6">
                                        <label>Issue Description:</label>
                                        <input  name="issueDescription" className="form-control" disabled value={this.state.issueDescription}
                                        onChange={this.handleChange}></input>
                                     </div>
                                    </div>
                                    <div className="">
                                    <div className="col-sm-6">
                                        <label>Status:&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                                        <span></span>
                                        <select name="issueStatus" className="form-control"  value={this.state.issueStatus}
                                        onChange={this.handleChange}>
                                              <option value="">select</option>
                                            <option value="completed">completed</option>
                                            </select>                                      
                                       </div>

                                    </div>
                                    <div className="">
                                    <div className="col-sm-6">
                                        <label>Issue Resolution:&nbsp;
                            <i class="zmdi zmdi-edit"></i></label>
                                        <span></span>
                                        <textarea col="30" name="issueResolution" className="form-control"  value={this.state.issueResolution}
                                        onChange={this.handleChange}></textarea>
                                        </div>
                                    </div>

                                    <div className="">
                                    <div className="col-sm-6">
                                        <label>Issue Category:</label>
                                        <span />
                                        <input name="issueCategory" className="form-control" disabled value={this.state.issueCategory}
                                        onChange={this.handleChange}></input>  
                                        </div>     
                                    </div>
                                    <br/>
                                    <div className="">
                                    <Button variant="success" className="align-center" onClick={this.updateissue}>Update</Button>
                               </div> </form>
                           
                               </div>
                   
                </Container>
            </div></div>

        );
    }
}