import React, { useEffect, useState } from "react";
import { getUsers, getUserById } from "../context/ApiContext"
import Card from "../layout/Card"
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        let users = await getUsers()
        setUsers(users);
    }

    useEffect(() => {
        fetchUsers();

    }, [])

    // console.log(users)
    // console.log(users.data)

    function clientHour(hour) {
        var date = new Date(hour)
        return (
            <span><strong>Adicionado:</strong> {date.toLocaleDateString()} - {date.toLocaleTimeString()}</span>
        )
    }


    return (
        <div className="App">
            <h1>Agenda</h1>
            <div className="Cards">
                {users.map((user) => (
                    <Card name={user.name} img={user.image} >
                        <div><strong>Telefone:</strong> {user.phone}</div>
                        <div><strong>Endereço:</strong> {user.address} - {user.number}</div>
                        <div>{clientHour(user.createdAt)}</div>
                    </Card>
                ))}
            </div>

        </div>
    )
}