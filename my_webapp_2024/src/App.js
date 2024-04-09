import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import Header from './Componentes/IU/Header/Header';
import Bonsais from './Componentes/Bonsais/Bonsais';
import Footer from './Componentes/IU/Footer/Footer';

import bon from './Componentes/Bonsais/imgs/BON1.jpg';

function App() {

  const [bonsais] = useState([
    {
      id: 1,
      name: 'Primer bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 2,
      name: 'Segundo bonsai',
      imageSrc: bon,
      price: 45
    },
    {
      id: 3,
      name: 'Tercer bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 4,
      name: 'Cuarto bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 5,
      name: 'Quinto bonsai',
      imageSrc: bon,
      price: 48
    },{
      id: 1,
      name: 'Primer bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 2,
      name: 'Segundo bonsai',
      imageSrc: bon,
      price: 45
    },
    {
      id: 3,
      name: 'Tercer bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 4,
      name: 'Cuarto bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 5,
      name: 'Quinto bonsai',
      imageSrc: bon,
      price: 48
    },{
      id: 1,
      name: 'Primer bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 2,
      name: 'Segundo bonsai',
      imageSrc: bon,
      price: 45
    },
    {
      id: 3,
      name: 'Tercer bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 4,
      name: 'Cuarto bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 5,
      name: 'Quinto bonsai',
      imageSrc: bon,
      price: 48
    },{
      id: 1,
      name: 'Primer bonsai',
      imageSrc: bon,
      price: 45.5
    },
    {
      id: 2,
      name: 'Segundo bonsai',
      imageSrc: bon,
      price: 45
    },
    {
      id: 333,
      name: 'Tercer bonsai',
      imageSrc: bon,
      price: 4
    },
    {
      id: 444,
      name: 'Cuarto bonsai',
      imageSrc: bon,
      price: 0
    },
    {
      id: 555,
      name: 'Quinto bonsai',
      imageSrc: bon,
      price: 0
    },
    {
      id: 789,
      name: 'Aaaa bonsai',
      imageSrc: bon,
      price: 190
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const bonsaisPerPage = 12; // Define la cantidad de bonsais por página

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">

      <Header />

      <Bonsais bonsais={bonsais} currentPage={currentPage} bonsaisPerPage={bonsaisPerPage} />
      
      <Footer totalBonsais={bonsais.length} currentPage={currentPage} onPageChange={onPageChange} />
    
    </div>
  );
}

export default App;