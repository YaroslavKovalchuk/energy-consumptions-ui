import React, {useState} from "react";
import axios from "axios";

export const getToken = () =>{
    return localStorage.getItem('token');
}

export const userLogin = (authRequest) =>{
    return axios.post("http://localhost:8080/auth/login", authRequest)
}
export const getUserInfo = () =>{
    return axios({
        method:'GET',
        url:`http://localhost:8080/auth/userinfo`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}

// const config = {
//     headers: {
//         Authorization: 'Bearer ' + localStorage.getItem('token')
//     }
// }

// axios.post("http://localhost:8080/auth/login", this.state)
// .then(response =>{
//     console.log(response.data.token)

//     if(response.status === 200){

//         localStorage.setItem('token', response.data.token);
        
//         this.setState({loggedIn : true})
//     }

// })
// .catch(error => {
//     console.log(error)
// })

// axios.get("http://localhost:8080/auth/userinfo",config).then(
//             response =>{

//                 console.log(response);  

//                 this.setState({userName : response.data.userName})

//             }, error => {

//                 this.setState({authotized : false})

//                 console.log(error)
//             }
//         )