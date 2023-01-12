import Datalist from "../../components/datalist/datalist";
import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate  } from "react-router-dom";



function Cliente() {
  const [data, setData] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);
 

  useEffect( () => {


    axios.get("http://localhost:3000/api/users").then((response) => {
      const aux = response.data
  

      setData(aux)

      setIsLoaded(true);
    }).catch((e) => {
      setIsLoaded(false);
      console.log(e);
    });
  }, []);
  
  const Hearder = [
    {
      label : 'Nome',
      value : 'name'
    },
    {
      label : 'Email',
      value : 'email'
    },
    {
      label : 'Endereco',
      value : 'endereco'
    },
    {
      label : 'Documento',
      value : 'cpf'
    },
    {
      label : 'Opções',
      value : ''
    }
  ]
  
   const navigate = useNavigate();
  
    const CreateCliente = () => {
      navigate("/cliente/create")
    }

    async function deletar(param){
    
   try {

    await axios.delete(`http://localhost:3000/api/users/${param}`)

    const aux = data.filter(item => item.id !== param)

    
    setData(aux)

    
   } catch (error) {
      console.log(error)
   }

  }

  function  editar(param){

    console.log(param)
    
    navigate(`/cliente/edit/${param}`)

  }

  const options = [
    {
      label: 'Editar',
      pen:true,
      action : (param) => editar(param)
    },
    {
      label: 'Excluir',
      trash:true,
      action : (param) => deletar(param)
    }
  ]


  if(!authenticated){
    navigate("/login")
  }else{
    return (
      <div className="">
         <div className="my-6">
             <h3 className="font-bold"> Bem Vindo a pagina de Clientes</h3>
             <span className="text-sm text-gray-500 ">
                 Nesta pagina consumimos uma API Interna, onde sera colocado as informações na tabela abaixo paginada,
                 onde o usuario poderá pesquisar por nome,email ou outra caracteristica dele. Também sera possivel deletar os Clientes,
                 editar ou criar novos clientes.
             </span>
             <div className="flex justify-end my-3">
             <button type="button" className="btn-outline-primary 
                                  transition duration-300 ease-in-out 
                                  bg-blue-300 text-white
                                  focus:outline-none focus:shadow-outline border
                                  font-bold py-2 w-5/4 px-4 text-sm rounded-md flex items-center " onClick={CreateCliente}> Criar</button>  
             </div>
         </div>
         <hr classname="my-6"/>
         <div className="card p-8">
         {  !isLoaded && <p>loading...</p>}
         { isLoaded &&  <Datalist  header={Hearder} data={data} setData={setData} options={options} />}
         </div>
      </div>
    );
  }
  
}


export default Cliente;