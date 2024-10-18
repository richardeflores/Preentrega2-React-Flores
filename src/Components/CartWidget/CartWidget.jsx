import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import GlobalContext from "../ProviderContext/ProviderContextCart";

const CartWidget = () => {
	const { setShowCart, showCart } = useContext(controllerShowCart);
	const { listCart } = useContext(GlobalContext);

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
