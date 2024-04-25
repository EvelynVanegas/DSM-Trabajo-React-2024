import { useEffect, useState } from 'react';

import Bonsais from '../Componentes/Bonsais/Bonsais';
import Pagination from '../Componentes/IU/Header/Pagination/Pagination_number';

import axios from 'axios';

const Inicio = () => {

    // Define el estado para almacenar los bonsais
    const [bonsais, setBonsais] = useState([]);

    // Se piden los datos de la BBDD
    useEffect(() => {
        axios.get('https://bonsem-dsm-default-rtdb.europe-west1.firebasedatabase.app/bonsais.json')
            .then((response) => {
                if (response.data) {
                    // Convertir el objeto de objetos a un array de objetos
                    const bonsaisArray = Object.keys(response.data).map(key => ({
                        id: key,
                        name: response.data[key].name,
                        imageSrc: response.data[key].imageSrc,
                        price: response.data[key].price,
                        info: response.data[key].info
                    }));
                    // Almacena los datos en el estado bonsais
                    setBonsais(bonsaisArray);
                }
            })
            .catch((error) => {
                console.error('Error al obtener los datos de los bonsais:', error);
            });
    }, []);


    /* Variables para las páginas que muestran los bonsais */
    const [currentPage, setCurrentPage] = useState(1);
    const bonsaisPerPage = 12;

    const onPageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Bonsais bonsais={bonsais} currentPage={currentPage} bonsaisPerPage={bonsaisPerPage} />

            <Pagination totalBonsais={bonsais.length} bonsaisPerPage={bonsaisPerPage} currentPage={currentPage} onPageChange={onPageChange} />
        </>
    )
}

export default Inicio;