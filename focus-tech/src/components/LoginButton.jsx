import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

    return( 
        <a onClick={() => loginWithRedirect()} className="inline-block items-center transform hover:translate-y-1 transition-transform ease-in duration-200 hover:bg-gray-600 text-white px-3 py-2 rounded-md text-sm font-mediump-2 m-2  ring-2 ring-gray-400"><i class="fas fa-sign-in-alt w-6"></i>Acceder</a>
    )
};

export default LoginButton;
