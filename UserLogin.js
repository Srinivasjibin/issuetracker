import axios from "axios";
import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function UserLogin() {
    const [userId, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const History = useHistory();

    const validate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/user/getUserPassword',
            {
                "username": userId
            }
        ).then(response => {
            if (password == response.data) {
                window.alert(`logged in successfully`)
                sessionStorage.setItem("userLogged", true);
                sessionStorage.setItem("userId", userId);
                History.push("/userHome")
            }
            else if (response.data == "unavailable") {
                window.alert("User Id not present")
            }
            else {
                window.alert(`password not matching`)
            }
        }).catch(error => {
            window.alert("Network error")
            console.log(error, "catch block")
        });

    }
    return (
        <>    <div className="row" align="center" style={{backgroundImage:'url("https://www.yalgaar.io/Content/themes/Admin/img/login_full_bg.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
        <div className="col-sm-12">
            <br /><br /><br /><br />
            <div className="col-sm-4 bg-light"  style={{border:'px solid white',"width":500,"padding":20}}>
                <br />
                <h2 className="text-dark m-6"><i class="zmdi zmdi-lock-outline"></i>&nbsp;
                User login</h2><br />
                <form onSubmit={validate} style={{"padding":20}}>
                    <label>User Id</label>&nbsp;<i class="zmdi zmdi-account-circle"></i>
                    <input type="text" placeholder="userid" className="form-control" onChange={(e) => setUserid(e.target.value)} required /><br />
                    <label>Password</label>&nbsp;<i class="zmdi zmdi-key"></i>
                    <input type="password" placeholder="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required /><br />
                    <Button type="submit" className="btn-success">login </Button>
                </form><br/>
               
                    
                   <div className="row">
                        <Link to="/ResetUserID" style={{textDecoration:'none',color:'black'}}>Forgot Userid ?</Link><br/>
                        <Link to="/ResetUserPassword" style={{textDecoration:'none',color:'black'}}>Forgot password ?</Link>
                        </div>
               
            </div>
            </div></div>
        </>
    )
}
export default UserLogin;