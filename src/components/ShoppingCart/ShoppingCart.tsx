import { useShoppingCart } from "../../store/shoppingcart-contex";
import CartItem from "../CartItem/CartItem";

const ShoppingCart: React.FC = () => {
  const { cartItems } = useShoppingCart();

  return (
    <div>
      <div className="grid grid-rows-3 mt-6">
        {cartItems.map((item) => (
          <CartItem {...item} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
