import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './Componentes/IU/Header/Header';

import AutContext from './Almacen/AutContext';

import Inicio from './Paginas/Inicio';
import InfoPersonal from './Paginas/InfoPersonal';
import MisPedidos from './Paginas/MisPedidos';
import NuevoUsuario from './Paginas/NuevoUsuario';
import Error from './Paginas/Error';

function App() {

  /* Variable global - Log in*/
  const [login, setLogin] = useState(true);

  return (
    <div className="App">

      <AutContext.Provider value={{login: login}}>

        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/InfoPersonal' element={<InfoPersonal />} />
          <Route path='/MisPedidos' element={<MisPedidos />} />
          <Route path='/NuevoUsuario' element={<NuevoUsuario />} />
          <Route path='*' element={<Error />} />
        </Routes>
        

      </AutContext.Provider>

    </div>
  );
}

export default App;