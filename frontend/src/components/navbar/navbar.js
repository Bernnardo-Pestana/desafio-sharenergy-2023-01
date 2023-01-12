
import { useNavigate  } from "react-router-dom";

function Navbar(){
    const navigate = useNavigate();
    
    const logoff = (()=>{

        localStorage.setItem("authenticated",false)
        navigate('/login')
    }) 


    return (
        <div className="flex flex-col  w-full">
            <header className="z-10 py-4 bg-white shadow-sm dark:bg-gray-800 flex justify-between px-5 navbar">
                <div className="container flex items-center font-bold justify-start h-full px-6 text-sm  text-primary justify-between ">
                    <h3 className="text-lg logo flex justify-center items-center font-bold text-gray-800 dark:text-gray-200">
                        Bem Vindo ao Painel De Controle da Share Energy
                    </h3>
                    <button 
                        className="px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white rounded transition-colors duration-150 bg-blue-500 border border-transparent active:bg-green-600 hover:bg-primary focus:outline-none focus:shadow-outline-purple"
                        onClick={logoff}
                        >
                            Logoff
                        </button>
                </div>
            </header>
        </div>
    )
}

export default Navbar