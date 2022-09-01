import ItemCart from "../ItemCart/ItemCart";

const ItemCartList = ({cart}) => {

    return (
        <>
            {
                cart.map((product) => {
                    return (
                        <div key={product.id} className="py-2">
                            <ItemCart product={product}></ItemCart>
                        </div>
                    )
                })
            }
        </>
    )

}

export default ItemCartList;