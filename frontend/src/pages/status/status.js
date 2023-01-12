
import {useState,useEffect} from 'react'
import { useNavigate  } from "react-router-dom";
import axios from 'axios'

function Status() {

  const [imagem,setImage] = useState('');
  const [loaded,isLoaded] = useState(true);
  const [authenticated, setauthenticated] = useState(null);
  const navigate = useNavigate();
  

  const refresh =  ( async () =>{
    
    isLoaded(false)
    
    console.log('Fetching image')
    const response = await axios.get('https://random.dog/woof')

    console.log(response.data)
    setImage(response.data)

    isLoaded(true)



  })


   useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
          setauthenticated(loggedInUser);
        }
      }, []);


    if(!authenticated){
      navigate("/login")
    }else{
      return (
      <div className="">
        <div className="my-6">
            <h3 className="font-bold"> Bem Vindo a pagina de Dogs</h3>
            <span className="text-sm text-gray-500">
                Clique no botão abaixo para que uma imagem linda apareça.
            </span>
            <div className="flex justify-center my-3">
            <button type="button" className="btn-outline-primary 
                                  transition duration-300 ease-in-out 
                                  bg-blue-300 text-white
                                  focus:outline-none focus:shadow-outline border
                                  font-bold py-2 w-5/4 px-4 text-sm rounded-md flex items-center " onClick={refresh}> Refresh</button>  
            </div>
        </div>
        <hr classname="my-6"/>
        <div className="card p-8">
            {loaded && imagem !== '' && 
              <div className='flex justify-center'>
                <img src={'https://random.dog/'+imagem} alt="" className='flex-auto rounded-lg shadow-lg w-5/12'/>
              </div>
              }
            {!loaded && 
              <div className='flex justify-center'> 
                <p className="text-sm text-gray-500">loading...</p>
              </div>
            }


        </div>
      </div>
      );
    }
  }


export default Status;