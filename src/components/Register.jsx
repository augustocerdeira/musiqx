import React, {useState} from 'react'
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [usertype, setUsertype] = useState('Artist');
    const [location, setLocation] = useState('');
    const [photo, setPhoto] = useState('');
    const [banner, setBanner] = useState('');
    const history = useHistory();
    const [errors, setErrors] = useState({

    }); 
    const [usernameError, setUsernameError] =useState("");
    const [emailError, setEmailError] =useState("");
    const [passwordError, setPasswordError] =useState("");
    const [confirmError, setConfirmError] =useState("");
    const [usertypeError, setUsertypeError] =useState("");
    const [locationError, setLocationError] =useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(email.length < 1){
            setUsernameError("Username is required!");
        }else{
            setUsernameError("");
        }
        if(email.length < 1){
            setEmailError("Email is required!");
        }else{
            setEmailError("");
        }
        if(password.length < 1){
            setPasswordError("Password is required!");
        }else{
            setPasswordError("");
        }
        if(confirm.length < 1){
            setConfirmError("Confirm is required!");
        }else{
            setConfirmError("");
        }
        if(usertype.length < 1){
            setUsertypeError("Type is required!");
        }else{
            setUsertypeError("");
        }
        if(location.length < 1){
            setLocationError("location is required!");
        }else{
            setLocationError("");
        }

        axios.post('http://localhost:8000/api/register',
        {
            username,
            email,
            password,
            confirm,
            location,
            usertype,
            
        }, {withCredentials: true})

        .then(res => {
            console.log("-----//////" + username)
            console.log("response: ", res)
            if(res.data.errors){
                setErrors(res.data.errors)
            }else{
                history.push("/")
            }
            
        })
        
        .catch(err=>{
            console.log(err)
            history.push("/register")
            }) 
    }
        return (
            <div>
                <div className="d-flex justify-content-evenly" style={{ backgroundColor: "dimgray", heigth: 100, color: "black" }}>
            <h1 >musiQX</h1>
            <div>
            <input type="search" style={{ color: "black" }} placeholder="Search" className="btn btn-outline-dark btn-sm"/>
            </div>
            <div>
            <Link className="btn btn-outline-dark btn-sm"  to="/">Back</Link>
            </div>
            </div>
            <div style={{paddingBottom: "50px"}}></div>
                <div className='container' style={{ backgroundColor: "dimgray", width: 700, color: "black" }}>
                <h1>Register</h1>
                <div>
                <form onSubmit={onSubmitHandler} encType='multipart/form-data' className="container" style={{ backgroundColor: "#282c34", width: 500, color: "lightgray" }}>
            
            <p>
                <label className="form-label">UserName</label>
                <input className="form-control"  type="text" name="username" onChange={(e) => setUserName(e.target.value)} value={username}/>
                {
                        usernameError ?
                    <p style={{color:'red'}}>{usernameError}</p>:
                    ''
                }
            </p>
            <p>
                <label className="form-label">Email:</label>
                <input className="form-control"  type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                {
                        emailError ?
                    <p style={{color:'red'}}>{emailError}</p>:
                    ''
                }
            </p>
            <p>
                <label className="form-label">Password:</label>
                <input className="form-control"  type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                {
                        passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p>:
                    ''
                }
            </p>
            <p>
                <label className="form-label">Confirm Password:</label>
                <input className="form-control"  type="password" name="confirm" onChange={(e) => setConfirm(e.target.value)} value={confirm}/>
                {
                        confirmError ?
                    <p style={{color:'red'}}>{confirmError}</p>:
                    ''
                }
            </p>
            <p>
                <label className="form-label">Type</label>
                <select className="form-control"  type="text" name="usertype" onChange={(e) => setUsertype(e.target.value)} value={usertype}>
                <option value="artist">Artist</option>
                <option value="promoter">Promoter</option>
                <option value="label">Label</option>
                </select>
                {
                        usertypeError?
                    <p style={{color:'red'}}>{usertypeError}</p>:
                    ''
                }
            </p>
            <p>
                <label className="form-label">Location</label>
                <input className="form-control"  type="text" name="location" onChange={(e) => setLocation(e.target.value)} value={location}/>
                {
                        locationError?
                    <p style={{color:'red'}}>{locationError}</p>:
                    ''
                }
            </p>
            <input className="btn btn-outline-light btn-sm"  type="submit" value="Register"/>
        </form>
        </div>
                </div>
            </div>
        );
};

export default Register;