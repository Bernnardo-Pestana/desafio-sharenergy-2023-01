
import {useState,useEffect} from 'react'
import axios from 'axios'


function Cat() {


  const [imagem,setImage] = useState('');
  const [catImage,setCatImage] = useState('');
  const [loaded,isLoaded] = useState(true);

  const getGato = (async ()=>{
    setCatImage(imagem)
  })



    return (
      <div className="">
      <div className="my-6">
          <h3 className="font-bold"> Bem Vindo a pagina de Cats</h3>
          <span className="text-sm text-gray-500">
              Informe algum paramentro no campo abaixo e clique em buscar.
          </span>
          <div className="flex justify-between my-8">
          <div className="mx-2">
                            <label class="block relative">
                                <span
                                    class="text-gray-700 bg-white px-3 -top-2 left-4 absolute text-sm"
                                    > Status Code</span
                                >
                                <input
                                  class="border rounded-lg py-4 focus:outline-white form-input mt-1 pl-6 block w-full"
                                  type="default"
                                  placeholder="Status Code"
                                  value={imagem} 
                                  name ="Status Code"
                                  onChange={(e) => setImage(e.target.value)}
                                />
                            </label>
                        </div>
          <button type="button" className="btn-outline-primary 
                               transition duration-300 ease-in-out 
                               bg-blue-300 text-white
                               focus:outline-none focus:shadow-outline border
                               font-bold py-2 w-5/4 px-4 text-sm rounded-md flex items-center " onClick={getGato}
                              >
                                 Buscar
          </button>  
          </div>
      </div>
      <hr classname="my-6"/>
      <div className="card p-8">
         {loaded && catImage !== '' && 
           <div className='flex justify-center'>
             <img src={`https://http.cat/${catImage}`} 
             className='object-cover h-3/6 w-3/6'/>
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


export default Cat;