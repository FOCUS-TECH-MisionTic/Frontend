import { useUser } from 'context/userContext';
import React from 'react';


const PrivateRoute = ({ roleList, children }) => {
   const { userData } = useUser();

   if (roleList.includes(userData.rol)) {
     return children;
   }

   return <div>

<div className='flex flex-col justify-center pt-40  w-full py-4 text-center font-bold'>
  <div className="pb-6 text-6xl text-red-600">
    <h1>ERROR DE PERMISOS</h1>
  </div>
  <div className="text-3xl text-white">
    <h2> No Puedes Acceder A Este Sitio</h2>
    <h2>Tu Rol No Te Lo Tiene Permitido.</h2>
  </div>
</div>

</div>; 
 };

export default PrivateRoute;
      


           
      

      




