import React, { Component } from 'react';
import AdminNavbar from './AdminNavbar';
import { Button, Container, Form, Row, Nav,Accordion,Card } from 'react-bootstrap';

import axios from 'axios'

class UserHome extends Component {
    constructor(props) {
        super(props)
        if (!sessionStorage.getItem("adminLogged"))
            props.history.push("/")
            this.state = {
                issues: [],

            };
    }
    componentWillMount(){
        axios.get('http://localhost:8080/api/admin/getIssueHistory')           
            .then(response => {
                this.setState({ issues : response.data })
                console.log("@log get req Success")
                console.log(response)
            }).catch(error=>console.log("history error"))
    }editIssue(id) {
        this.props.history.push(`/AdminIssueUpdate/${id}`);
    }   
    render() {
        return (
            <div className="row" style={{backgroundImage:'url("https://eton-solutions.com/wp-content/uploads/2019/11/ETON-home2-banner-1200x656.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:590}}>
            <div className="col-sm-12">
                <AdminNavbar />
                <Container>
               
                <div className="my-5 mx-auto"> 
                <h5 className="text-warning">Help Issues</h5>
                <hr style={{color:'white'}}/>
                <i class="zmdi zmdi-notifications-active" style={{color:'white'}}></i>
                {this.state.issues.filter(data=>data.issueStatus=="help").map((issue, idx) => {
                    return <div>
                    
                        <Accordion >
                        <div> 
                                      <tr style={{color:'white'}}>
                                      <td>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <p style={{color:"white"}}>Notification {idx + 1}</p>
                                    </Accordion.Toggle>
                                    </td></tr>
                                    </div>
                                <Accordion.Collapse eventKey="0">
                                <table className="table">
                                       
                                       <div style={{color:'white'}}>
                                          <tr><th>Issue name:</th>
                                          <th>Issue Description </th>
                                          <th>Issue Status</th>
                                        <th>Issue Created On</th>
                                          <th></th>
                                          </tr>
                                          <tr><td>{issue.issueName}</td>
                                         <td>{issue.issueDescription}</td>
                                          <td>{issue.issueStatus}</td>
                                           <td>{issue.issueDate}</td>
                                           <td>   {issue.issueStatus=="help" ?  
                                             <span className="text-right offset-5">
                                                    <Button className="ml-5 text-white btn-success" onClick={()=>this.editIssue(issue.id)}>Resolve</Button>
                                                </span>:''}
                                                </td></tr>
                                       </div>
                                       </table>
                                </Accordion.Collapse>
                        </Accordion>
                    </div>
                   
                })} 
                </div>

            </Container>
            </ div>
                </ div>
        );
    }
}

export default UserHome;