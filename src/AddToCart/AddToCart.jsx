import React, {useState} from "react";
import { Container, Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "./AddToCart.css"
import { BsCart4, BsBagPlusFill, BsBagDashFill } from 'react-icons/bs';


function AddToCart({ product, ...props }) {

    let [contador, setContador] = useState(0);

    const substractItem = () => {
        if (contador > 0) {
            setContador(contador--);
        }
    }

    function addItem() {
        if (contador < product.available_quantity) {
            setContador(contador++);
            console.log(contador);
        }
    }

    const addOnCart = () => {

    }

    const disableBtnAdd = () => {
        return (Number(contador) === Number(product.available_quantity)) ? true : false;
    }

    const variantBtnAdd = () => {
        return (Number(contador) === Number(product.available_quantity)) ? 'light' : 'success';
    }

    const disableBtnSubstract = () => {
        return (Number(contador) === Number(0)) ? true : false;
    }

    const variantBtnSubstract = () => {
        return (Number(contador) === 0) ? 'light' : 'danger';
    }

    /*     const [cart, setCart] = useState([]);
    
        const addItem = () => {
            setCart([...cart, product]);
        } */

    return (
        <>
            <Container className="d-flex justify-content-between">
                <Container className="d-flex justify-content-evenly">
                    <Button variant={(Number(contador) === 0) ? 'light' : 'danger'} onClick={() => {substractItem()}}
                        disabled={(Number(contador) === Number(0)) ? true : false}>
                        <BsBagDashFill />
                    </Button>
                    <Form className="input-styles">
                        <Form.Control type="number" value={Number(contador)} readOnly={true}></Form.Control>
                    </Form>
                    <Button variant={(Number(contador) === Number(product.available_quantity)) ? 'light' : 'success'} onClick={() => {addItem()}} 
                        disabled={(Number(contador) === Number(product.available_quantity)) ? true : false}>
                        <BsBagPlusFill />
                    </Button>
                </Container>
                <Button variant="primary" onClick={addOnCart()} disabled={contador === 0}><BsCart4 /></Button>
            </Container>
        </>
    );
    
}

export default AddToCart;