import react, { Component } from 'react'
import { Button, Container, Form, Row, Nav,Accordion,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios'
import CatRepNavBar from './CatRepNavBar';

export default class CategoryHome extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[],
            username:sessionStorage.getItem("username")
        }
        if (!sessionStorage.getItem("categoryRepLogged")){
            window.alert("you have logged out! login to continue")
            this.props.history.push("/")
        }
            
    }
    componentDidMount(){
        axios.get('http://localhost:8080/api/admin/getIssueHistory')           
            .then(response => {
                this.setState({ data: response.data })
            }).catch(error=>console.log("history error",error))
    }
    editIssue(id) {
        this.props.history.push(`/CategoryIssueUpdate/${id}`);
    }
    render() {
        return (
            <>
            
            <div className="row" style={{backgroundImage:'url("https://cutewallpaper.org/21/solid-grey-wallpaper/light-grey-wallpapers-clicolombia.co.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div className="col-sm-12">
            <CatRepNavBar />
            <Container>
                
                <div className="my-5 mx-auto">
                <h5 className="text-danger"><i class="zmdi zmdi-notifications-active"></i>&nbsp;Reopened Issues</h5>
                {this.state.data.filter(data=>data.issueStatus=="reopened"&&data.issueCategory==sessionStorage.category).map((issue, idx) => {
                    return <div>
                      <Accordion >
                        <div> 
                                      <tr>
                                      <td>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <p >Notification {idx + 1}</p>
                                    </Accordion.Toggle>
                                    </td></tr>
                                    </div>
                                <Accordion.Collapse eventKey="0">
                                <table className="table">
                                       
                                       <div>
                                          <tr><th>Name:</th>
                                          
                                          <th>Description </th>
                                         
                                        
                                          
                                          <th>Category</th>
                                          
                                          <th>Status</th>
                                         
                                          <th>Date</th>
                                          
                                          <th>Comments</th>
                                          <th></th>
                                          </tr>
                                          <tr><td>{issue.issueName}</td>
                                      <td>{issue.issueDescription}</td>
                    
                                        <td>{issue.issueCategory}</td>
                                       <td>{issue.issueStatus}</td>
                                        <td>{issue.issueDate}</td>
                                        <td>{issue.userComments}</td>
                                        <td>   {issue.issueStatus=="reopened"||issue.issueStatus=="map" ?  
                                             <span className="text-right offset-5">
                                                    <Button className="ml-5 text-white btn-success" onClick={()=>this.editIssue(issue.id)}>change status</Button>
                                                </span>:''}
                                                </td>
                                        </tr>
                                          </div>
                                    </table>
                                </Accordion.Collapse>
                           
                        </Accordion> 
                          
                    </div>
                })}
                <h5 className="text-danger"><i class="zmdi zmdi-notifications-active"></i>&nbsp;Mapped Issues</h5>
                {this.state.data.filter(data=>data.issueStatus=="map"&&data.issueCategory==sessionStorage.category).map((issue, idx) => {
                    return <div>
                      <Accordion >
                        <div> 
                                      <tr>
                                      <td>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <p >Notification {idx + 1}</p>
                                    </Accordion.Toggle>
                                    </td></tr>
                                    </div>
                                <Accordion.Collapse eventKey="0">
                                <table className="table">
                                       
                                       <div>
                                          <tr><th>Name:</th>
                                          
                                          <th>Description </th>
                                         
                                         
                                          
                                          <th>Category</th>
                                          
                                          <th>Status</th>
                                         
                                          <th>Date</th>
                                          <th></th>
                                         
                                          </tr>
                                          <tr><td>{issue.issueName}</td>
                                      <td>{issue.issueDescription}</td>
                                       
                                        <td>{issue.issueCategory}</td>
                                       <td>{issue.issueStatus}</td>
                                        <td>{issue.issueDate}</td>
                                        <td>   {issue.issueStatus=="reopened"||issue.issueStatus=="map" ?  
                                             <span className="text-right offset-5">
                                                    <Button className="ml-5 text-white btn-success" onClick={()=>this.editIssue(issue.id)}>change status</Button>
                                                </span>:''}
                                                </td>
                                        </tr>
                                          </div>
                                    </table>
                                </Accordion.Collapse>
                           
                        </Accordion> 
                          
                    </div>
                })}
                </div>
            </Container>
            </div>
            </div>
            </>
        )
    }
}