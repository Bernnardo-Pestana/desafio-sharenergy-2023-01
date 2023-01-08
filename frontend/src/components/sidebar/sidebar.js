import './Sidebar.css';
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";


function Sidebar(){
    return(

            <div className="relative">
                <div className='z-20 w-64 sidebar overflow-y-auto fixed shadow-sm h-full bg-white dark:bg-gray-800 flex-shrink-0'>
                    <div className='text-gray-500 bar dark:text-gray-400 h-full flex flex-col justify-between'>
                        <div >
                            <div className="text-lg logo flex justify-center items-center font-bold text-gray-200 dark:text-gray-200">
                                <NavLink to="/">
                                    <img
                                        src={logo}
                                        alt="example"
                                    />
                                </NavLink>
                            </div>
                            <div>

                                <ul class="mt-6">
                                    <NavLink to="/">
                                        <span className='ml-4 text-item'>Home</span>
                                    </NavLink>
                                </ul>

                                <ul class="mt-6">
                                    <NavLink to="/cat">
                                        <span className='ml-4 text-item'>Cat</span>
                                    </NavLink>
                                </ul>

                                <ul class="mt-6">
                                    <NavLink to="/user">
                                        <span className='ml-4 text-item'>Usuarios</span>
                                    </NavLink>
                                </ul>

                                <ul class="mt-6">
                                    <NavLink to="/dog">
                                        <span className='ml-4 text-item'>Dog</span>
                                    </NavLink>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}


export default Sidebar