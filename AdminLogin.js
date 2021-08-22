import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

function AdminLogin() {
    const [userId, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const History = useHistory();

    const validate = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/api/admin/getAdminPassword',
            {
                "adminId": userId
            }
        ).then(response => {
            if (password == response.data) {
                window.alert(`logged in successfully`)
                sessionStorage.setItem("adminLogged", true);
                History.push("/adminHome")
            }
            else if (response.data == "unavailable") {
                window.alert("UserId not present")
            }
            else {
                window.alert(`password not matching`)
            }
        }).catch(error => {
            console.log(error, "catch block")
        });

    }
    return (
        <>,
        <div className="row" align="center" style={{backgroundImage:'url("https://www.yalgaar.io/Content/themes/Admin/img/login_full_bg.jpg")', backgroundSize:'cover',backgroundRepeat:'no-repeat',height:920}}>
            <div className="col-sm-12">
            <br /><br /><br /><br />

            <div className="col-sm-4 bg-light"  style={{border:'1px solid white',"width":500,"padding":20}}>
                <br />
                <h2 className="text-dark m-6"><i class="zmdi zmdi-lock-outline"></i>&nbsp;Admin login</h2><br />
                <form onSubmit={validate}>
                    <input type="text" placeholder="userId" className="form-control" onChange={(e) => setUserid(e.target.value)} required /><br />
                    <input type="password" placeholder="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required /><br />
                    <input className="bg-success" type="submit" value="Login" />
                </form>
            </div>
            </div>
            </div>
        </>
    )
}
export default AdminLogin;