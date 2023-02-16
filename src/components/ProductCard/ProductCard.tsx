import { useShoppingCart } from "../../store/shoppingcart-contex";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const ProductCard = ({ id, name, price, imgUrl }: ProductProps) => {
  const { getItemQuantity, increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCart();
  let quantity = getItemQuantity(id);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
      <div className="rounded-t-lg">
        <img src={imgUrl} height="200" style={{ objectFit: "cover" }}></img>
      </div>
      <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </div>
      <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {price}
      </div>
      <div className="">
        {quantity === 0 ? (
          <button onClick={() => increaseCartQuantity(id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            +Add To Cart
          </button>
        ) : (
          <div className="flex flex-row" style={{ gap: ".5rem" }}>
            <button onClick={() => decreaseCartQuantity(id)}  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">-</button>
            <div>{quantity}</div>
            <button onClick={() => increaseCartQuantity(id)}  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">+</button>
            <div className="" style={{ gap: ".5rem" }}></div>
            <button onClick={() => removeFromCart(id)}  className="bg-gray-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded-l">Sil</button>
            </div>
        )}
            </div>
        
      </div>
    
  );
};

export default ProductCard;
