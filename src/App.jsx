import React from "react";
import { useState} from 'react';
import { Auth0Provider } from "@auth0/auth0-react";

//Layouts
import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';

//Pages
import Index from './pages/Index';
import Admin from './pages/admin/Index';
import Productos from './pages/admin/Productos';
import Ventas from './pages/admin/Ventas';
import Usuarios from './pages/admin/Usuarios';
import Error404 from "pages/auth/Error404";


//Styles
import './styles/styles.css'

//Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserContext } from "context/userContext";





function App() {
  const [userData, setUserData] = useState({});
  return (
    <Auth0Provider
      domain="ezequiellr.us.auth0.com"
      clientId="0b1BbovaR2Sm4kaPTWwnNgr13Fayd0fV"
      redirectUri="http://localhost:3000/admin"
      audience='autenticacion-focus-tech'>

      <div className='App'>
        
      <UserContext.Provider value={{ userData, setUserData }}>

        <Router>
          <Switch>
            
            <Route path={['/admin', '/admin/productos', '/admin/usuarios' ]}>
              <PrivateLayout>
                <Switch>
                  <Route path='/admin/productos'>
                    <Productos/>
                  </Route>  
                  <Route path='/admin/ventas'>
                    <Ventas/>
                  </Route>
                  <Route path='/admin/usuarios'>
                    <Usuarios/>
                  </Route>
                  <Route path='/admin'>
                    <Admin />
                  </Route>
                </Switch>
              </PrivateLayout>
            </Route>
            
            <Route exact path={['/']}>
              <PublicLayout>
                <Route exact path='/'>
                  <Index />
                </Route>
              </PublicLayout>
            </Route>
            
            <Route path={['*']}>
              <AuthLayout>
                <Route path='*'>
                  <Error404/>
                </Route>
              </AuthLayout>
            </Route>

          </Switch>
        </Router>
      </UserContext.Provider>

      </div>

  </Auth0Provider>
  );
}

export default App;
              