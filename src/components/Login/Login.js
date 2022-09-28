import React from 'react'
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const responseGoogleSuccess = (response) => {
        if (response != null) {
            navigate("/homepage");
        }
    };

    const responseGoogleFailure = (response) => {
        if (response != null) {
            navigate("/");
        }
    };

    return (
        <div>
            <GoogleLogin
                onSuccess={responseGoogleSuccess}
                onError={() => responseGoogleFailure}
                width="280px"
                theme="filled_blue"
            />
        </div>
    )
}

export default Login