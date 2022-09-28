import React from 'react'
import "./Homepage.css"
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate();

    const logout = () => {
        googleLogout();
        navigate("/");
    }

  return (
    <div>
        <h1>Homepage</h1>
        <button className='btn' onClick={() => logout()} >Sign Out</button>
    </div>
  )
}

export default Homepage