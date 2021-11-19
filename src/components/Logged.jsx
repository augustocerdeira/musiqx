
import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Login from "./Login";
import axios from 'axios';


const Logged = (props) => {
    const [clicked, setClicked] = useState(false);
    const [username, setUsername] = useState("");
    const [usertype, setUsertype] = useState('');
    const [location, setLocation] = useState('');
    const [photo, setPhoto] = useState('');
    const [banner, setBanner] = useState('');
    const [track1, setTrack1] = useState('');
    const [track2, setTrack2] = useState('');
    const [track3, setTrack3] = useState('');
    const [sc, setSc] = useState('');
    const { id } = useParams();

    useEffect(() => {

        axios.get('http://localhost:8000/api/users/' + id, { withCredentials: true })
            .then(res => {
                console.log(res)
                setUsername(res.data.user.username);
                setUsertype(res.data.user.usertype);
                setLocation(res.data.user.location);
                setPhoto(res.data.user.photo);
                setBanner(res.data.user.banner);
                setTrack1(res.data.user.track1);
                setTrack2(res.data.user.track2);
                setTrack3(res.data.user.track3);
                setSc(res.data.user.sc);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-evenly" style={{ backgroundColor: "dimgray", heigth: 100, color: "black" }}>
                <h1 >musiQX</h1>
                <div>
                <Link className="btn btn-outline-dark btn-sm" to={"/message/" + id}>Message</Link>
                </div>
                <div>
                <Link className="btn btn-outline-dark btn-sm" to={"/image/" + id}>Update Photo</Link>
                </div>
                <div>
                    <Link className="btn btn-outline-dark btn-sm" to="/">Back</Link>
                </div>
            </div>
            <div style={{ paddingBottom: "50px" }}></div>
            <div>
                <div className="d-flex justify-content-evenly">
                    <div className="d-block">
                        <img src={`http://localhost:8000/${photo}`} alt="" width="200px" />
                        <p>{username}</p>
                        <p>{usertype}</p>
                        <p>{location}</p>
                    </div>
                    <div>
                        <img src={`http://localhost:8000/${banner}`} alt="" width="600px" />
                    </div>
                </div>
                <div style={{ paddingBottom: "50px" }}></div>
                <div className="d-block">
                    <div>

                    {track1 ?
                    <p>
                        <audio controls> <source src={`http://localhost:8000/${track1}`} /></audio>
                        <p></p>
                        <Link className="btn btn-outline-light btn-sm" to="/pay">Buy Track</Link>
                    </p>
                        :
                        <Link className="btn btn-outline-light btn-sm" to={"/image/" + id}>Add Track</Link>
                    }

                    {track2 ?
                        <p>
                        <audio controls> <source src={`http://localhost:8000/${track2}`} /></audio>
                        <p></p>
                        <Link className="btn btn-outline-light btn-sm" to="/pay">Buy Track</Link>
                    </p>
                        :
                        <Link className="btn btn-outline-light btn-sm" to={"/image/" + id}>Add Track</Link>
                    }

                    {track3 ?
                        <p>
                        <audio controls> <source src={`http://localhost:8000/${track3}`} /></audio>
                        <p></p>
                        <Link className="btn btn-outline-light btn-sm" to="/pay">Buy Track</Link>
                    </p>
                        :
                        <Link className="btn btn-outline-light btn-sm" to={"/image/" + id}>Add Track</Link>
                    }
                    </div>
                    <div></div>
                    
                </div>
            </div>
        </div>

    )
}


export default Logged;