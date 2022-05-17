import React from 'react'
import { Routes, Route } from "react-router-dom";
import Temp from '../pages/Temperatures';
import TableDaubTemp from '../tables/TableDaubTemp';
import Counters from '../pages/Counters';
import Errors from '../pages/Errors';
import Resource from '../pages/Resource';
import Main from '../pages/Main';

const PrivateRouter = () => {

    return (
        <Routes>
            <Route exact path="/main" element={<Main />} />
            <Route exact path="/temp/*" element={<Temp />}>
                <Route exact path="daub" element={<TableDaubTemp />} />
                <Route path="hecrone" element={<TableDaubTemp />} />
                <Route path="hasborg" element={<TableDaubTemp />} />
            </Route>
            <Route exact path="/counters" element={<Counters />} />
            <Route exact path="/errors" element={<Errors />} />
            <Route exact path="/resource" element={<Resource />} />
        </Routes>
    )

}

export default PrivateRouter;