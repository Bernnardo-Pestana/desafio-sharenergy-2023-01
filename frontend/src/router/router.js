import {  Routes, Route } from "react-router-dom";
import Cat from '../pages/cats/cat'
import User from '../pages/users/user'
import Status from '../pages/status/status'
import Cliente from "../pages/clientes/cliente";




function MyRouter(){
    return (
        <Routes>
            <Route path="/" element={<User />} />
            <Route path="cat" element={<Cat />} />
            <Route path="dog" element={<Status />} />
            <Route path="cliente" element={<Cliente />} />
        </Routes>
    )
}

export default MyRouter