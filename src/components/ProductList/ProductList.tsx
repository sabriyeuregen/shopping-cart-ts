import data from "../../data/data.json";
import ProductCard from "../ProductCard/ProductCard";

const ProductList =()=>{

 const productList = data.map((product) =><ProductCard  {...product}/> )

  return (
    <div className="grid grid-cols-3">{productList}</div>
  )
}

export default ProductList;