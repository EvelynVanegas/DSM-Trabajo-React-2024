import './MisPedidos.css'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';

const MisPedidos = () => {

    const pedidos = [
        { id: 1, producto: 'Producto 1', cantidad: 3, precioUnitario: 10 },
        { id: 2, producto: 'Producto 2', cantidad: 2, precioUnitario: 15 },
        { id: 3, producto: 'Producto 3', cantidad: 1, precioUnitario: 20 },
    ];


    return (
        <Card
          bg={'Dark'.toLowerCase()}
          key={'Dark'}
          text={'Dark'.toLowerCase() === 'light' ? 'dark' : 'white'}
          className="mb-2"
        >
            <Card.Body>
                <Card.Title>MIS PEDIDOS</Card.Title>
                <Card.Text>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio Unitario</th>
                                <th>Total</th>
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
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MisPedidos;