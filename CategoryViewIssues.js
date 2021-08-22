import React, { Component } from "react";
import { Button, Container, Form, Row, Nav, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import CatRepNavBar from './CatRepNavBar';


export default class CategoryViewIssues extends Component {

    constructor(props) {
        super(props);
        if(! sessionStorage.getItem("categoryRepLogged"))
        this.props.history.push("/")
        this.state = {
            data: []
        };
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/admin/getIssueHistory')           
            .then(response => {
                this.setState({ data: response.data })
                console.log(response)
            }).catch(error=>console.log("history error",error))
    }
    editIssue(id) {
        this.props.history.push(`/mapping/${id}`);
    }editIssue2(id) {
        this.props.history.push(`/CategoryIssueUpdate/${id}`);
    }


    render() {
        return (
            <div className="row" style={{backgroundImage:'url("https://swall.teahub.io/photos/small/250-2508110_how-do-i-organize-my-demand-portfolio-management.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
            <div className="col-sm-12">
                <CatRepNavBar />
                
                        <table className="table text-light" bordered hover striped variant='dark'>
                            <thead>
                                <tr>
                                    <th>Issue Id</th>
                                    <th>Issue Name</th>
                                    <th>Issue Description</th>
                                    <th>Issue Created on</th>
                                    <th> Issue Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="6"> No Issues</td>
                                    </tr> :
                                    this.state.data.filter(data => (data.issueCategory == sessionStorage.category)&&(data.issueStatus=="new"||data.issueStatus=="active")).map((element) => (
                                        <tr key={element.id}>
                                            <a onClick={() => this.editIssue(element.id)}> <td>{element.id}</td></a>
                                            <td>{element.issueName}</td>
                                            <td>{element.issueDescription}</td>
                                            <td>{element.issueDate}</td>
                                            <td width="20">{element.issueStatus}</td>
                                            <td>   {element.issueStatus=="active"||element.issueStatus=="new" ?  
                                            
                                                    <Button className="ml-5 text-white btn-success" onClick={()=>this.editIssue2(element.id)}>change status</Button>
                                               :''}
                                                </td>
                                            <td>   {element.issueStatus=="active"||element.issueStatus=="new" ?  
                                             
                                                    <button className="ml-5 text-white btn-success" onClick={()=>this.editIssue(element.id)}>Map</button>
                                                :''}
                                                </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                   </div>
            </div>
        )
    }
}