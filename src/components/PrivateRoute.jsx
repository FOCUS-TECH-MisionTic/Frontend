import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import AuthLayout from "layouts/AuthLayout";
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    const { setUserData } = useUser();
  
    useEffect(() => {
      const fetchAuth0Token = async () => {
        
        //Pedir Toke a Auth0
        const accessToken = await getAccessTokenSilently({
          audience: `autenticacion-focus-tech`,
        });
        //Recibir Token de Auth0
        localStorage.setItem('token', accessToken);
        console.log('Token', accessToken);
        await obtenerDatosUsuario (
          (response) =>{
            console.log ('Respuesta con datos del usuario',response);
            setUserData (response.data);
        }, 
        (err)=>{
          console.log('Error', err);
        }
      );
    };

      if (isAuthenticated) {
        fetchAuth0Token();
      }
    }, [isAuthenticated, getAccessTokenSilently]);
  
    if (isLoading) return <div><h1 className='text-3xl font-extrabold'>Cargando...</h1><ReactLoading type='spin' color='#11172d' height={467} width={175} /></div>;
  
    if (!isAuthenticated) {
      return <div>
      <AuthLayout>
        <div className='flex flex-col justify-center pt-40  w-full py-4 text-center font-bold'>
          <div className="pb-6 text-6xl text-red-600">
            <h1>ERROR DE AUTENTICACIÓN</h1>
          </div>
          <div className="text-3xl text-white">
            <h2> No Puedes Acceder A Este Sitio</h2>
            <h2>Sin Autenticarte Primero.</h2>
          </div>
        </div>
      </AuthLayout>
    </div>;
    }
  
    return <>{children}</>;
  };
  
  export default PrivateRoute;
      


           
      

      




