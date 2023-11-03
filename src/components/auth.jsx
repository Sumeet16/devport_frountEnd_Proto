import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const auth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const URL_PARAMS = new URLSearchParams(window.location.search);
        const code = URL_PARAMS.get('code');

        async function getData(code) {
            const res = await fetch("http://localhost:3000/oauth-callback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code
                })
            })


            const result = await res.json();
            console.log(result);
            if (result.token) {
                localStorage.setItem("token", result.token)
                localStorage.setItem("name", result.name)
                navigate("/home", { replace: true })
            }
        }

        getData(code)

        return () => {

        };
    }, []);
    return (
        <div>auth</div>
    )
}

export default auth