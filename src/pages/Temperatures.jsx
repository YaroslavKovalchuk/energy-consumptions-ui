import React, { useState, useEffect } from 'react'
import { Container, Row, Button, Nav } from 'react-bootstrap';
import FilterModalWindow from '../components/FilterModalWindow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink, Outlet } from "react-router-dom";


const Temperatures = () => {

    const [modalShow, setModalShow] = useState(false);

    const [rangeSelected, setRangeSelected] = useState({});

    const updateData = (value) => {
        setRangeSelected(value);
    }

    return (
        <div className='temp'>
            <Nav className='mr-auto sidebar-nav '>
                <NavLink as={Link} to="/temp/daub">Піч Дауб</NavLink>
                <NavLink as={Link} to="/temp/hecrone">Піч Хекроне</NavLink>
                <NavLink as={Link} to="/temp/hasborg">Піч Хасборг</NavLink>
                <Button onClick={() => setModalShow(true)} className="btn btn-info btn-filter">
                    <FontAwesomeIcon icon={faSliders} className='fa-1x' />  Фільтр
                </Button>
            </Nav>
            <Container>
                <Row>
                    <Outlet context={[rangeSelected, setRangeSelected]} />
                </Row>
            </Container>
            <FilterModalWindow
                show={modalShow}
                updateData={updateData}
                setModalShow={setModalShow} />
        </div>
    )

}

export default Temperatures;
