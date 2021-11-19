
import React, { useEffect, useState } from "react";
import { Socket } from "socket.io";
import io from 'socket.io-client';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';


const Message = (props) => {
    const [socket] = useState(() => io(':8000'));
    const [input, setInput] = useState("")
    const [message, setMessage] = useState([]);
    const { id } = useParams();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        socket.emit('textmsg', input)
    }


    useEffect(() => {
        console.log('Is this running?');
        socket.on('next text', data => {
            console.log(data)
            setMessage(prevtexts => { return [...prevtexts, data] })
        });

        return () => socket.disconnect(true);
    }, []);

    const inputMessage = (e) => {
        axios.put('http://localhost:8000/api/users/' + id, {
            $addToSet: { message }
        })
            .then(res => console.log(res))
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
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

                <div className='container' style={{ backgroundColor: "dimgray", width: 625, color: "black" }}>
                    <div style={{ backgroundColor: "gray", width: 600, color: "lightgray" }}>
                        <div style={{ margin: "10px", backgroundColor: "lightgray", width: 575, color: "#282c34" }}>
                        {
                            message.map((msg, i) => {
                                return <h2 key={i}>{msg}</h2>
                            })
                        }
                        <form onSubmit={onSubmitHandler} >
                            <label className="form-label"></label>
                            <input className="form-control" type="text" name="msg" onChange={(e) => setInput(e.target.value)} value={input} />
                            <input className="btn btn-outline-dark btn-sm" type="submit" onClick={(e) => { inputMessage(id) }} value="Your thoughts" />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Message;