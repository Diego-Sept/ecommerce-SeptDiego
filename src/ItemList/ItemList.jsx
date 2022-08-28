import Item from '../Item/Item';
import "./ItemList.css"

function ItemList({ products, ...props }) {

    return (
        <>
            <div className="container">
                <div className="row p-3 m-2">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="col-xs-1 col-lg-3 col-xl-4 p-2">
                                <Item product={product} className="card-height"></Item>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ItemList;