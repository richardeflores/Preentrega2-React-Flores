import { Container, Button } from "react-bootstrap";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import ItemCart from "../NavBar/ItemCart";
import { useContext } from "react";
import { listCartContext } from "../ProviderContext/ProviderContextCart";

const ContainerCart = () => {
	const { listCart, clearCart } = useContext(listCartContext);
	return (
		<Container>
			<Button>
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
