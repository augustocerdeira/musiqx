import React, {useState} from 'react'
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState({

    }); 

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login',{
            email,
            password,
            
        }, {withCredentials: true})

        .then(res => {
            console.log("response: ", res)
            history.push("/message")
            
        })
        
        .catch(err=>{
            console.log(err)
            history.push("/")
            }) 
    }
        return (
            <div>
                <div>
                <h1>Login</h1>
                </div>
                <div>
                <form onSubmit={onSubmitHandler} className="container" style={{ backgroundColor: "#282c34", width: 500, color: "dimgray" }}>
            <p>
                <label className="form-label">Email:</label>
                <input className="form-control"  type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                {/* {
                        emailError ?
                    <p style={{color:'red'}}>{emailError}</p>:
                    ''
                } */}
            </p>
            <p>
                <label className="form-label">Password:</label>
                <input className="form-control"  type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                {/* {
                        passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p>:
                    ''
                } */}
            </p>
            <p className="d-flex justify-content-evenly">
            <Link className="btn btn-outline-light btn-sm"  to="/register">Register</Link>
            <Link className="btn btn-outline-light btn-sm"  to="/">Login</Link>
            {/* <input className="btn btn-outline-light btn-sm"  type="submit" value="Login"/> */}
            </p>
        </form>
        </div>
            </div>
        );
};

export default Login;