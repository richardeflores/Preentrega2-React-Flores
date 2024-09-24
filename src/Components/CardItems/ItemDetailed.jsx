import Card from "react-bootstrap/Card";
import { Button, Container, Row } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import "./ItemDetailed.css";

function ItemDetailed(props) {
	return (
		<Container className="container-detailed">
			<Row>
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={props.imagen} />
					<Card.Body>
						<Card.Title>{props.nombre}</Card.Title>
						<Card.Text>{props.category}</Card.Text>
						<Card.Text>{props.description}</Card.Text>
						<h6 className="card-price" variant="primary">
							{props.precio}
						</h6>
						<div className="card-buttons">
							<Button variant="outline-primary">
								<h6>
									<FaShoppingCart size="1rem" />
									Add to Cart
								</h6>
							</Button>
						</div>
					</Card.Body>
				</Card>
			</Row>
		</Container>
	);
}

export default ItemDetailed;
