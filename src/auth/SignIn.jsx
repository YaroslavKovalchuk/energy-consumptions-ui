import React, { useState, useEffect } from "react";
import { getUserInfo } from '../api/AuthenticationService';
import Header from '../components/Header';
import Login from '../pages/Login';


const SignIn = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({ name: '' });

    const handleSingOut = () => {
        localStorage.clear();
        setUser({ name: '' });
    }

    const authenticate = () => {
        setIsLoading(true);
        getUserInfo().then(response => {
            setUser({ name: response.data.userName });
            setIsLoading(false);
        }, error => {
            setIsLoading(false);
            console.log(error);
        })
    }

    useEffect(() => {
        authenticate();
    }, []);

    return (
        <>
            {
                isLoading ?  console.log() : 
                    ((user.name === '')
                        ? <Login authenticate={authenticate} />
                        : <Header handleSingOut={handleSingOut} />)
            }

        </>
    )

}

export default SignIn;
