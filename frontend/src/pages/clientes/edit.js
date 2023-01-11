
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useParams  } from "react-router-dom";
import { useNavigate  } from "react-router-dom";

function Edit_Cliente(){
    const navigate = useNavigate();
    const { id } = useParams();

    const [user,setCliente] = useState({})

    const fetchData = async () => {
        console.log(id)


        const response =  await axios.get(`http://localhost:3000/api/users/${id}`)

        setCliente(response.data);
    }
   


    useEffect(()=>{
        fetchData().catch(console.error);
    },[])
   
    
      const handleChange  = (event) => {
    
    
        const name = event.target.name;
        const value = event.target.value;
        setCliente(values => ({...values, [name]: value}))
      }
    
    
      const editar = async  (event) => {
        event.preventDefault();
        
        try {

            console.log(user)
          const response = await axios.patch(`http://localhost:3000/api/users/${id}`, user)
    
          navigate("/cliente")
        } catch (error) {
          alert(error)
        }
      
      }
    




    return(
        <div>
            <div className="my-6">
                <h3 className="font-bold"> Bem Vindo a pagina de Clientes</h3>
                <span className="text-sm text-gray-500">
                    Nesta pagina, você usuario podera editar o seguinte cliente, ao alterar os campos, clique em salvar.
                </span>
            </div>
            <hr classname="my-6"/>
            <form>
                <div className="card my-6 p-8">
                    <div className="flex mx-2">
                        <div className="mx-2">
                            <label class="block relative">
                                <span
                                    class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
                                    > Nome</span
                                >
                                <input
                                class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
                                type="default"
                                placeholder="Nome"
                                value={user.name} 
                                name ="name"
                                onChange={handleChange}
                                />
                            </label>
                        </div>
                    <div className="mx-2">
                        <label class="block relative">
                                <span
                                    class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
                                    > Email </span
                                >
                                <input
                                class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
                                type="default"
                                placeholder="Email"
                                value={user.email || ""} 
                                name ="email"
                                onChange={handleChange }
                                />
                            </label>
                    </div>

                    <div className="mx-2">
                            <label class="block relative">
                                <span
                                    class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
                                    > Endereco </span
                                >
                                <input
                                class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
                                type="default"
                                placeholder="Endereco"
                                value={user.endereco || ""} 
                                name ="endereco"
                                onChange={handleChange }
                                />
                            </label>
                    </div>

                    <div className="mx-2">
                        <label class="block relative">
                                <span
                                    class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
                                    > CPF </span
                                >
                                <input
                                class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
                                type="default"
                                placeholder="cpf"
                                value={user.cpf || ""} 
                                name ="cpf"
                                onChange={handleChange }
                                />
                            </label>
                    </div>
                </div>
                    <div className="flex my-4 justify-end">
                        <button type="button" className="btn-outline-primary 
                                transition duration-300 ease-in-out 
                                bg-blue-300 text-white
                                focus:outline-none focus:shadow-outline border
                                font-bold py-2 w-5/4 px-4 text-sm rounded-md flex items-center " onClick={editar}> Editar</button>  
                    </div>
                </div>
            </form>
        </div>



    )
}

export default Edit_Cliente