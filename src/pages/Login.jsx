import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { userLogin } from '../api/AuthenticationService';
import { Form, Button, Container, Navbar } from 'react-bootstrap';
import '../css/style.css'
import logo from "./img/logo.png"


const Login = (props) => {

    const [values, setValues] = useState({
        userName: '',
        password: '',
        loggedIn: false
    })

    const changeHandler = (event) => {

        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }


    const submitHandler = (event) => {

        event.preventDefault()

        userLogin(values)
            .then(response => {

                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    props.authenticate();
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div className="blue-white-background-color">
            <header className="login-header">
                <img src={logo} alt="logo" className='header-logo' />
                <h3 className="header-site-name text-center">Система обліку та моніторингу виробинцтва </h3>
            </header>
            <main className="login-body">
                <div className="login-form">
                    <Container>
                        <h4 className='text-center'>Авторизація</h4>
                        <form onSubmit={submitHandler}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Введіть свій логін</Form.Label>
                                <Form.Control type="text" placeholder="Введіть логін" name="userName" value={values.userName} onChange={changeHandler} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Введіть свій пароль</Form.Label>
                                <Form.Control type="password" placeholder="Введіть пароль" name="password" value={values.password} onChange={changeHandler} />
                            </Form.Group>
                            <div className="d-grid mb-3  text-center">
                                <Button variant="primary" type="submit" size="lg">
                                    Увійти
                                </Button>
                            </div>
                        </form>
                    </Container>
                </div>
            </main>
        </div>
    )
}

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
}

export default Login;
