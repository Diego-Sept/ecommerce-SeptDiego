import Card from 'react-bootstrap/Card';
import AddToCart from '../AddToCart/AddToCart';

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
                    <AddToCart product={product}></AddToCart>
                </Card.Body>
            </Card>
        </>

    )

}

export default Item;