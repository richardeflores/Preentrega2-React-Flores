import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
	return (
		<div className="carrito">
			<FaShoppingCart size="2rem" />
			<span className="badge">5</span>
		</div>
	);
}

export default CartWidget;
