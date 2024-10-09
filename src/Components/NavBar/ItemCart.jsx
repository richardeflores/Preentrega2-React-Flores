import { Container, Row, Card, Button } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const ItemCart = ({ id, title, price, stock, image }) => {
	return (
		<Container>
			<Row>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>`Cantidad:{stock}`</Card.Text>
						<Card.Text>`Subtotal: $ {stock * price}`</Card.Text>

						<Button variant="primary">
							<FaRegTrashAlt />
						</Button>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
};
export default ItemCart;
