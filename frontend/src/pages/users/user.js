import Datalist from "../../components/datalist/datalist";
import {useState,useEffect} from 'react'
import axios from 'axios'


function User() {
  const [data, setdata] = useState(0);

  useEffect( () => {
    async function fetchData(){

      const response =  await axios.get("https://randomuser.me/api/?fmt=json&results=45&noinf")

      const aux = response.data.results
        const aux2 = aux.map(elemento =>{
          const user = {
            name : elemento.name.first + ' ' + elemento.name.last,
            age : elemento.registered.age ,
            email :elemento.email,
            photo : elemento.picture.medium,
            username : elemento.login.username,

          }
          return user
        })

        setdata(aux2)


    }
    fetchData();
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
      label : 'Idade',
      value : 'age'
    },
    {
      label : 'Usuario',
      value : 'username'
    },
    {
      label : 'Foto',
      value :  'photo',
      foto : true
    }
  ]

  return (
     <div className="">
        <div className="my-6">
            <h3 className="font-bold"> Bem Vindo a pagina de Usuarios</h3>
            <span className="text-sm text-gray-500">
                Nesta pagina consumimos uma API externa, onde sera colocado as informações na tabela abaixo paginada,
                onde o usuario poderá pesquisar por nome,email ou outra caracteristica dele.
            </span>
        </div>
        <hr classname="my-6"/>
        <div className="card">
         { data &&  <Datalist  header={Hearder} data={data}/>}
        </div>
     </div>
    );
  }


export default User;