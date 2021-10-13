import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loading from "../media/loading.svg";
import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) =>{
    const {isAuthenticated, isLoading} = useAuth0()
    if (isLoading) return
    <div className="animate-spin">
    <img src={loading} alt="Loading" />
  </div>;
    return isAuthenticated ? 
        <>{children}</>: 
        <div>
            <h1 className='text-5xl text-center font-bold text-red-600 py-32'>No Puedes Acceder Sin Autenticarte Primero</h1>
            <Link to='/'>
                <a href="#" class="inline-block items-end transform hover:translate-y-1 transition-transform ease-in duration-200 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-mediump-2 m-2  ring-2 ring-gray-400"><i class="fas fa-arrow-left w-6"></i>Regresar</a>
            </Link>
        </div>
};

export default PrivateRoute;