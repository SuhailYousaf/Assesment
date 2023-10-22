import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Pages/Data";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Add() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [post, setPost] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const uniqueId = uuid();
        const a = name;
        const b = lastName;
        const c = email;
        const d = phone;
        const e = address;
        const f = city;
        const g = state;
        const h = country;
        const i = post;

        Data.push({
            id: uniqueId,
            firstName: a,
            lastName: b,
            email: c,
            phoneNumber: d,
            address: e,
            city: f,
            state: g,
            country: h,
            postalCode: i,
        });

        toast.success("Item created successfully", {
            position: "top-right",
            autoClose: 3000,
        });

        navigate("/");
    };

    return (
        <div>
            <Form className="d-grid gap-1" style={{ margin: "2rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                        type="text"
                        placeholder="Enter FirstName"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Control
                        type="text"
                        placeholder="Enter LastName"
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter Email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control
                        type="text"
                        placeholder="Enter Number"
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Control
                        type="text"
                        placeholder="Enter Address"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Control
                        type="text"
                        placeholder="Enter City"
                        required
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formState">
                    <Form.Control
                        type="text"
                        placeholder="Enter State"
                        required
                        onChange={(e) => setState(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Control
                        type="text"
                        placeholder="Enter Country"
                        required
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPost">
                    <Form.Control
                        type="text"
                        placeholder="Enter PostalCode"
                        required
                        onChange={(e) => setPost(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={handleSubmit} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Add;
