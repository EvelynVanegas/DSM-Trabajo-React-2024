import './Footer.css'
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

function Footer({ totalBonsais, currentPage, onPageChange }) {
    const bonsaisPerPage = 16; // Número de bonsais por página
    const totalPages = Math.ceil(totalBonsais / bonsaisPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="d-flex justify-content-center">
            <Pagination>
                <Pagination.First onClick={() => onPageChange(1)} />
                <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
                {pageNumbers.map(number => (
                    <Pagination.Item
                        key={number}
                        active={number === currentPage}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => onPageChange(totalPages)} />
            </Pagination>
        </div>

    );
}

export default Footer;
