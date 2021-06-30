import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: 'p1', price: 6, title: 'My First car', description: 'Vitara Br' },
  { id: 'p2', price: 16, title: 'My First Compass', description: 'N/E' },
  { id: 'p13', price: 26, title: 'My First House', description: 'Hosues' }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => 
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        )}

      </ul>
    </section>
  );
};

export default Products;
