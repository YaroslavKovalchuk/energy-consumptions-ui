import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../api/AuthenticationService';


const Main = (props) => {

    const [data, setData] = useState({});

    useEffect(() => {

        getUserInfo().then(
            response => {
                setData(response.data)
            }, error => {
                console.log(error)
            }
        )
    }, [])

    return (
        <div>
            <h1>Головна сторінка : {data.userName}</h1>
        </div>
    )
}

export default Main
