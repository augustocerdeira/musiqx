
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Login from "./Login";
import axios from 'axios';


const Dash = (props) => {
    const [clicked, setClicked] = useState(false)
    const [user, setUser] = useState('')

    // useEffect(() => {

    //     axios.get('http://localhost:8000/api/user', {withCredentials: true})
    //     .then(res =>{
    //         console.log(res)
    //         setUser(res.data.user)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }, [])

    return (
        <div>
            <div className="d-flex justify-content-evenly" style={{ backgroundColor: "dimgray", heigth: 100, color: "black" }}>
                <h1 >musiQX</h1>
                <div>
                    <input type="search" style={{ color: "black" }} placeholder="Search" className="btn btn-outline-dark btn-sm" />
                </div>
                <div>
                    <button className="btn btn-outline-dark btn-sm" onClick={(e) => { setClicked(true) }}>Login</button>
                    {clicked === true ?
                        <div>
                            <p><Login /></p>
                        </div>
                        : ""}
                </div>
            </div>
            <div style={{ paddingBottom: "50px" }}></div>

            <h1 className="border border-secondary" style={{ color: "lightgray" }}>Where to connect, exchange music, gigs and more </h1>

            <div style={{ paddingBottom: "50px" }}></div>

            <div className="d-flex justify-content-evenly container" style={{ backgroundColor: "dimgray", color: "black" }}>
                {props.user.map((user, index) => {
                    return <p key={index} style={{ backgroundColor: "#282c34", color: "lightgray" }}>
                        <p >
                            <p className="d-block">
                                <img src={`http://localhost:8000/${user.photo}`} alt="" width="125px" />
                                <p>{user.username}</p>
                            </p>
                            <Link class="btn btn-outline-light btn-sm" to={"/message/" + user._id}>message me</Link>
                            <Link class="btn btn-outline-light btn-sm" to={"/logged/" + user._id}>my page</Link>
                        </p>
                    </p>
                })}
            </div>
        </div>

    )
}


export default Dash;