import { Link } from "react-router-dom";
import { useShoppingCart } from "../../store/shoppingcart-contex";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className="flex items-center">
      <Link
        className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer"
        to="/"
      >
        Anasayfa
      </Link>
      <Link
        className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer"
        to="/store"
      >
        Mağaza
      </Link>
      <Link
        className="p-4 border-b-2 border-purple-500 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-200 cursor-pointer"
        to="/contact"
      >
        İletişime Geç
      </Link>
      <div className="hidden xl:flex items-center space-x-5 items-center rounded-full">
        {cartQuantity > 0 &&  (
          <Link to="/shoppingcart">
          <button >
            <a className="hover:text-gray-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>

              <div className="flex justify-center items-center rounded-full bg-purple-500 absolute bottom-0 w-6 h-6 right-5">
                {cartQuantity}
              </div>
            </a>
          </button>
          </Link>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
