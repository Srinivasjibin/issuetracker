import React, { Component } from "react";
import { Button, Container, Form, Row,Nav, Card, Table,Col } from 'react-bootstrap';
import axios from 'axios';
import UserNavbar from './UserNavbar';
import Feedback from "react-bootstrap/esm/Feedback";

export default class ReopenIssue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            userComments:''
        }
        this.feedback=this.feedback.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }       

        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        feedback(){            
                axios.put('http://localhost:8080/api/user/feedback',{
                'id':this.state.id,
                'issueFeedback':this.state.issueFeedback,
                 'issueComments':this.state.issueComments
                }).then((response)=>{
                    console.log(response)
                })
                alert("feedback is submitted")
               window.location.href=("/userHome")
            
        }
        render(){
            <UserNavbar />
            return(
            <div  style={{backgroundImage:'url("https://cutewallpaper.org/21/solid-grey-wallpaper/light-grey-wallpapers-clicolombia.co.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div align="center">
                    <form className="bg-light" style={{border:'2px solid black',"width":700,fontFamily:'sans-serif',"padding":30}}>
                        <div className="row" style={{"paddingLeft":220}}> 
                            <div className="col-sm-6">
                            <label><i class="zmdi zmdi-file-text"></i>&nbsp;Feedback:</label>
                             <select name="issueFeedback" className="form-control"  value={this.state.issueFeedback}
                            onChange={this.handleChange}>
                            <option value="">select</option>
                            <option value="good">good</option>
                             <option value="average">average</option>  
                             <option value="excellent">excellent</option> 
                            <option value="poor">poor</option>
                            </select>
                            </div>
                        </div>                                    
                        <div className="col-sm-12">
                          <label>Comments :<i class="zmdi zmdi-comment-text"></i></label><br></br>
                                 <textarea rows='5' cols="50" required placeholder="" name='issueComments' value={this.state.issueComments} onChange={this.handleChange} />                       
                        </div>
                        <div className="col-sm-12">
                                 <button className="btn-primary mx-4" onClick={this.feedback}>Submit <i class="zmdi zmdi-check"></i></button> 
                    </div>
            </form> </div>
                </div>
            );
        }

        }