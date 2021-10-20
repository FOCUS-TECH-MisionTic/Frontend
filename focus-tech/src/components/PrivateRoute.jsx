import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading';
import AuthLayout from "layouts/AuthLayout";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently } = useAuth0();
  
    useEffect(() => {
      const fetchAuth0Token = async () => {
        // si se quieren hacer validaciones con el token:
        // if (localStorage.getItem('token')) {
        //   // validar fecha de expiracion del token
        // } else {
        //   // pedir token
        // }
        const accessToken = await getAccessTokenSilently({
          audience: `autenticacion-focus-tech`,
        });
        localStorage.setItem('token', accessToken);
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
      


           
      

      



  //   return isAuthenticated ? (
  //     <>{children}</>
  //   ) : (
  //     <div>
  //       <div className='text-9xl text-red-500 '>No estas autorizado para ver este sitio.</div>
  //       <Link to='/'>
  //         <span className='text-blue-500 font-bold'>Llévame al home</span>
  //       </Link>
  //     </div>
  //   );
  // };
  
    
    // return (isAuthenticated ?
    // <>{children}</>:
    // <div>
    //     <AuthLayout>
    //     <h1 className='text-5xl text-center font-bold text-red-600 py-40 w-full'>No Puedes Acceder Sin Autenticarte Primero</h1>   
    //     </AuthLayout>
    // </div>
    // );
        

