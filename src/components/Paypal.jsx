import React, { useState } from 'react';
import ReactDOM from "react-dom"
import { Link, useParams } from 'react-router-dom';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


function Paypal() {
    const [price, setPrice] = useState(0);
    const { id } = useParams();
    console.log(price)

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: "1.99",
                    },
                },
            ],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture();
    };

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
            <div className="d-flex justify-content-evenly">
            <div style={{ paddingBottom: "50px" }}></div>
            <div style={{ backgroundColor: "dimgray", width: 425, padding: "5px", color: "black" }}>
                <div style={{ backgroundColor: "#282c34", margin: "10px", width: 400, color: "black" }}>
                    <PayPalButton
                        createOrder={(data, actions) => createOrder(data, actions)}
                        onApprove={(data, actions) => onApprove(data, actions)}
                    />
                </div>
                </div>
                <p>

                    <button className="btn btn-outline-light btn-sm" onClick={(e) => { setPrice(1.99) }}>Buy Track 1 $1.99</button>
                </p>
                <p>

                    <button className="btn btn-outline-light btn-sm" onClick={(e) => { setPrice(1.89) }}>Buy Track 2 $1.99</button>
                </p>
                <p>

                    <button className="btn btn-outline-light btn-sm" onClick={(e) => { setPrice(1.79) }}>Buy Track 3 $1.99</button>
                </p>
            </div>
            
        </div>
    );
}

export default Paypal;