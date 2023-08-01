import Product from "../Product/Product";
import "./ProductList.css"
import { products } from "../../Data";

const ProductList = ()=>{
return (
  <div className="pl">
    <div className="pl-texts">
      <h1 className="pl-title">Create & Inspire.</h1>
      <p className="pl-desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
        accusantium impedit rerum facilis, libero nesciunt illo velit nobis
        error maiores, iste temporibus, voluptatem commodi. Excepturi?
      </p>
    </div>
    <div className="pl-list">
      {products.map((item) => (
        <Product key={item.id} link={item.link} img={item.img} ></Product>
      ))}
    </div>
  </div>
);
}
export default ProductList;