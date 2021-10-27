import React from 'react';
import Logo from '../media/logo.png';
import { Link} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from 'components/PrivateComponent';

const Sidebar = () => {
  const { logout } = useAuth0();
  const cerrarSesion = () => {
    logout({ returnTo: 'https://focus-tech.herokuapp.com/' });
    localStorage.setItem('token', null);
  };
  return (


<div className="min-h-screen flex flex-row fondo1  text-gray-300">
  <div className="flex flex-col w-80 overflow-hidden">
    <div className="flex flex-col items-center justify-center h-20 ">
      <div ><img className="px-2 pt-40 mt-40 " src={Logo} alt="logo" width="150" /></div>
      
      <h1 className="fuente text-xl uppercase text-white text-bold shadow-md mb-40 ">FOCUS TECH</h1>
    </div>
    <ul className="flex flex-col py-10 mt-40 items-center content-center">
      <li>
        <Link to='/admin'>
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i className="fas fa-user"></i></span>
            <span className="text-sm font-medium">Perfil</span>
          </a>
        </Link> 
      </li>
      <li>
        <PrivateComponent roleList={['Administrador']}>
          <Link to='/admin/Usuarios' >
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i className="fas fa-users"></i></span>
              <span className="text-sm font-medium">Usuarios</span>
            </a>
          </Link>
          </PrivateComponent>  
      </li>
      <li>
      <PrivateComponent roleList={['Administrador','Vendedor','Cliente']}>  
        <Link to='/admin/Productos'>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i className="fas fa-microchip"></i></span>
              <span className="text-sm font-medium">Productos</span>
            </a>
        </Link>
      </PrivateComponent>    
      </li>
      <li>
        <PrivateComponent roleList={['Administrador', 'Vendedor']}>
          <Link to='/admin/Ventas'>
            <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-gray-500">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i className="fas fa-cash-register"></i></span>
              <span className="text-sm font-medium">Ventas</span>
            </a>
          </Link>
          </PrivateComponent>
      </li>
      
      
      
      <li>
        
          <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-300 hover:text-red-500 mt-10">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-200"><i className="bx bx-log-out"></i></span>
            <span className="text-sm font-medium " onClick={() => cerrarSesion()}>Cerrar Sesión</span>
          </a>
        
      </li>
    </ul>
  </div>
</div>
      
  );
};

export default Sidebar;
