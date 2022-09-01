import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { BsCart4 } from 'react-icons/bs';
import ItemCartContainer from '../ItemCartContainer/ItemCartContainer';
//import Item from '../Item/Item';

const CartWidget = ({ cart, ...props }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

                /* <div className="container">
                <div className="row p-3 m-2">
                    {cart.map((cartProduct) => {
                        return (
                            <div key={cartProduct.product.id} className="col-xs-1 col-lg-3 col-xl-4 p-2">
                                <Item product={cartProduct.product} className="card-height"></Item>
                            </div>
                        )
                    })}
                </div>
            </div> */
    return (
        <>
            <Button variant="dark" onClick={handleShow} className="me-2">
                <h4><BsCart4 /></h4>
                Show cart
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ItemCartContainer cart={cart}></ItemCartContainer>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default CartWidget;