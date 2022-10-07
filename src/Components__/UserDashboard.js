import { useEffect, useState } from "react";

import authheader from "./Auth-Header";
import { BrowserRouter, useNavigate } from "react-router-dom";
import UserDashNavbar from "./UserDashNavbar";
import { Container } from "reactstrap";
import UserProfile from "./UserProfile";



const UserDashboard = () => {
    let navigate = useNavigate()

    const [authenticated, setauthenticated] = useState(false);

    useEffect(() => {
        const loggedInUser = authheader();
        if (loggedInUser === null) {
            setauthenticated(true);
        }
    }, []);


    if (authenticated) {
        navigate("/Login")
    } else {
        return (
            <div>
                <UserDashNavbar />
                <UserProfile/>
            </div>
        );
    }
};
export default UserDashboard;