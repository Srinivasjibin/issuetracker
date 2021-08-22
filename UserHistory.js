import react, { Component } from 'react'
import { Button, Container, Row, Col, Table, Alert, Accordion, Card } from 'react-bootstrap'
import UserNavbar from './UserNavbar'
import axios from 'axios'



export default  class UserHistory extends Component {

    constructor(props) {
        super(props);
        if (!sessionStorage.getItem("userLogged"))
            this.props.history.push("/")
        this.state = {
            data: [],
            showTable: false
        };
        this.handleClicker = this.handleClicker.bind(this);
        console.log("history error")
        
    }
    handleClicker = (event) => {
        this.setState({ showTable: !this.state.showTable })
    }

    componentWillMount(){
        axios.get('http://localhost:8080/api/admin/getIssueHistory')           
            .then(response => {
                this.setState({ data: response.data })
                console.log("@log get req Success")
                console.log("Username",this.state.name)
            }).catch(error=>console.log("history error"))
    }
    reopenIssue(id){
        this.props.history.push(`/reopenIssue/${id}`);
    }
    closeIssue(id){
        this.props.history.push(`/closeIssue/${id}`);
    }
    feedback(id){
        this.props.history.push(`/feedback/${id}`);
    }
    

    render() {
        const data = this.state.data
        return (
            <>
                <div className="row" style={{backgroundImage:'url("https://www.dnnsoftware.com/Portals/0/Images/hero-background-12-4.jpg?ver=2017-08-17-185733-337.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
                <div className="col-sm-12">
            <UserNavbar />
            <marquee style={{color:'white'}}><h6>*Please Contact us for any queries- +91 9515773146</h6></marquee>
            <Container className="text-dark">  
            <h3 style={{color:'white'}}>Click on id to view issue</h3>
            <hr/>      
                {data.filter(data=>data.username==sessionStorage.userId).map((issue, idx) => {
                    return <div>
                        <Accordion >
                        <table className="table">
                                   <div> 
                                  
                                       <tr style={{color:'white'}}>
                                       <td><Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <h5 style={{color:'white'}}>Issue :{issue.id}</h5>
                                    </Accordion.Toggle>
                                    </td></tr>
                                    </div>
                              
                                <Accordion.Collapse eventKey="0">
                                    
                                       
                                    <div>
                                    <thead style={{color:'white'}}>
                                       <tr style={{color:'white'}}><th>Issue name:</th>
                                       <th>Issue Description </th>
                                       <th>Issue Resolution </th>
                                       <th>Issue Category</th>
                                       <th>Issue Status</th>
                                    
                                       <th>Issue Created On</th>
                                       </tr>
                                       </thead>
                                       <tbody style={{color:'white'}}>
                                       <tr style={{color:'white'}}><td width="200">{issue.issueName}</td>
                                      <td width="200">{issue.issueDescription}</td>
                                       <td width="200">{issue.issueResolution}</td>
                                        <td width="100">{issue.issueCategory}</td>
                                       <td width="100">{issue.issueStatus}</td>
                                        <td width="100">{issue.issueDate}</td>
                                        <td>   {issue.issueStatus=="completed" ?  
                                             
                                                    <button className="ml-5 text-white btn-success" onClick={()=> this.reopenIssue(issue.id)}>Reopen</button>
                                                :''}
                                                </td><td>   {issue.issueStatus=="completed"?  
                                             
                                             <button className="ml-5 text-white btn-success" onClick={()=>this.closeIssue(issue.id)}>close</button>
                                         :''}
                                         </td>
                                        <td>   {issue.issueStatus=="closed"&&issue.issueFeedback==null ?  
                                             
                                                    <button className="ml-5 text-white btn-success" onClick={()=>this.feedback(issue.id)}>Feedback</button>
                                                :''}
                                                </td></tr>
                                        </tbody>
                                    </div>
                                   
                                </Accordion.Collapse>
                                </table>
                        </Accordion>
                    </div>
                })}
            </Container>
            </div></div>
            </>
        )
    }
}