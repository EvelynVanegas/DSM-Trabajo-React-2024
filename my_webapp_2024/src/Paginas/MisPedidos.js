import './MisPedidos.css';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const MisPedidos = () => {
    const pedidos = [
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
    ];

    return (
        <div className="d-flex justify-content-center align-items-center h-100">
            <Card className="custom-card">
                <Card.Body>
                    <Card.Title className="custom-title">MIS PEDIDOS</Card.Title>
                    <Table responsive="sm">
                        <thead className="custom-thead">
                            <tr>
                                <th className="custom-th"></th>
                                <th className="custom-th">Producto</th>
                                <th className="custom-th">Cantidad</th>
                                <th className="custom-th">Precio Unitario</th>
                                <th className="custom-th">Total</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {pedidos.map((pedido, index) => (
                                <tr key={index}>
                                    <td>{pedido.id}</td>
                                    <td>{pedido.producto}</td>
                                    <td>{pedido.cantidad}</td>
                                    <td>{pedido.precioUnitario}</td>
                                    <td>{pedido.cantidad * pedido.precioUnitario}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MisPedidos;