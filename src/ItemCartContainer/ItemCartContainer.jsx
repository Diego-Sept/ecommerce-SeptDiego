import ItemCartList from "../ItemCartList/ItemCartList";


const ItemCartContainer = ({cart}) => {

    return (
        <>
            <ItemCartList cart={cart}></ItemCartList>
        </>
    )
}

export default ItemCartContainer;