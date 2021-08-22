import axios from "axios";
import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router";


function CategoryLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const History = useHistory();

    const validate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/category/getCategoryRep',
            {
                "username": username
            }
        ).then(response => {
            console.log(response.data.password)
            if (password == response.data.password) {
                window.alert(`category representative logged in successfully`)
                sessionStorage.setItem("categoryRepLogged", true);
                sessionStorage.setItem("category", response.data.category);
                sessionStorage.setItem("catid", response.data.username);
                History.push("/categoryHome")
            }
            else if (response.data.password == undefined) {
                window.alert("Category Rep Id not present")
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
        <><div className="row" align="center" style={{backgroundImage:'url("https://www.yalgaar.io/Content/themes/Admin/img/login_full_bg.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
        <div className="col-sm-12">
            <br /><br /><br /><br />
            <div className="col-sm-4 bg-light"  style={{border:'1px solid white',"width":500,"padding":20}}>
                <br />
                <h2 className="text-dark m-6"> <i class="zmdi zmdi-lock-outline"></i>&nbsp;
                Category rep login</h2><br />
                <form onSubmit={validate} >
                    <label>User Id</label>&nbsp;<i class="zmdi zmdi-account-circle"></i>
                    <input type="text" placeholder="userid" className="form-control" onChange={(e) => setUsername(e.target.value)} required /><br />
                    <label>Password</label>&nbsp;<i class="zmdi zmdi-key"></i>
                    <input type="password" placeholder="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required /><br />
                    <Button type="submit" className="btn-success   my-3">login </Button>
                </form>
                 
            </div>
            </div></div>
        </>
    )
}
export default CategoryLogin;