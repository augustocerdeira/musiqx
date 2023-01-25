import React, {useState} from 'react'
import axios from 'axios';
import {useHistory, useParams, Link} from 'react-router-dom';

const Image = () => {
    const [photo, setPhoto] = useState('');
    const [banner, setBanner] = useState('');
    const [track1, setTrack1] = useState('');
    const [track2, setTrack2] = useState('');
    const [track3, setTrack3] = useState('');
    const [sc, setSc] = useState('');
    const history = useHistory();
    const { id } = useParams();
    const [errors, setErrors] = useState({

    }); 


    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', photo);
        axios.put('http://localhost:8000/api/image/'+ id, formData)

        .then(res => {
            console.log("response: ", res)
            
        })
        
        .catch(err=>{
            console.log(err)
            // history.push("/register")
                
            }) 
    }

    const onSubmitHandlerBanner = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('banner', banner);
        axios.put('http://localhost:8000/api/banner/'+ id, formData)

        .then(res => {
            console.log("response: ", res)
            
        })
        
        .catch(err=>{
            console.log(err)
                
            }) 
    }

    const onSubmitHandlerTrack = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('track1', track1);
        axios.put('http://localhost:8000/api/track/'+ id, formData)

        .then(res => {
            console.log("response: ", res)
            
        })
        
        .catch(err=>{
            console.log(err)
                
            }) 
    }

    const onSubmitHandlerTrack2 = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('track2', track2);
        axios.put('http://localhost:8000/api/track2/'+ id, formData)

        .then(res => {
            console.log("response: ", res)
            
        })
        
        .catch(err=>{
            console.log(err)
                
            }) 
    }

    const onSubmitHandlerTrack3 = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('track3', track3);
        axios.put('http://localhost:8000/api/track3/'+ id, formData)

        .then(res => {
            console.log("response: ", res)
            
        })
        
        .catch(err=>{
            console.log(err)
                
            }) 
    }

    const onSubmitSc = (e) => {
        axios.put('http://localhost:8000/api/users/'+ id, {
            sc
        })
        .then(res => console.log("response: ", res))
        .catch(err => console.error(err));
    }

        return (
            <div>
                <div className="d-flex justify-content-evenly" style={{ backgroundColor: "dimgray", heigth: 100, color: "black" }}>
                    <h1 >musiQX</h1>
                    <div>
                        <Link className="btn btn-outline-dark btn-sm" to={"/message/" + id}>Message</Link>
                    </div>
                    <div>
                        <Link className="btn btn-outline-dark btn-sm" to={"/logged/" + id}>Back to myPage</Link>
                    </div>
                    <div>
                        <Link className="btn btn-outline-dark btn-sm" to="/">Home</Link>
                    </div>
                </div>
                <div style={{ paddingBottom: "50px" }}></div>
                <div className="container" style={{ backgroundColor: "dimgray", width: 600, color: "#282c34" }}>
                <div >
                <h1>Update your Files</h1>
                </div>
                <div>
                <form onSubmit={onSubmitHandler} encType='multipart/form-data' className="container" style={{ backgroundColor: "#282c34", width: 500, color: "lightgray" }}>
            <p>
                <label className="form-label">Profile Picture</label>
                <input className="form-control"  type="file" accept=".png, .jpg, .jpeg" name="photo" onChange={(e) => setPhoto(e.target.files[0])} />
                
            </p>
            <input className="btn btn-light"  type="submit" value="upload profile"/>
        </form>
        <form onSubmit={onSubmitHandlerBanner} encType='multipart/form-data' className="container" style={{ backgroundColor: "#282c34", width: 500, color: "lightgray" }}>
            <p>
                <label className="form-label">Banner</label>
                <input className="form-control"  type="file" accept=".png, .jpg, .jpeg" name="banner" onChange={(e) => setBanner(e.target.files[0])} />
                
            </p>
            <input className="btn btn-light"  type="submit" value="upload banner"/>
        </form>
        <form onSubmit={onSubmitHandlerTrack} encType='multipart/form-data' className="container" style={{ backgroundColor: "#282c34", width: 500, color: "lightgray" }}>
            <p>
                <label className="form-label">Track</label>
                <input className="form-control"  type="file" accept=".mp3, .wav, .aiff" name="track1" onChange={(e) => setTrack1(e.target.files[0])} />
                
            </p>
            <input className="btn btn-light"  type="submit" value="upload track"/>
        </form>
        <form onSubmit={onSubmitHandlerTrack2} encType='multipart/form-data' className="container" style={{ backgroundColor: "#282c34", width: 500, color: "lightgray" }}>
            <p>
                <label className="form-label">Track</label>
                <input className="form-control"  type="file" accept=".mp3, .wav, .aiff" name="track2" onChange={(e) => setTrack2(e.target.files[0])} />
                
            </p>
            <input className="btn btn-light"  type="submit" value="upload track"/>
        </form>
        <form onSubmit={onSubmitHandlerTrack3} encType='multipart/form-data' className="container" style={{ backgroundColor: "#282c34", width: 500, color: "lightgray" }}>
            <p>
                <label className="form-label">Track</label>
                <input className="form-control"  type="file" accept=".mp3, .wav, .aiff" name="track3" onChange={(e) => setTrack3(e.target.files[0])} />
                
            </p>
            <input className="btn btn-light"  type="submit" value="upload track"/>
        </form>
        <form onSubmit={onSubmitSc} className="container" style={{ backgroundColor: "#282c34", width: 500, color: "lightgray" }}>
            <p>
                <label className="form-label">Your Link</label>
                <input className="form-control"  type="text"  name="sc" onChange={(e) => setSc(e.target.value)} />
                
            </p>
            <input className="btn btn-light"  type="submit" value="your link"/>
        </form>
        </div>
        </div>
            </div>
        );
};

export default Image;