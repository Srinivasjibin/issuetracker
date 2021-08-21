import React, { Component } from "react";
import { Button, Container, Form, Row,Nav, Card, Table,Col } from 'react-bootstrap';
import axios from 'axios';

export default class ReopenIssue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            userComments:''
        }
        this.reopenIssue=this.reopenIssue.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }       

        handleChange(event) {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        reopenIssue(){            
                axios.put('http://localhost:8080/api/user/reopenIssue',{
                'id':this.state.id,
                'issueStatus':'reopened',
                 'userComments':this.state.userComments
                }).then((response)=>{
                    console.log(response)
                })
               window.location.href=("/userHome")
            
        }
        render(){
            return(
                <div className="row">
                <div className="col-sm-12">
               <div align="center">
                <form className="text-dark my-4" style={{border:'2px solid black',"padding":3,"width":500,"padding":30,fontFamily:'sans-serif',color:'black'}} onSubmit={this.handleSubmit} >                    
                    <div className="col-sm">
                        <label>Comments :
                        <i class="zmdi zmdi-comment-text"></i>
                        </label><br></br>
                        <textarea rows='5' cols="50" required placeholder="please enter reason for reopening the issue" name='userComments' value={this.state.userComments} onChange={this.handleChange} />                       
                    </div>              
                    <button className="btn-primary mx-4" onClick={this.reopenIssue}>Reopen</button>               
                </form>
                </div>
                </div></div>

            );
        }

        }