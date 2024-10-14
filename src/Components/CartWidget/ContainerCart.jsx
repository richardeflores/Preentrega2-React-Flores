import { Container, Button } from "react-bootstrap";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import ItemCart from "../NavBar/ItemCart";
import { useContext } from "react";
import { listCartContext } from "../ProviderContext/ProviderContextCart";
import { controllerShowCart } from "./ContextCart";

const ContainerCart = () => {
	const { listCart, clearCart } = useContext(listCartContext);
	const { showCart, setShowCart } = useContext(controllerShowCart);

	const style = {
		display: showCart,
	};

	const closeCart = () => {
		setShowCart(showCart === "none" ? "flex" : "none");
	};

	return (
		<Container style={style}>
			<Button onClick={closeCart}>
				<h6>
					<FaRegWindowClose alt="cerrar carrito" />
				</h6>
			</Button>
			<div>
				{listCart.length === 0 ? (
					<span className="emptyCart">
						Your cart is empty, Let's find some products!.
					</span>
				) : (
					listCart.map((product) => (
						<ItemCart
							key={product.id}
							id={product.id}
							title={product.title}
							image={product.image}
							stock={product.stock}
							price={product.price}
						/>
					))
				)}
			</div>
			<div>
				<Button>Checkout</Button>
				<Button onClick={clearCart}>
					<h6>
						<FaRegTrashAlt />
					</h6>
				</Button>
			</div>
		</Container>
	);
};

export default ContainerCart;
