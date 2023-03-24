import { useShoppingCart } from "../../store/shoppingcart-contex";
import data from "../../data/data.json";
type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem: React.FC<CartItemProps> = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = data.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
      <img
        src={item.imgUrl}
        style={{ width: "225px", height: "200px", objectFit: "cover" }}
      />
      <button
        className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        onClick={() => removeFromCart(item.id)}
      >
        Sil
      </button>
      <div>
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span style={{ fontSize: ".65rem" }}>Ürün Adedi = x{quantity}</span>
          )}
        </div>
        <div style={{ fontSize: ".75rem" }}>Fiyat = {item.price}₺</div>
      </div>
      <div>Toplam Fiyat = {item.price * quantity}₺</div>
    </div>
  );
};

export default CartItem;
