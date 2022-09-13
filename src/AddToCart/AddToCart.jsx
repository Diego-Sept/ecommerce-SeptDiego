import React, {useState} from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./AddToCart.css"
import { BsCart4, BsSearch, BsBagPlusFill, BsBagDashFill } from 'react-icons/bs';


function AddToCart({ product, cart, setCart, ...props }) {

    let [count, setCount] = useState(0);

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
        let productOnCart= cart.find(prod => (prod?.product?.id === product.id) || (prod?.product?.product?.id === product.id));
        if (!!productOnCart){
            if ((Number(productOnCart.quantity) + Number(count)) <= Number(product.available_quantity)){
                let index = cart.indexOf(productOnCart);
                productOnCart.quantity = (Number(productOnCart.quantity) + Number(count));
                cart[index] = productOnCart;
                setCart([...cart])    
            }
        }else {
            setCart([...cart, {...product, quantity: count}])
        }
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
                <Button variant="primary" to={`/product/${product.id}`}><BsSearch /></Button>
                <Button variant="primary" onClick={() => {addOnCart()}} disabled={Number(count) === 0}><BsCart4 /></Button>
            </Container>
        </>
    );
    
}

export default AddToCart;