import NavbarHeader from './NavbarHeader'
import { useEffect, useState } from 'react';
import '../App.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BaseURL from './BaseURL';

function RegisterUser() {

    useEffect(() => {
        getCoutries();
    }, []);


    const [username, setUsername] = useState("");
    const [fullname, setfullname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setConatct] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const [password, setPassword] = useState("")
    const [comfirmpassword, setComfirmpassword] = useState("")

    const [stateData, setStatedata] = useState([])
    const [coutries, setCountries] = useState([])


    function resgister(e) {
        e.preventDefault();

        fetch(BaseURL+"/PublicAPI/RegisterUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                fullname: fullname,
                email: email,
                contact: contact,
                age: age,
                gender: gender,
                state: state,
                country: country,
                password: password,
                comfirmpassword: comfirmpassword
            })
        })
            .then(response => {
                if (response.status === 200) {
                    toast.success("User Successfully Registered", { position: 'top-center' })
                } else {
                    toast.error("Please Enter Proper Data", { position: 'top-center' })
                }
                return response.json()
            })
            .catch((error) => {
                console.log("erorororor", error)
            });

    }


    function getStates(id) {
        fetch(BaseURL+"/PublicAPI/GetStateById?id=" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status === 200) {
                toast.success("State updated")
            }
            return response.json()
        })
            .then(data => {
                console.log(data)
                setStatedata(data)

            })
    }

    function getCoutries() {
        fetch(BaseURL+"/PublicAPI/GetAllCountries", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status === 200) {
                toast.success("Country Added")
            }
            return response.json()
        })
            .then(data => {
                console.log(data)
                setCountries(data)

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
                            <div className="inputpadding">
                                <h3 className=''>Let's Onboard you</h3>
                            </div>
                            <div className="form-group inputpadding">

                                <label>ENTER USERNAME</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control form-control-lg border-dark" id="username" placeholder="Enter username here" />
                            </div>

                            <div className="form-group inputpadding">
                                <label>ENTER FULL NAME</label>
                                <input value={fullname} onChange={(e) => setfullname(e.target.value)} type="text" className="form-control form-control-lg border-dark" id="fullname" placeholder="Enter full name here" />
                            </div>

                            <div className="form-group inputpadding">
                                <label>ENTER EMAIL</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control form-control-lg border-dark" id="email" placeholder="Enter email here" />
                            </div>

                            <div className="form-group inputpadding">
                                <label>ENTER PASSWORD</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control form-control-lg border-dark" id="password" placeholder="Enter password here" />
                            </div>

                            <div className="form-group inputpadding">
                                <label>ENTER CONFIRM PASSWORD</label>
                                <input value={comfirmpassword} onChange={(e) => setComfirmpassword(e.target.value)} type="password" className="form-control form-control-lg border-dark" id="cpassword" placeholder="Enter password again here" />
                            </div>


                            <div className="form-group inputpadding">
                                <label>AGE</label>
                                <input value={age} onChange={(e) => setAge(e.target.value)} type="number" className="form-control form-control-lg border-dark" id="age" placeholder='Enter age here' />
                            </div>


                            <div className='row inputpadding'>
                                <div className='col'>
                                    <select value={gender} onChange={(e) => setGender(e.target.value)} className='form-control form-control-lg border-dark'>
                                        <option selected value={""}>Select Gender</option>
                                        <option value={"Male"}>Male</option>
                                        <option value={"Female"}>Female</option>    
                                    </select>
                                </div>
                                <div className='col input-group'>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-dark" id="basic-addon1">+91</span>
                                    </div>
                                    <input value={contact} onChange={(e) => setConatct(e.target.value)} type="number" className="form-control form-control-lg border-dark" placeholder='Mobile number' />
                                </div>
                            </div>

                            <div className='row inputpadding'>

                                <div className='col input-group'>
                                    <select value={country} onChange={(e) => { setCountry(e.target.value); getStates(e.target.value) }} className='form-control form-control-lg border-dark'>
                                        <option selected>Select country</option>
                                        {coutries.map((siglecountry) => (
                                            <option value={siglecountry.id}>
                                                {siglecountry.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className='col'>
                                    <select value={state} onChange={(e) => setState(e.target.value)} className='form-control form-control-lg border-dark'>
                                        <option selected>Select state</option>

                                        {stateData.map((siglestate) => (
                                            <option value={siglestate.id}>
                                                {siglestate.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className='text-center p-4'>
                                <button className='btn-dark btn-lg' onClick={(e) => { resgister(e) }}>Sign Up</button>
                                <p className='p-2'><u>Or you can also</u></p>
                                <button className='btn-outline-danger btn-lg'>Sign in with Google</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default RegisterUser


