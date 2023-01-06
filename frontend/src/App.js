import './App.css';

import Sidebar from './components/sidebar/sidebar'
import Navbar from './components/navbar/navbar'
import { BrowserRouter } from "react-router-dom";

import MyRouter from './router/router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {fas} from "@fortawesome/free-solid-svg-icons"

library.add(fab,fas)


function App() {
  return (
    <BrowserRouter>
      <div className='grid overflow-x-auto bg-gray-50'>
        <Sidebar className='sidebar'/>

        <div>
          <Navbar className='navbar'/>
          <div className='main p-8 container mx-auto'>
            <MyRouter />
          </div>
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
