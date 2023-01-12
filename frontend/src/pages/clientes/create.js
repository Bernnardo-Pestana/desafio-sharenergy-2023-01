
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate  } from "react-router-dom";

function Create_Cliente(){

    const [authenticated, setauthenticated] = useState(null);
      useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
      }, []);


    const [user, setUser] = useState({
        name:'',
        email:'',
        endereco:'',
        cpf:''
      });
    
    
      const handleChange  = (event) => {
    
    
        const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}))
      }

      const navigate = useNavigate();
    
      const criar = async  (event) => {
        event.preventDefault();
        
        try {
          await axios.post('http://localhost:3000/api/users', user).then(resp =>{
            setUser({
                name:'',
                email:'',
                endereco:'',
                cpf:''
              })

            navigate("/cliente")
          })
    
         
        } catch (error) {
          alert(error)
        }
      
      }
    




  if(!authenticated){
    navigate("/login")
  }else{
        return(
            <div>
                <div className="my-6">
                    <h3 className="font-bold"> Bem Vindo a pagina de Clientes</h3>
                    <span className="text-sm text-gray-500">
                            Nesta pagina consumimos uma API Interna, onde sera colocado as informações na tabela abaixo paginada,
                            onde o usuario poderá pesquisar por nome,email ou outra caracteristica dele. Também sera possivel deletar os Clientes,
                            editar ou criar novos clientes.
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
                                    font-bold py-2 w-5/4 px-4 text-sm rounded-md flex items-center " onClick={criar}> Criar</button>  
                        </div>
                    </div>
                </form>
            </div>
    
    
    
        )
    }
}

export default Create_Cliente