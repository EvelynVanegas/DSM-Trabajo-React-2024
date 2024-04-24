import { useEffect, useState } from 'react';

import Bonsais from '../Componentes/Bonsais/Bonsais';
import Pagination from '../Componentes/IU/Header/Pagination/Pagination';

import bon from '../Componentes/Bonsais/imgs/BON1.png';

import axios from 'axios';

const Inicio = () => {

    // Se piden los datos de la BBDD
    useEffect(() => {
        axios.get('https://bonsem-dsm-default-rtdb.europe-west1.firebasedatabase.app/bonsais.json')
        .then((response) => {
            console.log(response);
        })
    });

    /* JSON bonsais de la BBDD*/
    const [bonsais] = useState([
        {
            id: 1,
            name: 'Primer bonsai',
            imageSrc: bon,
            price: 45.5,
            info: 'Informacion del bonsai'
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
        }, {
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
        }, {
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
        }, {
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

    /* Variables para las páginas que muestran los bonsais */
    const [currentPage, setCurrentPage] = useState(1);
    const bonsaisPerPage = 12;

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <>
            <Bonsais bonsais={bonsais} currentPage={currentPage} bonsaisPerPage={bonsaisPerPage} />

            <Pagination totalBonsais={bonsais.length} currentPage={currentPage} onPageChange={onPageChange} />
        </>
    )
}

export default Inicio;