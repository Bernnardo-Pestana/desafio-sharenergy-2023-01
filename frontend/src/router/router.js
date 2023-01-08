import {  Routes, Route } from "react-router-dom";
import Cat from '../pages/cats/cat'
import User from '../pages/users/user'
import Status from '../pages/status/status'




function MyRouter(){
    return (
        <Routes>
            <Route path="/" element={<User />} />
            <Route path="cat" element={<Cat />} />
            <Route path="dog" element={<Status />} />
        </Routes>
    )
}

export default MyRouter