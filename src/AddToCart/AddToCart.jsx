import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./AddToCart.css"
import { BsCart4, BsBagPlusFill, BsBagDashFill } from 'react-icons/bs';


function AddToCart({ product, ...props }) {

    let [count, setCount] = useState(0);
    let [cart, setCart] = useState([]);

    const substractItem = () => {
        if (count > 0) {
            setCount(--count);
        }
    }

    function addItem() {
        if (count < product.available_quantity) {
            setCount(++count);
        }
    }

    const addOnCart = () => {
        cart.push({product, quantity: count});
        setCart(cart)
    }

    const disableBtnAdd = () => {
        return (Number(count) === Number(product.available_quantity)) ? true : false;
    }

    const variantBtnAdd = () => {
        return (Number(count) === Number(product.available_quantity)) ? 'light' : 'success';
    }

    const disableBtnSubstract = () => {
        return (Number(count) === Number(0)) ? true : false;
    }

    const variantBtnSubstract = () => {
        return (Number(count) === 0) ? 'light' : 'danger';
    }

    /*     const [cart, setCart] = useState([]);
    
        const addItem = () => {
            setCart([...cart, product]);
        } */

    return (
        <>
            <Container className="d-flex justify-content-between">
                <Container className="d-flex justify-content-start">
                    <Button variant={variantBtnSubstract()} onClick={() => {substractItem()}}
                        disabled={disableBtnSubstract()}>
                        <BsBagDashFill />
                    </Button>
                    <span className="input-styles p-1">{count}</span>
                    <Button variant={variantBtnAdd()} onClick={() => {addItem()}} 
                        disabled={disableBtnAdd()}>
                        <BsBagPlusFill />
                    </Button>
                </Container>
                <Button variant="primary" onClick={() => {addOnCart()}} disabled={Number(count) === 0}><BsCart4 /></Button>
            </Container>
        </>
    );
    
}

export default AddToCart;