import React, { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";
import { getDaubTunnelOvenData, getDaubTunnelOvenDataWithFilterDate } from '../api/OvensDataService';
import { CloseButton, Button, Table } from 'react-bootstrap';
import Pagination from '../components/Pagination';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp, faCircleDown } from '@fortawesome/free-regular-svg-icons'


const TableDaubTemp = () => {

    const [pageSelected, setPageSelected] = useState(1);
    const [filterParams, setFilterParams] = useState({});
    const [totalPages, setTotalPages] = useState();
    const [data, setData] = useState([]);
    const [rangeSelected, setRangeSelected] = useOutletContext();

    const cancelFilter = () => setRangeSelected({});

    const getDaubTunnelOvenDataPages = () => {

        let pageRequest = {
            numberOfPages: pageSelected,
            sizeOfPage: "30"
        }

        if (Object.keys(rangeSelected).length != 0) {

            let dateFilterParam = {
                startDate: format(new Date(rangeSelected.startDate.toISOString()), "yyyy-MM-dd 00:00:00"),
                endDate: format(new Date(rangeSelected.endDate.toISOString()), "yyyy-MM-dd 23:59:59"),
            };

            let parseDateFilter = "startDate=" + dateFilterParam.startDate + " &endDate=" + dateFilterParam.endDate;

            setFilterParams(dateFilterParam);

            getDaubTunnelOvenDataWithFilterDate(pageRequest, parseDateFilter).then(response => {
                setData(response.data.content);
                setTotalPages(response.data.totalPages);
            });

        } else {

            getDaubTunnelOvenData(pageRequest).then(response => {
                setData(response.data.content);
                setTotalPages(response.data.totalPages);
            });
        }
    }



    useEffect(() => {

        getDaubTunnelOvenDataPages();

    }, [pageSelected, rangeSelected]);

    const displayDaubTable = data.map(item => (
        <tr key={item.id.toString()}>
            <th>{format(new Date(item.dateTime), "dd.MM.yyyy   HH:mm:ss")}</th>
            <th>{item.transporterSpeed}</th>
            <th>
                {item.temperaturesSetpoints.firstCeilZone} / {item.temperaturesSensors.firstCeilZone}
                {((item.temperaturesSetpoints.firstCeilZone - item.temperaturesSensors.firstCeilZone) >= 3) ? <FontAwesomeIcon icon={faCircleDown} /> : ""}
                {((item.temperaturesSensors.firstCeilZone - item.temperaturesSetpoints.firstCeilZone) >= 3) ? <FontAwesomeIcon icon={faCircleUp} /> : ""}
            </th>
            <th>
                {item.temperaturesSetpoints.secondCeilZone} / {item.temperaturesSensors.secondCeilZone}
                {((item.temperaturesSetpoints.secondCeilZone - item.temperaturesSensors.secondCeilZone) >= 3) ? <FontAwesomeIcon icon={faCircleDown} /> : ""}
                {((item.temperaturesSensors.secondCeilZone - item.temperaturesSetpoints.secondCeilZone) >= 3) ? <FontAwesomeIcon icon={faCircleUp} /> : ""}
            </th>
            <th>
                {item.temperaturesSetpoints.thirdCeilZone} / {item.temperaturesSensors.thirdCeilZone}
                {((item.temperaturesSetpoints.thirdCeilZone - item.temperaturesSensors.thirdCeilZone) >= 3) ? <FontAwesomeIcon icon={faCircleDown} /> : ""}
                {((item.temperaturesSensors.thirdCeilZone - item.temperaturesSetpoints.thirdCeilZone) >= 3) ? <FontAwesomeIcon icon={faCircleUp} /> : ""}
            </th>
            <th>
                {item.temperaturesSetpoints.firstFloorZone} / {item.temperaturesSensors.firstFloorZone}
                {((item.temperaturesSetpoints.firstFloorZone - item.temperaturesSensors.firstFloorZone) >= 3) ? <FontAwesomeIcon icon={faCircleDown} /> : ""}
                {((item.temperaturesSensors.firstFloorZone - item.temperaturesSetpoints.firstFloorZone) >= 3) ? <FontAwesomeIcon icon={faCircleUp} /> : ""}
            </th>
            <th>
                {item.temperaturesSetpoints.secondFloorZone} / {item.temperaturesSensors.secondFloorZone}
                {((item.temperaturesSetpoints.secondFloorZone - item.temperaturesSensors.secondFloorZone) >= 3) ? <FontAwesomeIcon icon={faCircleDown} /> : ""}
                {((item.temperaturesSensors.secondFloorZone - item.temperaturesSetpoints.secondFloorZone) >= 3) ? <FontAwesomeIcon icon={faCircleUp} /> : ""}
            </th>
            <th>
                {item.temperaturesSetpoints.thirdFloorZone} / {item.temperaturesSensors.thirdFloorZone}
                {((item.temperaturesSetpoints.thirdFloorZone - item.temperaturesSensors.thirdFloorZone) >= 3) ? <FontAwesomeIcon icon={faCircleDown} /> : ""}
                {((item.temperaturesSensors.thirdFloorZone - item.temperaturesSetpoints.thirdFloorZone) >= 3) ? <FontAwesomeIcon icon={faCircleUp} /> : ""}
            </th>
        </tr>
    ));

    return (
        <>

            {
                (Object.keys(rangeSelected).length != 0) ?
                    // <a className="fliter-mark">{format(new Date(filterParams.startDate), "dd.MM.yyyy   HH:mm:ss")} - {format(new Date(filterParams.endDate), "dd.MM.yyyy   HH:mm:ss")}
                    <Button
                        variant="outline-secondary"
                        className="btn-fliter-mark"
                        // onClick={cancelFilter}>від {filterParams.startDate.substring(8,10)}.{filterParams.startDate.substring(5,7)}.{filterParams.startDate.substring(0,4)} {filterParams.startDate.substring(11)} до {filterParams.endDate}
                        onClick={cancelFilter}>від {filterParams.startDate} до {filterParams.endDate}

                        {/* <a className="fliter-mark"> */}
                        <CloseButton className="btn-cancel-filter" /></Button>
                    : null}
            <Table striped bordered hover size="sm" className='temperature-table'>
                <thead>
                    <tr className='text-center'>
                        <th rowSpan={2}>Дата і час</th>
                        <th rowSpan={2}>Швидкість, хв</th>
                        <th colSpan={3}>Температури верхньої зони (завдання/датчик) °C</th>
                        <th colSpan={3}>Температури нижньої зони (завдання/датчик) °C</th>
                    </tr>
                    <tr>
                        <th>Зона №1</th>
                        <th>Зона №2</th>
                        <th>Зона №3</th>
                        <th>Зона №1</th>
                        <th>Зона №2</th>
                        <th>Зона №3</th>
                    </tr>
                </thead>
                <tbody>
                    {displayDaubTable}
                </tbody>
            </Table>
            <Pagination
                setPageSelected={setPageSelected}
                totalPages={totalPages}
            />
        </>
    )

}

export default TableDaubTemp;