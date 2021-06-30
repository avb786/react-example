import { useParams } from "react-router-dom"


const ProductDetail = props =>{

const params = useParams()

    return (
        <section>
            <h1>Product Details</h1>
            <h1>{params.productId}</h1>
        </section>
    )
}

export default ProductDetail