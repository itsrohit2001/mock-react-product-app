import { FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";
import { MENU_LIST, LOGO_TEXT, LOGIN_TEXT } from "../../constants/constant";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

function Header() {
  const { cartItems } = useContext(CartContext);
  const cartItemCount = cartItems.reduce(
    (count, item) => count + (item.quantity || 1),
    0
  );

  return (
    <div className="flex justify-center align-center">
      <header className="header flex justify-between align-center py-4 gap-32">
        <div className="logo ">{LOGO_TEXT}</div>
        <nav className="nav-links">
          <ul className="flex justify-between align-center gap-4">
            {MENU_LIST.map((menu) => (
              <li key={menu.id}>
                <Link to={`/${menu.name.toLowerCase()}`}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="actions flex gap-4">
          <div>
            <Link to="/login">{LOGIN_TEXT}</Link>
          </div>
          <div className="icon flex items-center gap-4">
            <FaSearch className="text-gray-400 hover:text-blue-400 cursor-pointer" />
            <div className="relative flex items-center">
              <FaShoppingCart
                className={`cursor-pointer ${
                  cartItems.length > 0
                    ? "text-red-500"
                    : "text-gray-400 hover:text-blue-400"
                }`}
              />
              {cartItemCount > 0 && (
                <span
                  className="absolute -right-3 top-1 text-base font-semibold"
                  style={{ background: "none", color: "black" }}
                >
                  {cartItemCount}
                </span>
              )}
            </div>
            <FaHeart className="text-gray-400 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
