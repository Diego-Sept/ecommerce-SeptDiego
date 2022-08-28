import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item ({product, ...props}) {

    return (
        <>
            <Card style={{ width: '18rem' }} className="text-white" key="dark" bg="dark" border="secondary">
                <Card.Img src={product.thumbnail} alt="Card image" />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        Stock: {product.available_quantity}<br />
                        Price: {product.price}
                    </Card.Text>
                    <Button variant="dark">Agregar al carrito</Button>
                </Card.Body>
            </Card>
        </>

    )

}

export default Item;