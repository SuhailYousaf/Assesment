import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../Pages/Data";
import { useNavigate } from "react-router-dom";

function Edit() {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [post, setPost] = useState("");
    const [id, setId] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        // Load data from localStorage when the component mounts
        setName(localStorage.getItem("firstName"));
        setLastName(localStorage.getItem("lastName"));
        setEmail(localStorage.getItem("email"));
        setPhone(localStorage.getItem("phoneNumber"));
        setAddress(localStorage.getItem("address"));
        setCity(localStorage.getItem("city"));
        setState(localStorage.getItem("state"));
        setCountry(localStorage.getItem("country"));
        setPost(localStorage.getItem("post"));
        setId(localStorage.getItem("Id"));
    }, []);
    var index = Data.map(function (event) {
        return event.id;
    }).indexOf(id);

    const handleSubmit = (event) => {
        event.preventDefault();

        let a = Data[index];
        a.firstName = name;
        a.lastName = lastName;
        a.email = email;
        a.phoneNumber = phone;
        a.address = address;
        a.city = city;
        a.state = state;
        a.country = country;
        a.postalCode = post;
        console.log("a.post",a.post)
        navigate("/");
    };

    return (
        <div>
            <Form className="d-grid gap-1" style={{ margin: "5rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                        type="text"
                        placeholder="Enter FirstName"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Control
                        type="text"
                        placeholder="Enter LastName"
                        value={lastName}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter Email"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Control
                        type="text"
                        placeholder="Enter Number"
                        value={phone}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Control
                        type="text"
                        placeholder="Enter Address"
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCity">
                    <Form.Control
                        type="text"
                        placeholder="Enter City"
                        value={city}
                        required
                        onChange={(e) => setCity(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formState">
                    <Form.Control
                        type="text"
                        placeholder="Enter State"
                        value={state}
                        required
                        onChange={(e) => setState(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Control
                        type="text"
                        placeholder="Enter Country"
                        value={country}
                        required
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPost">
                    <Form.Control
                        type="text"
                        placeholder="Enter PostalCode"
                        value={post}
                        required
                        onChange={(e) => setPost(e.target.value)}
                    />
                </Form.Group>
                <Button onClick={handleSubmit} type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
}

export default Edit;
