import { array } from 'prop-types';
import ProductItem from './ProductItem';

 const productList = (props) => {
 const { products } = props;

return (
    <div className="product-list">
        {products.map((product) => (
            <ProductItem key={product.id} product={product} />
        ))}
    </div>
)};

productList.propTypes = {
    products: array.isRequired
}

export default productList;