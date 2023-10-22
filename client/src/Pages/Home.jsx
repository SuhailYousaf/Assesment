import React, { Fragment, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "./Data";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Home = () => {
    const [data, setData] = useState(Data);
    const [sortOrder, setSortOrder] = useState("asc");
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const history = useNavigate();

    // Sort data based on the "firstName" column
    const sortData = () => {
        const sortedData = [...data];
        if (sortOrder === "asc") {
            sortedData.sort((a, b) => a.firstName.localeCompare(b.firstName));
            setSortOrder("desc");
        } else {
            sortedData.sort((a, b) => b.firstName.localeCompare(a.firstName));
            setSortOrder("asc");
        }
        setData(sortedData);
    };

    // Handle page change
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Get the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handleEdit = (
        id,
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        city,
        state,
        country,
        postalCode
    ) => {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("address", address);
        localStorage.setItem("city", city);
        localStorage.setItem("state", state);
        localStorage.setItem("country", country);
        localStorage.setItem("post", postalCode);
        localStorage.setItem("Id", id);
    };

    const handleDelete = (id) => {
        var index = Data.map(function (e) {
            return e.id;
        }).indexOf(id);
        Data.splice(index, 1);
        toast.success("Item Deleted successfully", {
            position: "top-right",
            autoClose: 3000,
        });

        history("/");
    };

    return (
        <Fragment>
            <div
                style={{ overflowX: "auto", margin: "2rem" }}
                className="responsive-table-container"
            >
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th onClick={sortData} className="sortable-header">
                                firstName
                            </th>
                            <th>lastName</th>
                            <th>email</th>
                            <th>phoneNumber</th>
                            <th>address</th>
                            <th>city</th>
                            <th>state</th>
                            <th>country</th>
                            <th>postalCode</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.state}</td>
                                <td>{item.country}</td>
                                <td>{item.postalCode}</td>
                                <td className="actions-cell">
                                    <Link to={`/edit`}>
                                        <Button
                                            onClick={() =>
                                                handleEdit(
                                                    item.id,
                                                    item.firstName,
                                                    item.lastName,
                                                    item.email,
                                                    item.phoneNumber,
                                                    item.address,
                                                    item.city,
                                                    item.state,
                                                    item.country,
                                                    item.postalCode
                                                )
                                            }
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                    &nbsp;
                                    <Button
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            <Link to="/create">
                <Button size="lg">Create</Button>
            </Link>

            <ToastContainer />
        </Fragment>
    );
};

export default Home;

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page-item ${
                            number === currentPage ? "active" : ""
                        }`}
                    >
                        <a
                            onClick={() => paginate(number)}
                            href="#"
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
