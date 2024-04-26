import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Componentes/IU/Header/Header';
import Footer from './Componentes/IU/Footer/Footer'

import AutContext from './Almacen/AutContext';

import Inicio from './Paginas/Inicio';
import InfoPersonal from './Paginas/InfoPersonal';
import MisPedidos from './Paginas/MisPedidos';
import NuevoUsuario from './Paginas/NuevoUsuario';
import Error from './Paginas/Error';

function App() {

  const [login, setLogin] = useState(false);
  const [loginData, setLoginData] = useState({});

  const updateLogin = (login, loginData) => {
    setLogin(login);
    setLoginData(loginData);
    localStorage.setItem('login', login);
    localStorage.setItem('loginData', loginData.idToken);
  }

  useEffect(() => {
    if (localStorage.getItem('login') === 'true') {
      setLogin(true);
      setLoginData({ idToke: localStorage.getItem('loginData') });
    }
  }, []);

  return (
    <div className="App">

      <AutContext.Provider value={{ login: login }}>

        <Header updateLogin={updateLogin} />

        <Routes>

          <Route path='/' element={<Inicio />} />

          {login ? (
            <>
              <Route path='/InfoPersonal' element={<InfoPersonal />} />
              <Route path='/MisPedidos' element={<MisPedidos />} />
            </>
          ) : null}

          {!login && <Route path='/NuevoUsuario' element={<NuevoUsuario />} />}

          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />

      </AutContext.Provider>

    </div>
  );
}

export default App;