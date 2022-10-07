import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    let navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("user");
        console.log("inside logout")
        navigate("/Login")
    })
}

export default Logout   