import { NavLink } from "react-router-dom";


const Products = () => {
    return (
        <section>
            <h1>The Product Page</h1>
            <ul>
                <li><NavLink to='/products/P1'>P1</NavLink></li>
                <li><NavLink to='/products/P2'>P2</NavLink></li>
                <li><NavLink to='/products/P3'>P3</NavLink></li>
               
            </ul>
        </section>
    )
}

export default Products;