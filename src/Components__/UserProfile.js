import React, { useEffect, useState } from "react";
import { Button, Card, CardText, CardTitle, Container, Table } from "reactstrap";
import authheader from "./Auth-Header";
import BaseURL from "./BaseURL";


const UserProfile = () => {
    const [userprofile, setUserProfile] = useState([])

    useEffect(() => {
        getuserdata()
    }, [])

    const getuserdata = (token) => {
        fetch(BaseURL+"/PrivateAPI/GetUserProfile", {
            method: "GET",
            headers: authheader()
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            setUserProfile(data)
        })
    }

    return (

        <Card body>
            <CardTitle><h3>User Profile</h3></CardTitle>
            <CardText>
                <Table className="text-left" bordered>
                    <tbody>
                        <tr>
                            <td className="font-weight-bold">UserName</td>
                            <td>{userprofile.username}</td>
                        </tr>

                        <tr>
                            <td className="font-weight-bold">Full Name</td>
                            <td>{userprofile.fullname}</td>
                        </tr>

                        <tr>
                            <td className="font-weight-bold">Email</td>
                            <td>{userprofile.email}</td>
                        </tr>

                        <tr>
                            <td className="font-weight-bold">Contact</td>
                            <td>{userprofile.contact}</td>
                        </tr>

                        <tr>
                            <td className="font-weight-bold">Gender</td>
                            <td>{userprofile.gender}</td>
                        </tr>

                        <tr>
                            <td className="font-weight-bold">Age</td>
                            <td>{userprofile.age}</td>
                        </tr>

                        <tr>
                            <td className="font-weight-bold">Country</td>
                            <td>{userprofile.country}</td>
                        </tr>

                        <tr>
                            <td className="font-weight-bold">State</td>
                            <td>{userprofile.state}</td>
                        </tr>

                    </tbody>
                </Table>
            </CardText>
                <Button color="info">Update</Button>
        </Card>

    )
}

export default UserProfile