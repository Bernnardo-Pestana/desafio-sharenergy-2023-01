import {  Routes, Route } from "react-router-dom";
import Cat from '../pages/cats/cat'
import User from '../pages/users/user'
import Status from '../pages/status/status'
import Cliente from "../pages/clientes/cliente";
import CreateCliente from '../pages/clientes/create'
import EditCliente from '../pages/clientes/edit'




function MyRouter(){
    return (
        <Routes>
            <Route path="/" element={<User />} />
            <Route path="cat" element={<Cat />} />
            <Route path="dog" element={<Status />} />
            <Route path="cliente" element={<Cliente />} />
            <Route path="cliente/create" element={<CreateCliente />} />
            <Route path="cliente/edit/:id" element={<EditCliente />} />
        </Routes>
    )
}

export default MyRouter