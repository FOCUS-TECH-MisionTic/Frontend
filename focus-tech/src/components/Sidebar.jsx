import React from 'react';
import Logo from '../media/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const { logout } = useAuth0();
  const cerrarSesion = () => {
    logout({ returnTo: 'http://localhost:3000/' });
    localStorage.setItem('token', null);
  };
  return (


<div class="min-h-screen flex flex-row fondo1  text-gray-300">
  <div class="flex flex-col w-80 overflow-hidden">
    <div class="flex flex-col items-center justify-center h-20 ">
      <div ><img className="px-2 pt-40 mt-40 " src={Logo} alt="logo" width="150" /></div>
      
      <h1 class="fuente text-xl uppercase text-white text-bold shadow-md mb-40 ">FOCUS TECH</h1>
    </div>
    <ul class="flex flex-col py-10 mt-40 items-center content-center">
      <li>
        <Link to='/admin'>
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i class="fas fa-user"></i></span>
            <span class="text-sm font-medium">Perfil</span>
          </a>
        </Link> 
      </li>
      <li>
        <Link to='/admin/Usuarios' >
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i class="fas fa-users"></i></span>
            <span class="text-sm font-medium">Usuarios</span>
          </a>
        </Link>
      </li>
      <li>
      <Link to='/admin/Productos'>
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i class="fas fa-microchip"></i></span>
            <span class="text-sm font-medium">Productos</span>
          </a>
      </Link>    
      </li>
      <li>
        <Link to='/admin/Ventas'>
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i class="fas fa-cash-register"></i></span>
            <span class="text-sm font-medium">Ventas</span>
          </a>
        </Link>
      </li>
      
      
      
      <li>
        
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-red-500 mt-10">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i class="bx bx-log-out"></i></span>
            <span class="text-sm font-medium " onClick={() => cerrarSesion()}>Cerrar Sesión</span>
          </a>
        
      </li>
    </ul>
  </div>
</div>
      
  );
};

export default Sidebar;
