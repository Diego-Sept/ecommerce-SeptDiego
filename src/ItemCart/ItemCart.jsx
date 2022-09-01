import Card from 'react-bootstrap/Card';
import './ItemCart.css'

const ItemCart = (product) => {

    console.log(product);

    return (
        <>
            <div class="card flex-row">
                <div class="card-header border-0">
                    <img src={product.product.thumbnail} alt="" />
                </div>
                <div class="card-block px-2">
                    <h6 class="card-title">{product.product.title}</h6>
                    <p class="card-text">Quantity: {product.product.quantity}</p>
                </div>
            </div>

        </>
    );
}

export default ItemCart;