import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { listCartContext } from "../ProviderContext/ProviderContextCart";
import { controllerShowCart } from "./ContextCart";

const CartWidget = () => {
	const { setShowCart, showCart } = useContext(controllerShowCart);
	const { listCart } = useContext(listCartContext);

	const cartShowed = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};

	return (
		<div className="carrito" onClick={cartShowed}>
			<FaShoppingCart size="2rem" />
			<span className="badge">{listCart.length}</span>
		</div>
	);
};

export default CartWidget;
