import React from 'react';
import brand from '../media/logo.png';
import '../styles/styles.css'
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  <div className="mt-0 ml-0 mr-2 text-center w-full">  
    <nav className="flex items-center justify-between flex-wrap fondo1 font-bold w-100">
                
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="fill-current ml-2 w-6 items-center" src={brand} alt="logo" />
        <span className="fuente p-2 m-2 tracking-tight">FOCUS TECH</span>
      </div>
    
      <div id='menu' className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
            <a href="#banner" className="block mt-4 lg:inline-block lg:mt-0 transform hover:translate-y-1 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-400 m-2 p-2">Inicio</a>
            <a href="#trabajo" className="block mt-4 lg:inline-block lg:mt-0 transform hover:translate-y-1 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-400 m-2 p-2">Nuestro Trabajo</a>
            <a href="#procesadores" className="block mt-4 lg:inline-block lg:mt-0 transform hover:translate-y-1 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-400 m-2 p-2">Productos</a>
            <a href="#contacto" className="block mt-4 lg:inline-block lg:mt-0 transform hover:translate-y-1 transition-transform ease-in duration-200 text-gray-100 hover:text-gray-400 m-2 p-2">Contacto</a>
        </div>

        <div>
          <a 
          href="#"
          onClick={() => loginWithRedirect()} 
          className="inline-block items-center transform hover:translate-y-1 transition-transform ease-in duration-200 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-mediump-2 m-2  ring-2 ring-gray-400"><i class="fas fa-sign-in-alt w-6"></i>Acceder</a>
           
        </div>
      </div>

    </nav>
  </div>  
  );
};

export default Navbar;
