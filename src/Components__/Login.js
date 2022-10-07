import React, { useState } from "react";
import NavbarHeader from './NavbarHeader'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import { useNavigate } from "react-router-dom";
import BaseURL from "./BaseURL";

function Login() {
    let navigate = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const authenticate = (e) => {
        e.preventDefault();

        fetch(BaseURL+"/Authenticate", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
            .then(response => {
                if (response.status === 401) {
                    toast.error("Invalid credentials", { position: "top-center" })
                }
                return response.json()
            })
            .then(data => {
                if (data.token) {
                    localStorage.setItem("user", JSON.stringify(data.token));
                }
                toast.success("Login Success", { position: "top-center" })
                navigate("/UserProfile")
            })

    }

    return (
        <div>
            <ToastContainer />
            <NavbarHeader />
            <div className="row">
                <div className="col">
                    <div className='border border mt-2 m-auto p-5 rounded' style={{ width: "50%" }}>
                        <form>
                            <div class="inputpadding">
                                <h3 className=''>Login</h3>
                            </div>
                            <div class="form-group inputpadding">

                                <label for="username">ENTER USERNAME</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="form-control form-control-lg border-dark" id="username" placeholder="Enter username" />
                            </div>

                            <div class="form-group inputpadding">
                                <label for="password">ENTER PASSWORD</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control form-control-lg border-dark" id="password" placeholder="Enter password" />
                            </div>


                            <div className='text-center p-4'>
                                <button className='btn-dark btn-lg' onClick={(e) => { authenticate(e) }}>Sign In</button>
                            </div>

                            <div className="text-center">
                                <a href="Register" className="text-dark" >Don't have Account</a>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login