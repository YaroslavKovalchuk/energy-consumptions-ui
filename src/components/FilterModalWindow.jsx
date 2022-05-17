import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import uk from "date-fns/locale/uk"


const FilterModalWindow = (props) => {

    const [dateRangeSelected, setDateRangeSelected] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const handleClose = () => props.setModalShow(false);

    const applyDateRangeFilter= () => {
        props.updateData(dateRangeSelected[0]);
        handleClose();
    }

    return (
        <Modal
            show={props.show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Фільтр
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="filter-body">
                <div>
                    <h4 className='text-center'>Фільтрувати за датою</h4>
                    <DateRange className='filter-calendar'
                        editableDateInputs={true}
                        onChange={item => setDateRangeSelected([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dateRangeSelected}
                        locale={uk}
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={applyDateRangeFilter}
                >Застосувати</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default FilterModalWindow;