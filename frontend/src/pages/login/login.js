import logo from '../../assets/logo.png';
import {useState} from 'react'
import { useNavigate  } from "react-router-dom";


function Login(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:'',
        password:'',
      });
    const [remember,setRemenber] = useState(false)

    const handleChange  = (event) => {
    
    
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}))
      }

    const handleChangeCheckbox = (event) => {

        setRemenber(!remember)
    }



    const login = ( ()=>{
        if(user.username === 'desafiosharenergy' && user.password === 'sh@r3n3rgy')
        {
            if(remember)
            {
                localStorage.setItem("authenticated",true)
                navigate('/cliente')
            }else{

            }
        }else{
            alert ('Try again')
        }
    })


    return (
        <div>
            <div className="flex items-center min-h-screen p-6 bg-cyan-50">
                <div
                className="flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl bg-blue-200 "
                >
                <div className="flex flex-col overflow-y-auto md:flex-row items-center">
                    <div className="h-36 w-full md:w-1/2 md:pl-6">
                    <img
                        aria-hidden="true"
                        className="object-cover w-full h-full m-auto"
                        src={logo}
                        alt="SharEnergy"
                    />
                    </div>
                    <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div className="w-full ">
                        <h1
                        className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200"
                        >
                        Bem vindo ao <strong className="text-primary">SharEnergy</strong>
                        <p className="text-sm text-gray-400 opacity-80">
                            Painel Adminstrativo
                        </p>
                        </h1>
                        <div className="mb-5">
                            <div className="mx-2">
                                <label class="block relative">
                                    <span
                                    className="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
                                    > Username </span
                                    >
                                    <input
                                        class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
                                        type="default"
                                        placeholder="username"
                                        value={user.username} 
                                        name ="username"
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="mx-2">
                                <label class="block relative">
                                    <span
                                    className="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
                                    > Password </span
                                    >
                                            <input
                                            class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
                                            type="password"
                                            placeholder="*******"
                                            value={user.password} 
                                            name ="password"
                                            onChange={handleChange }
                                    />
                                </label>
                            </div>
                            <div className="flex flex-col relative auto appearance-none py-4 ">
                                    <div className="flex mr-3" >      
                                    <div className="block flex items-center h-5 ml-2">      
                                        <input
                                        type="checkbox" 
                                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        checked={remember}
                                        onChange={handleChangeCheckbox}
                                        />
                                    </div>
                                    <div className="ml-1 text-sm">
                                        <label className="font-medium text-gray-700 ">Remember Me? </label>
                                    </div>
                                    </div>
                                    
                                </div>

                    
                            <button
                            
                            className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white rounded transition-colors duration-150 bg-blue-500 border border-transparent active:bg-green-600 hover:bg-primary focus:outline-none focus:shadow-outline-purple"
                            onClick={login}
                            >
                            Entrar
                            </button>

                        <hr className="my-8" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default Login;